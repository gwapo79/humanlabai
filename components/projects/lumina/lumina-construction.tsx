"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { cn } from "@/lib/utils";

const STEPS = [
    {
        num: "01",
        label: "STEP 01: PRESSURE",
        text: "The external reality exceeded emotional capacity.\nSubject: Yoonseo (Human). Status: Critical."
    },
    {
        num: "02",
        label: "STEP 02: THRESHOLD",
        text: "The self could no longer maintain a single state.\nWarning: Total system collapse imminent."
    },
    {
        num: "03",
        label: "STEP 03: SPLIT",
        text: "The system fractured into three distinct survival mechanisms.\nControl (Sia), Sensitivity (Hayeon), Escape (Luna)."
    }
];

export default function LuminaConstruction() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    // Step Triggers
    const activeStep = useTransform(scrollYProgress, (value) => {
        if (value < 0.33) return 0;
        if (value < 0.66) return 1;
        return 2;
    });

    // Silhouette Effect: Gets more "fractured" as we scroll?
    // For now, let's keep the core "Empty Center" visual but make it pulse/change
    const silhouetteScale = useTransform(scrollYProgress, [0, 0.5, 1], [1.5, 1.8, 1.2]);
    const silhouetteOpacity = useTransform(scrollYProgress, [0, 0.8, 1], [0.3, 0.6, 0]);

    return (
        <section ref={containerRef} className="h-[300vh] relative bg-black text-white">
            <div className="sticky top-0 h-[100svh] overflow-hidden flex items-center justify-center">

                {/* Background Atmosphere */}
                <div className="absolute inset-0 bg-gradient-to-b from-black via-zinc-900/10 to-black z-0" />

                {/* The Empty Center (Yoonseo) - Silhouette Visual */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                    className="absolute z-0 flex items-center justify-center w-full h-full pointer-events-none"
                >
                    <motion.div
                        style={{ scale: silhouetteScale, opacity: silhouetteOpacity }}
                        className="relative w-full h-[60svh] md:w-[800px] md:h-[1200px] flex items-center justify-center"
                    >
                        {/* Silhouette Image */}
                        <img
                            src="/images/lumina/lumina_construction_process_v2.jpg"
                            alt="Construction Core"
                            style={{
                                maskImage: 'radial-gradient(circle, black 30%, transparent 70%)',
                                WebkitMaskImage: 'radial-gradient(circle, black 30%, transparent 70%)'
                            }}
                            className="w-full h-full object-contain opacity-90 mix-blend-screen"
                        />

                    </motion.div>
                </motion.div>

                {/* Content Overlay */}
                <div className="relative z-10 container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-12 h-full items-center">

                    {/* Left: Section Marker */}
                    <div className="hidden md:flex flex-col justify-between h-[60vh] border-l border-white/10 pl-8">
                        <div>
                            <span className="text-xs font-mono text-gray-500 tracking-widest">SYSTEM LOGIC</span>
                            <h2 className="text-4xl font-bold mt-2 tracking-tight">CONSTRUCTION PROCESS</h2>
                        </div>
                        <div className="mb-12">
                            <p className="text-gray-400 font-serif italic text-xl">
                                "The partition was not accidental.<br />
                                It was <span className="text-white">architected for survival.</span>"
                            </p>
                        </div>
                    </div>

                    {/* Right: Step Narrative */}
                    <div className="relative w-full h-full pointer-events-none md:pointer-events-auto">
                        {STEPS.map((step, i) => (
                            <StepCard
                                key={i}
                                step={step}
                                index={i}
                                scrollYProgress={scrollYProgress}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

function StepCard({ step, index, scrollYProgress }: { step: any, index: number, scrollYProgress: any }) {
    // Each step visible in its specific range
    const rangeStart = index * 0.33;
    const rangeEnd = (index + 1) * 0.33;

    // Opacity based on scroll range
    const opacity = useTransform(
        scrollYProgress,
        [rangeStart, rangeStart + 0.1, rangeEnd - 0.1, rangeEnd],
        [0, 1, 1, 0]
    );

    const y = useTransform(
        scrollYProgress,
        [rangeStart, rangeEnd],
        [50, -50]
    );

    return (
        <motion.div
            style={{ opacity, y }}
            className="absolute top-1/2 left-4 right-4 md:left-0 md:right-0 -translate-y-1/2 mx-auto md:mx-0 md:w-full max-w-md p-6 md:p-8 bg-zinc-900/80 backdrop-blur-md border border-white/10 rounded-sm pointer-events-auto"
        >
            <div className="flex items-center gap-4 mb-6">
                <span className="text-xs font-mono border border-white/30 px-2 py-1 rounded-full">{step.num}</span>
                <div className="h-px flex-1 bg-white/10" />
            </div>
            <h3 className="text-2xl font-bold mb-4 tracking-tight">{step.label}</h3>
            <p className="text-gray-400 whitespace-pre-line leading-relaxed">
                {step.text}
            </p>
        </motion.div>
    );
}
