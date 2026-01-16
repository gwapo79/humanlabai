"use client";

import { useState } from "react";
import { ArrowLeft, Users, Activity, TrendingUp, AlertTriangle } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

// Mock Data for "LUMINA" (id: 1)
const projectData = {
    id: 1,
    title: "LUMINA",
    category: "METAHUMAN ARTIST",
    status: "GROWING",
    vitals: {
        health: "STABLE", // STABLE, WARNING, CRITICAL
        followers: "1.2M",
        reach: "3.4M",
        engagement: "12.5%",
        sentiment: "POSITIVE"
    }
};

const tabs = [
    { id: "journey", label: "JOURNEY LOG" },
    { id: "lab", label: "THE LAB (R&D)" },
    { id: "social", label: "SOCIAL IMPACT" },
    { id: "assets", label: "ASSET VAULT" },
];

export default function ProjectDetailPage({ params }: { params: { id: string } }) {
    const [activeTab, setActiveTab] = useState("journey");

    return (
        <div className="space-y-8 pb-24">
            {/* 1. Header & Navigation */}
            <div className="flex items-center gap-4">
                <Link href="/admin/projects">
                    <Button variant="ghost" size="icon" className="hover:bg-white/10 text-white">
                        <ArrowLeft className="w-5 h-5" />
                    </Button>
                </Link>
                <div>
                    <div className="flex items-center gap-3">
                        <h1 className="text-3xl font-bold tracking-tight">{projectData.title}</h1>
                        <span className="px-2 py-0.5 rounded text-[10px] font-bold border border-blue-500/30 text-blue-400 bg-blue-500/10">
                            {projectData.status}
                        </span>
                    </div>
                    <p className="text-gray-500 text-sm font-mono mt-1">{projectData.category} • ID: {params.id}</p>
                </div>
                <div className="flex-1" />
                <Button variant="outline" className="border-red-500/30 text-red-400 hover:bg-red-500/10 hover:text-red-300">
                    <AlertTriangle className="w-4 h-4 mr-2" /> Report Issue
                </Button>
            </div>

            {/* 2. Vitals Dashboard (Always Visible) */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <VitalCard
                    label="SYSTEM HEALTH"
                    value={projectData.vitals.health}
                    icon={Activity}
                    color="text-green-500"
                    sub="All Systems Normal"
                />
                <VitalCard
                    label="TOTAL FOLLOWERS"
                    value={projectData.vitals.followers}
                    icon={Users}
                    color="text-white"
                    sub="+12% this month"
                />
                <VitalCard
                    label="MONTHLY REACH"
                    value={projectData.vitals.reach}
                    icon={TrendingUp}
                    color="text-blue-400"
                    sub="Instagram + YouTube"
                />
                <VitalCard
                    label="SENTIMENT"
                    value={projectData.vitals.sentiment}
                    icon={Users}
                    color="text-purple-400"
                    sub="Based on recent comments"
                />
            </div>

            {/* 3. Tab Navigation */}
            <div className="border-b border-white/10">
                <div className="flex gap-8">
                    {tabs.map(tab => (
                        <button
                            key={tab.id}
                            onClick={() => setActiveTab(tab.id)}
                            className={cn(
                                "pb-4 text-sm font-bold tracking-wider transition-all border-b-2",
                                activeTab === tab.id
                                    ? "text-white border-white"
                                    : "text-gray-500 border-transparent hover:text-gray-300"
                            )}
                        >
                            {tab.label}
                        </button>
                    ))}
                </div>
            </div>

            {/* 4. Tab Content Area */}
            <div className="min-h-[400px] bg-zinc-900/50 border border-white/5 rounded-2xl p-6">
                {activeTab === "journey" && <JourneyTab />}
                {activeTab === "lab" && <LabTab />}
                {activeTab === "social" && <SocialTab />}
                {activeTab === "assets" && <AssetsTab />}
            </div>
        </div>
    );
}

function VitalCard({ label, value, icon: Icon, color, sub }: any) {
    return (
        <div className="bg-zinc-900 border border-white/10 p-5 rounded-xl">
            <div className="flex items-center gap-3 mb-2">
                <div className={`p-1.5 rounded bg-white/5 ${color}`}>
                    <Icon className="w-4 h-4" />
                </div>
                <span className="text-xs font-bold text-gray-500">{label}</span>
            </div>
            <div className="text-2xl font-bold text-white tracking-tight">{value}</div>
            <div className="text-[10px] text-gray-500 mt-1 font-mono">{sub}</div>
        </div>
    )
}

// Imported Tab Components
import { JourneyTab } from "./tabs/journey-tab";
import { LabTab } from "./tabs/lab-tab";
import { SocialTab } from "./tabs/social-tab";
import { AssetsTab } from "./tabs/assets-tab";
