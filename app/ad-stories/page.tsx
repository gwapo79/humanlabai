"use client";

import { AdStoryCard } from "@/components/ad-stories/ad-story-card";
import { useState } from "react";
import { cn } from "@/lib/utils";

// Mock Data
const stories = [
    {
        id: "1",
        slug: "cafe-blue-viral",
        client: "Cafe Blue",
        title: "버추얼 알바로 방문객 300% 증가시키기",
        tags: ["F&B", "LOCAL", "VIRAL"],
        image: "bg-blue-800",
    },
    {
        id: "2",
        slug: "petkage-rebranding",
        client: "Petkage",
        title: "'그냥 로고'를 '살아있는 마스코트'로 바꾸다",
        tags: ["E-COMMERCE", "BRANDING", "CHARACTER"],
        image: "bg-orange-700",
    },
    {
        id: "3",
        slug: "fashion-week-ai",
        client: "Seoul Fashion Week",
        title: "LUMINA 런웨이: 현실과 디지털의 경계를 허물다",
        tags: ["FASHION", "EVENT", "3D"],
        image: "bg-purple-900",
    },
];

const filters = ["ALL", "F&B", "E-COMMERCE", "FASHION"];

export default function AdStoriesPage() {
    const [filter, setFilter] = useState("ALL");

    const filteredStories = filter === "ALL"
        ? stories
        : stories.filter(s => s.tags.includes(filter));

    return (
        <div className="min-h-screen bg-black pt-32 pb-24">
            <div className="container mx-auto px-4">

                <div className="mb-20 text-center max-w-3xl mx-auto space-y-6">
                    <h1 className="text-5xl md:text-7xl font-bold tracking-tighter text-white">
                        AD STORIES
                    </h1>
                    <p className="text-xl text-gray-400">
                        우리는 숫자가 적힌 엑셀 파일이 아닌,<br />
                        문제와 해결, 그리고 운영의 이야기를 들려줍니다.
                    </p>
                </div>

                {/* Filter */}
                <div className="flex justify-center gap-2 mb-16 flex-wrap">
                    {filters.map(f => (
                        <button
                            key={f}
                            onClick={() => setFilter(f)}
                            className={cn(
                                "px-6 py-2 rounded-full border text-sm font-bold transition-all",
                                filter === f ? "bg-white text-black border-white" : "text-gray-500 border-zinc-800 hover:border-zinc-600"
                            )}
                        >
                            {f}
                        </button>
                    ))}
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
                    {filteredStories.map(story => (
                        <AdStoryCard key={story.id} story={story} />
                    ))}
                </div>

            </div>
        </div>
    );
}
