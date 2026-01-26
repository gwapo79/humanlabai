"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play, X, ChevronLeft, ChevronRight } from "lucide-react";

const GALLERIES: Record<string, string[]> = {
    "SIA": [
        "/images/lumina/gallery/sia/archive_1.png",
        "/images/lumina/gallery/sia/archive_2.png",
        "/images/lumina/gallery/sia/archive_3.png",
        "/images/lumina/gallery/sia/archive_4.png",
        "/images/lumina/gallery/sia/archive_5.jpg",
        "/images/lumina/gallery/sia/archive_6.jpg",
        "/images/lumina/gallery/sia/archive_7.png",
        "/images/lumina/gallery/sia/archive_8.png",
        "/images/lumina/gallery/sia/archive_9.png",
        "/images/lumina/gallery/sia/archive_10.png",
    ],
    "HAYEON": [
        "/images/lumina/gallery/hayeon/gallery_1.jpg",
        "/images/lumina/gallery/hayeon/gallery_2.png",
        "/images/lumina/gallery/hayeon/gallery_3.png",
        "/images/lumina/gallery/hayeon/gallery_4.jpg",
        "/images/lumina/gallery/hayeon/gallery_5.jpg",
        "/images/lumina/gallery/hayeon/archive_6.jpg",
        "/images/lumina/gallery/hayeon/archive_7.png",
        "/images/lumina/gallery/hayeon/archive_8.png",
        "/images/lumina/gallery/hayeon/archive_9.jpg",
        "/images/lumina/gallery/hayeon/archive_10.png",
    ],
    "LUNA": [
        "/images/lumina/gallery/luna/gallery_1.png",
        "/images/lumina/gallery/luna/gallery_2.jpg",
        "/images/lumina/gallery/luna/gallery_3.jpg",
        "/images/lumina/gallery/luna/gallery_4.jpg",
        "/images/lumina/gallery/luna/gallery_5.png",
        "/images/lumina/gallery/luna/archive_6.jpg",
        "/images/lumina/gallery/luna/archive_7.jpg",
        "/images/lumina/gallery/luna/archive_8.jpg",
        "/images/lumina/gallery/luna/archive_9.jpg",
        "/images/lumina/gallery/luna/archive_10.jpg",
    ]
};

