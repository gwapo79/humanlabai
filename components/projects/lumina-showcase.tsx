"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Play, Music, Heart, MessageCircle, Maximize2, Pause, Volume2, Share2 } from "lucide-react";
import { MEDIA_SHOWCASE, MediaItem } from "@/constants/luminaShowcaseData";

export function LuminaShowcase() {
    const [activeTab, setActiveTab] = useState<'VIDEO' | 'AUDIO' | 'SOCIAL' | 'VISUAL'>('VIDEO');

    const tabs = [
        { id: 'VIDEO', label: 'Commercial & Video', icon: Play },
        { id: 'AUDIO', label: 'Voice & Sound', icon: Volume2 },
        { id: 'SOCIAL', label: 'Social & UGC', icon: Share2 },
        { id: 'VISUAL', label: 'Visual Assets', icon: Maximize2 },
    ] as const;

    return (
        <section className="py-24 bg-black text-white selection:bg-white/30 border-t border-white/10">
            <div className="container mx-auto px-4 md:px-8 max-w-7xl">
                {/* Header */}
                <div className="mb-12 text-center md:text-left">
                    <h2 className="text-4xl md:text-6xl font-black tracking-tighter mb-4">
                        CREATIVE SHOWCASE
                    </h2>
                    <p className="text-gray-400 text-lg md:text-xl font-light">
                        LUMINA는 모든 미디어 형태에 최적화된 콘텐츠 생산 능력을 보유하고 있습니다.
                    </p>
                </div>

                {/* Tab Navigation */}
                <div className="flex flex-wrap justify-center md:justify-start gap-4 mb-16 border-b border-white/10 pb-1">
                    {tabs.map((tab) => (
                        <button
                            key={tab.id}
                            onClick={() => setActiveTab(tab.id)}
                            className={`relative px-6 py-4 flex items-center gap-2 text-lg font-bold transition-all
                                ${activeTab === tab.id ? "text-white" : "text-gray-600 hover:text-gray-300"}`}
                        >
                            <tab.icon className="w-5 h-5" />
                            {tab.label}
                            {activeTab === tab.id && (
                                <motion.div
                                    layoutId="underline"
                                    className="absolute bottom-0 left-0 right-0 h-1 bg-white"
                                />
                            )}
                        </button>
                    ))}
                </div>

                {/* Content Area */}
                <div className="min-h-[600px]">
                    <AnimatePresence mode="wait">
                        {activeTab === 'VIDEO' && <VideoTab key="video" />}
                        {activeTab === 'AUDIO' && <AudioTab key="audio" />}
                        {activeTab === 'SOCIAL' && <SocialTab key="social" />}
                        {activeTab === 'VISUAL' && <VisualTab key="visual" />}
                    </AnimatePresence>
                </div>
            </div>
        </section>
    );
}

// --- SUB COMPONENTS ---

