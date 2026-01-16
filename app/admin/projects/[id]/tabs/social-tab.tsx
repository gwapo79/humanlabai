"use client";

import { BarChart, Bar, ResponsiveContainer, XAxis, YAxis, Tooltip } from "recharts";
import { ArrowUp, ArrowDown, MessageCircle, Heart, Share2, ThumbsUp } from "lucide-react";

// Mock Data
const data = [
    { name: 'Mon', followers: 4000, engagement: 2400 },
    { name: 'Tue', followers: 3000, engagement: 1398 },
    { name: 'Wed', followers: 2000, engagement: 9800 },
    { name: 'Thu', followers: 2780, engagement: 3908 },
    { name: 'Fri', followers: 1890, engagement: 4800 },
    { name: 'Sat', followers: 2390, engagement: 3800 },
    { name: 'Sun', followers: 3490, engagement: 4300 },
];

const comments = [
    { id: 1, user: "@kpop_fan", content: "Lumina's new song is actually insane 🔥", sentiment: "POSITIVE", platform: "TWITTER" },
    { id: 2, user: "@tech_guru", content: "The motion capture looks a bit off in the new ad.", sentiment: "NEGATIVE", platform: "YOUTUBE" },
    { id: 3, user: "@fashion_weekly", content: "Love the new Balenciaga fit!", sentiment: "POSITIVE", platform: "INSTAGRAM" },
];

export function SocialTab() {
    return (
        <div className="space-y-8">
            <h3 className="text-lg font-bold text-white mb-6">Social Influence & Sentiment</h3>

            {/* Platform Metrics */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <PlatformCard platform="Instagram" followers="850K" growth="+5.2%" color="bg-pink-500" />
                <PlatformCard platform="YouTube" followers="320K" growth="+12.8%" color="bg-red-500" />
                <PlatformCard platform="TikTok" followers="1.2M" growth="+8.1%" color="bg-black border-white/20 border" />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Chart Area */}
                <div className="lg:col-span-2 bg-zinc-950 border border-white/10 p-6 rounded-xl">
                    <h4 className="font-bold text-sm text-gray-400 mb-6">WEEKLY ENGAGEMENT</h4>
                    <div className="h-[300px] w-full">
                        <ResponsiveContainer width="100%" height="100%">
                            <BarChart data={data}>
                                <XAxis dataKey="name" stroke="#555" fontSize={12} tickLine={false} axisLine={false} />
                                <YAxis stroke="#555" fontSize={12} tickLine={false} axisLine={false} />
                                <Tooltip
                                    contentStyle={{ backgroundColor: '#000', border: '1px solid #333', borderRadius: '8px' }}
                                    itemStyle={{ color: '#fff' }}
                                />
                                <Bar dataKey="engagement" fill="#fff" radius={[4, 4, 0, 0]} />
                            </BarChart>
                        </ResponsiveContainer>
                    </div>
                </div>

                {/* Sentiment Feed */}
                <div className="bg-zinc-950 border border-white/10 p-6 rounded-xl">
                    <h4 className="font-bold text-sm text-gray-400 mb-6 flex justify-between items-center">
                        LIVE SENTIMENT
                        <span className="text-green-500 text-xs">POSITIVE (88%)</span>
                    </h4>
                    <div className="space-y-4">
                        {comments.map((comment) => (
                            <div key={comment.id} className="p-3 rounded bg-white/5 border border-white/5">
                                <div className="flex justify-between mb-2">
                                    <span className="text-xs font-bold text-gray-300">{comment.user}</span>
                                    <span className={`text-[10px] px-1.5 py-0.5 rounded font-bold ${comment.sentiment === 'POSITIVE' ? 'bg-green-500/20 text-green-400' : 'bg-red-500/20 text-red-400'
                                        }`}>
                                        {comment.sentiment}
                                    </span>
                                </div>
                                <p className="text-sm text-gray-400 leading-tight">"{comment.content}"</p>
                                <div className="mt-2 text-[10px] text-gray-600 font-mono uppercase">
                                    VIA {comment.platform}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

function PlatformCard({ platform, followers, growth, color }: any) {
    return (
        <div className="bg-zinc-900 border border-white/10 p-5 rounded-xl flex items-center justify-between">
            <div className="flex items-center gap-4">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center ${color}`}>
                    <Share2 className="w-5 h-5 text-white" />
                </div>
                <div>
                    <h4 className="font-bold text-white">{platform}</h4>
                    <p className="text-gray-400 text-sm">{followers}</p>
                </div>
            </div>
            <div className="text-green-500 font-bold text-sm flex items-center">
                <ArrowUp className="w-3 h-3 mr-1" />
                {growth}
            </div>
        </div>
    )
}
