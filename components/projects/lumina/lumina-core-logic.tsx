"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function LuminaCoreLogic() {
    return (
        <section className="bg-black text-white py-24 border-t border-white/10">
            <div className="container mx-auto px-4 max-w-6xl text-center">

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="space-y-6"
                >
                    <div className="inline-block px-4 py-1 border border-red-500/50 rounded-full bg-red-900/10 mb-8">
                        <span className="text-xs font-mono text-red-500 tracking-widest animate-pulse">
                            SYSTEM_STATUS: STANDBY
                        </span>
                    </div>

                    <h2 className="text-4xl md:text-6xl font-bold tracking-tighter">
                        PROCESS TERMINATED.
                    </h2>

                    <p className="text-gray-500 font-mono text-sm md:text-base max-w-lg mx-auto">
                        The emotional system has ceased output. <br />
                        All threads verified.
                    </p>
                </motion.div>

                <div className="mt-24 border-t border-white/10 pt-12">
                    {/* Footer content removed as per request */}
                </div>

            </div>
        </section>
    );
}