function VideoTab() {
    const tvcItems = MEDIA_SHOWCASE.filter(item => item.type === 'video_tvc');
    const shortsItems = MEDIA_SHOWCASE.filter(item => item.type === 'video_shorts');

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="space-y-16"
        >
            {/* Featured TVC */}
            <div className="space-y-6">
                <h3 className="text-2xl font-bold tracking-widest text-gray-500 uppercase">Featured Commercials</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {tvcItems.map((item) => (
                        <div key={item.id} className="group cursor-pointer">
                            <div className="relative aspect-video rounded-xl overflow-hidden bg-zinc-900 border border-white/10 mb-4">
                                <Image
                                    src={item.thumbnail}
                                    alt={item.title}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                                    <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur border border-white/30 flex items-center justify-center">
                                        <Play className="w-8 h-8 fill-white text-white ml-1" />
                                    </div>
                                </div>
                                <div className="absolute bottom-4 right-4 bg-black/80 px-3 py-1 rounded text-xs font-mono">
                                    {item.metrics?.views}
                                </div>
                            </div>
                            <h4 className="text-xl font-bold mb-1 group-hover:text-blue-400 transition-colors">{item.title}</h4>
                            <p className="text-gray-400 text-sm">{item.description}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Shorts Grid */}
            <div className="space-y-6">
                <h3 className="text-2xl font-bold tracking-widest text-gray-500 uppercase">Short-form Content</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {shortsItems.map((item) => (
                        <div key={item.id} className="group cursor-pointer relative aspect-[9/16] rounded-xl overflow-hidden bg-zinc-900 border border-white/10">
                            <Image
                                src={item.thumbnail}
                                alt={item.title}
                                fill
                                className="object-cover transition-transform duration-500 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80" />

                            {/* Overlay Info */}
                            <div className="absolute bottom-0 left-0 right-0 p-4">
                                <div className="flex items-center gap-2 mb-2 text-xs font-mono text-gray-300">
                                    <Play className="w-3 h-3 fill-current" /> {item.metrics?.views}
                                    <Heart className="w-3 h-3 ml-2 fill-current" /> {item.metrics?.likes}
                                </div>
                                <h4 className="text-sm font-bold leading-tight mb-1">{item.title}</h4>
                                <p className="text-xs text-gray-400 line-clamp-1">{item.description}</p>
                            </div>

                            {/* TikTok Style UI Frame */}
                            <div className="absolute top-2 right-2 flex flex-col gap-3">
                                <div className="w-8 h-8 rounded-full bg-black/50 backdrop-blur flex items-center justify-center">
                                    <Heart className="w-4 h-4" />
                                </div>
                                <div className="w-8 h-8 rounded-full bg-black/50 backdrop-blur flex items-center justify-center">
                                    <MessageCircle className="w-4 h-4" />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </motion.div>
    );
}

function AudioTab() {
    const audioItems = MEDIA_SHOWCASE.filter(item => item.type === 'audio');
    const [playingId, setPlayingId] = useState<string | null>(null);

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="grid grid-cols-1 gap-6"
        >
            {audioItems.map((item) => {
                const isPlaying = playingId === item.id;

                return (
                    <div
                        key={item.id}
                        className={`group relative bg-zinc-900/50 border ${isPlaying ? 'border-humanlab-neon bg-zinc-900' : 'border-white/10'} rounded-2xl p-6 md:p-8 flex flex-col md:flex-row gap-8 items-center transition-all hover:bg-zinc-800`}
                    >
                        {/* Thumbnail */}
                        <div className="relative w-32 h-32 md:w-40 md:h-40 flex-shrink-0 rounded-full overflow-hidden border-2 border-white/10 shadow-2xl animate-spin-slow" style={{ animationPlayState: isPlaying ? 'running' : 'paused' }}>
                            <Image src={item.thumbnail} alt={item.title} fill className="object-cover" />
                            <div className="absolute inset-0 bg-black/20" />
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="w-8 h-8 bg-black/50 rounded-full border border-white/20" />
                            </div>
                        </div>

                        {/* Player Controls */}
                        <div className="flex-1 w-full flex flex-col justify-center">
                            <div className="flex justify-between items-start mb-4">
                                <div>
                                    <h3 className="text-2xl font-bold text-white mb-1 group-hover:text-humanlab-neon transition-colors">{item.title}</h3>
                                    <p className="text-gray-400">{item.description}</p>
                                </div>
                                <button
                                    onClick={() => setPlayingId(isPlaying ? null : item.id)}
                                    className="w-12 h-12 rounded-full bg-white text-black flex items-center justify-center hover:scale-110 transition-transform"
                                >
                                    {isPlaying ? <Pause className="fill-current" /> : <Play className="fill-current ml-1" />}
                                </button>
                            </div>

                            {/* Waveform Visualizer */}
                            <div className="h-12 flex items-end gap-1 opacity-50">
                                {[...Array(40)].map((_, i) => (
                                    <motion.div
                                        key={i}
                                        className={`w-1 bg-current rounded-t-sm ${isPlaying ? 'text-humanlab-neon' : 'text-gray-600'}`}
                                        animate={{ height: isPlaying ? ["20%", "100%", "30%"] : "20%" }}
                                        transition={{
                                            repeat: Infinity,
                                            duration: 0.5 + Math.random() * 0.5,
                                            delay: i * 0.05,
                                            ease: "easeInOut"
                                        }}
                                        style={{ height: '20%' }}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                );
            })}
        </motion.div>
    );
}

function SocialTab() {
    const socialItems = MEDIA_SHOWCASE.filter(item => item.type === 'social_ugc');

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6"
        >
            {socialItems.map((item) => (
                <div key={item.id} className="break-inside-avoid bg-white text-black rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow">
                    {/* Header */}
                    <div className="p-4 flex items-center gap-3 border-b border-gray-100">
                        <div className="w-8 h-8 rounded-full relative overflow-hidden bg-gray-200">
                            <Image src={item.thumbnail} alt="avatar" fill className="object-cover" />
                        </div>
                        <div>
                            <p className="text-sm font-bold">{item.title}</p>
                            <p className="text-xs text-gray-500">Suggested for you</p>
                        </div>
                    </div>

                    {/* Image */}
                    <div className="relative aspect-square bg-gray-100">
                        <Image src={item.thumbnail} alt={item.title} fill className="object-cover" />
                    </div>

                    {/* Engagement */}
                    <div className="p-4">
                        <div className="flex gap-4 mb-3">
                            <Heart className="w-6 h-6 hover:text-red-500 cursor-pointer transition-colors" />
                            <MessageCircle className="w-6 h-6 hover:text-blue-500 cursor-pointer transition-colors" />
                            <Share2 className="w-6 h-6 hover:text-green-500 cursor-pointer transition-colors ml-auto" />
                        </div>
                        <p className="font-bold text-sm mb-1">{item.metrics?.likes} likes</p>
                        <p className="text-sm">
                            <span className="font-bold mr-2">{item.title}</span>
                            {item.description}
                        </p>
                        <p className="text-xs text-gray-400 mt-2">View all {item.metrics?.views} comments</p>
                    </div>
                </div>
            ))}
        </motion.div>
    );
}

function VisualTab() {
    const visualItems = MEDIA_SHOWCASE.filter(item => item.type === 'image_poster');

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
            {visualItems.map((item) => (
                <div key={item.id} className="group relative cursor-zoom-in overflow-hidden rounded-lg">
                    <div className="aspect-[3/4] relative">
                        <Image
                            src={item.thumbnail}
                            alt={item.title}
                            fill
                            className="object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors" />

                        <div className="absolute bottom-0 left-0 right-0 p-8 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                            <h3 className="text-3xl font-black text-white mb-2">{item.title}</h3>
                            <p className="text-lg text-gray-200">{item.description}</p>
                        </div>
                    </div>
                </div>
            ))}
        </motion.div>
    )
}
