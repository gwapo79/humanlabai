"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Play, Disc, ArrowUpRight, Instagram, Youtube, Music, MessageCircle } from "lucide-react";
import { MediaItem, SocialLink } from "@/constants/luminaLore";

interface LuminaMediaSectionProps {
    mediaItems: MediaItem[];
    socialLinks: SocialLink[];
}

export function LuminaMediaSection({ mediaItems, socialLinks }: LuminaMediaSectionProps) {
    // Filter data by type
    const videos = mediaItems.filter(item => item.type === "VIDEO");
    const music = mediaItems.filter(item => item.type === "MUSIC");
    const editorial = mediaItems.filter(item => item.type === "EDITORIAL");

    return (
        <section className="py-24 bg-black text-white selection:bg-white/30">
            {/* Header */}
            <div className="container mx-auto max-w-7xl px-4 md:px-8 mb-12">
                <div className="border-b border-white/20 pb-6 flex justify-between items-end">
                    <h2 className="text-4xl md:text-5xl font-black tracking-tighter">
                        MEDIA ARCHIVE
                    </h2>
                    <span className="text-xs font-mono text-gray-500 uppercase tracking-widest hidden md:block">
                        LUMINA OFFICIAL CONTENTS
                    </span>
                </div>
            </div>

            <div className="container mx-auto max-w-7xl px-4 md:px-8 space-y-24">

                {/* [CATEGORY A] MUSIC VIDEO (16:9) */}
                <div className="space-y-6">
                    <h3 className="text-xl font-bold tracking-widest flex items-center gap-2">
                        <span className="w-2 h-2 bg-red-600 rounded-full" /> MUSIC VIDEO
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {videos.map((item) => (
                            <motion.div
                                key={item.id}
                                className="group relative aspect-video bg-zinc-900 overflow-hidden cursor-pointer"
                                whileHover={{ scale: 1.02 }}
                            >
                                <Image
                                    src={item.thumbnailUrl}
                                    alt={item.title}
                                    fill
                                    className="object-cover opacity-80 group-hover:opacity-60 transition-opacity duration-500"
                                />
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <motion.div
                                        className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20"
                                        whileHover={{ scale: 1.2, backgroundColor: "rgba(255,255,255,0.2)" }}
                                    >
                                        <Play className="w-6 h-6 fill-white text-white ml-1" />
                                    </motion.div>
                                </div>
                                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black via-black/50 to-transparent translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                                    <h4 className="text-lg font-bold leading-tight">{item.title}</h4>
                                    <p className="text-sm text-gray-400 mt-1">{item.subTitle} • {item.releaseDate}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* [CATEGORY B] DISCOGRAPHY (Square) */}
                <div className="space-y-6">
                    <h3 className="text-xl font-bold tracking-widest flex items-center gap-2">
                        <span className="w-2 h-2 bg-blue-500 rounded-full" /> DISCOGRAPHY
                    </h3>
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
                        {music.map((item) => (
                            <motion.div
                                key={item.id}
                                className="group space-y-3 cursor-pointer"
                                whileHover={{ y: -5 }}
                            >
                                <div className="relative aspect-square bg-zinc-900 border border-white/10 overflow-hidden">
                                    <Image
                                        src={item.thumbnailUrl}
                                        alt={item.title}
                                        fill
                                        className="object-cover group-hover:scale-105 transition-transform duration-700"
                                    />
                                    {/* Artificial Waveform Overlay */}
                                    <div className="absolute bottom-4 right-4 flex gap-1 items-end h-6 w-8 opacity-0 group-hover:opacity-100 transition-opacity">
                                        {[...Array(4)].map((_, i) => (
                                            <motion.div
                                                key={i}
                                                className="w-1 bg-white"
                                                animate={{ height: ["20%", "100%", "40%"] }}
                                                transition={{
                                                    repeat: Infinity,
                                                    duration: 0.5 + Math.random() * 0.5,
                                                    delay: i * 0.1
                                                }}
                                            />
                                        ))}
                                    </div>
                                    {/* Vinyl overlay effect */}
                                    <div className="absolute inset-0 bg-gradient-to-tr from-white/5 to-transparent pointer-events-none" />
                                </div>
                                <div>
                                    <h4 className="text-base font-bold truncate group-hover:text-blue-400 transition-colors">{item.title}</h4>
                                    <p className="text-xs text-gray-500 uppercase tracking-wide">{item.subTitle}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* [CATEGORY C] EDITORIAL (Portrait) */}
                <div className="space-y-6">
                    <h3 className="text-xl font-bold tracking-widest flex items-center gap-2">
                        <span className="w-2 h-2 bg-purple-500 rounded-full" /> EDITORIAL
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {editorial.map((item) => (
                            <motion.div
                                key={item.id}
                                className="group relative aspect-[3/4] bg-zinc-900 overflow-hidden cursor-pointer grayscale hover:grayscale-0 transition-all duration-700"
                            >
                                <Image
                                    src={item.thumbnailUrl}
                                    alt={item.title}
                                    fill
                                    className="object-cover"
                                />
                                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500" />

                                {/* Magazine Style Overlay */}
                                <div className="absolute top-6 left-6 right-6 border-t border-white/50 w-8 pt-2">
                                    <p className="text-xs font-mono mb-1">{item.subTitle}</p>
                                    <h4 className="text-2xl font-black italic uppercase leading-none break-words">
                                        {item.title}
                                    </h4>
                                </div>
                                <div className="absolute bottom-6 right-6">
                                    <ArrowUpRight className="w-6 h-6 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

            </div>

            {/* [CATEGORY D] CONNECT (Social Bar) */}
            <div className="mt-32 border-t border-white/10 bg-zinc-950">
                <div className="container mx-auto px-4 py-8">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-8">
                        <span className="text-sm font-bold text-gray-500">CONNECT WITH LUMINA</span>

                        <div className="flex flex-wrap justify-center gap-8 md:gap-16">
                            {socialLinks.map((link) => {
                                // Dynamic Icon Mapping
                                let Icon = ArrowUpRight;
                                if (link.platform === "YouTube") Icon = Youtube;
                                if (link.platform === "Instagram") Icon = Instagram;
                                if (link.platform === "TikTok") Icon = MessageCircle; // Approximate
                                if (link.platform === "Spotify") Icon = Music;

                                return (
                                    <a
                                        key={link.platform}
                                        href={link.url}
                                        className={`group flex items-center gap-3 transition-colors ${link.colorClass}`}
                                    >
                                        <div className="p-2 bg-white/5 rounded-full group-hover:bg-white/10 transition-colors">
                                            <Icon className="w-5 h-5" />
                                        </div>
                                        <div className="text-left">
                                            <p className="text-xs font-bold uppercase text-gray-500 group-hover:text-current transition-colors">
                                                {link.platform}
                                            </p>
                                            <p className="text-sm font-medium text-white">
                                                {link.label}
                                            </p>
                                        </div>
                                    </a>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
