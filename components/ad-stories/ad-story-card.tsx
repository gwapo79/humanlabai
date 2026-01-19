"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight, Zap } from "lucide-react";
import { cn } from "@/lib/utils";
import { AdStory } from "@/constants/adStoriesData";

interface AdStoryCardProps {
    story: AdStory;
}

export function AdStoryCard({ story }: AdStoryCardProps) {
    // Daily Badge Logic
    const today = new Date();
    const storyDate = new Date(story.date);
    const isToday = today.toDateString() === storyDate.toDateString();

    // Category Colors (for visual distinction)
    const categoryColorMap: Record<string, string> = {
        'TREND_2026': 'text-pink-500 border-pink-500/30 bg-pink-500/10',
        'AI_MARKETING': 'text-blue-500 border-blue-500/30 bg-blue-500/10',
        'UX_PSYCHOLOGY': 'text-purple-500 border-purple-500/30 bg-purple-500/10',
        'BRAND_STRATEGY': 'text-yellow-500 border-yellow-500/30 bg-yellow-500/10',
        'CULTURE': 'text-green-500 border-green-500/30 bg-green-500/10',
    };

    const categoryColor = categoryColorMap[story.category] || 'text-gray-500 border-gray-500/30 bg-gray-500/10';

    return (
        <Link href={`/ad-stories/${story.id}`}>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                whileHover={{ y: -5 }}
                className="group relative flex flex-col justify-between p-6 rounded-2xl bg-zinc-900 border border-zinc-800 hover:border-zinc-600 transition-all h-full cursor-pointer"
            >
                {/* Hover Gradient Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl pointer-events-none" />

                <div>
                    {/* Header: Date & Category */}
                    <div className="flex justify-between items-start mb-4">
                        <span className={cn("text-[10px] font-bold tracking-wider px-2 py-1 rounded", categoryColor)}>
                            {story.category.replace('_', ' ')}
                        </span>
                        <div className="flex items-center gap-2">
                            {isToday && (
                                <span className="flex items-center gap-1 text-[10px] font-bold text-yellow-400 animate-pulse bg-yellow-400/10 px-2 py-0.5 rounded-full border border-yellow-400/20">
                                    <Zap className="w-3 h-3 fill-yellow-400" />
                                    NEW
                                </span>
                            )}
                            <span className="text-xs text-gray-500 font-mono">{story.date}</span>
                        </div>
                    </div>

                    {/* Content */}
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors leading-tight">
                        {story.title}
                    </h3>
                    <p className="text-gray-400 text-sm leading-relaxed mb-6 line-clamp-3">
                        {story.summary}
                    </p>
                </div>

                {/* Footer: Tags & Action */}
                <div className="flex justify-between items-end mt-auto pt-4 border-t border-white/5">
                    <div className="flex flex-wrap gap-1.5">
                        {story.tags.slice(0, 3).map(tag => (
                            <span key={tag} className="text-[10px] text-zinc-500 bg-zinc-950 px-1.5 py-0.5 rounded border border-zinc-800">
                                {tag}
                            </span>
                        ))}
                    </div>
                    <div className="p-2 rounded-full bg-white/5 group-hover:bg-white text-white group-hover:text-black transition-all">
                        <ArrowUpRight className="w-4 h-4" />
                    </div>
                </div>
            </motion.div>
        </Link>
    );
}
