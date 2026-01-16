"use client";

import { use, useState } from "react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, Play, Calendar, Share2 } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

// Mock Data for Detail
const projectData: any = {
    lumina: {
        title: "LUMINA",
        tagline: "스스로 활동하는 최초의 AI 아티스트",
        status: "GROWING",
        description: "LUMINA는 단순한 가상 아이돌이 아닙니다. 그녀는 스스로 음악을 작곡하고, 팬들과 실시간으로 소통하며, 그 피드백을 바탕으로 성격을 끊임없이 변화시켜 나가는 살아있는 AI 아티스트입니다.",
        color: "bg-purple-600",
        logs: [
            { date: "2026.01.15", title: "싱글 앨범 'Magnetic' 댄스 커버 공개", year: "2026" },
            { date: "2025.12.20", title: "메타버스 홀 첫 단독 콘서트 'Genesis' 개최", year: "2025" },
            { date: "2025.11.05", title: "'Nike Virtual' 브랜드 앰버서더 선정", year: "2025" },
        ]
    },
    petkage: {
        title: "PETKAGE",
        tagline: "300만 반려인의 친구, 펫키지 마스코트",
        status: "ACTIVE",
        description: "국내 1위 펫 커머스 플랫폼 '펫키지'의 마스코트를 단순 캐릭터에서 '살아있는 반려견' 인플루언서로 리브랜딩했습니다. 매일 반려인들과 소통하며 브랜드의 친밀도를 높입니다.",
        color: "bg-orange-500",
        logs: []
    }
};

export default function ProjectDetail({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = use(params);
    const data = projectData[slug] || projectData["lumina"]; // Fallback to Lumina for demo
    const [activeTab, setActiveTab] = useState("JOURNEY");

    return (
        <div className="min-h-screen bg-black">
            {/* Detail Hero */}
            <section className="relative h-[80vh] flex items-end pb-24 px-4 overflow-hidden">
                <div className={cn("absolute inset-0 opacity-30", data.color)} />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />

                <div className="container mx-auto relative z-10 grid grid-cols-1 md:grid-cols-2 gap-12 items-end">
                    <div className="space-y-6">
                        <Link href="/projects" className="inline-flex items-center text-gray-400 hover:text-white transition-colors mb-4">
                            <ArrowLeft className="w-4 h-4 mr-2" /> 목록으로 돌아가기
                        </Link>

                        <div className="flex items-center gap-4">
                            <div className="bg-white/10 backdrop-blur px-3 py-1 rounded text-xs font-bold text-white border border-white/20">
                                {data.status}
                            </div>
                            <div className="text-gray-400 text-sm font-mono tracking-widest uppercase">
                                PROJECT_ID: {slug.toUpperCase()}
                            </div>
                        </div>

                        <h1 className="text-6xl md:text-8xl font-bold text-white leading-none tracking-tighter">
                            {data.title}
                        </h1>
                        <p className="text-xl md:text-2xl text-gray-300 max-w-lg">
                            {data.tagline}
                        </p>
                    </div>

                    <div className="flex justify-start md:justify-end gap-4 pb-4">
                        <Button size="lg" className="rounded-full h-14 px-8 bg-white text-black hover:bg-gray-200">
                            <Play className="w-5 h-5 mr-2 fill-current" /> 쇼릴 영상 보기
                        </Button>
                        <Button size="lg" variant="outline" className="rounded-full h-14 w-14 p-0 border-white/20 text-white hover:bg-white/10">
                            <Share2 className="w-5 h-5" />
                        </Button>
                    </div>
                </div>
            </section>

            {/* Content Tabs */}
            <section className="border-t border-white/10 sticky top-16 bg-black z-30">
                <div className="container mx-auto px-4">
                    <div className="flex gap-8 overflow-x-auto no-scrollbar">
                        {["JOURNEY", "MEDIA", "STATS"].map(tab => (
                            <button
                                key={tab}
                                onClick={() => setActiveTab(tab)}
                                className={cn(
                                    "py-6 text-sm font-bold tracking-widest border-b-2 transition-colors",
                                    activeTab === tab ? "border-white text-white" : "border-transparent text-gray-500 hover:text-gray-300"
                                )}
                            >
                                {tab}
                            </button>
                        ))}
                    </div>
                </div>
            </section>

            {/* Tab Content */}
            <section className="py-24 px-4 container mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
                    <div className="lg:col-span-2">
                        <AnimatePresence mode="wait">
                            {activeTab === "JOURNEY" && (
                                <motion.div
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -10 }}
                                    className="space-y-12"
                                >
                                    <h3 className="text-2xl font-bold text-white mb-8">Operational Log</h3>

                                    <div className="border-l border-white/10 pl-8 space-y-12 ml-4">
                                        {data.logs.map((log: any, i: number) => (
                                            <div key={i} className="relative">
                                                <div className="absolute -left-[37px] top-1 w-4 h-4 rounded-full bg-zinc-800 border-2 border-zinc-600" />
                                                <span className="text-sm font-mono text-gray-500 block mb-2">{log.date}</span>
                                                <h4 className="text-xl font-bold text-white hover:text-purple-400 transition-colors cursor-pointer">{log.title}</h4>
                                            </div>
                                        ))}
                                        <div className="relative">
                                            <div className="absolute -left-[37px] top-1 w-4 h-4 rounded-full bg-zinc-800 border-2 border-zinc-600" />
                                            <span className="text-sm font-mono text-gray-500 block mb-2">2025.01.01</span>
                                            <h4 className="text-xl font-bold text-white">Project Initialized</h4>
                                        </div>
                                    </div>
                                </motion.div>
                            )}

                            {activeTab === "MEDIA" && (
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    className="text-gray-400 text-center py-24 border border-dashed border-zinc-800 rounded-xl"
                                >
                                    게스트 유저는 미디어 라이브러리에 접근할 수 없습니다.
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>

                    <div className="lg:col-span-1 space-y-8">
                        <div className="p-8 bg-zinc-900/50 rounded-2xl border border-white/5 space-y-6">
                            <h4 className="text-sm font-bold text-gray-400 uppercase tracking-wider">About Entity</h4>
                            <p className="text-gray-300 leading-relaxed">
                                {data.description}
                            </p>
                            <div className="grid grid-cols-2 gap-4 pt-4 border-t border-white/5">
                                <div>
                                    <div className="text-xs text-gray-500 uppercase">Created</div>
                                    <div className="text-white font-mono">2025.01</div>
                                </div>
                                <div>
                                    <div className="text-xs text-gray-500 uppercase">Status</div>
                                    <div className="text-green-400 font-mono">OPERATIONAL</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
