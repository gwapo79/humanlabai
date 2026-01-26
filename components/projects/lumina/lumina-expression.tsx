"use client";

import { motion } from "framer-motion";
import { Play } from "lucide-react";

const TRACKS = [
    { num: "01", title: "IMAGE", subtitle: "Freezes the dominant state." },
    { num: "02", title: "MUSIC", subtitle: "Expresses internal rhythm." },
    { num: "03", title: "VIDEO", subtitle: "Shows state transitions." },
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
                    <h5 className="text-sm font-mono text-gray-500 tracking-widest mb-4">ARCHIVED OUTPUTS</h5>
                    <h2 className="text-5xl md:text-7xl font-bold text-white tracking-tighter uppercase">
                        RESULT ARCHIVE
                    </h2>
                    <p className="mt-4 text-gray-400">
                        Content is not produced. It is extracted from the states.
                    </p>
                </motion.div>

                <div className="space-y-16">
                    {/* IMAGE CATEGORY */}
                    <div>
                        <h3 className="text-xl font-bold text-white mb-6 border-l-2 border-white/20 pl-4">01. IMAGE</h3>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <ArchiveCard type="Images" title="Concept Jacket" label="VISUAL_01" />
                            <ArchiveCard type="Images" title="State Texture" label="VISUAL_02" />
                            <ArchiveCard type="Images" title="Fragments" label="VISUAL_03" />
                        </div>
                    </div>

                    {/* MUSIC CATEGORY */}
                    <div>
                        <h3 className="text-xl font-bold text-white mb-6 border-l-2 border-white/20 pl-4">02. MUSIC</h3>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <ArchiveCard type="Audio" title="Main Theme" label="AUDIO_01" />
                            <ArchiveCard type="Audio" title="Sia's Theme" label="AUDIO_02" />
                        </div>
                    </div>

                    {/* VIDEO CATEGORY */}
                    <div>
                        <h3 className="text-xl font-bold text-white mb-6 border-l-2 border-white/20 pl-4">03. VIDEO</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <ArchiveCard type="Video" title="Concept Teaser" label="FILM_01" wide />
                            <ArchiveCard type="Video" title="Performance Clip" label="FILM_02" wide />
                        </div>
                    </div>
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

function ArchiveCard({ type, title, label, wide }: { type: string, title: string, label: string, wide?: boolean }) {
    // Random mock metadata for "realism"
    const size = (Math.random() * 50 + 10).toFixed(1) + "MB";
    const duration = "0" + Math.floor(Math.random() * 5) + ":" + Math.floor(Math.random() * 60).toString().padStart(2, '0');

    return (
        <div className={`bg-zinc-900 border border-white/5 hover:border-humanlab-neon/30 transition-all group p-6 ${wide ? 'aspect-video' : 'aspect-square'} flex flex-col justify-between relative overflow-hidden`}>

            {/* Hover Scan Effect */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/5 to-transparent translate-y-[-100%] group-hover:translate-y-[100%] transition-transform duration-700 ease-in-out pointer-events-none" />

            <div className="flex justify-between items-start z-10">
                <span className="text-[10px] font-mono text-gray-500 border border-white/10 px-1.5 py-0.5 rounded group-hover:text-humanlab-neon group-hover:border-humanlab-neon/30 transition-colors">
                    {label}.{type.toLowerCase().slice(0, 3)}
                </span>
                <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-white/20 transition-colors">
                    {type === "Video" || type === "Audio" ? <Play className="w-3 h-3 text-white fill-current" /> : <div className="w-2 h-2 bg-white/50 rounded-full" />}
                </div>
            </div>

            <div className="z-10">
                <span className="text-[10px] text-gray-600 uppercase tracking-widest block mb-1 font-mono">
                    {type === "Video" || type === "Audio" ? duration : size}
                </span>
                <h4 className="text-xl font-bold text-gray-300 group-hover:text-white transition-colors leading-none">{title}</h4>
            </div>
        </div>
    );
}
