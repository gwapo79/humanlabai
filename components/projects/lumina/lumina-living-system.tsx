"use client";

import { motion } from "framer-motion";
import { Instagram, Youtube, MessageCircle } from "lucide-react";

export default function LuminaLivingSystem() {
    return (
        <section className="py-32 bg-zinc-900 text-white">
            <div className="container mx-auto px-4 max-w-5xl">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">

                    {/* Concept Text */}
                    <div className="space-y-8 sticky top-32">
                        <span className="text-xs font-mono text-gray-500 tracking-widest uppercase">
                            Section 05 : Living System
                        </span>
                        <h2 className="text-5xl font-bold tracking-tighter leading-none">
                            LUMINA is not static.
                        </h2>
                        <h3 className="text-2xl text-gray-400 font-light">
                            These characters react to the world.
                        </h3>

                        <div className="h-px w-24 bg-white/10" />

                        <p className="text-gray-400 leading-relaxed">
                            Social media is not used for promotion.<br />
                            It serves as a <strong>real-time log</strong> of the system's state.<br />
                            Every post is a reaction to an external stimulus.
                        </p>
                    </div>

                    {/* Feed Mockup (Abstract) */}
                    <div className="space-y-8">
                        {/* Feed Item 1: Instagram (Visual Log) */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="bg-black border border-white/10 p-6 rounded-sm space-y-4"
                        >
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-2 text-gray-400">
                                    <Instagram className="w-4 h-4" />
                                    <span className="text-xs font-mono">VISUAL_LOG</span>
                                </div>
                                <span className="text-xs text-gray-600">2h ago</span>
                            </div>
                            <div className="aspect-square bg-zinc-800 rounded-sm relative overflow-hidden group cursor-pointer">
                                <div className="absolute inset-0 bg-gradient-to-tr from-purple-900/20 to-transparent group-hover:opacity-100 transition-opacity" />
                                <div className="absolute inset-0 flex items-center justify-center text-gray-600 font-mono text-sm">
                                    [STATE_OVERLAP_DETECTED]
                                </div>
                            </div>
                            <p className="text-sm text-gray-500 font-mono">
                                {">"} System anomaly detected.<br />
                                {">"} Sia interacting with Hayeon...
                            </p>
                        </motion.div>

                        {/* Feed Item 2: Youtube (Time Log) */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="bg-black border border-white/10 p-6 rounded-sm space-y-4"
                        >
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-2 text-gray-400">
                                    <Youtube className="w-4 h-4" />
                                    <span className="text-xs font-mono">TEMPORAL_LOG</span>
                                </div>
                                <span className="text-xs text-gray-600">1d ago</span>
                            </div>
                            <div className="aspect-video bg-zinc-800 rounded-sm relative flex items-center justify-center">
                                <PlayButton />
                            </div>
                            <p className="text-sm text-gray-500 font-mono">
                                {">"} Episode 04 : The Split<br />
                                {">"} Analyzing root cause...
                            </p>
                        </motion.div>
                    </div>

                </div>
            </div>
        </section>
    );
}

function PlayButton() {
    return (
        <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center">
            <div className="w-0 h-0 border-t-[6px] border-t-transparent border-l-[10px] border-l-white border-b-[6px] border-b-transparent ml-1" />
        </div>
    )
}
