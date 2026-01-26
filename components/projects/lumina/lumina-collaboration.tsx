"use client";

import { motion } from "framer-motion";

export default function LuminaCollaboration() {
    return (
        <section className="min-h-screen bg-white text-black py-32">
            <div className="container mx-auto px-4 max-w-6xl">

                {/* Header */}
                <div className="mb-24">
                    <span className="text-xs font-mono text-gray-500 tracking-widest uppercase block mb-4">
                        Section 06 : Collaboration
                    </span>
                    <h2 className="text-5xl md:text-7xl font-bold tracking-tighter max-w-4xl">
                        Brands don’t collaborate with faces.<br />
                        They collaborate with <span className="text-purple-600">emotional systems.</span>
                    </h2>
                </div>

                {/* Connection Matrix */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <CollaborationCard
                        title="FASHION"
                        target="CONTROL / SIA"
                        desc="Structured, minimal, defensive armor."
                        brands={["Luxury", "Tailoring", "Monochrome"]}
                    />
                    <CollaborationCard
                        title="LIFESTYLE"
                        target="SENSITIVITY / HAYEON"
                        desc="Comfort, healing, soft textures."
                        brands={["Wellness", "Home", "Scent"]}
                    />
                    <CollaborationCard
                        title="TECH & SPORT"
                        target="ESCAPE / LUNA"
                        desc="Speed, performance, durability."
                        brands={["Mobility", "Activewear", "Energy"]}
                    />
                </div>

                {/* Closing Statement */}
                <div className="mt-48 pt-24 border-t border-gray-200 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <p className="text-xl md:text-3xl text-gray-500 font-light mb-6 font-serif italic">
                            "This page should feel like observing a fractured mind,<br />
                            not browsing characters."
                        </p>

                        <div className="inline-block mt-8 px-6 py-3 bg-black text-white rounded-full text-sm font-bold tracking-widest">
                            ENTER THE SYSTEM
                        </div>
                    </motion.div>
                </div>

            </div>
        </section>
    );
}

function CollaborationCard({ title, target, desc, brands }: any) {
    return (
        <div className="border border-gray-200 p-8 hover:border-black transition-colors group">
            <h3 className="text-sm font-bold text-gray-400 mb-8 tracking-widest">{title}</h3>

            <div className="mb-6">
                <span className="text-xs text-purple-600 font-mono uppercase block mb-1">Connects to</span>
                <h4 className="text-2xl font-bold">{target}</h4>
            </div>

            <p className="text-gray-600 mb-8 border-l-2 border-gray-100 pl-4 group-hover:border-black transition-colors">
                "{desc}"
            </p>

            <div className="flex flex-wrap gap-2">
                {brands.map((b: string) => (
                    <span key={b} className="text-xs font-mono bg-gray-100 px-2 py-1 rounded text-gray-600">
                        {b}
                    </span>
                ))}
            </div>
        </div>
    );
}
