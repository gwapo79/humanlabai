"use client";

import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Mail, MoreHorizontal, CheckCircle2 } from "lucide-react";

const INQUIRIES = [
    { id: '1', name: "John Doe", company: "Samsung Electronics", email: "john@samsung.com", message: "프로젝트 의뢰 건으로 연락드립니다.", status: "New", date: "2026-01-20" },
    { id: '2', name: "Sarah Kim", company: "StartUp Inc", email: "sarah@startup.com", message: "파트너십 제안서 송부", status: "Read", date: "2026-01-19" },
    { id: '3', name: "Mike Ross", company: "Law Firm", email: "mike@law.com", message: "저작권 관련 문의", status: "Replied", date: "2026-01-18" },
];

export default function ContactManager() {
    return (
        <div className="space-y-8">
            <div>
                <h2 className="text-3xl font-bold tracking-tight text-white mb-2">Inquiries (CRM)</h2>
                <p className="text-gray-400">고객 문의 및 리드 관리</p>
            </div>

            <div className="rounded-md border border-white/10 bg-zinc-900 overflow-hidden">
                <Table>
                    <TableHeader className="bg-black/50">
                        <TableRow className="border-white/10 hover:bg-transparent">
                            <TableHead className="w-[100px] text-gray-400">Date</TableHead>
                            <TableHead className="text-gray-400">Status</TableHead>
                            <TableHead className="text-gray-400">Sender</TableHead>
                            <TableHead className="text-gray-400">Message</TableHead>
                            <TableHead className="text-right text-gray-400">Action</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {INQUIRIES.map((inquiry) => (
                            <TableRow key={inquiry.id} className="border-white/5 hover:bg-white/5 data-[status=New]:bg-humanlab-neon/5" data-status={inquiry.status}>
                                <TableCell className="font-mono text-xs text-gray-500">{inquiry.date}</TableCell>
                                <TableCell>
                                    <Badge
                                        variant={inquiry.status === 'New' ? 'default' : 'secondary'}
                                        className={inquiry.status === 'New' ? 'bg-humanlab-neon text-black hover:bg-humanlab-neon' : ''}
                                    >
                                        {inquiry.status}
                                    </Badge>
                                </TableCell>
                                <TableCell>
                                    <div className="flex flex-col">
                                        <span className="font-bold text-white">{inquiry.name}</span>
                                        <span className="text-xs text-gray-500">{inquiry.company}</span>
                                    </div>
                                </TableCell>
                                <TableCell>
                                    <div className="max-w-[400px]">
                                        <p className="truncate text-gray-300">{inquiry.message}</p>
                                        <span className="text-xs text-gray-500">{inquiry.email}</span>
                                    </div>
                                </TableCell>
                                <TableCell className="text-right">
                                    <Button size="sm" variant="ghost" className="h-8 w-8 p-0 text-gray-400 hover:text-white">
                                        <MoreHorizontal className="h-4 w-4" />
                                    </Button>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>
        </div>
    );
}
