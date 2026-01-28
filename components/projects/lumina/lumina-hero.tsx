"use client";

import { motion } from "framer-motion";

export default function LuminaHero() {
    return (
        <section className="min-h-[100svh] relative flex flex-col justify-end pb-24 bg-black text-white px-6 md:px-12 overflow-hidden">
            {/* Background Visual (Representative Proof) */}
            <div className="absolute inset-0 z-0">
                <picture>
                    <source media="(max-width: 768px)" srcSet="/images/lumina/hero-bg-mobile.jpg" />
                    <img
                        src="/images/lumina/hero-bg.jpg" // Placeholder for representative visual
                        alt="Lumina Composite State"
                        className="w-full h-full object-cover object-top opacity-50 md:scale-100"
                    />
                </picture>
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto w-full">
                {/* Status Badge */}


                {/* Headline: "We are three but actually one" */}
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="absolute top-[40svh] left-0 right-0 -translate-y-1/2 z-20 px-6 text-center md:relative md:top-auto md:translate-y-0 md:text-left text-4xl sm:text-6xl md:text-8xl lg:text-9xl font-bold tracking-tighter leading-[0.9] mb-8 md:mb-12 mix-blend-difference"
                >
                    WE ARE THREE,<br />
                    <span className="text-gray-500">BUT ACTUALLY ONE.</span>
                </motion.h1>

                {/* 3 State Summary (Direct Evidence) */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-[70vh] md:mt-12 border-t border-white/20 pt-8">
                    {/* State 01 */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="group relative bg-zinc-900/50 border border-white/10 p-4 hover:bg-zinc-800 transition-colors cursor-default"
                    >
                        <div className="flex items-center gap-2 mb-3">
                            <div className="w-2 h-2 bg-blue-500 rounded-full" />
                            <span className="text-xs font-mono font-bold tracking-widest text-blue-400">CONTROL / SIA</span>
                        </div>
                        <div className="aspect-video w-full bg-blue-900/20 mb-4 rounded-sm overflow-hidden relative">
                            {/* Visual Proof */}
                            <img src="/images/lumina/states/sia_v2.jpg" alt="Sia" className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity" />
                            <div className="absolute inset-0 bg-blue-500/10 group-hover:bg-blue-500/0 transition-colors pointer-events-none" />
                            <div className="absolute bottom-2 left-2 text-[10px] font-mono text-white/80 bg-black/50 px-1 rounded">FIG 01. STRUCTURE</div>
                        </div>
                        <p className="text-lg font-bold leading-tight mb-2">
                            "You must not feel."
                        </p>
                        <p className="text-xs text-gray-400">
                            Defense mechanism. Output: Architecture & Armor.
                        </p>
                    </motion.div>

                    {/* State 02 */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                        className="group relative bg-zinc-900/50 border border-white/10 p-4 hover:bg-zinc-800 transition-colors cursor-default"
                    >
                        <div className="flex items-center gap-2 mb-3">
                            <div className="w-2 h-2 bg-pink-500 rounded-full" />
                            <span className="text-xs font-mono font-bold tracking-widest text-pink-400">SENSITIVITY / HAYEON</span>
                        </div>
                        <div className="aspect-video w-full bg-pink-900/20 mb-4 rounded-sm overflow-hidden relative">
                            {/* Visual Proof */}
                            <img src="/images/lumina/states/hayeon_v2.jpg" alt="Hayeon" className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity" />
                            <div className="absolute inset-0 bg-pink-500/10 group-hover:bg-pink-500/0 transition-colors pointer-events-none" />
                            <div className="absolute bottom-2 left-2 text-[10px] font-mono text-white/80 bg-black/50 px-1 rounded">FIG 02. WAVEFORM</div>
                        </div>
                        <p className="text-lg font-bold leading-tight mb-2">
                            "I cannot hide it."
                        </p>
                        <p className="text-xs text-gray-400">
                            Raw Input. Output: Texture & Sound.
                        </p>
                    </motion.div>

                    {/* State 03 */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6 }}
                        className="group relative bg-zinc-900/50 border border-white/10 p-4 hover:bg-zinc-800 transition-colors cursor-default"
                    >
                        <div className="flex items-center gap-2 mb-3">
                            <div className="w-2 h-2 bg-yellow-500 rounded-full" />
                            <span className="text-xs font-mono font-bold tracking-widest text-yellow-400">ESCAPE / LUNA</span>
                        </div>
                        <div className="aspect-video w-full bg-yellow-900/20 mb-4 rounded-sm overflow-hidden relative">
                            {/* Visual Proof */}
                            <img src="/images/lumina/states/luna_v2.jpg" alt="Luna" className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity" />
                            <div className="absolute inset-0 bg-yellow-500/10 group-hover:bg-yellow-500/0 transition-colors pointer-events-none" />
                            <div className="absolute bottom-2 left-2 text-[10px] font-mono text-white/80 bg-black/50 px-1 rounded">FIG 03. VELOCITY</div>
                        </div>
                        <p className="text-lg font-bold leading-tight mb-2">
                            "Just move anywhere."
                        </p>
                        <p className="text-xs text-gray-400">
                            Impulsive Action. Output: Motion & Blur.
                        </p>
                    </motion.div>
                </div>
            </div>
        </section >
    );
}
