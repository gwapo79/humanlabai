"use client";

import { motion } from "framer-motion";
import { Instagram, Youtube, FileText, Loader2, Image as ImageIcon, Box, Palette, Megaphone } from "lucide-react";
import Image from "next/image";

// 1. Data Structure (20 Items)
const MOCK_PROJECTS = [
    // [Category: Character & Branding]
    {
        id: "c1", category: "Character", source: "INSTAGRAM", date: "2026.01.17", title: "성수동 팝업스토어 '힙스터 냥이'", desc: "3D Character Optimization & Motion",
        image: "https://images.unsplash.com/photo-1618331835717-801e976710b2?q=80&w=1000&auto=format&fit=crop",
        tags: ["3D", "Branding", "Popup"]
    },
    {
        id: "c2", category: "Branding", source: "LOG", date: "2026.01.16", title: "비건 화장품 'PureDrop'", desc: "Eco-friendly BI/Logo Design System",
        image: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?q=80&w=1000&auto=format&fit=crop",
        tags: ["Logo", "Eco", "Cosmetic"]
    },
    {
        id: "c3", category: "Character", source: "YOUTUBE", date: "2026.01.16", title: "코딩 교육 앱 '로보 쌤'", desc: "Educational Mascot Character Design",
        image: "https://images.unsplash.com/photo-1535378437323-95288acb26b3?q=80&w=1000&auto=format&fit=crop",
        tags: ["EdTech", "Mascot", "3D"]
    },
    {
        id: "c4", category: "Branding", source: "INSTAGRAM", date: "2026.01.15", title: "프리미엄 한우 '우월'", desc: "Luxury Food Package Branding",
        image: "https://images.unsplash.com/photo-1606850462028-1b2d71591461?q=80&w=1000&auto=format&fit=crop",
        tags: ["Package", "Premium", "Food"]
    },
    {
        id: "c5", category: "Character", source: "LOG", date: "2026.01.15", title: "레트로 베이커리 '빵순이'", desc: "Newtro Concept Brand Character",
        image: "https://images.unsplash.com/photo-1556910636-6f81e6e0d294?q=80&w=1000&auto=format&fit=crop",
        tags: ["Retro", "F&B", "Character"]
    },

    // [Category: Product Photography (AI)]
    {
        id: "p1", category: "Photo", source: "INSTAGRAM", date: "2026.01.14", title: "신선식품 딸기 연출", desc: "Hyper-Realism Fresh Food AI Photography",
        image: "https://images.unsplash.com/photo-1587393855524-087f83d95bc9?q=80&w=1000&auto=format&fit=crop",
        tags: ["AI Photo", "Food", "Fresh"]
    },
    {
        id: "p2", category: "Photo", source: "LOG", date: "2026.01.14", title: "럭셔리 향수 자연광", desc: "Forest Mood Product Photography",
        image: "https://images.unsplash.com/photo-1594035910387-fea47794261f?q=80&w=1000&auto=format&fit=crop",
        tags: ["Luxury", "Perfume", "Nature"]
    },
    {
        id: "p3", category: "Photo", source: "INSTAGRAM", date: "2026.01.13", title: "게이밍 마우스 네온", desc: "Cyberpunk Stylized Product Shot",
        image: "https://images.unsplash.com/photo-1527814050087-3793815479db?q=80&w=1000&auto=format&fit=crop",
        tags: ["Tech", "Gaming", "Neon"]
    },
    {
        id: "p4", category: "Photo", source: "INSTAGRAM", date: "2026.01.13", title: "카페 라떼아트 탑뷰", desc: "Instagram Mood Cafe Photography",
        image: "https://images.unsplash.com/photo-1517242859424-df43b743016d?q=80&w=1000&auto=format&fit=crop",
        tags: ["Cafe", "Coffee", "Topview"]
    },
    {
        id: "p5", category: "Photo", source: "LOG", date: "2026.01.12", title: "아웃도어 캠핑용품", desc: "Rainy Day Atmospheric Product Shot",
        image: "https://images.unsplash.com/photo-1478131143081-80f7f84ca84d?q=80&w=1000&auto=format&fit=crop",
        tags: ["Camping", "Outdoor", "Rain"]
    },

    // [Category: Marketing Content]
    {
        id: "m1", category: "Marketing", source: "INSTAGRAM", date: "2026.01.12", title: "마케팅 자동화 카드뉴스", desc: "Instagram Information Card News",
        image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=1000&auto=format&fit=crop",
        tags: ["Cardnews", "Insta", "Info"]
    },
    {
        id: "m2", category: "Marketing", source: "LOG", date: "2026.01.11", title: "스마트스토어 상위노출", desc: "Blog Posting High-Quality Thumbnail",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1000&auto=format&fit=crop",
        tags: ["Blog", "Thumb", "SEO"]
    },
    {
        id: "m3", category: "Marketing", source: "INSTAGRAM", date: "2026.01.11", title: "시즌 오프 세일 포스터", desc: "Red Impact Promotional Poster",
        image: "https://images.unsplash.com/photo-1607083206968-13611e3d76db?q=80&w=1000&auto=format&fit=crop",
        tags: ["Sale", "Poster", "Red"]
    },
    {
        id: "m4", category: "Marketing", source: "YOUTUBE", date: "2026.01.10", title: "맛집 탐방 브이로그", desc: "Youtube Video Thumbnail Design",
        image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=1000&auto=format&fit=crop",
        tags: ["Youtube", "Vlog", "Food"]
    },
    {
        id: "m5", category: "Marketing", source: "INSTAGRAM", date: "2026.01.10", title: "크리스마스 이벤트 릴스", desc: "Short-form Instagram Reels Cover",
        image: "https://images.unsplash.com/photo-1543258103-a62bdc069871?q=80&w=1000&auto=format&fit=crop",
        tags: ["Xmas", "Reels", "Event"]
    },

    // [Category: Web & Video]
    {
        id: "w1", category: "Design", source: "LOG", date: "2026.01.09", title: "스타트업 랜딩페이지", desc: "Dark Mode UI/UX Web Design",
        image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?q=80&w=1000&auto=format&fit=crop",
        tags: ["Web", "UI/UX", "Dark"]
    },
    {
        id: "w2", category: "Video", source: "YOUTUBE", date: "2026.01.09", title: "패션 브랜드 룩북 영상", desc: "AI Model Fashion Short-form Video",
        image: "https://images.unsplash.com/photo-1558769132-cb1aea458c5e?q=80&w=1000&auto=format&fit=crop",
        tags: ["Fashion", "Video", "AI"]
    },
    {
        id: "w3", category: "Design", source: "LOG", date: "2026.01.08", title: "병원 예약 앱 디자인", desc: "Medical Mobile Association UI",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000&auto=format&fit=crop",
        tags: ["App", "Medical", "Clean"]
    },
    {
        id: "w4", category: "Video", source: "YOUTUBE", date: "2026.01.08", title: "기업 홍보 모션그래픽", desc: "Corporate Intro Motion Graphics",
        image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=1000&auto=format&fit=crop",
        tags: ["Motion", "Video", "Corp"]
    },
    {
        id: "w5", category: "Design", source: "LOG", date: "2026.01.07", title: "반려견 용품 상세페이지", desc: "E-commerce Detail Page Design",
        image: "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?q=80&w=1000&auto=format&fit=crop",
        tags: ["Dog", "Commerce", "Detail"]
    },
];

