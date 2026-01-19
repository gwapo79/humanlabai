import "@/app/globals.css";
import { AdminSidebar } from "./components/admin-sidebar";
import { Suspense } from "react";

export const metadata = {
    title: "HumanLab Admin",
    description: "Internal Management System",
    robots: "noindex, nofollow",
};

export default function AdminLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="flex min-h-screen bg-black text-white font-sans selection:bg-humanlab-neon selection:text-black">
            <Suspense fallback={<div className="w-72 h-screen bg-zinc-950 border-r border-white/10" />}>
                <AdminSidebar />
            </Suspense>
            <main className="flex-1 overflow-x-hidden min-h-screen relative bg-zinc-950/50">
                <div className="p-8 md:p-12 max-w-7xl mx-auto space-y-8">
                    {children}
                </div>
            </main>
        </div>
    );
}
