"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export function Section1Chaos() {
    return (
        <section className="min-h-screen bg-black flex flex-col items-center justify-center overflow-hidden relative">

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
                    className="max-w-5xl"
                >
                    {/* 메인 제목: 묵직하고 신뢰감 있는 타이포그래피 */}
                    <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-10 tracking-tighter leading-tight">
                        결정적 기획은 <span className="text-humanlab-neon">'사람'</span>이 하고,<br />
                        압도적 속도는 <span className="text-humanlab-neon">'AI'</span>가 만듭니다.
                    </h2>

                    {/* 본문: 강조 포인트 시각화 */}
                    <p className="text-xl md:text-2xl text-gray-200 leading-relaxed font-light break-keep max-w-4xl mx-auto">
                        세상의 모든 AI 도구를 써봐도 결국 중요한 건{" "}
                        <strong className="font-semibold text-white">'누가 지휘하느냐'</strong>입니다.
                        <br className="hidden md:block" />
                        HumanLab AI는 전문가의 날카로운 기획에 AI의 폭발적인 생산력을 결합했습니다.
                        <br className="hidden lg:block" />
                        <span className="block mt-4 text-humanlab-neon font-semibold text-2xl md:text-3xl">
                            시행착오는 0으로, 결과물은 전문가 급으로.
                        </span>
                        <span className="block mt-2 text-white font-medium">
                            비즈니스의 속도를 바꾸십시오.
                        </span>
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
