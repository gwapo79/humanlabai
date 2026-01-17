import 'dotenv/config'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient({
  datasources: {
    db: {
      url: process.env.DATABASE_URL,
    },
  },
})

async function main() {
  console.log('Start seeding...')

  // 1. Create LUMINA
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
          {
            source: 'YOUTUBE',
            title: "브이로그: 버추얼 휴먼의 하루 (EP.3)",
            description: "LUMINA의 일상 시리즈 3편이 공개되었습니다. 팬 소통 댓글 작업이 완료되었습니다.",
            tags: "LUMINA,VLOG",
            publishedAt: new Date('2026-01-14')
          }
        ]
      }
    },
  })

  // 2. Create PETKAGE
  const petkage = await prisma.entity.upsert({
    where: { slug: 'petkage' },
    update: {},
    create: {
      slug: 'petkage',
      name: 'PETKAGE',
      type: 'PET',
      description: '국내 1위 펫 커머스 플랫폼의 마스코트 운영. 300만 유저와 브랜드의 연결고리 역할을 수행합니다.',
      projects: {
        create: {
          slug: 'petkage-brand',
          title: 'PETKAGE',
          category: 'BRAND CHARACTER',
          status: 'ACTIVE',
          description: '300만 반려인들의 친구, 펫키지 공식 마스코트 리브랜딩 프로젝트',
          imageColor: 'bg-orange-500',
        }
      },
      activities: {
        create: [
          {
            source: 'LOG',
            title: "광고 캠페인 '펫키지' 2단계 시작",
            description: "1단계 성과 분석에 기반하여 타겟팅 로직이 업데이트되었습니다. 예산 최적화 완료.",
            tags: "ADS,PETKAGE",
            publishedAt: new Date('2026-01-12')
          }
        ]
      }
    },
  })

  // 3. Create Dr. K
  const drk = await prisma.entity.upsert({
    where: { slug: 'dr-k' },
    update: {},
    create: {
      slug: 'dr-k',
      name: 'Dr. K',
      type: 'VIRTUAL_3D', // Assuming AI Expert fits into Virtual 3D
      description: '전문적인 의학 상담과 데이터를 분석하는 AI 닥터. 신뢰성 있는 페르소나를 구축 중입니다.',
      projects: {
        create: {
          slug: 'dr-k-ai',
          title: 'Dr. K',
          category: 'AI EXPERT',
          status: 'DEVELOPING',
          description: '전문적인 의학 상담과 데이터를 분석하는 AI 닥터.',
          imageColor: 'bg-blue-600',
        }
      }
    },
  })

  // 4. Create Chunsik Store
  const chunsik = await prisma.entity.upsert({
    where: { slug: 'chunsik-store' },
    update: {},
    create: {
      slug: 'chunsik-store',
      name: 'Chunsik Store',
      type: 'HUMAN',
      description: '지역 식자재 마트의 브랜딩 및 캐릭터 운영. 로컬 커뮤니티와의 친밀한 소통을 담당합니다.',
      projects: {
        create: {
          slug: 'chunsik-brand',
          title: 'Chunsik Store',
          category: 'LOCAL BRAND',
          status: 'ACTIVE',
          description: '지역 식자재 마트의 브랜딩 및 캐릭터 운영.',
          imageColor: 'bg-green-600',
        }
      },
      activities: {
        create: [
          {
            source: 'INSTAGRAM',
            title: "지역 브랜드 '카페 블루' 협업 시작",
            description: "초기 컨셉 촬영이 완료되었습니다. 현재 보정 및 편집 작업 진행 중입니다.",
            tags: "COLLAB,LOCAL",
            publishedAt: new Date('2026-01-10')
          }
        ]
      }
    },
  })

  console.log({ lumina, petkage, drk, chunsik })
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })
