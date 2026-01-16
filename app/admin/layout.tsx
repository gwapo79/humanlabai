"use client";

import { useEffect, useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import Link from "next/link";
import { LayoutDashboard, Radio, FolderKanban, MessageSquare, LogOut, Menu, X, Beaker } from "lucide-react";
import { cn } from "@/lib/utils";

// Admin Navigation Items
const adminNav = [
    { name: "Dashboard", href: "/admin", icon: LayoutDashboard },
    { name: "Live Feed", href: "/admin/live", icon: Radio },
    { name: "Projects", href: "/admin/projects", icon: FolderKanban },
    { name: "Ad Stories", href: "/admin/ad-stories", icon: FolderKanban },
    { name: "Lab Notes", href: "/admin/lab", icon: Beaker }, // New Link
    { name: "Inquiries", href: "/admin/inquiries", icon: MessageSquare },
];

export default function AdminLayout({ children }: { children: React.ReactNode }) {
    const router = useRouter();
    const pathname = usePathname();
    const [isAuthorized, setIsAuthorized] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        // Check Auth
        const auth = localStorage.getItem("admin_auth");
        if (!auth && pathname !== "/admin/login") {
            router.push("/admin/login");
        } else {
            setIsAuthorized(true);
        }
    }, [pathname, router]);

    // Handle Logout
    const handleLogout = () => {
        localStorage.removeItem("admin_auth");
        router.push("/admin/login");
    };

    if (pathname === "/admin/login") {
        return <>{children}</>;
    }

    if (!isAuthorized) return null; // Prevent flash

    return (
        <div className="min-h-screen bg-black text-white flex">
            {/* Sidebar (Desktop) */}
            <aside className="hidden md:flex flex-col w-64 border-r border-white/10 bg-zinc-950 fixed inset-y-0 left-0 z-50">
                <div className="h-16 flex items-center px-6 border-b border-white/10">
                    <span className="font-bold tracking-tighter text-lg">HL ADMIN</span>
                </div>

                <nav className="flex-1 p-4 space-y-2">
                    {adminNav.map((item) => (
                        <Link
                            key={item.href}
                            href={item.href}
                            className={cn(
                                "flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-colors",
                                pathname === item.href ? "bg-white text-black" : "text-gray-400 hover:text-white hover:bg-white/5"
                            )}
                        >
                            <item.icon className="w-5 h-5" />
                            {item.name}
                        </Link>
                    ))}
                </nav>

                <div className="p-4 border-t border-white/10">
                    <button
                        onClick={handleLogout}
                        className="flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium text-red-500 hover:bg-red-500/10 w-full transition-colors"
                    >
                        <LogOut className="w-5 h-5" />
                        Logout
                    </button>
                </div>
            </aside>

            {/* Mobile Header */}
            <div className="md:hidden fixed top-0 left-0 right-0 h-16 bg-zinc-950 border-b border-white/10 z-50 flex items-center justify-between px-4">
                <span className="font-bold tracking-tighter">HL ADMIN</span>
                <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
                    {isMobileMenuOpen ? <X /> : <Menu />}
                </button>
            </div>

            {/* Mobile Menu Overlay */}
            {isMobileMenuOpen && (
                <div className="fixed inset-0 bg-black/90 z-40 md:hidden pt-20 px-6 space-y-4">
                    {adminNav.map((item) => (
                        <Link
                            key={item.href}
                            href={item.href}
                            onClick={() => setIsMobileMenuOpen(false)}
                            className={cn(
                                "flex items-center gap-3 px-4 py-4 rounded-lg text-lg font-medium border border-white/10",
                                pathname === item.href ? "bg-white text-black" : "text-gray-400"
                            )}
                        >
                            <item.icon className="w-5 h-5" />
                            {item.name}
                        </Link>
                    ))}
                    <button
                        onClick={handleLogout}
                        className="flex items-center gap-3 px-4 py-4 rounded-lg text-lg font-medium text-red-500 border border-red-500/20 w-full mt-8"
                    >
                        <LogOut className="w-5 h-5" />
                        Logout
                    </button>
                </div>
            )}

            {/* Main Content */}
            <main className={cn(
                "flex-1 min-h-screen transition-all md:pl-64 pt-16 md:pt-0",
                pathname === "/admin/login" ? "p-0" : "p-8"
            )}>
                {children}
            </main>
        </div>
    );
}
