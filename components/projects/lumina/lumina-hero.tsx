"use client";

import { motion } from "framer-motion";

export default function LuminaHero() {
    return (
        <section className="min-h-screen relative flex flex-col justify-end pb-24 bg-black text-white px-6 md:px-12 overflow-hidden">
            {/* Background Visual (Representative Proof) */}
            <div className="absolute inset-0 z-0">
                <img
                    src="/images/lumina/hero-bg.jpg" // Placeholder for representative visual
                    alt="Lumina Composite State"
                    className="w-full h-full object-cover opacity-50"
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
                    <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                    <span className="text-xs font-mono font-bold tracking-widest text-green-400">SYSTEM ACTIVE : PHASE 4</span>
                </motion.div>

                {/* Headline: "We are three but actually one" */}
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tighter leading-[0.9] mb-12 mix-blend-difference"
                >
                    WE ARE THREE,<br />
                    <span className="text-gray-500">BUT ACTUALLY ONE.</span>
                </motion.h1>

                {/* 3 State Summary (Direct Evidence) */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 border-t border-white/20 pt-8">
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
                            {/* Visual Proo f placeholder */}
                            <div className="absolute inset-0 bg-blue-500/10 group-hover:bg-blue-500/20 transition-colors" />
                            <div className="absolute bottom-2 left-2 text-[10px] font-mono text-blue-300">FIG 01. STRUCTURE</div>
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
                            {/* Visual Proof placeholder */}
                            <div className="absolute inset-0 bg-pink-500/10 group-hover:bg-pink-500/20 transition-colors" />
                            <div className="absolute bottom-2 left-2 text-[10px] font-mono text-pink-300">FIG 02. WAVEFORM</div>
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
                            {/* Visual Proof placeholder */}
                            <div className="absolute inset-0 bg-yellow-500/10 group-hover:bg-yellow-500/20 transition-colors" />
                            <div className="absolute bottom-2 left-2 text-[10px] font-mono text-yellow-300">FIG 03. VELOCITY</div>
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
