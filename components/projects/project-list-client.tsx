"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { ProjectItem } from "@/constants/projectsData";

interface ProjectsClientProps {
    initialProjects: ProjectItem[];
}

export function ProjectsClient({ initialProjects }: ProjectsClientProps) {
    return (
        <div className="min-h-screen bg-black pt-24 pb-24">
            <div className="container mx-auto px-4">
                {/* Header */}
                <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-8 border-b border-white/10 pb-8">
                    <div>
                        <h1 className="text-5xl md:text-8xl font-black tracking-tighter text-white mb-2">
                            HUMANLAB<br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500">
                                IP UNIVERSE
                            </span>
                        </h1>
                    </div>
                    <div className="text-right">
                        <p className="text-xl font-mono text-gray-500">
                            7 CORE LINEUPS<br />
                            EXPANDING REALITY
                        </p>
                    </div>
                </div>

                {/* Bento Grid */}
                {/* Grid Template: Mobile 1 col, Tablet 3 cols (Bento) */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-[300px]">
                    {initialProjects.map((project) => (
                        <Link
                            key={project.id}
                            href={`/projects/${project.id}`}
                            className={`relative group rounded-3xl overflow-hidden border border-white/10 bg-zinc-900 ${project.gridArea}`}
                        >
                            {/* Background Image */}
                            <div className="absolute inset-0">
                                <motion.img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover opacity-60 group-hover:scale-110 group-hover:opacity-100 transition-all duration-700 ease-out"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent transition-opacity duration-500 group-hover:opacity-40" />
                            </div>

                            {/* Content */}
                            <div className="absolute inset-0 p-6 md:p-8 flex flex-col justify-between">
                                {/* Top Badge */}
                                <div className="flex justify-between items-start">
                                    <span className={`text-[10px] font-bold tracking-widest px-2 py-1 rounded border backdrop-blur-md uppercase ${project.type === 'HYPER-REALISM'
                                        ? 'bg-blue-500/20 text-blue-400 border-blue-500/30'
                                        : 'bg-purple-500/20 text-purple-400 border-purple-500/30'
                                        }`}>
                                        [{project.type}]
                                    </span>

                                    <div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur border border-white/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-2 group-hover:translate-y-0">
                                        <ArrowUpRight className="text-white w-5 h-5" />
                                    </div>
                                </div>

                                {/* Bottom Info */}
                                <div>
                                    <h3 className="text-sm font-mono text-gray-400 mb-1">{project.category}</h3>
                                    <h2 className="text-3xl md:text-5xl font-black text-white leading-none mb-4 tracking-tight">
                                        {project.title}
                                    </h2>
                                    <p className="text-gray-300 text-sm md:text-base opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 line-clamp-2">
                                        {project.desc}
                                    </p>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
}
