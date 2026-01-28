"use client";

import { motion } from "framer-motion";
import { Instagram, Youtube, MessageCircle } from "lucide-react";

export default function LuminaLivingSystem() {
    return (
        <section className="py-32 bg-zinc-900 text-white">
            <div className="container mx-auto px-4 max-w-5xl">
                <div className="flex flex-col md:grid md:grid-cols-2 gap-16 items-start">

                    {/* Concept Text */}
                    <div className="space-y-8 relative md:sticky top-0 md:top-32">
                        <span className="text-xs font-mono text-gray-500 tracking-widest uppercase">
                            SECTION 06 : SYSTEM LOGS
                        </span>

                        <div className="flex items-center gap-3 mb-2">
                            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                            <span className="text-xs font-mono text-green-500 tracking-widest">SYSTEM ACTIVE</span>
                        </div>

                        <h2 className="text-5xl font-bold tracking-tighter leading-none">
                            LUMINA OS<br />
                            <span className="text-gray-500">OPERATING...</span>
                        </h2>
                        <h3 className="text-2xl text-gray-400 font-light">
                            Real-time state change logs.
                        </h3>

                        <div className="h-px w-24 bg-white/10" />

                        <p className="text-gray-400 leading-relaxed">
                            Social media serves as a <strong>visual and temporal log</strong> of the system's state.<br />
                            Monitoring 24/7 for emotional overflow.
                        </p>
                    </div>

                    {/* Feed Mockup (Terminal Style) */}
                    <div className="space-y-4 font-mono text-sm">
                        {/* Feed Item 1: Terminal Log */}
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="bg-black/80 border border-green-500/20 p-4 rounded-sm hover:border-green-500/50 transition-colors group"
                        >
                            <div className="flex items-center gap-2 mb-2 text-green-700/50 group-hover:text-green-500/80 transition-colors text-xs">
                                <span>[LOG_0824]</span>
                                <span>::</span>
                                <span>14:02:59 KST</span>
                            </div>
                            <div className="text-gray-300 mb-2">
                                <span className="text-blue-400">@SYSTEM</span>: ANOMALY DETECTED IN SECTOR 04. DEFENSE MECHANISM ENGAGED.
                            </div>
                            <div className="pl-4 border-l border-white/10 text-gray-500 text-xs">
                                {">"} Redirecting emotional overflow to [HAYEON]... <br />
                                {">"} Success.
                            </div>
                        </motion.div>

                        {/* Feed Item 2: Visual Log */}
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="bg-black/80 border border-white/10 p-4 rounded-sm hover:border-white/30 transition-colors"
                        >
                            <div className="flex items-center gap-2 mb-2 text-gray-700 text-xs">
                                <span>[LOG_0823]</span>
                                <span>::</span>
                                <span>09:12:11 KST</span>
                            </div>
                            <div className="flex gap-4">
                                <div className="w-16 h-16 bg-zinc-900 border border-white/10 flex items-center justify-center shrink-0">
                                    <Instagram className="w-4 h-4 text-pink-500" />
                                </div>
                                <div>
                                    <div className="text-gray-300 mb-1">
                                        <span className="text-pink-400">@HAYEON_SENS</span> uploaded a new memory.
                                    </div>
                                    <p className="text-gray-500 text-xs">"The noise is too loud today."</p>
                                </div>
                            </div>
                        </motion.div>

                        {/* Feed Item 3: Youtube Log */}
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="bg-black/80 border border-white/10 p-4 rounded-sm hover:border-red-500/30 transition-colors"
                        >
                            <div className="flex items-center gap-2 mb-2 text-gray-700 text-xs">
                                <span>[LOG_0822]</span>
                                <span>::</span>
                                <span>21:00:00 KST</span>
                            </div>
                            <div className="flex gap-4">
                                <div className="w-16 h-16 bg-zinc-900 border border-white/10 flex items-center justify-center shrink-0">
                                    <Youtube className="w-4 h-4 text-red-500" />
                                </div>
                                <div>
                                    <div className="text-gray-300 mb-1">
                                        <span className="text-red-400">@LUMINA_OFFICIAL</span> published episode.
                                    </div>
                                    <p className="text-gray-500 text-xs">EP.04 : THE SPLIT (Documentary)</p>
                                </div>
                            </div>
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
