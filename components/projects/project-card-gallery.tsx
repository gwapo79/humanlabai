"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Play } from "lucide-react";
import { ProjectItem } from "@/constants/projectsData";

interface ProjectCardGalleryProps {
    project: ProjectItem;
    index: number;
}

export function ProjectCardGallery({ project, index }: ProjectCardGalleryProps) {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <motion.div
            variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
            }}
            className={`relative group rounded-3xl overflow-hidden border border-white/10 bg-card aspect-[3/4]`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <Link href={`/projects/${project.id}`} className="block w-full h-full relative cursor-none sm:cursor-pointer">
                {/* Background Media */}
                <div className="absolute inset-0 preserve-3d">
                    {/* Image Layer */}
                    <motion.div
                        className="absolute inset-0 w-full h-full"
                        animate={{
                            scale: isHovered ? 1.05 : 1,
                        }}
                        transition={{ duration: 0.7, ease: [0.33, 1, 0.68, 1] }}
                    >
                        <img
                            src={project.image}
                            alt={project.title}
                            className="w-full h-full object-cover opacity-80"
                        />
                    </motion.div>

                    {/* Video Preview Layer (Optional) */}
                    {project.videoPreview && isHovered && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.5 }}
                            className="absolute inset-0 bg-black/50 z-10"
                        >
                            {/* Placeholder for actual video implementation */}
                            {/* In a real scenario, use <video src={project.videoPreview} ... /> */}
                            <div className="w-full h-full flex items-center justify-center bg-black/20 backdrop-blur-sm">
                                <Play className="w-12 h-12 text-white/50 fill-white/50 animate-pulse" />
                            </div>
                        </motion.div>
                    )}

                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />
                </div>

                {/* Content Container */}
                <div className="absolute inset-0 p-6 md:p-8 flex flex-col justify-between z-20">
                    {/* Top Header */}
                    <div className="flex justify-between items-start">
                        {/* Tags */}
                        <div className="flex flex-wrap gap-2">
                            <span className={`text-[10px] font-bold tracking-widest px-2 py-1 rounded border backdrop-blur-md uppercase font-sans ${project.type.includes('REALISM') || project.type.includes('HUMAN')
                                ? 'bg-blue-500/10 text-blue-400 border-blue-500/20'
                                : 'bg-purple-500/10 text-purple-400 border-purple-500/20'
                                }`}>
                                {project.type}
                            </span>
                        </div>

                        {/* Arrow Icon */}
                        <div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur border border-white/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0 group-hover:rotate-45">
                            <ArrowUpRight className="text-white w-5 h-5" />
                        </div>
                    </div>

                    {/* Bottom Info */}
                    <div className="relative overflow-hidden">
                        {/* Title & Slogan */}
                        <div className="transform transition-transform duration-500 ease-out group-hover:-translate-y-2">
                            <h3 className="text-xs md:text-sm font-bold text-muted-foreground mb-2 uppercase tracking-wider font-sans opacity-80">
                                {project.category}
                            </h3>
                            <h2 className="text-3xl md:text-5xl font-black text-foreground leading-[0.9] mb-2 font-heading tracking-tight">
                                {project.title}
                            </h2>
                            <p className="text-lg md:text-xl text-foreground font-medium font-heading italic opacity-90">
                                "{project.slogan}"
                            </p>
                        </div>

                        {/* Hidden Details (Slide Up) */}
                        <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{
                                height: isHovered ? "auto" : 0,
                                opacity: isHovered ? 1 : 0
                            }}
                            transition={{ duration: 0.4, ease: "easeOut" }}
                            className="overflow-hidden"
                        >
                            <div className="pt-4 space-y-4">
                                <p className="text-muted-foreground text-sm leading-relaxed font-sans line-clamp-3">
                                    {project.desc}
                                </p>

                                {/* Tech Stack Footer */}
                                <div className="pt-4 border-t border-white/10 flex flex-wrap gap-2">
                                    {project.techStack?.map((tech, i) => (
                                        <span key={i} className="text-[10px] text-gray-500 font-mono bg-white/5 px-2 py-1 rounded">
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </Link>
        </motion.div>
    );
}
