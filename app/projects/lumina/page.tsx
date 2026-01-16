"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowUpRight, Instagram, Youtube } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function LuminaPage() {
    return (
        <div className="min-h-screen bg-black text-white">

            {/* 1. HERO SECTION */}
            <section className="relative h-screen w-full overflow-hidden">
                {/* Background Image */}
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/lumina/lum1.png"
                        alt="LUMINA Hero"
                        fill
                        className="object-cover object-top opacity-60"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black" />
                </div>

                {/* Content */}
                <div className="relative z-10 container mx-auto px-4 h-full flex flex-col justify-end pb-32">
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="flex items-center gap-4 mb-6">
                            <span className="bg-white text-black text-xs font-bold px-3 py-1 rounded-full tracking-widest">
                                METAHUMAN ARTIST
                            </span>
                            <span className="text-gray-400 font-mono text-sm">EST. 2024</span>
                        </div>
                        <h1 className="text-7xl md:text-9xl font-bold tracking-tighter mb-6 leading-none">
                            LUMINA
                        </h1>
                        <p className="text-xl md:text-2xl text-gray-300 max-w-2xl leading-relaxed">
                            경계를 허무는 디지털 뮤즈.<br />
                            LUMINA는 가상과 현실 사이에서 가장 완벽한 아름다움을 탐구합니다.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* 2. PROFILE & BIO */}
            <section className="py-32 container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-16 items-center">
                    <div className="md:col-span-5 relative aspect-[3/4] rounded-2xl overflow-hidden grayscale hover:grayscale-0 transition-all duration-700">
                        <Image
                            src="/lumina/lum2.png"
                            alt="LUMINA Portrait"
                            fill
                            className="object-cover"
                        />
                    </div>
                    <div className="md:col-span-1"></div>
                    <div className="md:col-span-6 space-y-12">
                        <div className="space-y-6">
                            <h2 className="text-4xl md:text-6xl font-bold tracking-tight">
                                "I AM NOT A RENDER.<br />I AM A STATEMENT."
                            </h2>
                            <p className="text-gray-400 text-lg leading-relaxed">
                                루미나는 단순한 3D 모델링이 아닙니다. 그녀는 서울을 기반으로 활동하며,
                                패션, 음악, 그리고 서브컬처를 사랑하는 22세의 크리에이터입니다.
                                <br /><br />
                                완벽한 비율과 감각적인 스타일링, 그리고 AI로 구현된 자연스러운 움직임.
                                루미나는 브랜드가 원하는 '가장 이상적인 앰버서더'의 모습을 하고 있습니다.
                            </p>
                        </div>

                        <div className="grid grid-cols-2 gap-8 border-t border-white/10 pt-8">
                            <div>
                                <h4 className="text-gray-500 font-bold mb-2 text-sm">HEIGHT</h4>
                                <p className="text-2xl font-mono">172cm</p>
                            </div>
                            <div>
                                <h4 className="text-gray-500 font-bold mb-2 text-sm">STYLE</h4>
                                <p className="text-2xl font-mono">Street / High-end</p>
                            </div>
                            <div>
                                <h4 className="text-gray-500 font-bold mb-2 text-sm">PERSONALITY</h4>
                                <p className="text-2xl font-mono">Chic & Free</p>
                            </div>
                            <div>
                                <h4 className="text-gray-500 font-bold mb-2 text-sm">INTERESTS</h4>
                                <p className="text-2xl font-mono">Fashion, DJing</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. FASHION SHOWCASE (MASONRY LOOK) */}
            <section className="py-32 bg-zinc-950">
                <div className="container mx-auto px-4 mb-24 text-center">
                    <h2 className="text-4xl font-bold mb-6">LOOKBOOK</h2>
                    <p className="text-gray-400">Digital Fashion Week 2025 Collection</p>
                </div>

                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {/* Image 3 */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="space-y-4"
                        >
                            <div className="relative aspect-[4/5] rounded-xl overflow-hidden">
                                <Image src="/lumina/lum3.jpg" alt="Fashion 1" fill className="object-cover hover:scale-105 transition-transform duration-700" />
                            </div>
                            <div className="flex justify-between items-center text-sm">
                                <span className="text-white font-bold">BROWN LEATHER MOOD</span>
                                <span className="text-gray-500">FW 2024</span>
                            </div>
                        </motion.div>

                        {/* Image 4 */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="space-y-4 lg:mt-24"
                        >
                            <div className="relative aspect-[4/5] rounded-xl overflow-hidden">
                                <Image src="/lumina/lum4.jpg" alt="Fashion 2" fill className="object-cover hover:scale-105 transition-transform duration-700" />
                            </div>
                            <div className="flex justify-between items-center text-sm">
                                <span className="text-white font-bold">ALL BLACK CHIC</span>
                                <span className="text-gray-500">Street Snap</span>
                            </div>
                        </motion.div>

                        {/* Image 5 */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.4 }}
                            className="space-y-4"
                        >
                            <div className="relative aspect-[4/5] rounded-xl overflow-hidden">
                                <Image src="/lumina/lum5.jpg" alt="Fashion 3" fill className="object-cover hover:scale-105 transition-transform duration-700" />
                            </div>
                            <div className="flex justify-between items-center text-sm">
                                <span className="text-white font-bold">Y2K VIBES</span>
                                <span className="text-gray-500">Editorial</span>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* 4. REAL-TIME TECH */}
            <section className="py-32 container mx-auto px-4 text-center">
                <div className="max-w-4xl mx-auto border border-white/10 bg-white/5 rounded-3xl p-12 md:p-24 relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-green-500 to-transparent opacity-50"></div>

                    <h2 className="text-3xl md:text-5xl font-bold mb-8">
                        "She never sleeps."
                    </h2>
                    <p className="text-xl text-gray-400 mb-12 leading-relaxed">
                        HumanLab AI의 실시간 렌더링 파이프라인으로,<br />
                        루미나는 365일 24시간 언제든 콘텐츠를 생산할 수 있습니다.<br />
                        촬영 스케줄도, 컨디션 난조도 없습니다.
                    </p>

                    <div className="flex justify-center gap-6">
                        <Button className="rounded-full bg-white text-black hover:bg-gray-200 px-8 h-12 text-lg font-bold">
                            협업 문의하기
                        </Button>
                        <Button variant="outline" className="rounded-full border-white/20 text-white hover:bg-white/10 px-8 h-12 text-lg">
                            <Instagram className="w-5 h-5 mr-2" /> Follow Lumina
                        </Button>
                    </div>
                </div>
            </section>

            {/* Footer Navigation */}
            <div className="container mx-auto px-4 pb-12">
                <Link href="/projects" className="inline-flex items-center text-gray-500 hover:text-white transition-colors">
                    <ArrowLeft className="w-4 h-4 mr-2" /> Back to Projects
                </Link>
            </div>

        </div>
    )
}
