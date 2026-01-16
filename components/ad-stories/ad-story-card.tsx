"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface AdStoryProps {
    id: string;
    slug: string;
    client: string;
    title: string;
    tags: string[];
    image: string; // Placeholder color class for now
}

export function AdStoryCard({ story }: { story: AdStoryProps }) {
    return (
        <Link href={`/ad-stories/${story.slug}`}>
            <motion.div
                whileHover={{ y: -5 }}
                className="group cursor-pointer space-y-4"
            >
                <div className={cn("aspect-video rounded-xl overflow-hidden relative", story.image)}>
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors" />
                    <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity p-2 bg-white rounded-full">
                        <ArrowUpRight className="w-4 h-4 text-black" />
                    </div>
                </div>

                <div className="space-y-2">
                    <div className="flex gap-2">
                        {story.tags.map(tag => (
                            <span key={tag} className="text-xs font-mono text-gray-500 border border-white/10 px-2 py-0.5 rounded">
                                {tag}
                            </span>
                        ))}
                    </div>
                    <h3 className="text-xl font-bold text-white group-hover:underline decoration-white/30 underline-offset-4">
                        {story.title}
                    </h3>
                    <p className="text-gray-400 text-sm">Client: {story.client}</p>
                </div>
            </motion.div>
        </Link>
    );
}
