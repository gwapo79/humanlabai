"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Plus, Edit, Trash2 } from "lucide-react";

// Mock Data
const initialStories = [
    { id: 1, title: "버추얼 알바로 방문객 300% 증가시키기", client: "Coffee Chain A", date: "2025.10.12", status: "PUBLISHED" },
    { id: 2, title: "'그냥 로고'를 '살아있는 마스코트'로 바꾸다", client: "Fashion Brand B", date: "2025.11.05", status: "PUBLISHED" },
    { id: 3, title: "LUMINA 런웨이: 현실과 디지털의 경계를 허물다", client: "Tech Giant C", date: "2025.12.01", status: "DRAFT" },
];

export default function AdminAdStoriesPage() {
    const [stories, setStories] = useState(initialStories);

    const handleDelete = (id: number) => {
        if (confirm("정말 삭제하시겠습니까?")) {
            setStories(stories.filter(s => s.id !== id));
        }
    };

    return (
        <div className="space-y-8">
            <div className="flex justify-between items-center">
                <h1 className="text-3xl font-bold">Ad Stories Manager</h1>
                <Link href="/admin/ad-stories/editor">
                    <Button className="bg-white text-black hover:bg-gray-200 font-bold gap-2">
                        <Plus className="w-4 h-4" /> New Story
                    </Button>
                </Link>
            </div>

            <div className="bg-zinc-900 border border-white/10 rounded-2xl overflow-hidden">
                <table className="w-full text-left text-sm">
                    <thead className="bg-white/5 text-gray-400 font-medium">
                        <tr>
                            <th className="px-6 py-4">TITLE</th>
                            <th className="px-6 py-4">CLIENT</th>
                            <th className="px-6 py-4">DATE</th>
                            <th className="px-6 py-4">STATUS</th>
                            <th className="px-6 py-4 text-right">ACTION</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-white/5">
                        {stories.map((story) => (
                            <tr key={story.id} className="hover:bg-white/5 transition-colors">
                                <td className="px-6 py-4 font-bold text-white mb-1">{story.title}</td>
                                <td className="px-6 py-4 text-gray-400">{story.client}</td>
                                <td className="px-6 py-4 text-gray-500 font-mono text-xs">{story.date}</td>
                                <td className="px-6 py-4">
                                    <span className={`px-2 py-1 rounded text-[10px] font-bold border ${story.status === 'PUBLISHED' ? 'text-green-500 border-green-500/20' : 'text-gray-500 border-gray-500/20'}`}>
                                        {story.status}
                                    </span>
                                </td>
                                <td className="px-6 py-4 text-right flex justify-end gap-2">
                                    <Link href={`/admin/ad-stories/editor?id=${story.id}`}>
                                        <button className="p-2 hover:bg-white/10 rounded text-blue-400">
                                            <Edit className="w-4 h-4" />
                                        </button>
                                    </Link>
                                    <button
                                        onClick={() => handleDelete(story.id)}
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
