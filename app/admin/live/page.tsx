"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Trash2, Plus, Instagram, Youtube, FileText } from "lucide-react";

// Mock Data mimicking Prisma logs
const INITIAL_LOGS = [
    { id: '1', source: 'Instagram', title: "LUMINA 'Magnetic' Cover", date: '2026-01-15', tags: "LUMINA, DANCE" },
    { id: '2', source: 'YouTube', title: "Vlog EP.3 Uploaded", date: '2026-01-14', tags: "LUMINA, VLOG" },
    { id: '3', source: 'Log', title: "Ad Campaign Phase 2", date: '2026-01-12', tags: "ADS, PETKAGE" },
];

export default function LiveManager() {
    const [logs, setLogs] = useState(INITIAL_LOGS);
    const [form, setForm] = useState({ title: "", tags: "", source: "Log" });

    const handleAdd = () => {
        if (!form.title) return;
        const newLog = {
            id: Date.now().toString(),
            title: form.title,
            tags: form.tags,
            source: form.source,
            date: new Date().toISOString().split('T')[0]
        };
        setLogs([newLog, ...logs]);
        setForm({ title: "", tags: "", source: "Log" });
    };

    const handleDelete = (id: string) => {
        setLogs(logs.filter(l => l.id !== id));
    };

    return (
        <div className="space-y-8">
            <div className="flex justify-between items-end">
                <div>
                    <h2 className="text-3xl font-bold tracking-tight text-white mb-2">Live Logs</h2>
                    <p className="text-gray-400">실시간 액티비티 로그 관리</p>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* QUICK ADD FORM */}
                <Card className="bg-zinc-900 border-white/10 text-white h-fit">
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                            <Plus className="w-5 h-5 text-humanlab-neon" /> Quick Add
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <div className="space-y-2">
                            <label className="text-xs font-bold text-gray-400">SOURCE</label>
                            <div className="flex gap-2">
                                {['Instagram', 'YouTube', 'Log'].map(src => (
                                    <button
                                        key={src}
                                        onClick={() => setForm({ ...form, source: src })}
                                        className={`flex-1 py-2 rounded text-xs font-bold border ${form.source === src ? 'bg-white text-black border-white' : 'border-white/20 hover:bg-white/10'}`}
                                    >
                                        {src}
                                    </button>
                                ))}
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="text-xs font-bold text-gray-400">TITLE</label>
                            <Input
                                placeholder="활동 내역 제목"
                                className="bg-black/50 border-white/10"
                                value={form.title}
                                onChange={(e) => setForm({ ...form, title: e.target.value })}
                            />
                        </div>

                        <div className="space-y-2">
                            <label className="text-xs font-bold text-gray-400">TAGS (Comma separated)</label>
                            <Input
                                placeholder="LUMINA, VLOG"
                                className="bg-black/50 border-white/10"
                                value={form.tags}
                                onChange={(e) => setForm({ ...form, tags: e.target.value })}
                            />
                        </div>

                        <Button onClick={handleAdd} className="w-full font-bold bg-humanlab-neon text-black hover:bg-humanlab-neon/80">
                            ADD LOG
                        </Button>
                    </CardContent>
                </Card>

                {/* LOG LIST */}
                <div className="lg:col-span-2 space-y-4">
                    {logs.map((log) => (
                        <div key={log.id} className="group flex items-center gap-4 bg-zinc-900/50 p-4 rounded-lg border border-white/5 hover:border-white/20 transition-colors">
                            <div className="w-12 h-12 rounded-full bg-black flex items-center justify-center shrink-0 border border-white/10">
                                {log.source === 'Instagram' && <Instagram className="w-5 h-5 text-pink-500" />}
                                {log.source === 'YouTube' && <Youtube className="w-5 h-5 text-red-500" />}
                                {log.source === 'Log' && <FileText className="w-5 h-5 text-gray-400" />}
                            </div>
                            <div className="flex-1 min-w-0">
                                <div className="flex items-center gap-2 mb-1">
                                    <span className="text-xs font-mono text-gray-500">{log.date}</span>
                                    <Badge variant="outline" className="text-[10px] h-5 px-1 py-0 border-white/10 text-gray-400 rounded-sm">
                                        {log.source.toUpperCase()}
                                    </Badge>
                                </div>
                                <p className="font-bold text-white truncate">{log.title}</p>
                                <div className="flex gap-2 mt-1">
                                    {log.tags.split(',').map(tag => (
                                        <span key={tag} className="text-[10px] text-gray-500 bg-white/5 px-1.5 rounded">#{tag.trim()}</span>
                                    ))}
                                </div>
                            </div>
                            <Button
                                variant="ghost"
                                size="icon"
                                className="text-gray-600 hover:text-red-500 hover:bg-red-500/10 opacity-0 group-hover:opacity-100 transition-opacity"
                                onClick={() => handleDelete(log.id)}
                            >
                                <Trash2 className="w-4 h-4" />
                            </Button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
