"use client";

import { Circle, CheckCircle2, AlertCircle, Clock } from "lucide-react";

const timelineData = [
    {
        id: 1,
        date: "2026.01.10",
        title: "Global Campaign Launch",
        desc: "Lumina x Brand Z collaboration launched worldwide.",
        type: "milestone",
        status: "completed"
    },
    {
        id: 2,
        date: "2025.12.28",
        title: "Voice Synthesis V3 Update",
        desc: "Updated core voice model for better emotional range (Joy/Sadness connected).",
        type: "update",
        status: "completed"
    },
    {
        id: 3,
        date: "2025.12.15",
        title: "Instagram 1M Followers Reached",
        desc: "Organic growth milestone achieved 3 months ahead of schedule.",
        type: "milestone",
        status: "completed"
    },
    {
        id: 4,
        date: "2025.11.01",
        title: "Concept Art Finalized",
        desc: "Final approval on 'Cyber-Street' look by Creative Director.",
        type: "phase",
        status: "completed"
    }
];

export function JourneyTab() {
    return (
        <div className="max-w-3xl">
            <h3 className="text-lg font-bold text-white mb-8">Development Log</h3>

            <div className="relative border-l border-white/10 ml-3 space-y-12">
                {timelineData.map((item) => (
                    <div key={item.id} className="relative pl-8 group">
                        {/* Dot */}
                        <div className={`absolute -left-[5px] top-1.5 w-2.5 h-2.5 rounded-full border-2 border-black ${item.type === 'milestone' ? 'bg-blue-500' : 'bg-gray-600'
                            }`} />

                        <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
                            <div>
                                <span className="text-xs font-mono text-gray-500 block mb-1">{item.date}</span>
                                <h4 className={`text-lg font-bold mb-2 ${item.type === 'milestone' ? 'text-blue-400' : 'text-white'}`}>
                                    {item.title}
                                </h4>
                                <p className="text-gray-400 text-sm leading-relaxed max-w-xl">
                                    {item.desc}
                                </p>
                            </div>

                            {/* Status Badge */}
                            <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 shrink-0">
                                <CheckCircle2 className="w-3 h-3 text-green-500" />
                                <span className="text-[10px] font-bold text-gray-400 uppercase">{item.status}</span>
                            </div>
                        </div>
                    </div>
                ))}

                {/* Future Node */}
                <div className="relative pl-8 opacity-50">
                    <div className="absolute -left-[5px] top-1.5 w-2.5 h-2.5 rounded-full border-2 border-black bg-gray-800" />
                    <span className="text-xs font-mono text-gray-600">Upcoming...</span>
                </div>
            </div>
        </div>
    );
}
