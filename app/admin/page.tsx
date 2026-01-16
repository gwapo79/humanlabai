"use client";

import { Activity, Users, MessageCircle, ArrowUpRight } from "lucide-react";

const stats = [
    {
        label: "Total Projects",
        value: "4",
        desc: "Active IPs",
        icon: Users,
        color: "text-blue-500",
    },
    {
        label: "Live Status",
        value: "ON AIR",
        desc: "System Normal",
        icon: Activity,
        color: "text-green-500",
    },
    {
        label: "New Inquiries",
        value: "12",
        desc: "Unread Messages",
        icon: MessageCircle,
        color: "text-purple-500",
    },
];

export default function AdminDashboard() {
    return (
        <div className="space-y-8">
            <div className="flex justify-between items-center">
                <h1 className="text-3xl font-bold">Dashboard</h1>
                <span className="text-gray-500 text-sm font-mono">
                    LAST SYNC: {new Date().toLocaleDateString()}
                </span>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {stats.map((stat) => (
                    <div key={stat.label} className="bg-zinc-900 border border-white/10 p-6 rounded-2xl">
                        <div className="flex justify-between items-start mb-4">
                            <div className={`p-3 rounded-lg bg-white/5 ${stat.color}`}>
                                <stat.icon className="w-6 h-6" />
                            </div>
                            {stat.label === "New Inquiries" && (
                                <span className="bg-purple-500 text-white text-[10px] px-2 py-0.5 rounded-full font-bold">
                                    NEW
                                </span>
                            )}
                        </div>
                        <div className="space-y-1">
                            <h3 className="text-gray-400 text-sm font-medium">{stat.label}</h3>
                            <div className="text-3xl font-bold text-white tracking-tight">{stat.value}</div>
                            <p className="text-xs text-gray-500">{stat.desc}</p>
                        </div>
                    </div>
                ))}
            </div>

            {/* Recent Activity Mock */}
            <div className="bg-zinc-900 border border-white/10 rounded-2xl p-6">
                <div className="flex justify-between items-center mb-6">
                    <h3 className="font-bold text-lg">Recent System Logs</h3>
                    <button className="text-xs text-gray-400 hover:text-white flex items-center gap-1">
                        View All <ArrowUpRight className="w-3 h-3" />
                    </button>
                </div>
                <div className="space-y-4">
                    {[1, 2, 3].map((i) => (
                        <div key={i} className="flex items-center justify-between py-3 border-b border-white/5 last:border-0">
                            <div className="flex items-center gap-4">
                                <div className="w-2 h-2 rounded-full bg-green-500"></div>
                                <div>
                                    <p className="text-sm text-white font-medium">System Deployment Successful</p>
                                    <p className="text-xs text-gray-500">Deployed to production-kr-1</p>
                                </div>
                            </div>
                            <span className="text-xs text-gray-500 font-mono">10:2{i} AM</span>
                        </div>
                    ))}
                </div>
            </div>

        </div>
    );
}
