"use client";

import { useState, useRef } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Textarea, TextareaProps } from "@/components/ui/textarea";
import { Bold, Italic, Heading1, Heading2, Link as LinkIcon, Image as ImageIcon, Eye, Code, List } from "lucide-react";

interface MarkdownEditorProps extends TextareaProps {
    value: string;
    onChange: (e: any) => void;
}

export function MarkdownEditor({ className, value, onChange, ...props }: MarkdownEditorProps) {
    const [isPreview, setIsPreview] = useState(false);
    const textareaRef = useRef<HTMLTextAreaElement>(null);

    const insertText = (before: string, after: string = "") => {
        const textarea = textareaRef.current;
        if (!textarea) return;

        const start = textarea.selectionStart;
        const end = textarea.selectionEnd;
        const selectedText = value.substring(start, end);
        const newText = value.substring(0, start) + before + selectedText + after + value.substring(end);

        // Create a synthetic event to trigger onChange
        const event = {
            target: {
                name: props.name,
                value: newText
            }
        };
        onChange(event);

        // Reset cursor
        setTimeout(() => {
            textarea.focus();
            textarea.setSelectionRange(start + before.length, end + before.length);
        }, 0);
    };

    return (
        <div className={cn("border border-white/10 rounded-md overflow-hidden bg-zinc-900", className)}>
            {/* Toolbar */}
            <div className="flex items-center gap-1 p-2 border-b border-white/10 bg-zinc-950/50 overflow-x-auto">
                <Button type="button" variant="ghost" size="sm" onClick={() => insertText("**", "**")} className="hover:bg-white/10 h-8 w-8 p-0" title="Bold">
                    <Bold className="w-4 h-4" />
                </Button>
                <Button type="button" variant="ghost" size="sm" onClick={() => insertText("_", "_")} className="hover:bg-white/10 h-8 w-8 p-0" title="Italic">
                    <Italic className="w-4 h-4" />
                </Button>
                <div className="w-px h-4 bg-white/10 mx-1" />
                <Button type="button" variant="ghost" size="sm" onClick={() => insertText("# ")} className="hover:bg-white/10 h-8 w-8 p-0" title="Heading 1">
                    <Heading1 className="w-4 h-4" />
                </Button>
                <Button type="button" variant="ghost" size="sm" onClick={() => insertText("## ")} className="hover:bg-white/10 h-8 w-8 p-0" title="Heading 2">
                    <Heading2 className="w-4 h-4" />
                </Button>
                <div className="w-px h-4 bg-white/10 mx-1" />
                <Button type="button" variant="ghost" size="sm" onClick={() => insertText("- ")} className="hover:bg-white/10 h-8 w-8 p-0" title="List">
                    <List className="w-4 h-4" />
                </Button>
                <Button type="button" variant="ghost" size="sm" onClick={() => insertText("```\n", "\n```")} className="hover:bg-white/10 h-8 w-8 p-0" title="Code Block">
                    <Code className="w-4 h-4" />
                </Button>
                <div className="w-px h-4 bg-white/10 mx-1" />
                <Button type="button" variant="ghost" size="sm" onClick={() => insertText("[Link Title](", ")")} className="hover:bg-white/10 h-8 w-8 p-0" title="Link">
                    <LinkIcon className="w-4 h-4" />
                </Button>
                <Button type="button" variant="ghost" size="sm" onClick={() => insertText("![Alt Text](", ")")} className="hover:bg-white/10 h-8 w-8 p-0" title="Image">
                    <ImageIcon className="w-4 h-4" />
                </Button>

                <div className="flex-1" />

                <Button
                    type="button"
                    variant={isPreview ? "secondary" : "ghost"}
                    size="sm"
                    onClick={() => setIsPreview(!isPreview)}
                    className={cn("gap-2 h-8", isPreview ? "bg-white text-black hover:bg-gray-200" : "hover:bg-white/10 text-gray-400")}
                >
                    <Eye className="w-4 h-4" /> {isPreview ? "Edit" : "Preview"}
                </Button>
            </div>

            {/* Editor / Preview Area */}
            <div className="relative min-h-[500px]">
                {isPreview ? (
                    <div className="prose prose-invert max-w-none p-6 text-gray-300">
                        {/* Simple Preview Renderer (No external markdown lib used to avoid deps) */}
                        {value.split('\n').map((line, i) => {
                            if (line.startsWith('# ')) return <h1 key={i} className="text-3xl font-bold text-white mb-4">{line.replace('# ', '')}</h1>
                            if (line.startsWith('## ')) return <h2 key={i} className="text-2xl font-bold text-white mb-3 mt-6">{line.replace('## ', '')}</h2>
                            if (line.startsWith('### ')) return <h3 key={i} className="text-xl font-bold text-white mb-2 mt-4">{line.replace('### ', '')}</h3>
                            if (line.startsWith('- ')) return <li key={i} className="ml-4 list-disc">{line.replace('- ', '')}</li>
                            if (line === '') return <br key={i} />
                            return <p key={i} className="mb-2">{line}</p>
                        })}
                        <div className="mt-8 p-4 bg-blue-500/10 border border-blue-500/20 text-blue-300 rounded text-sm">
                            * This is a simplified preview. Actual styling may vary.
                        </div>
                    </div>
                ) : (
                    <Textarea
                        ref={textareaRef}
                        value={value}
                        onChange={onChange}
                        className="min-h-[500px] border-0 focus-visible:ring-0 rounded-none font-mono text-base bg-transparent p-6 resize-none"
                        {...props}
                    />
                )}
            </div>
        </div>
    );
}
