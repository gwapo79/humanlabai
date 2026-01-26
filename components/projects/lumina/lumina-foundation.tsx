"use client";

import { useScroll, useTransform, motion } from "framer-motion";
import { useRef, ReactNode } from "react";

// Anti-Gravity Implementation:
// - Trigger: element-based (viewport bottom -> viewport center)
// - State: mapped directly from scroll progress
// - Clamped: ensures no overshooting values
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

export default function LuminaFoundation() {
    return (
        <section className="py-32 bg-zinc-950 text-white border-b border-white/10">
            <div className="container mx-auto px-6 max-w-4xl text-center space-y-24">
                
                {/* Block A: Premise */}
                <NarrativeBlock className="space-y-12">
                    <span className="text-xs font-mono text-red-500 tracking-widest border border-red-900 bg-red-900/10 px-3 py-1 rounded">
                        DEPARTURE CONDITION
                    </span>

                    <h2 className="text-4xl md:text-6xl font-bold tracking-tighter leading-tight">
                        LUMINA started from a <span className="text-gray-500">state</span>,<br />
                        not a story.
                    </h2>

                    <div className="max-w-xl mx-auto text-lg md:text-xl text-gray-400 leading-relaxed">
                        <p>
                            Usually, characters are built from profiles: Age, Job, Hobby.
                            <br />
                            <span className="text-white">We were built from survival.</span>
                        </p>
                    </div>
                </NarrativeBlock>

                {/* Block B: Fracture */}
                <NarrativeBlock className="max-w-xl mx-auto space-y-6 text-lg md:text-xl text-gray-400 leading-relaxed">
                    <p>
                        When emotion becomes too dangerous for one person to handle,
                        the self cannot hold its shape. It fractures.
                    </p>
                    <p className="text-white font-serif italic border-l-2 border-white/20 pl-6 ml-6 md:ml-0 text-left">
                        "The split was not a choice. It was a biological necessity."
                    </p>
                </NarrativeBlock>

            </div>
        </section>
    );
}
