"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, FileText, ChevronRight } from "lucide-react";
import Link from "next/link";
import { ATELIER_LORE } from "@/constants/atelierLore";
import { AtelierShowcase } from "@/components/projects/atelier-showcase";

export default function AtelierProjectPage() {
    const [activeTab, setActiveTab] = useState<number>(0);
    const [syncRate, setSyncRate] = useState<number>(0);
    const [barWidth, setBarWidth] = useState<number>(0);

    // Fix hydration mismatch by generating random values on client only
    useEffect(() => {
        setSyncRate(Math.floor(Math.random() * 20 + 80));
        setBarWidth(Math.floor(Math.random() * 40 + 60));
    }, [activeTab]);

    const activePersona = ATELIER_LORE.personas[activeTab];

    return (
        <div className={`min-h-screen bg-black text-white selection:bg-white/30`}>
            {/* Background Gradient Dynamic based on Active Persona */}
            <div className={`fixed inset-0 bg-gradient-to-br ${activePersona.color} opacity-40 transition-colors duration-1000 -z-10`} />

            {/* NAVIGATION */}
            <nav className="fixed top-24 left-0 right-0 z-50 p-6 flex justify-between items-center mix-blend-difference">
                <Link href="/projects" className="flex items-center gap-2 hover:opacity-70 transition-opacity">
                    <ArrowLeft className="w-5 h-5" />
                    <span className="font-bold tracking-widest">PROJECTS</span>
                </Link>
                <div className="flex items-center gap-4">
                    <span className="text-xs font-mono opacity-50">CONFIDENTIAL</span>
                    <div className="w-2 h-2 rounded-full bg-orange-500 animate-pulse" />
                </div>
            </nav>

            {/* HERO SECTION */}
            <section className="relative h-screen flex flex-col items-center justify-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/images/atelier26/hero_wide.webp"
                        alt="ATELIER 26 Main Poster"
                        fill
                        className="object-cover opacity-80 scale-105 animate-pulse-slow"
                        priority
                        quality={100}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/60" />
                </div>

                <div className="relative z-10 text-center max-w-4xl px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                    >
                        <h1 className="text-[10vw] md:text-[6vw] font-black tracking-tighter leading-none mb-4 mix-blend-overlay opacity-90">
                            {ATELIER_LORE.projectGoal.title}
                        </h1>
                        <p className="text-xl md:text-3xl font-light tracking-[0.2em] text-gray-200 mb-8 uppercase">
                            {ATELIER_LORE.coreConcept.catchphrase}
                        </p>
                        <div className="bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-lg max-w-2xl mx-auto">
                            <p className="text-sm md:text-lg text-gray-300 leading-relaxed font-light">
                                {ATELIER_LORE.coreConcept.definition}
                            </p>
                        </div>
                    </motion.div>
                </div>

                {/* Scroll Indicator */}
                <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{ repeat: Infinity, duration: 2 }}
                    className="absolute bottom-10 left-1/2 -translate-x-1/2 opacity-50"
                >
                    <ChevronRight className="w-6 h-6 rotate-90" />
                </motion.div>
            </section>

            {/* CORE IDENTITY: 5 PERSONAS */}
            <section className="min-h-screen relative flex flex-col md:flex-row">
                {/* LEFT: VISUAL */}
                <div className="w-full md:w-1/2 h-[50vh] md:h-screen relative overflow-hidden border-r border-white/10">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activePersona.id}
                            initial={{ opacity: 0, scale: 1.1 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.7 }}
                            className="absolute inset-0"
                        >
                            <Image
                                src={activePersona.imagePath}
                                alt={activePersona.name}
                                fill
                                className="object-cover"
                                priority
                                quality={100}
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />

                            {/* Floating Quote */}
                            <div className="absolute bottom-12 left-8 md:bottom-24 md:left-12 max-w-md">
                                <h3 className={`text-3xl md:text-5xl font-bold ${activePersona.textColor} leading-tight mb-4`}>
                                    "{activePersona.quote}"
                                </h3>
                                <div className="flex flex-col gap-2">
                                    <div className="flex items-center gap-2">
                                        <span className="text-xs font-mono text-gray-400 border border-gray-600 px-2 py-1 rounded">SPECIES</span>
                                        <p className="text-white/90 font-mono text-sm font-bold">
                                            {activePersona.species}
                                        </p>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <span className="text-xs font-mono text-gray-400 border border-gray-600 px-2 py-1 rounded">ITEM</span>
                                        <p className="text-white/80 font-mono text-sm">
                                            {activePersona.visualKey}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </div>

                {/* RIGHT: INTERACTIVE DATA */}
                <div className="w-full md:w-1/2 min-h-[50vh] md:h-screen bg-black/80 backdrop-blur-sm p-8 md:p-16 flex flex-col justify-center">
                    <div className="space-y-12">
                        {/* Tabs - Horizontal Scroll for 5 items */}
                        <div className="flex gap-4 border-b border-white/10 pb-4 overflow-x-auto scrollbar-hide">
                            {ATELIER_LORE.personas.map((persona, index) => (
                                <button
                                    key={persona.id}
                                    onClick={() => setActiveTab(index)}
                                    className={`text-lg md:text-xl font-bold uppercase tracking-widest transition-all px-4 py-2 rounded-lg flex-shrink-0 whitespace-nowrap
                                        ${activeTab === index
                                            ? "bg-white text-black scale-105"
                                            : "text-gray-600 hover:text-white hover:bg-white/10"}`}
                                >
                                    {persona.name.split(' ')[0]}
                                </button>
                            ))}
                        </div>

                        {/* Content */}
                        <div className="space-y-8">
                            <motion.div
                                key={activePersona.id}
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.5 }}
                            >
                                <div className="space-y-2 mb-6">
                                    <h2 className={`text-3xl md:text-5xl font-black ${activePersona.textColor}`}>
                                        {activePersona.role}
                                    </h2>
                                    <p className="text-xl text-gray-400 font-medium">
                                        {activePersona.essence}
                                    </p>
                                </div>

                                <div className="prose prose-invert prose-lg max-w-none">
                                    <p className="text-gray-300 leading-relaxed whitespace-pre-line mb-6">
                                        {activePersona.description}
                                    </p>

                                    {/* RELATIONSHIP DATA UI - USER REQUIREMENT */}
                                    <div className="bg-white/5 border-l-4 border-white/20 p-4 rounded-r-lg">
                                        <h4 className="text-xs text-gray-400 font-bold uppercase tracking-widest mb-1">
                                            RELATIONSHIP WITH HUMANS
                                        </h4>
                                        <p className="text-white font-medium">
                                            {activePersona.relationship}
                                        </p>
                                    </div>
                                </div>
                            </motion.div>

                            {/* Stat Bars (Visual Only) */}
                            <div className="space-y-4 pt-8 border-t border-white/10">
                                <div className="flex items-center gap-4 text-xs font-mono text-gray-500">
                                    <span>MISSION SYNC</span>
                                    <div className="flex-1 h-1 bg-gray-800 rounded-full overflow-hidden">
                                        <motion.div
                                            className="h-full bg-white"
                                            initial={{ width: 0 }}
                                            whileInView={{ width: `${barWidth}%` }}
                                            transition={{ duration: 1.5 }}
                                        />
                                    </div>
                                    <span>{syncRate}%</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* PROJECT ARCHIVE */}
            <section className="py-24 px-4 md:px-12 bg-zinc-950 border-t border-white/10">
                <div className="container mx-auto max-w-6xl">
                    <div className="mb-16 border-b border-white/20 pb-8">
                        <h2 className="text-4xl md:text-6xl font-black tracking-tighter text-white mb-2">
                            PROJECT ARCHIVE
                        </h2>
                        <p className="text-gray-500 font-mono text-sm uppercase tracking-widest">
                            ATELIER 26 : THE MACRO FIVE
                        </p>
                    </div>

                    {/* Humans Detail Profile */}
                    <div className="space-y-8">
                        <h3 className="text-2xl font-bold text-white mb-6 uppercase tracking-wider border-b border-white/20 pb-4">
                            HUMAN HOUSEMATES
                        </h3>

                        <div className="grid gap-6">
                            <div className="bg-white/5 p-6 rounded-xl border border-white/10 hover:border-white/30 transition-colors group">
                                <div className="flex items-start justify-between mb-2">
                                    <h4 className="text-xl font-bold text-gray-100">{ATELIER_LORE.humans.jin.name}</h4>
                                    <span className="text-xs font-mono text-gray-500 border border-gray-700 px-2 py-1 rounded group-hover:border-white/50 transition-colors">
                                        {ATELIER_LORE.humans.jin.role}
                                    </span>
                                </div>
                                <p className="text-gray-400 leading-relaxed font-light">
                                    {ATELIER_LORE.humans.jin.desc}
                                </p>
                            </div>

                            <div className="bg-white/5 p-6 rounded-xl border border-white/10 hover:border-white/30 transition-colors group">
                                <div className="flex items-start justify-between mb-2">
                                    <h4 className="text-xl font-bold text-gray-100">{ATELIER_LORE.humans.haneul.name}</h4>
                                    <span className="text-xs font-mono text-gray-500 border border-gray-700 px-2 py-1 rounded group-hover:border-white/50 transition-colors">
                                        {ATELIER_LORE.humans.haneul.role}
                                    </span>
                                </div>
                                <p className="text-gray-400 leading-relaxed font-light">
                                    {ATELIER_LORE.humans.haneul.desc}
                                </p>
                            </div>
                        </div>

                        <div className="mt-8 pt-8 border-t border-white/10">
                            <h4 className="text-sm font-bold text-gray-500 mb-2 uppercase">Core Rule</h4>
                            <p className="text-white font-medium text-lg">
                                "{ATELIER_LORE.origin.rule}"
                            </p>
                        </div>
                    </div>

                    {/* Episodes & Strategy */}
                    <div className="space-y-12">
                        <div>
                            <h3 className="text-xl font-bold text-gray-200 mb-6 uppercase tracking-wider">
                                KEY EPISODES
                            </h3>
                            <div className="space-y-6">
                                {ATELIER_LORE.episodes.map((ep, idx) => (
                                    <div key={idx} className="relative pl-6 border-l border-white/20">
                                        <div className="absolute -left-[5px] top-0 w-2.5 h-2.5 rounded-full bg-white/50" />
                                        <h4 className="text-lg font-bold text-white mb-1">
                                            EP.{idx + 1} {ep.title}
                                        </h4>
                                        <p className="text-gray-400 font-light text-sm leading-relaxed">
                                            {ep.desc}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="bg-gradient-to-br from-white/10 to-transparent p-6 rounded-lg border border-white/10 text-center">
                            <h3 className="text-sm font-bold text-gray-400 mb-3 uppercase tracking-widest">
                                CONTENT STRATEGY
                            </h3>
                            <p className="text-white font-medium mb-1">
                                {ATELIER_LORE.strategy.media}
                            </p>
                            <p className="text-sm text-gray-500">
                                + {ATELIER_LORE.strategy.merch}
                            </p>
                        </div>

                        <div className="text-right">
                            <p className="text-2xl md:text-3xl text-gray-300 font-light italic leading-relaxed">
                                "{ATELIER_LORE.philosophy.message}"
                            </p>
                            <p className="text-sm text-gray-500 mt-2 font-mono uppercase">
                                THEME: {ATELIER_LORE.philosophy.ending}
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            {/* SHOWCASE SECTION */}
            <AtelierShowcase />
        </div >
    );
}
