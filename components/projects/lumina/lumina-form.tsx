"use client";

import { useScroll, useTransform, motion, AnimatePresence } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { cn } from "@/lib/utils";

const STATES = [
    {
        id: "control",
        name: "SIA",
        title: "CONTROL",
        subtitle: "The Defensive Structure",
        quote: "When CONTROL dominated,\nthe world became silent.",
        desc: "Result: Defensive Architecture.\nA calculated shutdown of all emotional inputs to prevent collapse.",
        bg: "bg-zinc-950",
        accent: "text-zinc-500",
        style: "contrast-125 grayscale",
        image: "/images/lumina/states/sia.jpg",
        evidence: [
            "/images/lumina/evidence/sia_tall_1.png",
            "/images/lumina/evidence/sia_tall_2.png",
            "/images/lumina/evidence/sia_tall_3.png",
            "/images/lumina/evidence/sia_tall_4.png",
            "/images/lumina/evidence/sia_tall_5.png"
        ],
        gallery: [
            "/images/lumina/gallery/sia/gallery_1.png",
            "/images/lumina/gallery/sia/gallery_2.png",
            "/images/lumina/gallery/sia/gallery_3.png",
            "/images/lumina/gallery/sia/gallery_4.png",
            "/images/lumina/gallery/sia/gallery_5.jpg",
            "/images/lumina/gallery/sia/archive_6.jpg",
            "/images/lumina/gallery/sia/archive_7.png",
            "/images/lumina/gallery/sia/archive_8.png",
            "/images/lumina/gallery/sia/archive_9.png",
            "/images/lumina/gallery/sia/archive_10.png"
        ]
    },
    {
        id: "sensitivity",
        name: "HAYEON",
        title: "SENSITIVITY",
        subtitle: "The Raw Input",
        quote: "When SENSITIVITY surfaced,\nthe dam broke.",
        desc: "Result: Overwhelming Feedback Loop.\nA state where every stimulus is received without a filter.",
        bg: "bg-stone-900",
        accent: "text-orange-900/50",
        style: "sepia-[0.3]",
        image: "/images/lumina/states/hayeon.jpg",
        evidence: [
            "/images/lumina/evidence/hayeon_tall_1.png",
            "/images/lumina/evidence/hayeon_tall_2.png",
            "/images/lumina/evidence/hayeon_tall_3.png",
            "/images/lumina/evidence/hayeon_tall_4.png",
            "/images/lumina/evidence/hayeon_tall_5.jpg"
        ],
        gallery: [
            "/images/lumina/gallery/hayeon/gallery_1.jpg",
            "/images/lumina/gallery/hayeon/gallery_2.png",
            "/images/lumina/gallery/hayeon/gallery_3.png",
            "/images/lumina/gallery/hayeon/gallery_4.jpg",
            "/images/lumina/gallery/hayeon/gallery_5.jpg",
            "/images/lumina/gallery/hayeon/archive_6.jpg",
            "/images/lumina/gallery/hayeon/archive_7.png",
            "/images/lumina/gallery/hayeon/archive_8.png",
            "/images/lumina/gallery/hayeon/archive_9.jpg",
            "/images/lumina/gallery/hayeon/archive_10.png"
        ]
    },
    {
        id: "escape",
        name: "LUNA",
        title: "ESCAPE",
        subtitle: "The Velocity",
        quote: "When ESCAPE took over,\ndirection didn't matter.",
        desc: "Result: Pure Velocity.\nAction without thought. Movement as the only form of survival.",
        bg: "bg-blue-950",
        accent: "text-blue-500",
        style: "saturate-200",
        image: "/images/lumina/states/luna.jpg",
        evidence: [
            "/images/lumina/evidence/luna_tall_1.png",
            "/images/lumina/evidence/luna_tall_2.jpg",
            "/images/lumina/evidence/luna_tall_3.jpg",
            "/images/lumina/evidence/luna_tall_4.jpg",
            "/images/lumina/evidence/luna_tall_5.jpg"
        ],
        gallery: [
            "/images/lumina/gallery/luna/gallery_1.png",
            "/images/lumina/gallery/luna/gallery_2.jpg",
            "/images/lumina/gallery/luna/gallery_3.jpg",
            "/images/lumina/gallery/luna/gallery_4.jpg",
            "/images/lumina/gallery/luna/gallery_5.png",
            "/images/lumina/gallery/luna/archive_6.jpg",
            "/images/lumina/gallery/luna/archive_7.jpg",
            "/images/lumina/gallery/luna/archive_8.jpg",
            "/images/lumina/gallery/luna/archive_9.jpg",
            "/images/lumina/gallery/luna/archive_10.jpg"
        ]
    }
];

