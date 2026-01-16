"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { motion } from "framer-motion";
import { Mail, MapPin, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function ContactPage() {
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        alert("메시지가 전송되었습니다. (Demo)");
    };

    return (
        <div className="min-h-screen bg-black pt-32 pb-24">
            <div className="container mx-auto px-4">

                {/* Header */}
                <div className="mb-24 text-center">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-5xl md:text-7xl font-bold tracking-tighter text-white mb-6"
                    >
                        CONTACT US
                    </motion.h1>
                    <p className="text-xl text-gray-400">
                        HumanLab AI와 함께 브랜드의 새로운 챕터를 시작하세요.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-6xl mx-auto">

                    {/* Info Column */}
                    <div className="space-y-12">
                        <div className="space-y-6">
                            <h3 className="text-2xl font-bold text-white">Get in touch</h3>
                            <p className="text-gray-400 leading-relaxed">
                                프로젝트 문의, 파트너십 제안, 혹은 단순한 커피챗도 환영합니다.<br />
                                우리는 언제나 새로운 도전을 기다리고 있습니다.
                            </p>
                        </div>

                        <div className="space-y-6">
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center shrink-0">
                                    <Mail className="w-5 h-5 text-white" />
                                </div>
                                <div>
                                    <h4 className="text-white font-bold mb-1">Email</h4>
                                    <a href="mailto:hello@humanlab.ai" className="text-gray-400 hover:text-white transition-colors">
                                        hello@humanlab.ai
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center shrink-0">
                                    <MapPin className="w-5 h-5 text-white" />
                                </div>
                                <div>
                                    <h4 className="text-white font-bold mb-1">Office</h4>
                                    <p className="text-gray-400">
                                        서울시 성동구 성수동 1가<br />(HumanLab R&D Center)
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="pt-8 border-t border-white/10">
                            <h4 className="text-white font-bold mb-4">Follow Us</h4>
                            <div className="flex gap-4">
                                <Link href="#" className="text-gray-500 hover:text-white transition-colors">INSTAGRAM</Link>
                                <Link href="#" className="text-gray-500 hover:text-white transition-colors">LINKEDIN</Link>
                                <Link href="#" className="text-gray-500 hover:text-white transition-colors">YOUTUBE</Link>
                            </div>
                        </div>
                    </div>

                    {/* Form Column */}
                    <div className="bg-zinc-900/50 p-8 md:p-12 rounded-3xl border border-white/10">
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-gray-400">Name *</label>
                                    <Input placeholder="홍길동" required />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-gray-400">Company</label>
                                    <Input placeholder="HumanLab Corp" />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-bold text-gray-400">Email *</label>
                                <Input type="email" placeholder="example@company.com" required />
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-bold text-gray-400">Message *</label>
                                <Textarea placeholder="프로젝트에 대해 간략히 말씀해주세요." rows={6} required />
                            </div>

                            <Button type="submit" size="lg" className="w-full rounded-full bg-white text-black hover:bg-gray-200 font-bold h-12 text-lg">
                                메시지 보내기 <ArrowRight className="ml-2 w-4 h-4" />
                            </Button>
                        </form>
                    </div>

                </div>
            </div>
        </div>
    );
}
