"use client";

import { MessageCircle } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export function FloatingCTA() {
    // Only show on mobile? Or show everywhere but style differently?
    // User said: "Mobile viewport... position: fixed; bottom: 0; z-index: 999"
    // We can use Tailwind 'md:hidden' to hide on desktop if desired, or just style it.
    // Usually floating CTA is mobile only or small icon on desktop.

    return (
        <div className="md:hidden fixed bottom-0 left-0 right-0 z-[999] p-4 bg-gradient-to-t from-black via-black/80 to-transparent pointer-events-none">
            <Link href="/contact" className="pointer-events-auto block w-full">
                <button className="w-full bg-white text-black font-bold py-4 rounded-full shadow-lg flex items-center justify-center gap-2 hover:bg-gray-200 transition-colors">
                    <MessageCircle className="w-5 h-5" />
                    프로젝트 문의하기
                </button>
            </Link>
        </div>
    );
}