export default function LuminaExpression() {
    const [isGalleryOpen, setIsGalleryOpen] = useState(false);
    const [activeGallery, setActiveGallery] = useState<string | null>(null);
    const [galleryIndex, setGalleryIndex] = useState(0);

    const openGallery = (character: string) => {
        if (GALLERIES[character] && GALLERIES[character].length > 0) {
            setActiveGallery(character);
            setGalleryIndex(0);
            setIsGalleryOpen(true);
        }
    };

    const nextImage = (e: React.MouseEvent) => {
        e.stopPropagation();
        if (activeGallery) {
            setGalleryIndex((prev) => (prev + 1) % GALLERIES[activeGallery].length);
        }
    };

    const prevImage = (e: React.MouseEvent) => {
        e.stopPropagation();
        if (activeGallery) {
            setGalleryIndex((prev) => (prev - 1 + GALLERIES[activeGallery].length) % GALLERIES[activeGallery].length);
        }
    };

    return (
        <section className="min-h-screen flex items-center justify-center bg-zinc-950 py-24 relative">
            <div className="container mx-auto px-4 max-w-4xl relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16 text-center"
                >
                    <h5 className="text-sm font-mono text-gray-500 tracking-widest mb-4">ARCHIVED OUTPUTS</h5>
                    <h2 className="text-5xl md:text-7xl font-bold text-white tracking-tighter uppercase">
                        RESULT ARCHIVE
                    </h2>
                    <p className="mt-4 text-gray-400">
                        Content is not produced. It is extracted from the states.
                    </p>
                </motion.div>

                <div className="space-y-16">
                    {/* IMAGE CATEGORY */}
                    <div>
                        <h3 className="text-xl font-bold text-white mb-6 border-l-2 border-white/20 pl-4">01. IMAGE</h3>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <ArchiveCard
                                type="Images"
                                title="SIA"
                                label="VISUAL_SHA"
                                size="PHOTOBOOK"
                                portrait
                                coverImage="/images/lumina/covers/sia_cover.png"
                                onClick={() => openGallery("SIA")}
                            />
                            <ArchiveCard
                                type="Images"
                                title="HAYEON"
                                label="VISUAL_HYN"
                                size="PHOTOBOOK"
                                portrait
                                coverImage="/images/lumina/covers/hayeon_cover.jpg"
                                onClick={() => openGallery("HAYEON")}
                            />
                            <ArchiveCard
                                type="Images"
                                title="LUNA"
                                label="VISUAL_LNA"
                                size="PHOTOBOOK"
                                portrait
                                coverImage="/images/lumina/covers/luna_cover.jpg"
                                onClick={() => openGallery("LUNA")}
                            />
                        </div>
                    </div>

                    {/* MUSIC CATEGORY */}
                    <div>
                        <h3 className="text-xl font-bold text-white mb-6 border-l-2 border-white/20 pl-4">02. MUSIC</h3>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <ArchiveCard type="Audio" title="Main Theme" label="AUDIO_01" duration="03:45" />
                            <ArchiveCard type="Audio" title="Sia's Theme" label="AUDIO_02" duration="02:20" />
                        </div>
                    </div>

                    {/* VIDEO CATEGORY */}
                    <div>
                        <h3 className="text-xl font-bold text-white mb-6 border-l-2 border-white/20 pl-4">03. VIDEO</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <ArchiveCard type="Video" title="Concept Teaser" label="FILM_01" wide duration="00:58" />
                            <ArchiveCard type="Video" title="Performance Clip" label="FILM_02" wide duration="01:30" />
                        </div>
                    </div>
                </div>

                <div className="mt-24 text-center">
                    <p className="text-gray-500 text-sm">
                        * These media artifacts serve as proof of the psychological fracture.
                    </p>
                </div>
            </div>

            {/* Gallery Modal */}
            <AnimatePresence>
                {isGalleryOpen && activeGallery && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-md p-4 md:p-12"
                        onClick={() => setIsGalleryOpen(false)}
                    >
                        <div className="relative w-full h-full max-w-6xl flex items-center justify-center">

                            <motion.img
                                key={activeGallery + galleryIndex}
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.95 }}
                                transition={{ duration: 0.3 }}
                                src={GALLERIES[activeGallery][galleryIndex]}
                                alt="Gallery"
                                className="max-w-full max-h-full object-contain shadow-2xl rounded-sm"
                                onClick={(e) => e.stopPropagation()}
                            />

                            {/* Controls */}
                            <button
                                className="absolute left-4 top-1/2 -translate-y-1/2 text-white/50 hover:text-white p-4 transition-colors bg-black/20 hover:bg-black/50 rounded-full"
                                onClick={prevImage}
                            >
                                <ChevronLeft className="w-8 h-8" />
                            </button>
                            <button
                                className="absolute right-4 top-1/2 -translate-y-1/2 text-white/50 hover:text-white p-4 transition-colors bg-black/20 hover:bg-black/50 rounded-full"
                                onClick={nextImage}
                            >
                                <ChevronRight className="w-8 h-8" />
                            </button>

                            {/* Header Info */}
                            <div className="absolute top-4 left-4 text-white font-mono text-sm tracking-widest bg-black/50 px-3 py-1 rounded">
                                {activeGallery} // {galleryIndex + 1} / {GALLERIES[activeGallery].length}
                            </div>

                            <button
                                className="absolute top-4 right-4 text-white/50 hover:text-white p-2"
                                onClick={() => setIsGalleryOpen(false)}
                            >
                                <X className="w-8 h-8" />
                            </button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
}

function ArchiveCard({ type, title, label, wide, portrait, coverImage, size, duration, onClick }: {
    type: string,
    title: string,
    label: string,
    wide?: boolean,
    portrait?: boolean,
    coverImage?: string,
    size?: string,
    duration?: string,
    onClick?: () => void
}) {
    return (
        <div
            onClick={onClick}
            className={`bg-zinc-900 border border-white/5 hover:border-humanlab-neon/30 transition-all group p-6 ${wide ? 'aspect-video' : portrait ? 'aspect-[9/16]' : 'aspect-square'} flex flex-col justify-between relative overflow-hidden ${onClick ? 'cursor-pointer' : ''}`}
        >

            {/* Cover Image */}
            {coverImage && (
                <>
                    <img
                        src={coverImage}
                        alt={title}
                        className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 pointer-events-none grayscale group-hover:grayscale-0"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/10 group-hover:via-black/20 transition-all duration-700 pointer-events-none" />
                </>
            )}

            {/* Hover Scan Effect */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/5 to-transparent translate-y-[-100%] group-hover:translate-y-[100%] transition-transform duration-700 ease-in-out pointer-events-none" />

            <div className="flex justify-between items-start z-10">
                <span className="text-[10px] font-mono text-gray-400 border border-white/10 px-1.5 py-0.5 rounded group-hover:text-humanlab-neon group-hover:border-humanlab-neon/30 transition-colors bg-black/50 backdrop-blur-sm">
                    {label}.{type.toLowerCase().slice(0, 3)}
                </span>
                <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-white/20 transition-colors backdrop-blur-sm">
                    {type === "Video" || type === "Audio" ? <Play className="w-3 h-3 text-white fill-current" /> : <div className="w-2 h-2 bg-white/50 rounded-full" />}
                </div>
            </div>

            <div className="z-10">
                <span className="text-[10px] text-gray-400 uppercase tracking-widest block mb-1 font-mono">
                    {type === "Video" || type === "Audio" ? duration : size}
                </span>
                <h4 className="text-xl font-bold text-gray-300 group-hover:text-white transition-colors leading-none drop-shadow-md">{title}</h4>
            </div>
        </div>
    );
}
