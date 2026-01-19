"use client";

import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Plus, Edit3, Eye } from "lucide-react";

// Mock Data
const STORIES = [
    { id: '1', title: "검색창이 사라진 시대: SEO는 죽었고 AIO가 왔다", category: "TREND_2026", date: "2026-01-19", status: "Published" },
    { id: '2', title: "도파민 2.5초의 법칙: 뇌를 해킹하지 못하면 죽은 광고다", category: "UX_PSYCHOLOGY", date: "2026-01-18", status: "Published" },
    { id: '3', title: "불완전함이 럭셔리가 된다: AI 시대의 역설", category: "BRAND_STRATEGY", date: "2026-01-17", status: "Draft" },
];

export default function StoryManager() {
    return (
        <div className="space-y-8">
            <div className="flex justify-between items-end">
                <div>
                    <h2 className="text-3xl font-bold tracking-tight text-white mb-2">Ad Stories</h2>
                    <p className="text-gray-400">인사이트 아티클 및 블로그 관리</p>
                </div>
                <Link href="/admin/ad-stories/editor/new">
                    <Button className="bg-humanlab-neon text-black font-bold">
                        <Plus className="w-4 h-4 mr-2" /> New Story
                    </Button>
                </Link>
            </div>

            <div className="rounded-md border border-white/10 bg-zinc-900/50">
                {STORIES.map((story) => (
                    <div key={story.id} className="flex items-center justify-between p-4 border-b border-white/5 last:border-none hover:bg-white/5 transition-colors">
                        <div className="space-y-1">
                            <div className="flex items-center gap-2">
                                <Badge variant="outline" className="text-[10px] text-humanlab-neon border-humanlab-neon/30">{story.category}</Badge>
                                {story.status === 'Draft' && <Badge variant="secondary" className="text-[10px]">Draft</Badge>}
                            </div>
                            <h3 className="font-bold text-white text-lg">{story.title}</h3>
                            <p className="text-xs text-gray-500">{story.date}</p>
                        </div>
                        <div className="flex gap-2">
                            <Link href={`/ad-stories/${story.id}`} target="_blank">
                                <Button size="icon" variant="ghost" className="text-gray-500 hover:text-white">
                                    <Eye className="w-4 h-4" />
                                </Button>
                            </Link>
                            <Link href={`/admin/ad-stories/editor/${story.id}`}>
                                <Button size="sm" variant="outline" className="text-white border-white/20 hover:bg-white hover:text-black">
                                    <Edit3 className="w-4 h-4 mr-2" /> Edit
                                </Button>
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
