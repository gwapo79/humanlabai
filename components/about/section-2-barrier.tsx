"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

// Data: The "Subscription Hell" List
const TOOLS = [
    // Row 1: Video & Image (High Cost)
    [
        { name: "Runway", price: "$95", category: "Video" },
        { name: "Midjourney", price: "$60", category: "Image" },
        { name: "Pika", price: "$58", category: "Video" },
        { name: "Adobe CC", price: "$54", category: "Design" },
        { name: "Synthesia", price: "$67", category: "Video" },
        { name: "Leonardo.ai", price: "$48", category: "Image" },
        { name: "HeyGen", price: "$29", category: "Video" },
        { name: "DALL·E 3", price: "$20", category: "Image" },
        { name: "Stable Diff.", price: "$20", category: "Image" },
        { name: "Sora", price: "TBD", category: "Video" },
    ],
    // Row 2: Text & Audio (Subscription Fatigue)
    [
        { name: "Jasper", price: "$49", category: "Text" },
        { name: "Copy.ai", price: "$36", category: "Text" },
        { name: "ChatGPT Plus", price: "$20", category: "Text" },
        { name: "Claude Pro", price: "$20", category: "Text" },
        { name: "Udio", price: "$30", category: "Audio" },
        { name: "Murf.ai", price: "$29", category: "Audio" },
        { name: "Suno", price: "$24", category: "Audio" },
        { name: "ElevenLabs", price: "$22", category: "Audio" },
        { name: "Grok", price: "$16", category: "Text" },
        { name: "Perplexity", price: "$20", category: "Text" },
    ],
    // Row 3: Dev & Productivity (Hidden Costs)
    [
        { name: "GitHub Copilot", price: "$19", category: "Dev" },
        { name: "Cursor", price: "$20", category: "Dev" },
        { name: "Replit", price: "$20", category: "Dev" },
        { name: "Webflow", price: "$23", category: "Design" },
        { name: "Framer", price: "$20", category: "Design" },
        { name: "Notion AI", price: "$10", category: "Prod" },
        { name: "Canva Pro", price: "$15", category: "Design" },
        { name: "Linear", price: "$12", category: "Prod" },
        { name: "V0.dev", price: "$20", category: "Dev" },
        { name: "Zapier", price: "$29", category: "Auto" },
    ]
];

const MarqueeRow = ({ items, direction = "left", speed = 20 }: { items: typeof TOOLS[0], direction?: "left" | "right", speed?: number }) => {
    return (
        <div className="flex overflow-hidden w-full py-2 relative z-10 mix-blend-overlay opacity-80 hover:opacity-100 transition-opacity">
            <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black z-20" />
            <motion.div
                initial={{ x: direction === "left" ? "0%" : "-50%" }}
                animate={{ x: direction === "left" ? "-50%" : "0%" }}
                transition={{ repeat: Infinity, ease: "linear", duration: speed }}
                className="flex gap-4 flex-nowrap"
            >
                {[...items, ...items, ...items, ...items].map((tool, idx) => (
                    <div key={`${tool.name}-${idx}`} className="flex items-center gap-2 bg-white/5 border border-white/10 backdrop-blur-sm rounded-full px-4 py-2 shrink-0">
                        <div className={`w-2 h-2 rounded-full ${tool.category === 'Video' ? 'bg-purple-500' : tool.category === 'Image' ? 'bg-pink-500' : 'bg-blue-500'}`} />
                        <span className="text-gray-200 font-medium text-sm md:text-base whitespace-nowrap font-sans">{tool.name}</span>
                        <span className="text-red-500 font-bold text-sm md:text-base whitespace-nowrap">{tool.price}</span>
                    </div>
                ))}
            </motion.div>
        </div>
    );
};

export function Section2Barrier() {
    const containerRef = useRef<HTMLElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    // Parallax effect
    const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

    return (
        <section ref={containerRef} className="min-h-screen bg-black relative flex flex-col items-center justify-center overflow-hidden py-24">

            {/* Background Image: AI Failure Trap */}
            <div className="absolute inset-0 z-0">
                <motion.div style={{ y }} className="relative w-full h-[120%] -top-[10%]">
                    <Image
                        src="/photo-ai-trap.png"
                        alt="AI Subscription Trap"
                        fill
                        className="object-cover object-center opacity-60"
                        priority
                        unoptimized
                    />
                    {/* Cool/Sharp Overlay: Blue/Black gradient to match screen light */}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-900/60 to-black/90 mix-blend-multiply" />
                </motion.div>
            </div>

            {/* Marquee Container - "The Wall of Logos" */}
            <div className="absolute inset-x-0 top-[15%] md:top-1/4 z-0 flex flex-col gap-6 md:gap-8 rotate-[-2deg] scale-110 pointer-events-none">
                <MarqueeRow items={TOOLS[0]} direction="left" speed={40} />
                <MarqueeRow items={TOOLS[1]} direction="right" speed={50} />
                <MarqueeRow items={TOOLS[2]} direction="left" speed={35} />
            </div>

            {/* Content Header */}
            <div className="relative z-10 w-full max-w-7xl mx-auto px-4 h-full flex flex-col justify-center items-center text-center mt-20">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="max-w-4xl bg-black/40 backdrop-blur-sm p-8 rounded-3xl border border-white/5 shadow-2xl"
                >
                    <h2 className="text-4xl md:text-6xl font-bold text-red-500 mb-8 drop-shadow-2xl leading-tight">
                        AI 도입, '도구'가 아니라<br /> '전문가'가 필요합니다
                    </h2>

                    <p className="text-xl md:text-2xl text-gray-100 leading-relaxed font-light break-keep">
                        매달 쌓이는 구독료, 끝없는 프롬프트 학습, 불안정한 퀄리티.<br />
                        단순히 툴을 구독하는 것만으로는 문제를 해결할 수 없습니다.<br className="hidden md:block" />
                        <span className="text-white font-bold mt-4 block text-2xl md:text-3xl">복잡한 기술 학습 비용과 시행착오, HumanLab AI가 0으로 만들어 드립니다.</span>
                    </p>
                </motion.div>
            </div>

        </section>
    );
}
