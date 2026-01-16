"use client";

import { ProjectCard } from "@/components/projects/project-card";
import { useState } from "react";
import { cn } from "@/lib/utils";

// Mock Data
const projects = [
    {
        id: "1",
        slug: "lumina",
        title: "LUMINA",
        category: "VIRTUAL ARTIST",
        status: "GROWING" as const,
        description: "실제 팬덤과 교감하며 성장하는 버추얼 싱어송라이터. 숏폼과 음원 발매를 통해 IP 가치를 입증하고 있습니다.",
        imageColor: "bg-purple-600",
        imageUrl: "/lumina/lum2.png", // Using the portrait shot for the card
    },
    {
        id: "2",
        slug: "petkage",
        title: "PETKAGE",
        category: "BRAND CHARACTER",
        status: "ACTIVE" as const,
        description: "국내 1위 펫 커머스 플랫폼의 마스코트 운영. 300만 유저와 브랜드의 연결고리 역할을 수행합니다.",
        imageColor: "bg-orange-500",
    },
    {
        id: "3",
        slug: "dr-k",
        title: "Dr. K",
        category: "AI EXPERT",
        status: "DEVELOPING" as const,
        description: "전문적인 의학 상담과 데이터를 분석하는 AI 닥터. 신뢰성 있는 페르소나를 구축 중입니다.",
        imageColor: "bg-blue-600",
    },
    {
        id: "4",
        slug: "chunsik-store",
        title: "Chunsik Store",
        category: "LOCAL BRAND",
        status: "ACTIVE" as const,
        description: "지역 식자재 마트의 브랜딩 및 캐릭터 운영. 로컬 커뮤니티와의 친밀한 소통을 담당합니다.",
        imageColor: "bg-green-600",
    },
];

const filters = ["ALL", "ACTIVE", "GROWING", "DEVELOPING"];

export default function ProjectsPage() {
    const [filter, setFilter] = useState("ALL");

    const filteredProjects = filter === "ALL"
        ? projects
        : projects.filter(p => p.status === filter);

    return (
        <div className="min-h-screen bg-black pt-32 pb-24">
            <div className="container mx-auto px-4">
                {/* Header */}
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
                    <div>
                        <h1 className="text-5xl md:text-7xl font-bold tracking-tighter text-white mb-6">
                            OUR ENTITIES
                        </h1>
                        <p className="text-xl text-gray-400 max-w-2xl">
                            단순히 캐릭터를 '만드는' 것이 아닙니다.<br />
                            우리는 그들에게 직업과 역사, 그리고 '삶'을 부여합니다.
                        </p>
                    </div>

                    {/* Simple Filter */}
                    <div className="flex gap-2 flex-wrap">
                        {filters.map(f => (
                            <button
                                key={f}
                                onClick={() => setFilter(f)}
                                className={cn(
                                    "px-4 py-2 rounded-full border text-xs font-bold transition-all",
                                    filter === f ? "bg-white text-black border-white" : "text-gray-500 border-zinc-800 hover:border-zinc-600"
                                )}
                            >
                                {f}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredProjects.map(project => (
                        <ProjectCard key={project.id} project={project} />
                    ))}
                </div>
            </div>
        </div>
    );
}
