"use client";

import { use } from "react";
import { StickyTOC } from "@/components/ad-stories/sticky-toc";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function AdStoryDetail({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = use(params);

    return (
        <div className="min-h-screen bg-black">
            {/* Hero */}
            <section className="pt-32 pb-24 px-4 bg-zinc-900 border-b border-white/5">
                <div className="container mx-auto text-center space-y-6">
                    <Link href="/ad-stories" className="inline-flex items-center text-gray-400 hover:text-white mb-8">
                        <ArrowLeft className="w-4 h-4 mr-2" /> 전체 스토리 보기
                    </Link>
                    <h1 className="text-4xl md:text-6xl font-bold text-white tracking-tighter max-w-4xl mx-auto leading-tight">
                        버추얼 알바로 매장 방문객 300% 증가시키기
                    </h1>
                    <div className="flex justify-center gap-8 text-sm text-gray-500 pt-4 font-mono">
                        <span>CLIENT: CAFE BLUE</span>
                        <span>PERIOD: 3 MONTHS</span>
                        <span>ROLE: OPERATION</span>
                    </div>
                </div>
            </section>

            <div className="container mx-auto px-4 py-24">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">

                    {/* TOC */}
                    <div className="lg:col-span-3">
                        <StickyTOC />
                    </div>

                    {/* Content Body */}
                    <div className="lg:col-span-8 space-y-32">

                        {/* Problem */}
                        <div id="problem" className="space-y-6">
                            <span className="text-green-500 font-mono text-sm tracking-widest">01. PROBLEM</span>
                            <h2 className="text-3xl font-bold text-white">"커피는 정말 맛있는데, 아무도 카페가 있는 줄 몰라요."</h2>
                            <p className="text-xl text-gray-400 leading-relaxed">
                                카페 블루는 깊은 골목 안쪽에 위치해 있었습니다. 메인 스트리트의 유동 인구는 대형 프랜차이즈로만 향했고, 골목으로 꺾어 들어오는 사람은 거의 없었습니다. TV 광고나 비싼 인플루언서를 쓸 예산도 없었죠.
                            </p>
                        </div>

                        {/* Concept */}
                        <div id="concept" className="space-y-6">
                            <span className="text-green-500 font-mono text-sm tracking-widest">02. CONCEPT</span>
                            <h2 className="text-3xl font-bold text-white">"바리스타가 내 폰 안에서 말을 건다면?"</h2>
                            <p className="text-lg text-gray-400 leading-relaxed">
                                우리는 '커피'가 아닌 '경험'을 팔기로 했습니다. 카페 사장님을 모티브로 한 친근한 버추얼 페르소나를 만들었습니다. 이 캐릭터는 매일 아침 인스타그램 릴스를 통해 원두 이야기를 들려줍니다.
                            </p>
                            <div className="aspect-video bg-zinc-800 rounded-xl flex items-center justify-center text-gray-600 border border-white/10">
                                [컨셉 아트 / 캐릭터 디자인 이미지]
                            </div>
                        </div>

                        {/* Production & Operation */}
                        <div id="production" className="space-y-6">
                            <span className="text-green-500 font-mono text-sm tracking-widest">03. PRODUCTION</span>
                            <h2 className="text-3xl font-bold text-white">빠르고, 가볍고, 꾸준하게.</h2>
                            <p className="text-lg text-gray-400 leading-relaxed">
                                HumanLab AI 파이프라인을 사용해 60초 영상을 30분에 한 개씩 제작할 수 있는 시스템을 구축했습니다. 매일 촬영 장비를 세팅할 필요가 없었습니다.
                            </p>
                        </div>

                        <div id="operation" className="space-y-6">
                            <span className="text-green-500 font-mono text-sm tracking-widest">04. OPERATION</span>
                            <h2 className="text-3xl font-bold text-white">90일간 매일 업로드.</h2>
                            <p className="text-lg text-gray-400 leading-relaxed">
                                핵심은 꾸준함이었습니다. 우리는 멈추지 않았습니다. 모든 댓글에 캐릭터의 페르소나로 답글을 달았습니다. 카페가 유명해지기 전에, 캐릭터가 먼저 동네 유명 인사가 되었습니다.
                            </p>
                        </div>

                        {/* Outcome */}
                        <div id="outcome" className="space-y-8 p-8 bg-white/5 rounded-2xl border border-white/10">
                            <span className="text-green-500 font-mono text-sm tracking-widest">05. OUTCOME</span>
                            <h2 className="text-3xl font-bold text-white">"성지순례 왔습니다."</h2>
                            <div className="grid grid-cols-2 gap-8">
                                <div>
                                    <div className="text-4xl font-bold text-white mb-2">+312%</div>
                                    <div className="text-sm text-gray-500">방문객 증가율</div>
                                </div>
                                <div>
                                    <div className="text-4xl font-bold text-white mb-2">12k</div>
                                    <div className="text-sm text-gray-500">로컬 팔로워</div>
                                </div>
                            </div>
                            <p className="text-gray-400">
                                사람들은 커피만 마시러 오는 것이 아니라, 온라인에서 보던 캐릭터의 '진짜' 공간을 확인하러 왔습니다.
                            </p>
                        </div>

                        {/* Next CTA */}
                        <div className="pt-16 border-t border-white/10 text-center space-y-6">
                            <h3 className="text-2xl font-bold text-white">당신의 브랜드에도 이런 스토리가 필요하신가요?</h3>
                            <Button size="lg" className="rounded-full bg-white text-black hover:bg-gray-200 px-8 text-lg font-bold">
                                HumanLab과 상담하기
                            </Button>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}
