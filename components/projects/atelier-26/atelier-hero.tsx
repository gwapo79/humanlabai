"use client";

import { motion } from "framer-motion";

export default function AtelierHero() {
    return (
        <section className="min-h-screen relative flex flex-col justify-end pb-24 bg-black text-white px-6 md:px-12 overflow-hidden">
            {/* Background Visual */}
            <div className="absolute inset-0 z-0">
                <img
                    src="/images/atelier26/hero_wide_v2.jpg"
                    alt="Atelier 26 Main Poster"
                    className="w-full h-full object-cover opacity-60"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto w-full">
                {/* Status Badge */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1 }}
                    className="absolute top-0 right-0 mt-8 md:mt-0 flex items-center gap-3 backdrop-blur-md bg-white/5 border border-white/10 px-4 py-2 rounded-full"
                >
                    <div className="w-2 h-2 rounded-full bg-orange-500 animate-pulse" />
                    <span className="text-xs font-mono font-bold tracking-widest text-orange-400">PROJECT : ATELIER 26</span>
                </motion.div>

                {/* Headline */}
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tighter leading-[0.9] mb-12 mix-blend-overlay opacity-90"
                >
                    ATELIER 26<br />
                    <span className="text-gray-400 text-4xl md:text-6xl block mt-4 tracking-normal font-light">
                        CHAOS & COEXISTENCE
                    </span>
                </motion.h1>

                {/* Summary / Core Concept */}
                <div className="mt-12 border-t border-white/20 pt-8 max-w-2xl">
                    <p className="text-xl md:text-2xl font-light text-gray-300 leading-relaxed">
                        "초보 집사와 5인의 사고뭉치들"
                    </p>
                    <p className="text-sm text-gray-500 mt-2 font-mono uppercase tracking-widest">
                        A SITCOM ABOUT HUMANS SERVING ANIMALS.
                    </p>
                </div>
            </div>
        </section >
    );
}
