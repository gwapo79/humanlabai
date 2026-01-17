"use client";

import Link from "next/link";

import { ProjectCard } from "@/components/projects/project-card";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { Project } from "@prisma/client";

interface ProjectsClientProps {
    initialProjects: any[]; // Using any[] temporarily or define proper type extending Project
}

const filters = ["ALL", "ACTIVE", "GROWING", "DEVELOPING"];

export function ProjectsClient({ initialProjects }: ProjectsClientProps) {
    const [filter, setFilter] = useState("ALL");

    const filteredProjects = filter === "ALL"
        ? initialProjects
        : initialProjects.filter(p => p.status === filter);

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
                    {/* [LUMINA SPECIAL CARD] */}
                    <Link
                        href="/projects/lumina"
                        className="group relative col-span-1 md:col-span-2 lg:col-span-2 aspect-video rounded-3xl overflow-hidden border border-white/10 hover:border-white/30 transition-all duration-500 shadow-2xl"
                    >
                        <div className="absolute inset-0 bg-gray-900 animate-pulse" /> {/* Loading Placeholder */}
                        <img
                            src="/images/lumina/main_poster.jpg"
                            alt="LUMINA: FRACTURE"
                            className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-90" />

                        <div className="absolute bottom-0 left-0 p-8 z-10">
                            <span className="inline-block px-3 py-1 bg-blue-600/20 border border-blue-500/50 rounded-full text-blue-400 text-xs font-bold tracking-widest mb-3 backdrop-blur-md">
                                ● NEW RELEASE
                            </span>
                            <h2 className="text-4xl md:text-5xl font-black text-white mb-2 tracking-tight group-hover:text-blue-200 transition-colors">
                                PROJECT: LUMINA
                            </h2>
                            <p className="text-gray-300 text-lg font-light max-w-lg group-hover:text-white transition-colors">
                                Virtual K-Pop Group "FRACTURE"<br />
                                <span className="text-sm opacity-60">우리는 셋이지만, 사실 하나다.</span>
                            </p>
                        </div>

                        <div className="absolute top-8 right-8 z-10 w-12 h-12 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center border border-white/20 group-hover:bg-white group-hover:text-black transition-all">
                            <span className="text-2xl">↗</span>
                        </div>
                    </Link>

                    {filteredProjects.map(project => (
                        <ProjectCard key={project.id} project={project} />
                    ))}
                </div>
            </div>
        </div>
    );
}
