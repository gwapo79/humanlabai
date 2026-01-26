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

                <div className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-12 text-left border-t border-white/10 pt-12">

                    <div>
                        <h3 className="text-xs font-mono text-gray-500 mb-6 uppercase tracking-widest">
                            System Directories
                        </h3>
                        <div className="flex flex-col gap-2">
                            <Link href="/" className="text-gray-400 hover:text-white transition-colors font-mono text-sm">
                                [00] ROOT / HOME
                            </Link>
                            <Link href="/projects" className="text-gray-400 hover:text-white transition-colors font-mono text-sm">
                                [01] INDEX / WORK
                            </Link>
                            <Link href="/contact" className="text-gray-400 hover:text-white transition-colors font-mono text-sm">
                                [02] COMMS / CONTACT
                            </Link>
                        </div>
                    </div>

                    <div>
                        <h3 className="text-xs font-mono text-gray-500 mb-6 uppercase tracking-widest">
                            Legal Protocols
                        </h3>
                        <div className="flex flex-col gap-2">
                            <span className="text-gray-600 font-mono text-sm cursor-not-allowed">Terms of Simulation</span>
                            <span className="text-gray-600 font-mono text-sm cursor-not-allowed">Privacy Log</span>
                        </div>
                    </div>

                    <div className="md:text-right">
                        <h3 className="text-xs font-mono text-gray-500 mb-6 uppercase tracking-widest">
                            System Stamp
                        </h3>
                        <p className="text-gray-600 font-mono text-xs">
                            © 2024 HUMANLAB AI.<br />
                            LUMINA VER 3.0
                        </p>
                    </div>

                </div>

            </div>
        </section>
    );
}