const sourceIcons: Record<string, React.ReactNode> = {
    INSTAGRAM: <Instagram className="w-5 h-5" />,
    YOUTUBE: <Youtube className="w-5 h-5" />,
    LOG: <FileText className="w-5 h-5" />,
};

const getIcon = (source: string) => {
    const key = Object.keys(sourceIcons).find(k => k.toUpperCase() === source.toUpperCase());
    return key ? sourceIcons[key] : <FileText className="w-5 h-5" />;
}

export function LiveFeedClient({ initialActivities }: { initialActivities?: any[] }) {
    // Force use MOCK_PROJECTS for "Data Injection Only"
    return (
        <div className="py-12 space-y-0">
            {MOCK_PROJECTS.map((item, index) => (
                <motion.div
                    key={item.id}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-20px" }}
                    transition={{ delay: index * 0.05 }}
                    className="group py-8 border-b border-white/10 hover:bg-white/5 transition-colors px-4 md:px-8 -mx-4 md:-mx-8"
                >
                    <div className="flex flex-col md:flex-row md:items-baseline gap-4 md:gap-8">
                        {/* 1. Date (Left Column) */}
                        <div className="w-full md:w-32 flex-shrink-0 flex items-center md:block gap-3">
                            <span className="text-lg md:text-xl font-bold text-humanlab-neon tracking-tighter block">
                                {item.date.split('.').slice(1).join('.')}
                            </span>
                            <span className="text-sm text-gray-500 font-mono block">
                                {item.date.split('.')[0]}
                            </span>
                        </div>

                        {/* 2. Content (Right Column - 100% Text) */}
                        <div className="flex-1 min-w-0">
                            <div className="flex flex-wrap items-center gap-3 mb-2">
                                <span className="flex items-center gap-1.5 text-xs font-bold text-gray-400 uppercase tracking-wider bg-white/5 px-2 py-1 rounded border border-white/5">
                                    {getIcon(item.source)}
                                    {item.source}
                                </span>
                                <span className="text-xs font-bold text-blue-400 px-2 py-1 border border-blue-500/30 rounded bg-blue-500/10">
                                    {item.category}
                                </span>
                            </div>

                            <h3 className="text-2xl md:text-3xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors leading-tight">
                                {item.title}
                            </h3>

                            <p className="text-gray-400 text-lg leading-relaxed mb-4 max-w-3xl">
                                {item.desc}
                            </p>

                            <div className="flex gap-2">
                                {item.tags.map(tag => (
                                    <span key={tag} className="text-xs font-mono text-gray-600 group-hover:text-gray-400 transition-colors">
                                        #{tag}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* 3. Arrow Icon (Right aligned) */}
                        <div className="hidden md:flex items-center justify-end w-12 opacity-0 group-hover:opacity-100 transition-opacity transform group-hover:translate-x-2">
                            <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                        </div>
                    </div>
                </motion.div>
            ))}

            <div className="text-center pt-20 pb-12">
                <span className="text-gray-600 text-sm font-mono tracking-widest uppercase">
                    End of Activity Logs
                </span>
            </div>
        </div>
    );
}
