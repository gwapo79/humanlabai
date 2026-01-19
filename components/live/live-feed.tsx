"use client";

import { motion } from "framer-motion";
import { Instagram, Youtube, FileText } from "lucide-react";

// Mock Data
const activities = [
    {
        id: 1,
        source: "Instagram",
        date: "2026.01.15",
        title: "LUMINA 'Magnetic' 커버 영상 업로드",
        description: "유튜브와 인스타그램에 동시 업로드되었습니다. 1시간 내 조회수 급상승 중입니다.",
        image: null, // Placeholder for image
        tags: ["LUMINA", "DANCE"]
    },
    {
        id: 2,
        source: "YouTube",
        date: "2026.01.14",
        title: "브이로그: 버추얼 휴먼의 하루 (EP.3)",
        description: "LUMINA의 일상 시리즈 3편이 공개되었습니다. 팬 소통 댓글 작업이 완료되었습니다.",
        image: null,
        tags: ["LUMINA", "VLOG"]
    },
    {
        id: 3,
        source: "Log",
        date: "2026.01.12",
        title: "광고 캠페인 '펫키지' 2단계 시작",
        description: "1단계 성과 분석에 기반하여 타겟팅 로직이 업데이트되었습니다. 예산 최적화 완료.",
        image: null,
        tags: ["ADS", "PETKAGE"]
    },
    {
        id: 4,
        source: "Instagram",
        date: "2026.01.10",
        title: "지역 브랜드 '카페 블루' 협업 시작",
        description: "초기 컨셉 촬영이 완료되었습니다. 현재 보정 및 편집 작업 진행 중입니다.",
        image: null,
        tags: ["COLLAB", "LOCAL"]
    },
];

const sourceIcons = {
    Instagram: <Instagram className="w-5 h-5" />,
    YouTube: <Youtube className="w-5 h-5" />,
    Log: <FileText className="w-5 h-5" />,
};

export function LiveFeed() {
    return (
        <div className="py-12 space-y-8">
            {activities.map((item, index) => (
                <motion.div
                    key={item.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ delay: index * 0.1 }}
                    className="relative flex gap-6 md:gap-12 group"
                >
                    {/* Date Column */}
                    <div className="hidden md:flex flex-col items-end w-32 pt-2 space-y-1">
                        <span className="text-xl font-bold text-white tracking-tighter">{item.date.split('.').slice(1).join('.')}</span>
                        <span className="text-xs text-gray-500">{item.date.split('.')[0]}</span>
                    </div>

                    {/* Timeline Line */}
                    <div className="absolute left-6 md:left-40 top-0 bottom-0 w-px bg-white/10 group-last:bottom-auto group-last:h-full">
                        <div className="absolute top-3 -left-[5px] w-[11px] h-[11px] rounded-full bg-black border-2 border-white/20 group-hover:border-white transition-colors"></div>
                    </div>

                    {/* Card Content */}
                    <div className="flex-1 ml-12 md:ml-0 pb-12">
                        <div className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-colors">
                            <div className="flex items-center gap-3 mb-4">
                                <span className="p-2 rounded-full bg-white/5 text-white">
                                    {sourceIcons[item.source as keyof typeof sourceIcons]}
                                </span>
                                <span className="text-sm font-bold text-gray-400 uppercase tracking-wider">{item.source}</span>
                                <div className="flex gap-2 ml-auto">
                                    {item.tags.map(tag => (
                                        <span key={tag} className="text-[10px] font-mono border border-white/10 px-2 py-0.5 rounded text-gray-500">
                                            #{tag}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-amber-400 transition-colors">
                                {item.title}
                            </h3>
                            <p className="text-gray-400 leading-relaxed">
                                {item.description}
                            </p>
                        </div>
                    </div>
                </motion.div>
            ))}

            <div className="text-center pt-12">
                <span className="text-gray-600 text-sm">최근 로그의 마지막입니다. <br />이전 기록은 DB에 아카이빙되었습니다.</span>
            </div>
        </div>
    );
}
