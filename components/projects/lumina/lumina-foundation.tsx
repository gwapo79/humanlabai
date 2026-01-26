"use client";

import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";

export default function LuminaFoundation() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end start"]
    });

    // Simplified: No complex scroll reveals for the header, just immediate impact.
    // Keeping scrollYProgress if we need parallax later, but for now just static impactful entry.

    return (
        <section ref={containerRef} className="py-32 bg-zinc-950 text-white border-b border-white/10">
            <div className="container mx-auto px-6 max-w-4xl text-center">

                <motion.div
                    style={{ opacity: scrollYProgress }}
                    className="space-y-12"
                >
                    <span className="text-xs font-mono text-red-500 tracking-widest border border-red-900 bg-red-900/10 px-3 py-1 rounded">
                        DEPARTURE CONDITION
                    </span>

                    <h2 className="text-4xl md:text-6xl font-bold tracking-tighter leading-tight">
                        LUMINA started from a <span className="text-gray-500">state</span>,<br />
                        not a story.
                    </h2>

                    <div className="max-w-xl mx-auto space-y-6 text-lg md:text-xl text-gray-400 leading-relaxed">
                        <p>
                            Usually, characters are built from profiles: Age, Job, Hobby.
                            <br />
                            <span className="text-white">We were built from survival.</span>
                        </p>
                        <p>
                            When emotion becomes too dangerous for one person to handle,
                            the self cannot hold its shape. It fractures.
                        </p>
                        <p className="text-white font-serif italic border-l-2 border-white/20 pl-6 ml-6 md:ml-0 text-left">
                            "The split was not a choice. It was a biological necessity."
                        </p>
                    </div>

                </motion.div>
            </div>
        </section>
    );
}
