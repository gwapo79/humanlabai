"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useState } from "react";

const filters = [
    { id: "all", label: "ALL SOURCE" },
    { id: "instagram", label: "INSTAGRAM" },
    { id: "youtube", label: "YOUTUBE" },
    { id: "blog", label: "LOGS" },
];

export function LiveFilter() {
    const [activeFilter, setActiveFilter] = useState("all");

    return (
        <div className="sticky top-16 z-40 bg-black/80 backdrop-blur-md border-b border-white/10 py-4">
            <div className="container mx-auto px-4 flex flex-wrap gap-2 items-center justify-between">
                <div className="flex gap-2 overflow-x-auto no-scrollbar pb-2 md:pb-0">
                    {filters.map((filter) => (
                        <button
                            key={filter.id}
                            onClick={() => setActiveFilter(filter.id)}
                            className={cn(
                                "px-4 py-1.5 rounded-full text-sm font-medium transition-all border",
                                activeFilter === filter.id
                                    ? "bg-white text-black border-white"
                                    : "bg-transparent text-gray-400 border-white/10 hover:border-white/30 hover:text-white"
                            )}
                        >
                            {filter.label}
                        </button>
                    ))}
                </div>

                <div className="hidden md:flex items-center gap-4 text-xs text-gray-500 font-mono">
                    <span>PROJECT: ALL</span>
                    <span>•</span>
                    <span>DATE: 2026.01</span>
                </div>
            </div>
        </div>
    );
}