export default function LuminaForm() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    const [activeState, setActiveState] = useState(0);
    const [hoveredImage, setHoveredImage] = useState<string | null>(null);

    useTransform(scrollYProgress, (value) => {
        // Map 0-1 to 0-2 index
        if (value < 0.33) return 0;
        if (value < 0.66) return 1;
        return 2;
    }).on("change", (latest) => {
        setActiveState(latest);
    });

    const [isGalleryOpen, setIsGalleryOpen] = useState(false);
    const [currentGalleryIndex, setCurrentGalleryIndex] = useState(0);

    const openGallery = (index: number) => {
        setCurrentGalleryIndex(index);
        setIsGalleryOpen(true);
    };

    const nextImage = (e: React.MouseEvent) => {
        e.stopPropagation();
        if (STATES[activeState].gallery) {
            setCurrentGalleryIndex((prev) => (prev + 1) % STATES[activeState].gallery!.length);
        }
    };

    const prevImage = (e: React.MouseEvent) => {
        e.stopPropagation();
        if (STATES[activeState].gallery) {
            setCurrentGalleryIndex((prev) => (prev - 1 + STATES[activeState].gallery!.length) % STATES[activeState].gallery!.length);
        }
    };

    return (
        <section ref={containerRef} className="h-[400vh] relative bg-black">
            <div className="sticky top-0 h-screen overflow-hidden flex items-center justify-center">

                {/* Dynamic Background */}
                <motion.div
                    className={cn(
                        "absolute inset-0 transition-colors duration-1000",
                        STATES[activeState].bg
                    )}
                />

                <div className="relative z-10 w-full max-w-7xl px-4 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

                    {/* Visual Side */}
                    <div className="h-[50vh] md:h-[80vh] w-full relative flex items-center justify-center">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeState + (hoveredImage || "")}
                                initial={{ opacity: 0, scale: 0.95, filter: "blur(10px)" }}
                                animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                                exit={{ opacity: 0, scale: 1.05, filter: "blur(10px)" }}
                                transition={{ duration: 0.8, ease: "easeInOut" }}
                                className={cn(
                                    "relative w-full h-full overflow-hidden rounded-sm border border-white/10",
                                    hoveredImage ? "" : STATES[activeState].style
                                )}
                            >
                                <img
                                    src={hoveredImage || STATES[activeState].image}
                                    alt={STATES[activeState].name}
                                    className="w-full h-full object-cover"
                                />

                                {/* Overlay for "Reaction" feel */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60" />
                            </motion.div>
                        </AnimatePresence>
                    </div>

                    {/* Text Side */}
                    <div className="space-y-12">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeState}
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                                transition={{ duration: 0.5 }}
                                className="space-y-8"
                            >
                                <div>
                                    <h3 className="text-sm font-mono tracking-[0.2em] text-gray-500 mb-2">
                                        STATE DOMINANCE
                                    </h3>
                                    <h2 className="text-6xl md:text-8xl font-bold text-white tracking-tighter mb-4">
                                        {STATES[activeState].name}
                                    </h2>
                                    <h4 className="text-xl font-light text-gray-400 uppercase tracking-widest border-l-2 border-white/20 pl-4">
                                        {STATES[activeState].subtitle}
                                    </h4>
                                </div>

                                <div className="h-px w-12 bg-white/20" />

                                <blockquote className="text-2xl md:text-3xl font-serif text-white leading-tight">
                                    "{STATES[activeState].quote}"
                                </blockquote>

                                <p className="text-lg text-gray-400 whitespace-pre-line leading-relaxed">
                                    {STATES[activeState].desc}
                                </p>

                                <div className="pt-8 border-t border-white/10 mt-8">
                                    <div className="flex items-center justify-between mb-4">
                                        <span className="text-xs font-mono text-gray-500 uppercase tracking-widest">
                                            OUTPUT EVIDENCE
                                        </span>
                                        <span className="text-xs font-mono text-gray-600 border border-gray-800 px-2 py-1 rounded">
                                            ID: {STATES[activeState].id.toUpperCase()}
                                        </span>
                                    </div>
                                    <div className={STATES[activeState].evidence && STATES[activeState].evidence.length > 0 ? "grid grid-cols-5 gap-2" : "grid grid-cols-3 gap-2"}>
                                        {STATES[activeState].evidence && STATES[activeState].evidence.length > 0 ? (
                                            STATES[activeState].evidence.map((img, idx) => (
                                                <div
                                                    key={idx}
                                                    className="aspect-[9/16] bg-white/5 rounded-sm border border-white/5 overflow-hidden cursor-pointer"
                                                    onMouseEnter={() => setHoveredImage(img)}
                                                    onMouseLeave={() => setHoveredImage(null)}
                                                    onClick={() => openGallery(idx)}
                                                >
                                                    <img src={img} alt="Evidence" className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity" />
                                                </div>
                                            ))
                                        ) : (
                                            <>
                                                <div className="aspect-[9/16] bg-white/5 rounded-sm border border-white/5 flex items-center justify-center">
                                                    <span className="text-[10px] text-gray-600 font-mono">FIG_A</span>
                                                </div>
                                                <div className="aspect-[9/16] bg-white/5 rounded-sm border border-white/5 flex items-center justify-center">
                                                    <span className="text-[10px] text-gray-600 font-mono">FIG_B</span>
                                                </div>
                                                <div className="aspect-[9/16] bg-white/5 rounded-sm border border-white/5 flex items-center justify-center">
                                                    <span className="text-[10px] text-gray-600 font-mono">DATA_C</span>
                                                </div>
                                            </>
                                        )}
                                    </div>
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </div>

                {/* Gallery Modal */}
                <AnimatePresence>
                    {isGalleryOpen && STATES[activeState].gallery && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm p-4 md:p-12"
                            onClick={() => setIsGalleryOpen(false)}
                        >
                            <div className="relative w-full h-full max-w-5xl flex items-center justify-center">
                                <motion.img
                                    key={currentGalleryIndex}
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.9 }}
                                    src={STATES[activeState].gallery![currentGalleryIndex]}
                                    alt="Gallery"
                                    className="max-w-full max-h-full object-contain shadow-2xl"
                                    onClick={(e) => e.stopPropagation()}
                                />

                                {/* Navigation */}
                                <button
                                    className="absolute left-4 top-1/2 -translate-y-1/2 text-white/50 hover:text-white p-4"
                                    onClick={prevImage}
                                >
                                    <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M15 19l-7-7 7-7" /></svg>
                                </button>
                                <button
                                    className="absolute right-4 top-1/2 -translate-y-1/2 text-white/50 hover:text-white p-4"
                                    onClick={nextImage}
                                >
                                    <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 5l7 7-7 7" /></svg>
                                </button>

                                {/* Close */}
                                <button
                                    className="absolute top-4 right-4 text-white/50 hover:text-white"
                                    onClick={() => setIsGalleryOpen(false)}
                                >
                                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M6 18L18 6M6 6l12 12" /></svg>
                                </button>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </section>
    );
}
