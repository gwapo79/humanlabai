"use client";

import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";

export default function LuminaFoundation() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end start"]
    });

    const titleOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);
    const questionOpacity = useTransform(scrollYProgress, [0.4, 0.6], [0, 1]);

    return (
        <section ref={containerRef} className="h-[200vh] relative bg-black text-white">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <img
                    src="/images/lumina/hero-bg.jpg"
                    alt="Lumina Background"
                    className="w-full h-full object-cover opacity-60"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-black/90" />
            </div>

            <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden">
                <div className="relative z-10 text-center mix-blend-difference px-4">
                    {/* Initial Title */}
                    <motion.div style={{ opacity: titleOpacity }} className="space-y-6">
                        <div className="inline-block border border-white/20 px-3 py-1 text-xs font-mono text-gray-400 tracking-widest uppercase mb-4">
                            Project ID: Lumina
                        </div>
                        <h1 className="text-6xl md:text-9xl font-bold tracking-tighter">
                            LUMINA
                        </h1>
                        <p className="text-xl md:text-2xl text-gray-300 max-w-lg mx-auto font-light">
                            Psychological IP Architecture
                        </p>
                    </motion.div>

                    {/* The Core Question (Revealed on Scroll) */}
                    <motion.div
                        style={{ opacity: questionOpacity }}
                        className="absolute inset-0 flex items-center justify-center pointer-events-none"
                    >
                        <h2 className="text-3xl md:text-5xl font-serif text-white leading-tight max-w-4xl mx-auto shadow-black drop-shadow-lg">
                            "What happens<br />when one person can no longer stay whole?"
                        </h2>
                    </motion.div>
                </div>
            </div>

            {/* Bottom Gradient for Transition */}
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent z-20" />
        </section>
    );
}
