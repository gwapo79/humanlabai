"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Play } from "lucide-react";

export function Section3Solution() {
    return (
        <section className="h-screen relative flex items-center justify-center overflow-hidden bg-black">

            {/* Background Image: Night Studio - Dark Premium */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/solution-dark-studio.png"
                    alt="Professional Night Studio Workspace"
                    fill
                    className="object-cover"
                    priority
                    unoptimized
                />

                {/* Directive: Must use bg-black/60 for text readability */}
                <div className="absolute inset-0 bg-black/60 z-10" />
                {/* Vignette for focus */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.8)_100%)] z-10" />
            </div>

            {/* Content Overlay */}
            <div className="container mx-auto px-4 z-10 relative flex items-center justify-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="max-w-5xl mx-auto text-center"
                >
                    <h2 className="text-4xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400 mb-8">
                        기술은 우리가 다룹니다.<br /> 결과만 가져가십시오.
                    </h2>

                    <p className="text-xl md:text-3xl text-white mb-12 leading-relaxed font-light">
                        HumanLab AI는 단순한 자동화 툴이 아닙니다.<br />
                        <strong className="text-blue-400">검증된 기획자</strong>와 <strong className="text-emerald-400">디자이너</strong>가 최신 AI 기술을 통제하여 최적의 결과물을 설계합니다.
                    </p>

                    {/* Holographic Service Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left mb-16">
                        {/* Column 1: BRANDING */}
                        <div className="bg-slate-900/40 backdrop-blur-md rounded-2xl p-6 border border-white/10 hover:border-blue-400/50 transition-colors group">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="p-3 bg-blue-500/10 rounded-lg text-blue-400 group-hover:bg-blue-500/20 transition-colors">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>
                                </div>
                                <h3 className="text-xl font-bold text-white tracking-wider">BRANDING</h3>
                            </div>
                            <ul className="space-y-3 text-gray-300 font-light text-sm md:text-base">
                                <li className="flex items-start gap-2">
                                    <span className="text-blue-500 mt-1">✓</span> 브랜드 웹사이트 & 랜딩페이지
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-blue-500 mt-1">✓</span> 브랜드 캐릭터 개발 및 세계관 구축
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-blue-500 mt-1">✓</span> 로고(BI/CI) 및 패키지 디자인
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-blue-500 mt-1">✓</span> 스마트스토어/자사몰 세팅
                                </li>
                            </ul>
                        </div>

                        {/* Column 2: CREATIVE */}
                        <div className="bg-slate-900/40 backdrop-blur-md rounded-2xl p-6 border border-white/10 hover:border-emerald-400/50 transition-colors group">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="p-3 bg-emerald-500/10 rounded-lg text-emerald-400 group-hover:bg-emerald-500/20 transition-colors">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" /><polyline points="14 2 14 8 20 8" /></svg>
                                </div>
                                <h3 className="text-xl font-bold text-white tracking-wider">CREATIVE</h3>
                            </div>
                            <ul className="space-y-3 text-gray-300 font-light text-sm md:text-base">
                                <li className="flex items-start gap-2">
                                    <span className="text-emerald-500 mt-1">✓</span> AI 제품 촬영 (스튜디오/연출컷)
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-emerald-500 mt-1">✓</span> 홍보 영상 & 숏폼(Reels) 제작
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-emerald-500 mt-1">✓</span> 상세페이지 기획 및 디자인
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-emerald-500 mt-1">✓</span> AI 성우/음원/BGM 생성
                                </li>
                            </ul>
                        </div>

                        {/* Column 3: MARKETING */}
                        <div className="bg-slate-900/40 backdrop-blur-md rounded-2xl p-6 border border-white/10 hover:border-purple-400/50 transition-colors group">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="p-3 bg-purple-500/10 rounded-lg text-purple-400 group-hover:bg-purple-500/20 transition-colors">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><line x1="2" y1="12" x2="22" y2="12" /><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" /></svg>
                                </div>
                                <h3 className="text-xl font-bold text-white tracking-wider">MARKETING</h3>
                            </div>
                            <ul className="space-y-3 text-gray-300 font-light text-sm md:text-base">
                                <li className="flex items-start gap-2">
                                    <span className="text-purple-500 mt-1">✓</span> 유튜브·인스타·블로그 채널 운영
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-purple-500 mt-1">✓</span> 체험단/기자단 및 리뷰 관리
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-purple-500 mt-1">✓</span> 퍼포먼스 광고 집행 (SNS/검색)
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-purple-500 mt-1">✓</span> 플레이스 SEO 및 바이럴 마케팅
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Closing Statement */}
                    <p className="text-xl md:text-2xl text-white font-medium">
                        복잡한 계약 절차 없이, <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400 font-bold">구독 하나로 이 모든 팀을 소유하세요.</span>
                    </p>
                </motion.div>
            </div>

        </section>
    );
}
