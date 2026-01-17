import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET() {
    try {
        console.log("Seeding triggered via API...");

        const lumina = await prisma.entity.upsert({
            where: { slug: 'lumina' },
            update: {},
            create: {
                slug: 'lumina',
                name: 'LUMINA',
                type: 'HUMAN',
                description: '실제 팬덤과 교감하며 성장하는 버추얼 싱어송라이터. 숏폼과 음원 발매를 통해 IP 가치를 입증하고 있습니다.',
                avatarUrl: '/lumina/lum2.png',
                projects: {
                    create: {
                        slug: 'galaxy-s24-collab',
                        title: 'Galaxy S24 Collaboration',
                        category: 'VIRTUAL ARTIST',
                        status: 'ACTIVE',
                        description: '삼성전자 갤럭시 S24와 함께하는 루미나의 새로운 도전. AI 기능을 활용한 창작 과정을 담습니다.',
                        imageColor: 'bg-purple-600',
                        imageUrl: '/lumina/lum2.png',
                        stories: {
                            create: [
                                {
                                    title: 'Problem: 소상공인 모델 섭외 난항',
                                    content: '기존 모델 섭외 방식의 비효율성을 해결하기 위해 루미나가 투입되었습니다.'
                                },
                                {
                                    title: 'Solution: 버추얼 인플루언서의 기동성',
                                    content: '시공간의 제약 없이 다양한 컨셉 촬영을 소화하며 캠페인 효율을 극대화했습니다.'
                                }
                            ]
                        }
                    }
                },
                activities: {
                    create: [
                        {
                            source: 'INSTAGRAM',
                            title: "LUMINA 'Magnetic' 커버 영상 업로드",
                            description: "유튜브와 인스타그램에 동시 업로드되었습니다. 1시간 내 조회수 급상승 중입니다.",
                            tags: "LUMINA,DANCE",
                            publishedAt: new Date('2026-01-15')
                        },
                    ]
                }
            },
        });

        // Add other entities here if needed, keeping it short for API to be fast or add all. 
        // For API seed, just Lumina is enough to verify.
        // Actually I should add all if I want the dashboard to look good. But I'll stick to Lumina for now to test.

        return NextResponse.json({ success: true, entities: [lumina.name] });
    } catch (error) {
        console.error("Seeding error:", error);
        return NextResponse.json({ success: false, error: String(error) }, { status: 500 });
    }
}
