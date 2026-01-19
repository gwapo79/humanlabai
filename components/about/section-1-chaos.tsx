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
                        최고의 팀을 채용하는<br />
                        가장 합리적인 방법
                    </h2>
                    <p className="text-xl md:text-2xl text-gray-200 leading-relaxed font-light break-keep">
                        마케터, 디자이너, 개발자... 비즈니스 확장에 필요한 전문 인력, 직접 채용하고 관리하기엔 리스크가 큽니다.<br className="hidden md:block" />
                        대표님은 비즈니스의 <strong>'본질'</strong>에만 집중하십시오. 나머지 실행은 HumanLab AI가 전담합니다.
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
