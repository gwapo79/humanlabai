"use client";

import { useState, use } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Trash2, Upload, Play, Image as ImageIcon, Music, Save } from "lucide-react";
import { MEDIA_SHOWCASE } from "@/constants/luminaShowcaseData";

// Using Lumina mock data for demo
export default function ProjectDetail({ params }: { params: Promise<{ id: string }> }) {
    const { id } = use(params);
    const [assets, setAssets] = useState(MEDIA_SHOWCASE);

    // Filter by type for tabs
    const videoAssets = assets.filter(a => a.type.startsWith('video'));
    const audioAssets = assets.filter(a => a.type === 'audio');
    const imageAssets = assets.filter(a => a.type === 'image_poster');
    const socialAssets = assets.filter(a => a.type === 'social_ugc');

    return (
        <div className="space-y-8">
            <div className="flex justify-between items-center border-b border-white/10 pb-6">
                <div>
                    <div className="flex items-center gap-4 mb-2">
                        <h2 className="text-3xl font-bold text-humanlab-neon">LUMINA</h2>
                        <span className="bg-white/10 px-2 py-0.5 rounded text-xs text-gray-400 font-mono">ID: {id}</span>
                    </div>
                    <p className="text-gray-400">Project Asset Management System</p>
                </div>
                <div className="flex gap-4">
                    <Button variant="outline" className="text-black border-white/20">Discard</Button>
                    <Button className="bg-humanlab-neon text-black font-bold">
                        <Save className="w-4 h-4 mr-2" /> Save Changes
                    </Button>
                </div>
            </div>

            {/* Basic Info Form (Collapsible/Preview) */}
            <Card className="bg-zinc-900 border-white/10">
                <CardContent className="p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                        <label className="text-xs font-bold text-gray-500">PROJECT TITLE</label>
                        <Input defaultValue="LUMINA" className="bg-black border-white/10 font-bold text-lg" />
                    </div>
                    <div className="space-y-2">
                        <label className="text-xs font-bold text-gray-500">ONE-LINE PITCH</label>
                        <Input defaultValue="완벽하지 않아서 더 인간적인, 성장형 AI 아이돌 그룹" className="bg-black border-white/10" />
                    </div>
                </CardContent>
            </Card>

            {/* ASSET MANAGER TABS */}
            <Tabs defaultValue="video" className="w-full">
                <TabsList className="bg-zinc-900 border border-white/10 p-1">
                    <TabsTrigger value="video" className="data-[state=active]:bg-humanlab-neon data-[state=active]:text-black font-bold">Video & Shorts</TabsTrigger>
                    <TabsTrigger value="audio" className="data-[state=active]:bg-humanlab-neon data-[state=active]:text-black font-bold">Voice & Audio</TabsTrigger>
                    <TabsTrigger value="social" className="data-[state=active]:bg-humanlab-neon data-[state=active]:text-black font-bold">Social UGC</TabsTrigger>
                    <TabsTrigger value="image" className="data-[state=active]:bg-humanlab-neon data-[state=active]:text-black font-bold">Visual Assets</TabsTrigger>
                </TabsList>

                {/* VIDEO TAB CONTENT */}
                <TabsContent value="video" className="mt-6 space-y-4">
                    <div className="flex justify-end">
                        <Button size="sm" className="bg-white text-black font-bold"><Upload className="w-4 h-4 mr-2" /> Upload Video Asset</Button>
                    </div>
                    <div className="grid grid-cols-1 gap-4">
                        {videoAssets.map((item) => (
                            <div key={item.id} className="flex gap-4 bg-zinc-900/50 p-4 border border-white/5 rounded-lg items-center">
                                <div className="w-32 aspect-video bg-black relative rounded overflow-hidden">
                                    <img src={item.thumbnail} className="object-cover w-full h-full opacity-70" />
                                    <Play className="absolute inset-0 m-auto w-6 h-6 text-white" />
                                </div>
                                <div className="flex-1 space-y-2">
                                    <Input defaultValue={item.title} className="bg-transparent border-none text-white font-bold p-0 h-auto focus-visible:ring-0" />
                                    <Input defaultValue={item.description} className="bg-transparent border-none text-gray-500 text-sm p-0 h-auto focus-visible:ring-0" />
                                    <div className="flex gap-4">
                                        <Badge variant="outline" className="text-[10px] text-gray-600 border-gray-700">{item.type.toUpperCase()}</Badge>
                                        <span className="text-[10px] text-gray-600 font-mono mt-1">Metrics: {JSON.stringify(item.metrics)}</span>
                                    </div>
                                </div>
                                <Button size="icon" variant="ghost" className="text-gray-600 hover:text-red-500"><Trash2 className="w-4 h-4" /></Button>
                            </div>
                        ))}
                    </div>
                </TabsContent>

                {/* AUDIO TAB CONTENT */}
                <TabsContent value="audio" className="mt-6 space-y-4">
                    <div className="flex justify-end">
                        <Button size="sm" className="bg-white text-black font-bold"><Music className="w-4 h-4 mr-2" /> Upload Audio Track</Button>
                    </div>
                    <div className="space-y-4">
                        {audioAssets.map((item) => (
                            <div key={item.id} className="flex gap-4 bg-zinc-900/50 p-4 border border-white/5 rounded-lg items-center">
                                <div className="w-12 h-12 rounded-full bg-zinc-800 flex items-center justify-center border border-white/10 text-humanlab-neon">
                                    <Music className="w-5 h-5" />
                                </div>
                                <div className="flex-1">
                                    <p className="font-bold text-white">{item.title}</p>
                                    <p className="text-xs text-gray-500">{item.description}</p>
                                </div>
                                <Button size="icon" variant="ghost" className="text-gray-600 hover:text-red-500"><Trash2 className="w-4 h-4" /></Button>
                            </div>
                        ))}
                    </div>
                </TabsContent>

                {/* Other tabs would follow similar pattern */}
                <TabsContent value="social"><div className="p-8 text-center text-gray-500">Social Manager Placeholder</div></TabsContent>
                <TabsContent value="image"><div className="p-8 text-center text-gray-500">Visual Assets Placeholder</div></TabsContent>
            </Tabs>
        </div>
    );
}
