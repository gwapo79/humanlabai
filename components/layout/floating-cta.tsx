"use client";

import { MessageCircle } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";

export function FloatingCTA() {
    return (
        <div className="fixed bottom-6 right-6 z-[999] pointer-events-auto">
            <Link href="/contact" aria-label="프로젝트 문의하기">
                <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-16 h-16 bg-white text-black rounded-full shadow-2xl flex items-center justify-center hover:bg-gray-100 transition-colors border border-gray-200"
                >
                    <MessageCircle className="w-8 h-8" />
                </motion.button>
            </Link>
        </div>
    );
}
