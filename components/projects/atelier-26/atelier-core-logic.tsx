"use client";

import { motion } from "framer-motion";

export default function AtelierCoreLogic() {
    return (
        <section className="bg-black text-white py-24 border-t border-white/10">
            <div className="container mx-auto px-4 max-w-6xl text-center">

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="space-y-6"
                >
                    <div className="inline-block px-4 py-1 border border-blue-500/50 rounded-full bg-blue-900/10 mb-8">
                        <span className="text-xs font-mono text-blue-500 tracking-widest animate-pulse">
                            PHILOSOPHY: SYNCED
                        </span>
                    </div>

                    <h2 className="text-3xl md:text-5xl font-bold tracking-tighter">
                        Coexistence in Chaos
                    </h2>

                    <p className="text-gray-500 font-mono text-sm md:text-base max-w-lg mx-auto mt-4">
                        "We take care of each other (sometimes we annoy each other)."
                        <br />
                        <span className="text-white mt-2 block">ATELIER 26</span>
                    </p>
                </motion.div>

                <div className="mt-24 border-t border-white/10 pt-12">
                    {/* Footer content removed to match Lumina */}
                </div>

            </div>
        </section>
    );
}
