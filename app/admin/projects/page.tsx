"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Edit, Image as ImageIcon } from "lucide-react";

// Mock Data
const initialProjects = [
    { id: 1, title: "LUMINA", category: "METAHUMAN", status: "GROWING" },
    { id: 2, title: "PETKAGE", category: "BRAND CHARACTER", status: "ACTIVE" },
    { id: 3, title: "Dr. K", category: "AI EXPERT", status: "DEVELOPING" },
    { id: 4, title: "Chunsik Store", category: "LOCAL BRAND", status: "ACTIVE" },
];

export default function AdminProjectsPage() {
    const [projects, setProjects] = useState(initialProjects);

    const toggleStatus = (id: number) => {
        setProjects(projects.map(p => {
            if (p.id === id) {
                const newStatus = p.status === "ACTIVE" ? "GROWING" : "ACTIVE";
                return { ...p, status: newStatus };
            }
            return p;
        }));
    };

    return (
        <div className="space-y-8">
            <h1 className="text-3xl font-bold">Project Manager</h1>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {projects.map((project) => (
                    <div key={project.id} className="bg-zinc-900 border border-white/10 p-6 rounded-2xl relative group">
                        <div className="flex justify-between items-start mb-4">
                            <div>
                                <span className="text-xs text-gray-500 font-mono block mb-1">{project.category}</span>
                                <h3 className="text-xl font-bold text-white">{project.title}</h3>
                            </div>
                            <div className={`px-2 py-1 rounded text-[10px] font-bold border ${getContentColor(project.status)}`}>
                                {project.status}
                            </div>
                        </div>

                        <div className="flex gap-2 mt-8">
                            <Button
                                size="sm"
                                variant="outline"
                                className="w-full border-white/10 hover:bg-white/10 text-gray-300"
                                onClick={() => toggleStatus(project.id)}
                            >
                                <Edit className="w-3 h-3 mr-2" /> Change Status
                            </Button>
                            <Button size="sm" variant="ghost" className="border border-white/10 hover:bg-white/10">
                                <ImageIcon className="w-3 h-3" />
                            </Button>
                        </div>
                    </div>
                ))}

                {/* Add New Placeholder */}
                <div className="border border-dashed border-white/20 rounded-2xl flex items-center justify-center p-6 hover:bg-white/5 cursor-pointer transition-colors min-h-[180px]">
                    <span className="text-gray-500 text-sm font-medium">+ Add New Project</span>
                </div>
            </div>
        </div>
    );
}

function getContentColor(status: string) {
    switch (status) {
        case "ACTIVE": return "text-green-500 border-green-500/20 bg-green-500/10";
        case "GROWING": return "text-blue-500 border-blue-500/20 bg-blue-500/10";
        case "DEVELOPING": return "text-yellow-500 border-yellow-500/20 bg-yellow-500/10";
        default: return "text-gray-500";
    }
}
