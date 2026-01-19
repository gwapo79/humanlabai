"use client";

import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Edit2, Plus, ArrowRight } from "lucide-react";

// Mock Data (will be replaced with real data fetch)
const PROJECTS = [
    { id: 'lumina', title: 'LUMINA', category: 'VIRTUAL IDOL', status: 'Active', image: '/images/lumina/main_poster.jpg' },
    { id: 'lumis', title: 'LUMIS', category: 'AI COMPANION', status: 'Dev', image: 'https://images.unsplash.com/photo-1616499370260-485b3e5ed653' },
    { id: 'real-pets', title: 'THE COMPANIONS', category: 'DIGITAL ANIMALS', status: 'Active', image: 'https://images.unsplash.com/photo-1583337130417-3346a1be7dee' },
];

export default function ProjectManager() {
    return (
        <div className="space-y-8">
            <div className="flex justify-between items-end">
                <div>
                    <h2 className="text-3xl font-bold tracking-tight text-white mb-2">Project IP</h2>
                    <p className="text-gray-400">휴먼랩 AI 지식재산권(IP) 통합 관리</p>
                </div>
                <button className="flex items-center gap-2 bg-humanlab-neon text-black px-4 py-2 rounded font-bold hover:bg-humanlab-neon/80">
                    <Plus className="w-4 h-4" /> New Project
                </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {PROJECTS.map((project) => (
                    <Card key={project.id} className="bg-zinc-900 border-white/10 overflow-hidden group hover:border-white/30 transition-colors">
                        <div className="relative aspect-video bg-black">
                            <img src={project.image} alt={project.title} className="object-cover w-full h-full opacity-60 group-hover:opacity-100 transition-opacity" />
                            <div className="absolute top-4 left-4">
                                <Badge className="bg-black/50 backdrop-blur border-white/20 text-white hover:bg-black/80">
                                    {project.category}
                                </Badge>
                            </div>
                        </div>
                        <CardContent className="p-6">
                            <div className="flex justify-between items-start mb-4">
                                <div>
                                    <h3 className="text-2xl font-bold text-white mb-1">{project.title}</h3>
                                    <div className="flex items-center gap-2 text-xs text-humanlab-neon">
                                        <span className="w-1.5 h-1.5 rounded-full bg-humanlab-neon animate-pulse" />
                                        {project.status.toUpperCase()}
                                    </div>
                                </div>
                            </div>

                            <div className="flex gap-2">
                                <Link href={`/admin/projects/${project.id}`} className="flex-1">
                                    <button className="w-full py-3 bg-white/5 border border-white/10 rounded font-bold text-gray-300 hover:bg-white hover:text-black flex items-center justify-center gap-2 transition-all">
                                        <Edit2 className="w-4 h-4" /> MANAGE ASSETS
                                    </button>
                                </Link>
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
    );
}
