"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Plus, Trash2, Video } from "lucide-react";

// Mock Data
const initialLogs = [
    { id: 1, type: "INSTAGRAM", project: "LUMINA", content: "New reel uploaded: 'Night Walk'", time: "10 min ago" },
    { id: 2, type: "YOUTUBE", project: "PETKAGE", content: "Live Stream started", time: "25 min ago" },
    { id: 3, type: "LOGS", project: "SYSTEM", content: "Render farm usage at 80%", time: "1 hour ago" },
];

export default function AdminLivePage() {
    const [logs, setLogs] = useState(initialLogs);
    const [newItem, setNewItem] = useState("");

    const handleAdd = (e: React.FormEvent) => {
        e.preventDefault();
        if (!newItem) return;
        const newLog = {
            id: Date.now(),
            type: "ADMIN",
            project: "SYSTEM",
            content: newItem,
            time: "Just now"
        };
        setLogs([newLog, ...logs]);
        setNewItem("");
    };

    const handleDelete = (id: number) => {
        setLogs(logs.filter(l => l.id !== id));
    };

    return (
        <div className="space-y-8">
            <div className="flex justify-between items-center">
                <h1 className="text-3xl font-bold">Live Feed Manager</h1>
                <Button className="bg-white text-black hover:bg-gray-200 gap-2">
                    <Video className="w-4 h-4" /> Toggle Live Status
                </Button>
            </div>

            {/* Quick Add Form */}
            <div className="bg-zinc-900 border border-white/10 p-6 rounded-2xl">
                <h3 className="text-sm font-bold text-gray-400 mb-4">POST NEW LOG</h3>
                <form onSubmit={handleAdd} className="flex gap-4">
                    <Input
                        placeholder="Type a manual system log..."
                        value={newItem}
                        onChange={(e) => setNewItem(e.target.value)}
                        className="bg-black border-white/10"
                    />
                    <Button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white">
                        <Plus className="w-4 h-4 mr-2" /> Post
                    </Button>
                </form>
            </div>

            {/* Logs Table */}
            <div className="bg-zinc-900 border border-white/10 rounded-2xl overflow-hidden">
                <table className="w-full text-left text-sm">
                    <thead className="bg-white/5 text-gray-400 font-medium">
                        <tr>
                            <th className="px-6 py-4">TYPE</th>
                            <th className="px-6 py-4">PROJECT</th>
                            <th className="px-6 py-4">CONTENT</th>
                            <th className="px-6 py-4">TIME</th>
                            <th className="px-6 py-4 text-right">ACTION</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-white/5">
                        {logs.map((log) => (
                            <tr key={log.id} className="hover:bg-white/5 transition-colors">
                                <td className="px-6 py-4 font-mono text-blue-400">{log.type}</td>
                                <td className="px-6 py-4 font-bold">{log.project}</td>
                                <td className="px-6 py-4">{log.content}</td>
                                <td className="px-6 py-4 text-gray-500">{log.time}</td>
                                <td className="px-6 py-4 text-right">
                                    <button
                                        onClick={() => handleDelete(log.id)}
                                        className="text-gray-500 hover:text-red-500 transition-colors"
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
