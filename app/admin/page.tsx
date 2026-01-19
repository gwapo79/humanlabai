import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Activity, Users, FileText, Database } from "lucide-react";

export default function AdminDashboard() {
    return (
        <div className="space-y-8">
            {/* Header */}
            <div>
                <h2 className="text-3xl font-bold tracking-tight text-white">Dashboard</h2>
                <p className="text-gray-400">HumanLab AI 시스템 현황 개요입니다.</p>
            </div>

            {/* KPI Cards */}
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                <Card className="bg-zinc-900 border-white/10 text-white">
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Total Visitors</CardTitle>
                        <Users className="h-4 w-4 text-humanlab-neon" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">12,345</div>
                        <p className="text-xs text-gray-500">+18% from last month</p>
                    </CardContent>
                </Card>
                <Card className="bg-zinc-900 border-white/10 text-white">
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Active Projects</CardTitle>
                        <Database className="h-4 w-4 text-blue-400" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">7</div>
                        <p className="text-xs text-gray-500">LUMINA, LUMIS, etc.</p>
                    </CardContent>
                </Card>
                <Card className="bg-zinc-900 border-white/10 text-white">
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Stories</CardTitle>
                        <FileText className="h-4 w-4 text-green-400" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">50</div>
                        <p className="text-xs text-gray-500">Scheduled: 3</p>
                    </CardContent>
                </Card>
                <Card className="bg-zinc-900 border-white/10 text-white">
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">System Status</CardTitle>
                        <Activity className="h-4 w-4 text-red-500" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">Healthy</div>
                        <p className="text-xs text-gray-500">Uptime 99.9%</p>
                    </CardContent>
                </Card>
            </div>

            {/* Recent Activity Section */}
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
                <Card className="col-span-4 bg-zinc-900 border-white/10 text-white">
                    <CardHeader>
                        <CardTitle>Recent Internal Logs</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="space-y-4">
                            {[1, 2, 3].map((i) => (
                                <div key={i} className="flex items-center">
                                    <div className="w-2 h-2 rounded-full bg-green-500 mr-4" />
                                    <div className="space-y-1">
                                        <p className="text-sm font-medium leading-none">Admin logged in</p>
                                        <p className="text-xs text-gray-500">Just now</p>
                                    </div>
                                    <div className="ml-auto font-mono text-xs text-gray-500">IP: 127.0.0.1</div>
                                </div>
                            ))}
                        </div>
                    </CardContent>
                </Card>

                <Card className="col-span-3 bg-zinc-900 border-white/10 text-white">
                    <CardHeader>
                        <CardTitle>Unread Inquiries</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="space-y-4">
                            <div className="flex items-center justify-center h-[200px] text-gray-500 border border-dashed border-white/10 rounded-lg">
                                No new messages
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
