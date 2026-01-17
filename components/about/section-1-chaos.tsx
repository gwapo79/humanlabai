"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export function Section1Chaos() {
    return (
        <section className="min-h-screen bg-black flex flex-col items-center justify-center overflow-hidden relative">

            {/* Background Texture with Glitch/Shake */}
            {/* Background Texture with Glitch/Shake */}
            {/* Background Image: Hyper-Realistic Office Chaos */}
            <motion.div
                className="absolute inset-0 z-0"
                initial={{ scale: 1.05 }}
                animate={{ scale: 1 }}
                transition={{ duration: 10, repeat: Infinity, repeatType: "reverse" }}
            >
                <Image
                    src="/photo-sme-overload.png"
                    alt="Sophisticated Management Overload"
                    fill
                    className="object-cover opacity-80"
                    priority
                    unoptimized
                />
                {/* Overlay: Cinematic Warm/Dark Gradient for text readability */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-black/80"></div>
            </motion.div>

            {/* Content Header */}
            <div className="relative z-10 w-full max-w-7xl mx-auto px-4 h-full flex flex-col justify-center items-center text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="max-w-4xl"
                >
                    <h2 className="text-4xl md:text-6xl font-bold text-white mb-8 tracking-tight leading-tight">
                        직원 뽑기엔 부담스럽고,<br />
                        직접 하자니 막막하지 않으신가요?
                    </h2>
                    <p className="text-xl md:text-2xl text-gray-200 leading-relaxed font-light break-keep">
                        마케터, 디자이너, 대행사... 챙겨야 할 건 너무 많은데 인건비와 관리 비용은 계속 오릅니다.<br className="hidden md:block" />
                        사장님은 <strong>'장사'</strong>만 하기에도 시간이 부족합니다.
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
