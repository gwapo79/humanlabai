"use client";

import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { MarkdownEditor } from "@/components/ui/markdown-editor";
import { ArrowLeft, Save, Beaker } from "lucide-react";
import Link from "next/link";

export default function LabEditor() {
    const router = useRouter();
    const searchParams = useSearchParams();
    const isEditMode = searchParams.get("id");

    const [form, setForm] = useState({
        title: isEditMode ? "감정 지능형 TTS 엔진 최적화" : "",
        code: isEditMode ? "EXP-001" : "",
        category: isEditMode ? "VOICE SYNTHESIS" : "",
        status: isEditMode ? "SUCCESS" : "IN_PROGRESS",
        content: isEditMode ? "### 실험 목적\n더 자연스러운 음성 합성을 위해...\n\n### 결과\n성공적인 결과를 얻었습니다." : ""
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | any>) => {
        const { name, value } = e.target;
        setForm({ ...form, [name]: value });
    };

    const handleSave = (e: React.FormEvent) => {
        e.preventDefault();
        alert("Lab Note Saved! (Mock)");
        router.push("/admin/lab");
    };

    return (
        <div className="max-w-4xl mx-auto space-y-8 pb-24">

            {/* Header */}
            <div className="flex items-center justify-between sticky top-16 z-30 bg-black/80 backdrop-blur pb-4 border-b border-white/10 pt-4 -mt-4">
                <div className="flex items-center gap-4">
                    <Link href="/admin/lab">
                        <Button variant="ghost" size="icon" className="hover:bg-white/10 text-white">
                            <ArrowLeft className="w-5 h-5" />
                        </Button>
                    </Link>
                    <h1 className="text-2xl font-bold flex items-center gap-2">
                        <Beaker className="w-6 h-6 text-gray-400" />
                        {isEditMode ? "Edit Experiment" : "New Experiment"}
                    </h1>
                </div>
                <div className="flex gap-2">
                    <Button onClick={handleSave} className="bg-white text-black hover:bg-gray-200 font-bold gap-2">
                        <Save className="w-4 h-4" /> Save Report
                    </Button>
                </div>
            </div>

            {/* Editor Form */}
            <form className="space-y-8">

                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    <div className="col-span-2 space-y-2">
                        <label className="text-sm font-bold text-gray-400">Title</label>
                        <Input
                            name="title"
                            value={form.title}
                            onChange={handleChange}
                            placeholder="Experiment Title"
                            className="bg-zinc-900 border-white/10 text-lg font-bold"
                        />
                    </div>
                    <div className="space-y-2">
                        <label className="text-sm font-bold text-gray-400">Exp. Code</label>
                        <Input
                            name="code"
                            value={form.code}
                            onChange={handleChange}
                            placeholder="EXP-000"
                            className="bg-zinc-900 border-white/10 font-mono text-blue-400"
                        />
                    </div>
                    <div className="space-y-2">
                        <label className="text-sm font-bold text-gray-400">Status</label>
                        <select
                            name="status"
                            value={form.status}
                            onChange={handleChange}
                            className="w-full h-10 rounded-md border border-white/10 bg-zinc-900 px-3 py-2 text-sm text-white focus:outline-none focus:ring-1 focus:ring-white"
                        >
                            <option value="IN_PROGRESS">IN PROGRESS</option>
                            <option value="SUCCESS">SUCCESS</option>
                            <option value="FAILED">FAILED</option>
                            <option value="HOLD">ON HOLD</option>
                        </select>
                    </div>
                </div>

                <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-400">Category Tag</label>
                    <Input
                        name="category"
                        value={form.category}
                        onChange={handleChange}
                        placeholder="e.g. VOICE SYNTHESIS"
                        className="bg-zinc-900 border-white/10"
                    />
                </div>

                <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-400">Research Notes (Markdown)</label>
                    <MarkdownEditor
                        name="content"
                        value={form.content}
                        onChange={handleChange}
                        placeholder="### Hypothesis..."
                    />
                </div>
            </form>
        </div>
    );
}
