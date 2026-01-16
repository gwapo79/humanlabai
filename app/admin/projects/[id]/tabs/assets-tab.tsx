"use client";

import { Download, File, Image as ImageIcon, Video, MoreVertical } from "lucide-react";

// Mock Data
const assets = [
    { id: 1, name: "LUMINA_KEY_VISUAL_FINAL.png", type: "IMAGE", size: "24MB", date: "2026.01.10" },
    { id: 2, name: "brand_campaign_v2.mp4", type: "VIDEO", size: "1.2GB", date: "2026.01.08" },
    { id: 3, name: "voice_sample_greeting.wav", type: "AUDIO", size: "12MB", date: "2025.12.20" },
    { id: 4, name: "character_sheet_v3.pdf", type: "DOC", size: "5MB", date: "2025.11.15" },
    { id: 5, name: "LUMINA_WINTER_LOOK.png", type: "IMAGE", size: "18MB", date: "2025.12.01" },
];

export function AssetsTab() {
    return (
        <div className="space-y-6">
            <div className="flex justify-between items-center">
                <h3 className="text-lg font-bold text-white">Asset Vault</h3>
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-bold flex items-center gap-2">
                    <Download className="w-4 h-4" /> Download All
                </button>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
                {assets.map((asset) => (
                    <div key={asset.id} className="group relative bg-zinc-950 border border-white/10 rounded-xl overflow-hidden hover:border-white/30 transition-all cursor-pointer aspect-square flex flex-col">
                        {/* Preview Area (Mock) */}
                        <div className="flex-1 flex items-center justify-center bg-white/5">
                            <AssetIcon type={asset.type} />
                        </div>

                        {/* Info Area */}
                        <div className="p-3 border-t border-white/5 bg-zinc-900">
                            <p className="text-xs font-bold text-white truncate mb-1" title={asset.name}>{asset.name}</p>
                            <div className="flex justify-between items-center text-[10px] text-gray-500 font-mono">
                                <span>{asset.type}</span>
                                <span>{asset.size}</span>
                            </div>
                        </div>

                        {/* Hover Overlay */}
                        <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
                            <button className="p-1 rounded bg-black/50 text-white hover:bg-black">
                                <MoreVertical className="w-4 h-4" />
                            </button>
                        </div>
                    </div>
                ))}

                {/* Add New Placeholder */}
                <div className="border border-dashed border-white/10 rounded-xl flex flex-col items-center justify-center text-gray-500 hover:text-white hover:border-white/30 cursor-pointer aspect-square transition-colors">
                    <span className="text-4xl font-thin mb-2">+</span>
                    <span className="text-xs font-bold">Upload Asset</span>
                </div>
            </div>
        </div>
    );
}

function AssetIcon({ type }: { type: string }) {
    if (type === "VIDEO") return <Video className="w-8 h-8 opacity-50" />;
    if (type === "IMAGE") return <ImageIcon className="w-8 h-8 opacity-50" />;
    return <File className="w-8 h-8 opacity-50" />;
}
