"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Plus, Edit, Trash2, Beaker } from "lucide-react";

// Mock Data (Syncing with public page data structure)
const initialExperiments = [
    {
        id: 1,
        code: "EXP-001",
        title: "감정 지능형 TTS 엔진 최적화",
        category: "VOICE SYNTHESIS",
        date: "2025.10.15",
        status: "SUCCESS"
    },
    {
        id: 2,
        code: "EXP-002",
        title: "실시간 모션 캡처 레이턴시 감소",
        category: "MOTION CAPTURE",
        date: "2025.11.02",
        status: "IN_PROGRESS"
    },
    {
        id: 3,
        code: "EXP-003",
        title: "가상 인플루언서 페르소나 학습",
        category: "LLM FINE-TUNING",
        date: "2025.12.10",
        status: "FAILED"
    }
];

export default function AdminLabPage() {
    const [experiments, setExperiments] = useState(initialExperiments);

    const handleDelete = (id: number) => {
        if (confirm("정말 삭제하시겠습니까? (Mock)")) {
            setExperiments(experiments.filter(e => e.id !== id));
        }
    };

    return (
        <div className="space-y-8">
            <div className="flex justify-between items-center">
                <h1 className="text-3xl font-bold flex items-center gap-3">
                    <Beaker className="w-8 h-8 text-blue-500" />
                    Lab Notes Manager
                </h1>
                <Link href="/admin/lab/editor">
                    <Button className="bg-white text-black hover:bg-gray-200 font-bold gap-2">
                        <Plus className="w-4 h-4" /> New Experiment
                    </Button>
                </Link>
            </div>

            <div className="bg-zinc-900 border border-white/10 rounded-2xl overflow-hidden">
                <table className="w-full text-left text-sm">
                    <thead className="bg-white/5 text-gray-400 font-medium">
                        <tr>
                            <th className="px-6 py-4">CODE</th>
                            <th className="px-6 py-4">TITLE</th>
                            <th className="px-6 py-4">CATEGORY</th>
                            <th className="px-6 py-4">STATUS</th>
                            <th className="px-6 py-4 text-right">ACTION</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-white/5">
                        {experiments.map((exp) => (
                            <tr key={exp.id} className="hover:bg-white/5 transition-colors">
                                <td className="px-6 py-4 font-mono text-blue-400">{exp.code}</td>
                                <td className="px-6 py-4 font-bold text-white mb-1">{exp.title}</td>
                                <td className="px-6 py-4 text-gray-400 text-xs tracking-wider">{exp.category}</td>
                                <td className="px-6 py-4">
                                    <span className={`px-2 py-1 rounded text-[10px] font-bold border ${getStatusColor(exp.status)}`}>
                                        {exp.status}
                                    </span>
                                </td>
                                <td className="px-6 py-4 text-right flex justify-end gap-2">
                                    <Link href={`/admin/lab/editor?id=${exp.id}`}>
                                        <button className="p-2 hover:bg-white/10 rounded text-blue-400">
                                            <Edit className="w-4 h-4" />
                                        </button>
                                    </Link>
                                    <button
                                        onClick={() => handleDelete(exp.id)}
                                        className="p-2 hover:bg-white/10 rounded text-red-400"
                                    >
                                        <Trash2 className="w-4 h-4" />
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

function getStatusColor(status: string) {
    if (status === "SUCCESS") return "text-green-500 border-green-500/20";
    if (status === "FAILED") return "text-red-500 border-red-500/20";
    return "text-yellow-500 border-yellow-500/20";
}
