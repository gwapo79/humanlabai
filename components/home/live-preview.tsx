"use client";

import { motion } from "framer-motion";
import { Instagram, Youtube, FileText, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const recentActivities = [
    {
        id: 1,
        source: "Instagram",
        icon: <Instagram className="w-4 h-4" />,
        date: "2 hours ago",
        title: "LUMINA 'Magnetic' 댄스 커버 업로드",
        description: "새로운 숏폼 콘텐츠가 업로드되었습니다. 초기 반응률이 상승 중입니다.",
        tag: "GROWING",
    },
    {
        id: 2,
        source: "System",
        icon: <FileText className="w-4 h-4" />,
        date: "5 hours ago",
        title: "프로젝트 'Petkage' 주간 운영 로그 업데이트",
        description: "주간 성과 보고서가 DB에 아카이빙되었습니다.",
        tag: "ACTIVE",
    },
    {
        id: 3,
        source: "YouTube",
        icon: <Youtube className="w-4 h-4" />,
        date: "1 day ago",
        title: "비하인드: 버추얼 휴먼 리깅(Rigging) 과정",
        description: "새로운 캐릭터의 리깅 작업 과정을 기록했습니다.",
        tag: "DEV",
    },
];

export function LivePreview() {
    return (
        <section className="py-24 bg-zinc-950 border-t border-white/5 relative">
            <div className="container mx-auto px-4">

                <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
                    <div className="space-y-4">
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight">
                            LIVE OPERATION
                        </h2>
                        <p className="text-gray-400 text-base sm:text-lg max-w-lg">
                            우리는 멈춰있지 않습니다. 지금도 일하고 있습니다. <br />
                            캐릭터와 브랜드의 실시간 운영 현황을 확인하세요.
                        </p>
                    </div>
                    <Link href="/live">
                        <Button variant="link" className="text-white text-base sm:text-lg p-0 h-auto hover:text-gray-300">
                            활동 로그 전체보기 <ArrowUpRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5" />
                        </Button>
                    </Link>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

                    {/* Timeline Feed */}
                    <div className="lg:col-span-2 space-y-4 sm:space-y-6">
                        {recentActivities.map((activity, index) => (
                            <motion.div
                                key={activity.id}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="flex gap-4 sm:gap-6 p-4 sm:p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors group cursor-pointer"
                            >
                                <div className="flex-shrink-0 mt-1">
                                    <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-zinc-800 flex items-center justify-center text-white border border-white/10 group-hover:border-white/30 transition-colors">
                                        {activity.icon}
                                    </div>
                                </div>
                                <div className="flex-1 space-y-1 sm:space-y-2">
                                    <div className="flex items-center gap-3">
                                        <span className="text-[10px] sm:text-xs font-mono text-gray-500 uppercase tracking-wider bg-black/50 px-2 py-0.5 rounded">{activity.source}</span>
                                        <span className="text-[10px] sm:text-xs text-gray-500">{activity.date}</span>
                                    </div>
                                    <h3 className="text-lg sm:text-xl font-semibold text-white group-hover:text-primary transition-colors">
                                        {activity.title}
                                    </h3>
                                    <p className="text-gray-400 text-xs sm:text-sm">{activity.description}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Social Snippets / Status Box */}
                    <div className="lg:col-span-1 space-y-6">
                        <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-zinc-900 to-black border border-white/10 h-full flex flex-col justify-between">
                            <div className="space-y-4">
                                <div className="flex items-center justify-between">
                                    <span className="text-xs sm:text-sm font-bold text-gray-400 tracking-widest">CURRENT STATUS</span>
                                    <span className="relative flex h-2.5 w-2.5 sm:h-3 sm:w-3">
                                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                                        <span className="relative inline-flex rounded-full h-full w-full bg-red-500"></span>
                                    </span>
                                </div>
                                <h3 className="text-2xl sm:text-3xl font-bold text-white">
                                    Generating<br />New Assets
                                </h3>
                                <p className="text-gray-400 text-xs sm:text-sm">
                                    현재 서버에서 'LUMINA' 프로젝트를 위한<br />
                                    3D 모션 데이터를 렌더링 중입니다.
                                </p>
                            </div>

                            <div className="mt-8 pt-8 border-t border-white/5 grid grid-cols-2 gap-4">
                                <div>
                                    <div className="text-xl sm:text-2xl font-bold text-white">12</div>
                                    <div className="text-[10px] sm:text-xs text-gray-500 uppercase">Active Projects</div>
                                </div>
                                <div>
                                    <div className="text-xl sm:text-2xl font-bold text-white">48h</div>
                                    <div className="text-[10px] sm:text-xs text-gray-500 uppercase">Avg Response</div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </section>
    );
}
