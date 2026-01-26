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
        image: "/images/lumina/states/sia.jpg"
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
        image: "/images/lumina/states/hayeon.jpg"
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
        image: "/images/lumina/states/luna.jpg"
    }
];

export default function LuminaForm() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    const [activeState, setActiveState] = useState(0);

    useTransform(scrollYProgress, (value) => {
        // Map 0-1 to 0-2 index
        if (value < 0.33) return 0;
        if (value < 0.66) return 1;
        return 2;
    }).on("change", (latest) => {
        setActiveState(latest);
    });

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
                    <div className="h-[50vh] md:h-[70vh] w-full relative flex items-center justify-center">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeState}
                                initial={{ opacity: 0, scale: 0.95, filter: "blur(10px)" }}
                                animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                                exit={{ opacity: 0, scale: 1.05, filter: "blur(10px)" }}
                                transition={{ duration: 0.8, ease: "easeInOut" }}
                                className={cn(
                                    "relative w-full h-full overflow-hidden rounded-sm border border-white/10",
                                    STATES[activeState].style
                                )}
                            >
                                <img
                                    src={STATES[activeState].image}
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
                                        STATE DOMINANCEResults
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
                                    <div className="grid grid-cols-3 gap-2">
                                        {/* Mock Evidence Slots */}
                                        <div className="aspect-square bg-white/5 rounded-sm border border-white/5 flex items-center justify-center">
                                            <span className="text-[10px] text-gray-600 font-mono">FIG_A</span>
                                        </div>
                                        <div className="aspect-square bg-white/5 rounded-sm border border-white/5 flex items-center justify-center">
                                            <span className="text-[10px] text-gray-600 font-mono">FIG_B</span>
                                        </div>
                                        <div className="aspect-square bg-white/5 rounded-sm border border-white/5 flex items-center justify-center">
                                            <span className="text-[10px] text-gray-600 font-mono">DATA_C</span>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </div>
            </div>
        </section>
    );
}
