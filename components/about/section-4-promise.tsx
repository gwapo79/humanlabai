"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function Section4Promise() {
    return (
        <section className="py-32 bg-black text-white flex flex-col items-center justify-center text-center px-4">

            <div className="space-y-12 max-w-4xl mx-auto">
                <h2 className="text-3xl md:text-5xl font-bold text-gray-500 tracking-tight">
                    We don't just make it.<br />
                    We keep it running.
                </h2>

                <div className="h-px w-20 bg-white/20 mx-auto"></div>

                {/* Huge Static Typography */}
                <h1 className="text-5xl md:text-8xl font-black text-white leading-none tracking-tighter uppercase">
                    The All-in-One<br />
                    Operation Partner
                </h1>

                <div className="pt-8">
                    <Link href="/contact">
                        <Button size="lg" className="h-14 px-10 rounded-full bg-white text-black hover:bg-gray-200 text-lg font-bold">
                            비즈니스 문의하기 <ArrowRight className="ml-2 w-5 h-5" />
                        </Button>
                    </Link>
                </div>
            </div>

        </section>
    );
}
