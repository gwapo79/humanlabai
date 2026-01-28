"use client";

import { useScroll, motion, AnimatePresence, useMotionValueEvent } from "framer-motion";
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

    useMotionValueEvent(scrollYProgress, "change", (latest) => {
        let newIndex = 0;
        if (latest < 0.2) newIndex = 0;
        else if (latest < 0.4) newIndex = 1;
        else if (latest < 0.6) newIndex = 2;
        else if (latest < 0.8) newIndex = 3;
        else newIndex = 4;

        if (newIndex !== activeState) {
            setActiveState(newIndex);
        }
    });

    // Safe access to persona
    const activePersona = ATELIER_LORE.personas[activeState] || ATELIER_LORE.personas[0];
    const activeStyle = STYLES[activeState] || STYLES[0];

    // Scroll to specific section
    const scrollToSection = (index: number) => {
        if (!containerRef.current) return;

        const sectionHeight = containerRef.current.offsetHeight;
        const offsetTop = containerRef.current.offsetTop;

        // Calculate target scroll position (center of each 20% segment)
        // 0 -> 10%, 1 -> 30%, 2 -> 50%, 3 -> 70%, 4 -> 90%
        const targetRatio = 0.1 + (index * 0.2);
        const targetScroll = offsetTop + (sectionHeight * targetRatio) - (window.innerHeight / 2);

        window.scrollTo({
            top: targetScroll,
            behavior: "smooth"
        });
    };

    // Safety check
    if (!activePersona || !activeStyle) return null;

    return (
        <section ref={containerRef} className="h-[600vh] relative bg-black">
            <div className="sticky top-0 h-[100svh] overflow-hidden flex flex-col">

                {/* Dynamic Background */}
                <motion.div
                    className={cn(
                        "absolute inset-0 transition-colors duration-1000 opacity-60",
                        activeStyle.bg
                    )}
                />

                {/* Progress Indicator / Navigation (Visible on both Mobile & Desktop) */}
                <div className="absolute top-4 left-0 right-0 z-30 flex justify-center gap-2">
                    {ATELIER_LORE.personas.map((_, idx) => (
                        <button
                            key={idx}
                            onClick={() => scrollToSection(idx)}
                            className={cn(
                                "h-1 rounded-full transition-all duration-300 backdrop-blur-sm hover:h-2 hover:bg-white/80 cursor-pointer",
                                idx === activeState ? "w-8 bg-white" : "w-2 bg-white/30"
                            )}
                            aria-label={`Go to persona ${idx + 1}`}
                        />
                    ))}
                </div>

                <div className="relative z-10 w-full max-w-7xl mx-auto px-4 h-full flex flex-col md:grid md:grid-cols-2 md:gap-12 md:items-center">

                    {/* Visual Side - Mobile Optimized Flex */}
                    <div className="relative w-full flex-1 md:flex-none md:h-[80vh] flex items-end md:items-center justify-center pb-4 md:pb-0 min-h-0 shrink-0">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeState}
                                initial={{ opacity: 0, scale: 0.95, filter: "blur(10px)" }}
                                animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                                exit={{ opacity: 0, scale: 1.05, filter: "blur(10px)" }}
                                transition={{ duration: 0.8, ease: "easeInOut" }}
                                className={cn(
                                    "relative w-full h-full max-h-[45svh] md:max-h-full overflow-hidden rounded-sm border-0 md:border border-white/10",
                                    activeStyle.style
                                )}
                            >
                                <img
                                    src={activePersona.imagePath}
                                    alt={activePersona.name}
                                    className="w-full h-full object-contain md:object-cover object-bottom"
                                />

                                {/* Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60" />

                                <div className="absolute bottom-2 left-2 md:bottom-6 md:left-6 max-w-sm">
                                    <div className="flex items-center gap-2 mb-1 md:mb-2">
                                        <span className="text-[10px] md:text-xs font-mono font-bold px-2 py-0.5 md:py-1 rounded bg-white/20 text-white border border-white/20">
                                            {activePersona.species}
                                        </span>
                                    </div>
                                    <h3 className="text-2xl md:text-3xl font-bold text-white leading-none">{activePersona.id}</h3>
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>

                    {/* Text Side - Mobile Optimized */}
                    <div className="flex-1 md:flex-none w-full md:h-auto flex flex-col justify-start md:justify-center min-h-0 overflow-y-auto md:overflow-visible pb-12 md:pb-0 shrink">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeState}
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                                transition={{ duration: 0.5 }}
                                className="space-y-3 md:space-y-8"
                            >
                                <div>
                                    <h3 className="text-xs md:text-sm font-mono tracking-[0.2em] text-gray-500 mb-1 md:mb-2">
                                        CREW MEMBER {String(activeState + 1).padStart(2, '0')}
                                    </h3>
                                    <h2 className="text-3xl md:text-6xl font-bold text-white tracking-tighter mb-2 md:mb-4 leading-none">
                                        {activePersona.role}
                                    </h2>
                                    <h4 className="text-xs md:text-xl font-light text-gray-400 uppercase tracking-widest border-l-2 border-white/20 pl-4 line-clamp-1">
                                        {activePersona.essence}
                                    </h4>
                                </div>

                                <div className="h-px w-8 md:w-12 bg-white/20" />

                                <blockquote className="text-lg md:text-3xl font-serif text-white leading-tight">
                                    "{activePersona.quote}"
                                </blockquote>

                                <div className="space-y-4">
                                    <p className="text-sm md:text-lg text-gray-400 whitespace-pre-line leading-relaxed md:line-clamp-none">
                                        {activePersona.description}
                                    </p>

                                    <div className="bg-white/5 p-3 md:p-4 rounded border border-white/10 hidden md:block">
                                        <h5 className="text-xs font-bold text-gray-500 uppercase mb-1">Human Interaction Protocol</h5>
                                        <p className="text-sm text-gray-300">
                                            {activePersona.relationship}
                                        </p>
                                    </div>
                                </div>

                                <div className="pt-2 md:pt-8 border-t border-white/10 mt-2 md:mt-8 flex flex-wrap gap-2">
                                    <span className="text-[10px] md:text-xs font-mono text-gray-500 uppercase tracking-widest mr-2">
                                        VISUAL KEY
                                    </span>
                                    <span className="text-[10px] md:text-xs font-mono text-white border border-gray-700 px-2 py-1 rounded">
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
