"use client";

import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { MarkdownEditor } from "@/components/ui/markdown-editor";
import { ArrowLeft, Save, Image as ImageIcon } from "lucide-react";
import Link from "next/link";

export default function AdStoryEditor() {
    const router = useRouter();
    const searchParams = useSearchParams();
    const isEditMode = searchParams.get("id");

    const [form, setForm] = useState({
        title: isEditMode ? "버추얼 알바로 방문객 300% 증가시키기" : "",
        client: isEditMode ? "Coffee Chain A" : "",
        slug: isEditMode ? "virtual-barista-success" : "",
        content: isEditMode ? "본문 내용이 들어갑니다..." : "",
        tags: isEditMode ? "MARKETING, AI, RETAIL" : ""
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSave = (e: React.FormEvent) => {
        e.preventDefault();
        alert("Success Item Saved! (Mock)");
        router.push("/admin/ad-stories");
    };

    return (
        <div className="max-w-4xl mx-auto space-y-8 pb-24">

            {/* Header */}
            <div className="flex items-center justify-between sticky top-16 z-30 bg-black/80 backdrop-blur pb-4 border-b border-white/10 pt-4 -mt-4">
                <div className="flex items-center gap-4">
                    <Link href="/admin/ad-stories">
                        <Button variant="ghost" size="icon" className="hover:bg-white/10 text-white">
                            <ArrowLeft className="w-5 h-5" />
                        </Button>
                    </Link>
                    <h1 className="text-2xl font-bold">
                        {isEditMode ? "Edit Story" : "New Story"}
                    </h1>
                </div>
                <div className="flex gap-2">
                    <Button variant="outline" className="border-white/20 text-gray-400 hover:text-white">
                        Preview
                    </Button>
                    <Button onClick={handleSave} className="bg-white text-black hover:bg-gray-200 font-bold gap-2">
                        <Save className="w-4 h-4" /> Save Post
                    </Button>
                </div>
            </div>

            {/* Editor Form */}
            <form className="space-y-8">

                <div className="grid grid-cols-2 gap-6">
                    <div className="space-y-2">
                        <label className="text-sm font-bold text-gray-400">Title</label>
                        <Input
                            name="title"
                            value={form.title}
                            onChange={handleChange}
                            placeholder="Enter catchy title..."
                            className="bg-zinc-900 border-white/10 text-lg font-bold"
                        />
                    </div>
                    <div className="space-y-2">
                        <label className="text-sm font-bold text-gray-400">Client Name</label>
                        <Input
                            name="client"
                            value={form.client}
                            onChange={handleChange}
                            placeholder="Client Company Name"
                            className="bg-zinc-900 border-white/10"
                        />
                    </div>
                </div>

                <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-400">Slug (URL)</label>
                    <Input
                        name="slug"
                        value={form.slug}
                        onChange={handleChange}
                        placeholder="my-awesome-story"
                        className="bg-zinc-900 border-white/10 font-mono text-gray-300"
                    />
                </div>

                {/* Hero Image Placeholder */}
                <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-400">Cover Image</label>
                    <div className="h-48 border-2 border-dashed border-white/10 rounded-xl flex flex-col items-center justify-center gap-2 text-gray-500 hover:bg-white/5 hover:border-white/30 transition-all cursor-pointer bg-zinc-900">
                        <ImageIcon className="w-8 h-8" />
                        <span className="text-sm">Click to upload (Mock)</span>
                    </div>
                </div>

                <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-400">Tags (Comma separated)</label>
                    <Input
                        name="tags"
                        value={form.tags}
                        onChange={handleChange}
                        placeholder="TECH, FASHION, AI..."
                        className="bg-zinc-900 border-white/10"
                    />
                </div>

                <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-400">Content (Markdown)</label>
                    <MarkdownEditor
                        name="content"
                        value={form.content}
                        onChange={handleChange}
                        placeholder="# Write your masterpiece here..."
                    />
                </div>
            </form>
        </div>
    );
}
