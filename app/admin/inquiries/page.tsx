"use client";

import { Mail, Clock, MoreHorizontal } from "lucide-react";

// Mock Data
const inquiries = [
    { id: 1, from: "James Kim", company: "TechCorp", email: "james@techcorp.kr", message: "We want a virtual ambassador.", time: "2 hours ago", status: "UNREAD" },
    { id: 2, from: "Sarah Lee", company: "Fashion Brand A", email: "sarah@brand-a.com", message: "Inquiry about Lumina collaboration.", time: "1 day ago", status: "READ" },
    { id: 3, from: "Unknown", company: "-", email: "student@univ.ac.kr", message: "Can I get an internship?", time: "2 days ago", status: "READ" },
];

export default function AdminInquiriesPage() {
    return (
        <div className="space-y-8">
            <h1 className="text-3xl font-bold">Inquiries</h1>

            <div className="bg-zinc-900 border border-white/10 rounded-2xl overflow-hidden divide-y divide-white/5">
                {inquiries.map((inquiry) => (
                    <div key={inquiry.id} className="p-6 hover:bg-white/5 transition-colors cursor-pointer group">
                        <div className="flex justify-between items-start mb-2">
                            <div className="flex items-center gap-3">
                                {inquiry.status === "UNREAD" && (
                                    <span className="w-2 h-2 rounded-full bg-purple-500 animate-pulse" />
                                )}
                                <h3 className="text-lg font-bold text-white">{inquiry.from}</h3>
                                <span className="text-sm text-gray-500 bg-white/5 px-2 py-0.5 rounded">
                                    {inquiry.company}
                                </span>
                            </div>
                            <span className="text-xs text-gray-500 flex items-center gap-1">
                                <Clock className="w-3 h-3" /> {inquiry.time}
                            </span>
                        </div>

                        <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                            {inquiry.message}
                        </p>

                        <div className="flex justify-between items-center">
                            <span className="text-xs text-gray-600 font-mono flex items-center gap-2">
                                <Mail className="w-3 h-3" /> {inquiry.email}
                            </span>
                            <button className="text-gray-600 hover:text-white">
                                <MoreHorizontal className="w-4 h-4" />
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
