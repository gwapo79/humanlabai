"use client";

import { motion } from "framer-motion";

export default function LuminaCollaboration() {
    return (
        <section className="min-h-screen bg-white text-black py-32">
            <div className="container mx-auto px-4 max-w-6xl">

                {/* Header */}
                <div className="mb-24">
                    <span className="text-xs font-mono text-gray-500 tracking-widest uppercase block mb-4">
                        SECTION 07 : APPLIED CASES
                    </span>
                    <h2 className="text-5xl md:text-7xl font-bold tracking-tighter max-w-4xl">
                        The System <span className="text-purple-600">integrates</span><br />
                        external functions.
                    </h2>
                </div>

                {/* Process Flow */}
                <div className="flex items-center gap-4 mb-12 text-xs font-mono text-gray-400 uppercase tracking-widest">
                    <span>Brief</span>
                    <span className="text-gray-300">→</span>
                    <span>State Analysis</span>
                    <span className="text-gray-300">→</span>
                    <span className="text-black font-bold">Output</span>
                </div>

                {/* Connection Matrix */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <CollaborationCard
                        title="CASE 01: FASHION"
                        target="CONTROL / SIA"
                        desc="Structure as defense. Minimalist tailoring for emotional containment."
                        brands={["Output: Armor Collection", "Function: Protection"]}
                    />
                    <CollaborationCard
                        title="CASE 02: LIFESTYLE"
                        target="SENSITIVITY / HAYEON"
                        desc="Soft textures for grounding. Scent and touch as recovery mechanisms."
                        brands={["Output: Recovery Kit", "Function: Healing"]}
                    />
                    <CollaborationCard
                        title="CASE 03: PERFORMANCE"
                        target="ESCAPE / LUNA"
                        desc="High-mobility gear. For when the flight response activates."
                        brands={["Output: Velocity Gear", "Function: Motion"]}
                    />
                </div>

                {/* Closing Statement */}
                <div className="mt-48 pt-24 border-t border-gray-200 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <p className="text-xl md:text-3xl text-gray-500 font-light mb-6 font-mono">
                            {">"} New protocols available for integration.
                        </p>

                        <div className="inline-block mt-8 px-6 py-3 bg-black text-white rounded-full text-sm font-bold tracking-widest cursor-pointer hover:bg-gray-900 transition-colors">
                            INITIATE PARTNERSHIP
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
                <span className="text-xs text-purple-600 font-mono uppercase block mb-1">TARGET SYSTEM</span>
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
