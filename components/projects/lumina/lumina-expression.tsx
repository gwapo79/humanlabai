"use client";

import { motion } from "framer-motion";
import { Play } from "lucide-react";

const TRACKS = [
    { num: "01", title: "IMAGE", subtitle: "Freezing dominance." },
    { num: "02", title: "MUSIC", subtitle: "Expressing internal rhythm." },
    { num: "03", title: "VIDEO", subtitle: "Showing state transition." },
    { num: "04", title: "STAGE", subtitle: "The momentary collapse." },
];

export default function LuminaExpression() {
    return (
        <section className="min-h-screen flex items-center justify-center bg-zinc-950 py-24">
            <div className="container mx-auto px-4 max-w-4xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16 text-center"
                >
                    <h5 className="text-sm font-mono text-gray-500 tracking-widest mb-4">SECTION 04 : EXPRESSION</h5>
                    <h2 className="text-5xl md:text-7xl font-bold text-white tracking-tighter uppercase">
                        Evidence
                    </h2>
                    <p className="mt-4 text-gray-400">
                        Content is not produced. It is extracted.
                    </p>
                </motion.div>

                <div className="space-y-4">
                    {TRACKS.map((track, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="group relative border-b border-white/10 py-8 md:py-10 flex items-baseline justify-between hover:bg-white/5 transition-colors px-4 cursor-pointer"
                        >
                            <div className="flex items-baseline gap-8 md:gap-16">
                                <span className="text-sm font-mono text-gray-600 group-hover:text-white transition-colors">
                                    EXP_0{i + 1}
                                </span>
                                <h3 className="text-2xl md:text-4xl font-bold text-gray-300 group-hover:text-white transition-colors">
                                    {track.title}
                                </h3>
                            </div>

                            <div className="flex items-center gap-4">
                                <span className="text-sm text-gray-600 italic hidden md:block group-hover:text-gray-400 transition-colors">
                                    {track.subtitle}
                                </span>
                                <Play className="w-5 h-5 text-transparent group-hover:text-white transition-colors fill-current" />
                            </div>
                        </motion.div>
                    ))}
                </div>

                <div className="mt-24 text-center">
                    <p className="text-gray-500 text-sm">
                        * These media artifacts serve as proof of the psychological fracture.
                    </p>
                </div>
            </div>
        </section>
    );
}
