"use client";

import { Button } from "@/components/ui/button";
import { Check, ArrowRight } from "lucide-react";

const plans = [
    {
        name: "ESSENTIAL",
        target: "소규모 로컬 브랜드",
        price: "월 150만원~",
        features: [
            "주간 SNS 콘텐츠 (숏폼 4개)",
            "데일리 댓글/DM 관리",
            "월간 성과 분석 보고서",
            "기본 AI 페르소나 1종 제공",
        ],
        cta: "기본 운영 시작하기",
    },
    {
        name: "GROWTH",
        target: "이커머스 & 스타트업",
        price: "월 450만원~",
        highlight: true,
        features: [
            "데일리 SNS 콘텐츠 (월 20개+)",
            "퍼포먼스 마케팅 소재 제작 (A/B 테스트)",
            "365일 실시간 댓글 대응",
            "전담 휴먼 매니저 배정",
            "커스텀 3D/AI 캐릭터 제작",
        ],
        cta: "브랜드 성장시키기",
    },
    {
        name: "ENTERPRISE",
        target: "중견/대기업",
        price: "별도 협의",
        features: [
            "전용 IP 캐릭터 개발",
            "글로벌(영미권/일본) 채널 운영",
            "오프라인 팝업/행사 지원",
            "무제한 크리에이티브 에셋",
        ],
        cta: "도입 문의하기",
    },
];

export default function ServicesPage() {
    return (
        <div className="min-h-screen bg-black pt-32 pb-24">

            {/* Services Header */}
            <div className="container mx-auto px-4 text-center mb-24 max-w-3xl">
                <h1 className="text-5xl md:text-7xl font-bold tracking-tighter text-white mb-8">
                    WE SELL <br />
                    <span className="text-gray-500">PEACE OF MIND.</span>
                </h1>
                <p className="text-xl text-gray-300 leading-relaxed">
                    "내일은 또 뭐 올리지?" 더 이상 고민하지 마세요.<br />
                    HumanLab AI가 당신의 브랜드 운영을 전담합니다.
                </p>
            </div>

            {/* Pricing Tables */}
            <div className="container mx-auto px-4 mb-32">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {plans.map((plan, i) => (
                        <div
                            key={i}
                            className={`relative p-8 rounded-2xl border flex flex-col ${plan.highlight
                                ? "bg-white/5 border-white shadow-2xl shadow-white/10 scale-105 z-10"
                                : "bg-black border-white/10 hover:border-white/30"
                                }`}
                        >
                            {plan.highlight && (
                                <div className="absolute top-0 right-0 left-0 -mt-4 flex justify-center">
                                    <span className="bg-white text-black text-xs font-bold px-3 py-1 rounded-full uppercase tracking-widest">
                                        Most Popular
                                    </span>
                                </div>
                            )}

                            <div className="mb-8">
                                <h3 className="text-sm font-bold text-gray-500 tracking-widest uppercase mb-2">{plan.target}</h3>
                                <h2 className="text-3xl font-bold text-white mb-2">{plan.name}</h2>
                                <div className="text-lg text-gray-400">{plan.price}</div>
                            </div>

                            <ul className="space-y-4 mb-12 flex-1">
                                {plan.features.map(feature => (
                                    <li key={feature} className="flex items-start gap-3 text-sm text-gray-300">
                                        <Check className="w-5 h-5 text-green-500 shrink-0" />
                                        {feature}
                                    </li>
                                ))}
                            </ul>

                            <Button className={`w-full rounded-full h-12 font-bold text-lg ${plan.highlight ? "bg-white text-black hover:bg-gray-200" : "bg-white/10 text-white hover:bg-white/20"}`}>
                                {plan.cta}
                            </Button>
                        </div>
                    ))}
                </div>
            </div>

            {/* FAQ / Process */}
            <div className="bg-zinc-900 border-y border-white/10 py-24">
                <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-16">
                    <div>
                        <h2 className="text-4xl font-bold text-white mb-6">How it works</h2>
                        <p className="text-gray-400 text-lg mb-8">
                            단순히 파일만 납품하지 않습니다. 우리는 당신의 운영 팀이 됩니다.
                        </p>
                        <Button variant="link" className="text-white p-0 text-lg">
                            운영 가이드 전체보기 <ArrowRight className="ml-2 w-5 h-5" />
                        </Button>
                    </div>
                    <div className="space-y-8">
                        <div className="flex gap-4">
                            <div className="w-12 h-12 rounded bg-black border border-white/10 flex items-center justify-center font-bold text-white text-xl">1</div>
                            <div>
                                <h3 className="text-xl font-bold text-white mb-2">Setup & Onboarding</h3>
                                <p className="text-gray-500">브랜드를 분석하고 초기 캐릭터 페르소나 로직을 설계합니다.</p>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <div className="w-12 h-12 rounded bg-black border border-white/10 flex items-center justify-center font-bold text-white text-xl">2</div>
                            <div>
                                <h3 className="text-xl font-bold text-white mb-2">Content Production</h3>
                                <p className="text-gray-500">AI 파이프라인을 통해 매일/매주 고퀄리티 에셋을 생성합니다.</p>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <div className="w-12 h-12 rounded bg-black border border-white/10 flex items-center justify-center font-bold text-white text-xl">3</div>
                            <div>
                                <h3 className="text-xl font-bold text-white mb-2">Operation & Optimize</h3>
                                <p className="text-gray-500">업로드, 댓글 대응, 성과 분석까지. 대표님은 보고서만 확인하세요.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
