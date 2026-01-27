"use client";

import { motion } from "framer-motion";
import { ProjectItem } from "@/constants/projectsData";
import { ProjectCardGallery } from "./project-card-gallery";

interface ProjectsClientProps {
    initialProjects: ProjectItem[];
}

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.3
        }
    }
};

export function ProjectsClient({ initialProjects }: ProjectsClientProps) {
    return (
        <div className="min-h-screen bg-black pt-32 pb-32">
            <div className="container mx-auto px-4 md:px-8">
                {/* Header Section */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8 border-b border-white/10 pb-12"
                >
                    <div className="max-w-4xl">
                        <h1 className="text-6xl md:text-9xl font-black tracking-tighter text-white mb-6 font-heading">
                            HUMANLAB<br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 animate-gradient-x">
                                UNIVERSE
                            </span>
                        </h1>
                        <p className="text-xl md:text-2xl text-gray-400 max-w-2xl leading-relaxed font-sans font-light">
                            단순한 캐릭터가 아닌, 살아 숨 쉬는 <span className="text-white font-semibold">지적 자산(IP)</span>의 세계.<br />
                            <span className="text-gray-500">우리의 기술과 예술이 만나는 지점을 탐험하세요.</span>
                        </p>
                    </div>
                    <div className="text-right hidden md:block">
                        <div className="text-xs font-mono text-blue-500 mb-2 tracking-[0.2em] uppercase">
                            System Status : All Systems Normal
                        </div>
                        <p className="text-xl font-heading font-bold text-white leading-tight">
                            {initialProjects.length} CORE LINEUPS<br />
                            <span className="text-gray-500 font-normal">EXPANDING REALITY</span>
                        </p>
                    </div>
                </motion.div>

                {/* Gallery Grid (Masonry / Bento) */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    {initialProjects.map((project, index) => (
                        <ProjectCardGallery
                            key={project.id}
                            project={project}
                            index={index}
                        />
                    ))}
                </motion.div>

                {/* Bottom Footer Info */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="mt-32 text-center"
                >
                    <p className="text-gray-600 font-mono text-sm">
                        HUMANLAB AI &copy; 2026. ALL RIGHTS RESERVED.<br />
                        DESIGNED FOR THE FUTURE.
                    </p>
                </motion.div>
            </div>
        </div>
    );
}
