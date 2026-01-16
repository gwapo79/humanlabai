"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

// Mock Data
const experiments = [
    {
        id: 1,
        category: "TECH",
        date: "2026.01.10",
        title: "커스텀 셰이더를 활용한 렌더링 시간 50% 단축",
        summary: "LUMINA의 피부 질감 최적화를 위해 수행한 기술적 연구 과정과 결과.",
        tags: ["RENDERING", "UNITY", "OPTIMIZATION"]
    },
    {
        id: 2,
        category: "INSIGHT",
        date: "2026.01.05",
        title: "버추얼 인플루언서가 실패하는 이유 (그리고 해결책)",
        summary: "'불쾌한 골짜기'만이 문제가 아닙니다. 진짜 문제는 '불쾌한 행동(Uncanny Behavior)'입니다.",
        tags: ["STRATEGY", "IP"]
    },
    {
        id: 3,
        category: "PROTOTYPE",
        date: "2025.12.28",
        title: "Project 'Echo': 음성 합성 테스트 001",
        summary: "실시간 방송을 위한 다중 감정 표현 TTS 모델 테스트.",
        tags: ["AI VOICE", "R&D"]
    },
    {
        id: 4,
        category: "TECH",
        date: "2025.12.15",
        title: "API를 활용한 인스타그램 업로드 자동화",
        summary: "SNS 운영을 위한 헤드리스(Headless) CMS 구축기.",
        tags: ["AUTOMATION", "DEV"]
    }
];

export default function LabPage() {
    return (
        <div className="min-h-screen bg-black pt-32 pb-24">
            <div className="container mx-auto px-4">

                {/* Header */}
                <div className="mb-20 text-center max-w-2xl mx-auto space-y-6">
                    <h1 className="text-5xl font-bold tracking-tighter text-white">
                        LAB NOTES
                    </h1>
                    <p className="text-gray-400">
                        실험, 실패, 그리고 발견.<br />
                        더 나은 가상 존재를 만들기 위한 우리의 연구 기록입니다.
                    </p>
                </div>

                {/* Board Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {experiments.map((exp, i) => (
                        <Link key={exp.id} href={`/lab/${exp.id}`}>
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="group p-8 rounded-2xl border border-white/10 bg-zinc-900/50 hover:bg-zinc-900 transition-colors h-full flex flex-col"
                            >
                                <div className="flex justify-between items-start mb-6">
                                    <span className="text-xs font-bold text-green-500 tracking-widest border border-green-500/20 px-2 py-1 rounded bg-green-500/5">
                                        {exp.category}
                                    </span>
                                    <span className="text-xs font-mono text-gray-500">{exp.date}</span>
                                </div>

                                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-gray-200 transition-colors">
                                    {exp.title}
                                </h3>
                                <p className="text-gray-400 text-sm leading-relaxed mb-6 flex-1">
                                    {exp.summary}
                                </p>

                                <div className="flex items-center justify-between pt-6 border-t border-white/5">
                                    <div className="flex gap-2">
                                        {exp.tags.map(tag => (
                                            <span key={tag} className="text-[10px] text-gray-600 font-mono">#{tag}</span>
                                        ))}
                                    </div>
                                    <ArrowUpRight className="w-5 h-5 text-gray-500 group-hover:text-white transition-colors" />
                                </div>
                            </motion.div>
                        </Link>
                    ))}
                </div>

            </div>
        </div>
    );
}
