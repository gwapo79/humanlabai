"use client";

import { useState, use } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Save, ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function StoryEditor({ params }: { params: Promise<{ id: string }> }) {
    const { id } = use(params);
    const isNew = id === 'new';

    return (
        <div className="space-y-8 max-w-5xl mx-auto">
            {/* Header */}
            <div className="flex justify-between items-center sticky top-0 bg-black/80 backdrop-blur z-10 py-4 border-b border-white/10">
                <div className="flex items-center gap-4">
                    <Link href="/admin/ad-stories">
                        <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white"><ArrowLeft className="w-5 h-5" /></Button>
                    </Link>
                    <div>
                        <h2 className="text-2xl font-bold text-white">{isNew ? 'New Story' : 'Edit Story'}</h2>
                        <p className="text-xs text-gray-500">Draft saved 2 mins ago</p>
                    </div>
                </div>
                <div className="flex gap-2">
                    <Button variant="secondary" className="font-bold">Preview</Button>
                    <Button className="bg-humanlab-neon text-black font-bold">
                        <Save className="w-4 h-4 mr-2" /> Publish
                    </Button>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* LEFT: Main Content */}
                <div className="lg:col-span-2 space-y-6">
                    <div className="space-y-2">
                        <input
                            placeholder="Enter Title Here..."
                            className="w-full bg-transparent text-4xl font-bold text-white placeholder:text-gray-700 border-none focus:outline-none focus:ring-0"
                            defaultValue={isNew ? "" : "검색창이 사라진 시대: SEO는 죽었고 AIO가 왔다"}
                        />
                    </div>

                    <Card className="bg-zinc-900 border-white/10">
                        <CardHeader><CardTitle className="text-sm text-gray-400">SUMMARY</CardTitle></CardHeader>
                        <CardContent>
                            <Textarea
                                className="bg-black border-white/10 min-h-[100px] text-lg leading-relaxed"
                                placeholder="Sub-title or summary..."
                                defaultValue={isNew ? "" : "구글링의 시대는 끝났다. 2026년, 고객은 검색하지 않고 '질문'한다."}
                            />
                        </CardContent>
                    </Card>

                    {/* DEEP CONTENT STRUCTURE EDITOR (Mocking the specialized fields) */}
                    <div className="space-y-4">
                        <h3 className="text-humanlab-neon font-bold text-sm tracking-widest uppercase">Deep Content Block</h3>

                        <div className="space-y-2">
                            <label className="text-xs font-bold text-gray-500">01. INTRO (Context)</label>
                            <Textarea className="bg-zinc-900/50 border-white/10" rows={4} defaultValue={isNew ? "" : "20년 넘게 우리는 '검색창'에 종속되어 살았습니다..."} />
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-2">
                                <label className="text-xs font-bold text-gray-500">QUOTE TEXT</label>
                                <Textarea className="bg-zinc-900/50 border-white/10" rows={3} defaultValue={isNew ? "" : "검색 목록은 죽었다..."} />
                            </div>
                            <div className="space-y-2">
                                <label className="text-xs font-bold text-gray-500">AUTHOR / SOURCE</label>
                                <Input className="bg-zinc-900/50 border-white/10 mb-2" placeholder="Author" defaultValue="Sam Altman" />
                                <Input className="bg-zinc-900/50 border-white/10" placeholder="Source" defaultValue="OpenAI 2025 Keynote" />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="text-xs font-bold text-gray-500">03. INSIGHT</label>
                            <Textarea className="bg-zinc-900/50 border-white/10" rows={4} />
                        </div>
                    </div>
                </div>

                {/* RIGHT: Meta Info */}
                <div className="space-y-6">
                    <Card className="bg-zinc-900 border-white/10">
                        <CardHeader><CardTitle className="text-sm text-white">Settings</CardTitle></CardHeader>
                        <CardContent className="space-y-4">
                            <div className="space-y-2">
                                <label className="text-xs font-bold text-gray-500">CATEGORY</label>
                                <select className="w-full bg-black border border-white/10 rounded p-2 text-white text-sm">
                                    <option>TREND_2026</option>
                                    <option>UX_PSYCHOLOGY</option>
                                    <option>BRAND_STRATEGY</option>
                                    <option>AI_MARKETING</option>
                                    <option>CULTURE</option>
                                </select>
                            </div>

                            <div className="space-y-2">
                                <label className="text-xs font-bold text-gray-500">TAGS</label>
                                <Input className="bg-black border-white/10" placeholder="#Tag1, #Tag2" />
                            </div>

                            <div className="space-y-2">
                                <label className="text-xs font-bold text-gray-500">COVER IMAGE</label>
                                <div className="aspect-video bg-black rounded border border-white/10 flex items-center justify-center text-gray-600 cursor-pointer hover:border-white/30 hover:text-white transition-colors">
                                    Upload
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    );
}
