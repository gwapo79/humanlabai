"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
    Activity,
    Box,
    FileText,
    FlaskConical,
    Users,
    LayoutDashboard,
    LogOut,
    Menu
} from "lucide-react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const MENU_ITEMS = [
    { label: "Dashboard", href: "/admin", icon: LayoutDashboard },
    { label: "Live Actions", href: "/admin/live", icon: Activity },
    { label: "Project IP", href: "/admin/projects", icon: Box },
    { label: "Ad Stories", href: "/admin/ad-stories", icon: FileText },
    { label: "Lab Experiments", href: "/admin/lab", icon: FlaskConical },
    { label: "CRM (Inquiries)", href: "/admin/contact", icon: Users },
];

export function AdminSidebar() {
    const pathname = usePathname();
    const [isMobileOpen, setIsMobileOpen] = useState(false);
    const [isDesktop, setIsDesktop] = useState(true); // Default to desktop for SSR or handle consistently

    useEffect(() => {
        const handleResize = () => {
            setIsDesktop(window.innerWidth >= 768);
        };

        // Initial check
        if (typeof window !== 'undefined') {
            setIsDesktop(window.innerWidth >= 768);
            window.addEventListener('resize', handleResize);
        }

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    // Prevent hydration mismatch by returning null or consistent state on first render if needed.
    // However, sticking to a default that matches server is hard without knowing device.
    // Best practice: Render hidden on server, show on client, or use CSS media queries for layout 
    // and only use Framer Motion for the mobile drawer.
    // GUIDANCE: I will modify the render to rely on CSS for the desktop sidebar (always rendered but hidden on mobile via CSS) 
    // and only use Framer Motion for the MOBILE overlay/drawer behavior which is triggered by button.

    // BUT, the current code tries to animate the SIDEBAR itself.
    // Let's fix the hydration error by deferring the check.
    const [mounted, setMounted] = useState(false);
    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null; // Simple fix for now: don't render sidebar until client loads to avoid mismatch.
    // Tweak: "fixed md:sticky" classes handle layout.

    const showSidebar = isMobileOpen || isDesktop;

    return (
        <>
            {/* Mobile Toggle */}
            <button
                className="md:hidden fixed top-4 right-4 z-50 p-2 bg-zinc-900 rounded-md border border-white/10"
                onClick={() => setIsMobileOpen(!isMobileOpen)}
            >
                <Menu className="w-6 h-6 text-white" />
            </button>

            {/* Sidebar Container */}
            <AnimatePresence>
                {showSidebar && (
                    <motion.aside
                        initial={{ x: -280 }}
                        animate={{ x: 0 }}
                        exit={{ x: -280 }}
                        transition={{ type: "spring", bounce: 0, duration: 0.4 }}
                        className={`
                            fixed md:sticky top-0 left-0 z-40
                            w-72 h-screen
                            bg-zinc-950 border-r border-white/10
                            flex flex-col
                        `}
                    >
                        {/* Header */}
                        <div className="p-8 border-b border-white/10">
                            <h1 className="text-xl font-bold tracking-tighter text-white">
                                <span className="text-humanlab-neon">ADMIN</span> PANNEL
                            </h1>
                            <p className="text-xs text-gray-500 mt-1 font-mono">HUMANLAB AI SYSTEM</p>
                        </div>

                        {/* Navigation */}
                        <nav className="flex-1 overflow-y-auto p-4 space-y-2">
                            {MENU_ITEMS.map((item) => {
                                const isActive = pathname === item.href;
                                return (
                                    <Link
                                        key={item.href}
                                        href={item.href}
                                        onClick={() => setIsMobileOpen(false)}
                                        className={`
                                            flex items-center gap-3 px-4 py-3 rounded-lg transition-all
                                            ${isActive
                                                ? "bg-white/10 text-white font-bold border border-white/5"
                                                : "text-gray-400 hover:text-white hover:bg-white/5"}
                                        `}
                                    >
                                        <item.icon className={`w-5 h-5 ${isActive ? "text-humanlab-neon" : ""}`} />
                                        <span>{item.label}</span>
                                    </Link>
                                );
                            })}
                        </nav>

                        {/* Footer / Logout */}
                        <div className="p-4 border-t border-white/10">
                            <button className="flex items-center gap-3 w-full px-4 py-3 text-red-400 hover:text-red-300 hover:bg-red-500/10 rounded-lg transition-colors">
                                <LogOut className="w-5 h-5" />
                                <span className="font-bold">Logout</span>
                            </button>
                            <div className="mt-4 text-center">
                                <span className="text-[10px] text-gray-600 font-mono uppercase">
                                    v1.0.0 Stable Build
                                </span>
                            </div>
                        </div>
                    </motion.aside>
                )}
            </AnimatePresence>

            {/* Backdrop for Mobile */}
            {isMobileOpen && (
                <div
                    className="fixed inset-0 bg-black/80 z-30 md:hidden"
                    onClick={() => setIsMobileOpen(false)}
                />
            )}
        </>
    );
}
