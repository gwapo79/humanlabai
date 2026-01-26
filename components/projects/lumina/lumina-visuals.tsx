"use client";

import { motion } from "framer-motion";

export default function LuminaVisuals() {
    return (
        <>
            {/* SECTION 05: VISUAL LANGUAGE */}
            <section className="py-32 bg-black border-t border-white/10">
                <div className="container mx-auto px-4 text-center space-y-12">
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tight mb-8">
                            Color is not identity.<br />
                            <span className="text-gray-500">Color is a reaction.</span>
                        </h2>
                        <p className="text-gray-400 max-w-2xl mx-auto leading-relaxed">
                            Lumina begins in grayscale. Color only appears when a state infiltrates the system.
                            Hues are transient, shifting as emotions overlap and collide.
                        </p>
                    </motion.div>

                    {/* Color Swatches / Visual Hint */}
                    <div className="flex justify-center gap-4 mt-12">
                        <div className="w-16 h-16 rounded-full bg-zinc-800 border border-white/10" />
                        <div className="w-16 h-16 rounded-full bg-zinc-500 blur-sm opacity-50" />
                        <div className="w-16 h-16 rounded-full bg-orange-900/40 blur-md opacity-50" />
                        <div className="w-16 h-16 rounded-full bg-blue-900/40 blur-md opacity-50" />
                    </div>
                </div>
            </section>

            {/* SECTION 06: IP EXPANSION */}
            <section className="py-32 bg-zinc-950">
                <div className="container mx-auto px-4 max-w-3xl">
                    <div className="space-y-8 border-l-2 border-white/10 pl-8">
                        <div>
                            <span className="text-xs font-bold text-white bg-red-600 px-2 py-1 rounded">CURRENT PHASE</span>
                            <h3 className="text-2xl font-bold text-white mt-4">Season 1 : FRACTURE</h3>
                            <p className="text-gray-500 mt-2">The initial split. Understanding the three disparate states.</p>
                        </div>
                        <div className="opacity-50">
                            <span className="text-xs font-bold text-gray-500 border border-gray-700 px-2 py-1 rounded">UPCOMING</span>
                            <h3 className="text-2xl font-bold text-gray-300 mt-4">Season 2 : OVERLAP</h3>
                            <p className="text-gray-600 mt-2">When states begin to bleed into one another. Chaos ensues.</p>
                        </div>
                        <div className="opacity-30">
                            <span className="text-xs font-bold text-gray-700 border border-gray-800 px-2 py-1 rounded">TBA</span>
                            <h3 className="text-2xl font-bold text-gray-500 mt-4">Season 3 : [REDACTED]</h3>
                        </div>
                    </div>
                </div>
            </section>

            {/* ENDING */}
            <section className="h-[50vh] flex items-center justify-center bg-black">
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    className="text-center"
                >
                    <p className="text-xl md:text-3xl text-gray-300 font-light mb-4">
                        There is no final form.
                    </p>
                    <h1 className="text-4xl md:text-6xl font-bold text-white tracking-tighter">
                        Only shifting states.
                    </h1>
                </motion.div>
            </section>
        </>
    );
}
