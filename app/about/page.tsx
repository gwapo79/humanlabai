"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function AboutPage() {
    return (
        <div className="min-h-screen bg-black">
            {/* Intro Hero */}
            <section className="relative py-32 px-4 border-b border-white/10">
                <div className="container mx-auto max-w-4xl text-center space-y-8">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-5xl md:text-8xl font-bold tracking-tighter text-white"
                    >
                        WE ARE<br />
                        <span className="text-gray-500">OPERATORS.</span>
                    </motion.h1>
                    <p className="text-xl md:text-2xl text-gray-400 leading-relaxed">
                        HumanLab AI는 '창작'에서 멈추지 않습니다.<br />
                        우리는 '지속 가능성'에 집착합니다.
                    </p>
                </div>
            </section>

            {/* Philosophy Section */}
            <section className="py-24 px-4 bg-zinc-950">
                <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                    <div className="space-y-6">
                        <h2 className="text-3xl font-bold text-white">Why "Operation"?</h2>
                        <div className="w-12 h-1 bg-white mb-6"></div>
                        <p className="text-gray-400 text-lg leading-relaxed">
                            대부분의 AI 기업은 이미지를 만드는 '도구'를 팝니다.<br />
                            대부분의 광고 대행사는 단발성 '캠페인'을 팝니다.<br /><br />
                            하지만 브랜드는 일회성 이벤트로 생존할 수 없습니다. 매일의 습관으로 살아남습니다.
                            우리는 <span className="text-white font-bold">"브랜딩의 지속 가능성"</span>을 해결하기 위해 이 팀을 만들었습니다.
                        </p>
                    </div>
                    <div className="aspect-square bg-zinc-900 rounded-2xl border border-white/5 flex items-center justify-center relative overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 to-transparent"></div>
                        <div className="text-center space-y-2 z-10">
                            <div className="text-6xl font-bold text-white">365</div>
                            <div className="text-sm text-gray-500 tracking-widest uppercase">Days Operation</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Team / Lab Identity */}
            <section className="py-24 px-4 container mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-white mb-4">The Laboratory</h2>
                    <p className="text-gray-400">공학(Engineering)과 감성(Emotion)이 만나는 곳.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="p-8 border border-white/10 rounded-2xl hover:bg-white/5 transition-colors">
                        <div className="h-12 w-12 rounded bg-blue-900/30 text-blue-400 flex items-center justify-center font-bold mb-6">01</div>
                        <h3 className="text-xl font-bold text-white mb-3">Tech Pipeline</h3>
                        <p className="text-gray-500 text-sm">제작 시간을 90% 단축시키는 자동화 렌더링 파이프라인.</p>
                    </div>
                    <div className="p-8 border border-white/10 rounded-2xl hover:bg-white/5 transition-colors">
                        <div className="h-12 w-12 rounded bg-purple-900/30 text-purple-400 flex items-center justify-center font-bold mb-6">02</div>
                        <h3 className="text-xl font-bold text-white mb-3">Character IP</h3>
                        <p className="text-gray-500 text-sm">스스로 팬덤과 역사를 만들어가는 '살아있는' 존재 구축.</p>
                    </div>
                    <div className="p-8 border border-white/10 rounded-2xl hover:bg-white/5 transition-colors">
                        <div className="h-12 w-12 rounded bg-green-900/30 text-green-400 flex items-center justify-center font-bold mb-6">03</div>
                        <h3 className="text-xl font-bold text-white mb-3">Real-world Ops</h3>
                        <p className="text-gray-500 text-sm">디지털에 갇혀있지 않습니다. 오프라인 팝업과 실물 광고까지 직접 실행합니다.</p>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-24 border-t border-white/10 text-center">
                <h2 className="text-3xl font-bold text-white mb-8">Join our experiment.</h2>
                <Link href="/contact">
                    <Button size="lg" className="rounded-full bg-white text-black hover:bg-gray-200 px-8">
                        문의하기 <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                </Link>
            </section>
        </div>
    );
}
