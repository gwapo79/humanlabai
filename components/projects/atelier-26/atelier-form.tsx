"use client";

import { useScroll, useTransform, motion, AnimatePresence, useMotionValueEvent } from "framer-motion";
import { useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { ATELIER_LORE } from "@/constants/atelierLore";

// Standardize styling for 5 personas
const STYLES = [
    { bg: "bg-amber-950", accent: "text-amber-500", style: "contrast-125" }, // Leo
    { bg: "bg-slate-950", accent: "text-slate-500", style: "grayscale" }, // Luna
    { bg: "bg-yellow-950", accent: "text-yellow-500", style: "sepia" }, // Reko
    { bg: "bg-lime-950", accent: "text-lime-500", style: "hue-rotate-90" }, // Sparky
    { bg: "bg-stone-900", accent: "text-stone-500", style: "contrast-150" } // Chip
];

export default function AtelierForm() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    const [activeState, setActiveState] = useState(0);

    const activeIndex = useTransform(scrollYProgress, (value) => {
        // Map 0-1 to 0-4 index
        if (value < 0.2) return 0;
        if (value < 0.4) return 1;
        if (value < 0.6) return 2;
        if (value < 0.8) return 3;
        return 4;
    });

    useMotionValueEvent(activeIndex, "change", (latest) => {
        if (latest !== activeState) {
            setActiveState(latest);
        }
    });

    // Safe access to persona
    const activePersona = ATELIER_LORE.personas[activeState] || ATELIER_LORE.personas[0];
    const activeStyle = STYLES[activeState] || STYLES[0];

    return (
        <section ref={containerRef} className="h-[500vh] relative bg-black">
            <div className="sticky top-0 h-screen overflow-hidden flex items-center justify-center">

                {/* Dynamic Background */}
                <motion.div
                    className={cn(
                        "absolute inset-0 transition-colors duration-1000 opacity-60",
                        activeStyle.bg
                    )}
                />

                <div className="relative z-10 w-full max-w-7xl px-4 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

                    {/* Visual Side */}
                    <div className="h-[50vh] md:h-[80vh] w-full relative flex items-center justify-center">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeState}
                                initial={{ opacity: 0, scale: 0.95, filter: "blur(10px)" }}
                                animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                                exit={{ opacity: 0, scale: 1.05, filter: "blur(10px)" }}
                                transition={{ duration: 0.8, ease: "easeInOut" }}
                                className={cn(
                                    "relative w-full h-full overflow-hidden rounded-sm border border-white/10",
                                    activeStyle.style
                                )}
                            >
                                <img
                                    src={activePersona.imagePath}
                                    alt={activePersona.name}
                                    className="w-full h-full object-cover"
                                />

                                {/* Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60" />

                                <div className="absolute bottom-6 left-6 max-w-sm">
                                    <div className="flex items-center gap-2 mb-2">
                                        <span className="text-xs font-mono font-bold px-2 py-1 rounded bg-white/20 text-white border border-white/20">
                                            {activePersona.species}
                                        </span>
                                    </div>
                                    <h3 className="text-3xl font-bold text-white">{activePersona.id}</h3>
                                </div>
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
                                        CREW MEMBER {String(activeState + 1).padStart(2, '0')}
                                    </h3>
                                    <h2 className="text-5xl md:text-6xl font-bold text-white tracking-tighter mb-4">
                                        {activePersona.role}
                                    </h2>
                                    <h4 className="text-xl font-light text-gray-400 uppercase tracking-widest border-l-2 border-white/20 pl-4">
                                        {activePersona.essence}
                                    </h4>
                                </div>

                                <div className="h-px w-12 bg-white/20" />

                                <blockquote className="text-2xl md:text-3xl font-serif text-white leading-tight">
                                    "{activePersona.quote}"
                                </blockquote>

                                <div className="space-y-4">
                                    <p className="text-lg text-gray-400 whitespace-pre-line leading-relaxed">
                                        {activePersona.description}
                                    </p>

                                    <div className="bg-white/5 p-4 rounded border border-white/10">
                                        <h5 className="text-xs font-bold text-gray-500 uppercase mb-1">Human Interaction Protocol</h5>
                                        <p className="text-sm text-gray-300">
                                            {activePersona.relationship}
                                        </p>
                                    </div>
                                </div>

                                <div className="pt-8 border-t border-white/10 mt-8 flex flex-wrap gap-2">
                                    <span className="text-xs font-mono text-gray-500 uppercase tracking-widest mr-2">
                                        VISUAL KEY
                                    </span>
                                    <span className="text-xs font-mono text-white border border-gray-700 px-2 py-1 rounded">
                                        {activePersona.visualKey}
                                    </span>
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </div>
            </div>
        </section>
    );
}
