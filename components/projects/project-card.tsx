"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

import Image from "next/image";

interface ProjectProps {
    id: string;
    slug: string;
    title: string;
    category: string;
    status: "ACTIVE" | "GROWING" | "DEVELOPING";
    description: string;
    imageColor: string;
    imageUrl?: string; // New optional prop
}

const statusColors: Record<string, string> = {
    ACTIVE: "bg-green-500 shadow-[0_0_10px_rgba(34,197,94,0.5)]",
    GROWING: "bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.5)]",
    DEVELOPING: "bg-yellow-500",
};

export function ProjectCard({ project }: { project: ProjectProps }) {
    return (
        <Link href={`/projects/${project.slug}`}>
            <motion.div
                whileHover={{ y: -10 }}
                className="group relative aspect-[4/5] rounded-2xl overflow-hidden bg-zinc-900 border border-white/10"
            >
                {/* Background Image or Color */}
                {project.imageUrl ? (
                    <div className="absolute inset-0">
                        <Image
                            src={project.imageUrl}
                            alt={project.title}
                            fill
                            className="object-cover opacity-60 transition-all duration-700 group-hover:scale-105 group-hover:opacity-80"
                        />
                    </div>
                ) : (
                    <div className={cn("absolute inset-0 opacity-40 transition-opacity group-hover:opacity-60", project.imageColor)} />
                )}

                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-90" />

                <div className="absolute inset-0 p-6 flex flex-col justify-end">
                    {/* Status Badge */}
                    <div className="absolute top-6 left-6 flex items-center gap-2">
                        <div className="bg-black/50 backdrop-blur-md px-3 py-1 rounded-full border border-white/10 flex items-center gap-2">
                            <span className={cn("w-2 h-2 rounded-full animate-pulse", statusColors[project.status])}></span>
                            <span className="text-xs font-bold text-white tracking-wider">{project.status}</span>
                        </div>
                    </div>

                    <div className="transform transition-transform group-hover:translate-y-[-8px]">
                        <span className="text-xs font-mono text-gray-400 mb-2 block tracking-widest uppercase">{project.category}</span>
                        <h3 className="text-3xl font-bold text-white leading-none mb-4">{project.title}</h3>
                        <p className="text-gray-400 text-sm line-clamp-2 opacity-0 group-hover:opacity-100 transition-opacity delay-100">
                            {project.description}
                        </p>
                    </div>

                    <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity transform group-hover:translate-x-0 translate-x-4">
                        <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center">
                            <ArrowUpRight className="w-5 h-5 text-black" />
                        </div>
                    </div>
                </div>
            </motion.div>
        </Link>
    );
}
