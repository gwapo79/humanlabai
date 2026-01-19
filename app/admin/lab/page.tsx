"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Switch } from "@/components/ui/switch";
import { FlaskConical } from "lucide-react";
import { useState } from "react";

// Mock Data
const EXPERIMENTS = [
    { id: '1', title: "Sora vs Gen-3 Benchmarking", category: "GEN_VIDEO", status: "Production", active: true },
    { id: '2', title: "ComfyUI Workflow Automation", category: "GEN_VIDEO", status: "Experimental", active: false },
    { id: '3', title: "Kling AI Skin Tone Test", category: "GEN_VIDEO", status: "Beta", active: true },
    { id: '4', title: "Flux.1 LoRA Brand Tuning", category: "GEN_IMAGE", status: "Production", active: true },
    { id: '5', title: "LangGraph B2B Agent", category: "AI_AGENT", status: "Experimental", active: false },
];

export default function LabController() {
    const [experiments, setExperiments] = useState(EXPERIMENTS);

    const toggleExperiment = (id: string) => {
        setExperiments(experiments.map(ex =>
            ex.id === id ? { ...ex, active: !ex.active } : ex
        ));
    };

    return (
        <div className="space-y-8">
            <div>
                <h2 className="text-3xl font-bold tracking-tight text-white mb-2">Lab Experiments</h2>
                <p className="text-gray-400">R&D 실험 기능 공개 여부 제어 (Feature Flags)</p>
            </div>

            <div className="grid gap-4">
                {experiments.map((ex) => (
                    <Card key={ex.id} className="bg-zinc-900 border-white/10">
                        <CardContent className="flex items-center justify-between p-6">
                            <div className="flex items-center gap-4">
                                <div className={`w-10 h-10 rounded-full flex items-center justify-center ${ex.active ? 'bg-humanlab-neon text-black' : 'bg-zinc-800 text-gray-500'}`}>
                                    <FlaskConical className="w-5 h-5" />
                                </div>
                                <div className="space-y-1">
                                    <div className="flex items-center gap-2">
                                        <h3 className={`font-bold ${ex.active ? 'text-white' : 'text-gray-500'}`}>{ex.title}</h3>
                                        <Badge variant="outline" className="text-[10px] text-gray-500">{ex.category}</Badge>
                                    </div>
                                    <p className="text-xs text-gray-500">Status: {ex.status}</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-4">
                                <span className={`text-sm font-mono font-bold ${ex.active ? 'text-green-500' : 'text-gray-600'}`}>
                                    {ex.active ? 'VISIBLE' : 'HIDDEN'}
                                </span>
                                <Switch
                                    checked={ex.active}
                                    onCheckedChange={() => toggleExperiment(ex.id)}
                                />
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
    );
}
