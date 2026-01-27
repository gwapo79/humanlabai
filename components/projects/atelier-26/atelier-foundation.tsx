"use client";

import { useScroll, useTransform, motion } from "framer-motion";
import { useRef, ReactNode } from "react";

function NarrativeBlock({ children, className = "" }: { children: ReactNode; className?: string }) {
    const ref = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "center center"]
    });

    const opacity = useTransform(scrollYProgress, [0, 1], [0, 1], { clamp: true });
    const y = useTransform(scrollYProgress, [0, 1], [20, 0], { clamp: true });

    return (
        <motion.div
            ref={ref}
            style={{ opacity, y }}
            className={className}
        >
            {children}
        </motion.div>
    );
}

export default function AtelierFoundation() {
    return (
        <section className="py-32 bg-zinc-950 text-white border-b border-white/10">
            <div className="container mx-auto px-6 max-w-4xl text-center space-y-24">

                {/* Block A: Premise */}
                <NarrativeBlock className="space-y-12">
                    <span className="text-xs font-mono text-orange-500 tracking-widest border border-orange-900 bg-orange-900/10 px-3 py-1 rounded">
                        ORIGIN STORY
                    </span>

                    <h2 className="text-3xl md:text-5xl font-bold tracking-tighter leading-tight">
                        It started with two humans<br />
                        <span className="text-gray-500">who thought they were in charge.</span>
                    </h2>

                    <div className="max-w-xl mx-auto text-lg md:text-xl text-gray-400 leading-relaxed">
                        <p>
                            Jin (Designer) & Haneul (Illustrator).
                            <br />
                            <span className="text-white">They wanted a peaceful studio. They got a zoo.</span>
                        </p>
                    </div>
                </NarrativeBlock>

                {/* Block B: The Rule */}
                <NarrativeBlock className="max-w-xl mx-auto space-y-6 text-lg md:text-xl text-gray-400 leading-relaxed">
                    <p>
                        In this house, hierarchy is determined not by who pays the rent,
                        but by who creates the most chaos.
                    </p>
                    <p className="text-white font-serif italic border-l-2 border-white/20 pl-6 ml-6 md:ml-0 text-left">
                        "The partition was not accidental. It was architected for survival."
                    </p>
                </NarrativeBlock>

            </div>
        </section>
    );
}
