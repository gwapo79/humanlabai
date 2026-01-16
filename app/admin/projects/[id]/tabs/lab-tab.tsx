"use client";

import { Badge } from "@/components/ui/badge";
import { Beaker, Youtube, FileVideo, AlertTriangle, Check, Clock } from "lucide-react";

const experiments = [
    {
        id: 1,
        code: "EXP-042",
        title: "Real-time Hair Physics Test",
        type: "R&D",
        status: "SUCCESS",
        result: "Render time reduced by 15% with new shader.",
        tags: ["PHYSICS", "UNITY"]
    },
    {
        id: 2,
        code: "ADS-101",
        title: "Energy Drink CF (Concept A)",
        type: "AD TEST",
        status: "FAILED",
        result: "User feedback indicated motion was too 'stiff'. Discarded.",
        tags: ["ADVERTISEMENT", "MOTION"]
    },
    {
        id: 3,
        code: "EXP-039",
        title: "Interactive Live Streaming (Twitch)",
        type: "PROTOTYPE",
        status: "IN PROGRESS",
        result: "Testing latency issues with 500+ concurrent viewers.",
        tags: ["STREAMING", "BACKEND"]
    }
];

export function LabTab() {
    return (
        <div className="space-y-8">
            <div className="flex justify-between items-end">
                <div>
                    <h3 className="text-lg font-bold text-white mb-2">The Laboratory</h3>
                    <p className="text-gray-400 text-sm">
                        Tracking R&D progress, A/B tests, and failed attempts.
                    </p>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {experiments.map((exp) => (
                    <div key={exp.id} className="bg-zinc-950 border border-white/10 p-6 rounded-xl flex flex-col h-full hover:border-white/20 transition-colors group">
                        <div className="flex justify-between items-start mb-4">
                            <span className="font-mono text-xs text-blue-500 bg-blue-500/10 px-2 py-0.5 rounded">
                                {exp.code}
                            </span>
                            <StatusIcon status={exp.status} />
                        </div>

                        <h4 className="font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
                            {exp.title}
                        </h4>

                        <p className="text-gray-400 text-sm mb-6 flex-1 border-t border-white/5 pt-4 mt-2">
                            <span className="block text-xs font-bold text-gray-600 mb-1">RESULT:</span>
                            {exp.result}
                        </p>

                        <div className="flex gap-2 flex-wrap">
                            {exp.tags.map(tag => (
                                <span key={tag} className="text-[10px] font-mono border border-white/10 px-2 py-1 rounded text-gray-500">
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </div>
                ))}

                {/* New Experiment Placeholder */}
                <div className="border border-dashed border-white/10 rounded-xl flex flex-col items-center justify-center text-gray-600 p-6 gap-2 hover:bg-white/5 hover:border-white/20 hover:text-white transition-all cursor-pointer min-h-[250px]">
                    <Beaker className="w-8 h-8 opacity-50" />
                    <span className="text-sm font-bold">New Experiment</span>
                </div>
            </div>
        </div>
    );
}

function StatusIcon({ status }: { status: string }) {
    if (status === "SUCCESS") return <Check className="w-4 h-4 text-green-500" />;
    if (status === "FAILED") return <AlertTriangle className="w-4 h-4 text-red-500" />;
    return <Clock className="w-4 h-4 text-yellow-500" />; // IN PROGRESS
}
