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
                        시작과 끝은 '사람'이,<br />
                        그 사이의 속도는 'AI'가 채웁니다.
                    </h2>
                    <p className="text-xl md:text-2xl text-gray-200 leading-relaxed font-light break-keep">
                        AI 툴 구독료와 프롬프트 학습에 시간을 낭비하지 마세요.<br className="hidden md:block" />
                        HumanLab AI는 기업에 딱 맞는 <strong className="font-bold text-humanlab-neon">'기획(Kick)'</strong>과 검증된 <strong className="font-bold text-humanlab-neon">'퀄리티'</strong>만 남기고,<br className="hidden md:block" />
                        복잡하고 비싼 제작 과정은 AI로 압축하여 가장 합리적인 결과를 드립니다.
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
