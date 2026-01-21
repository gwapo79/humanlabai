export type MediaType = 'video_tvc' | 'video_shorts' | 'audio' | 'image_poster' | 'social_ugc';

export interface MediaItem {
    id: string;
    type: MediaType;
    thumbnail: string;
    src?: string; // video url or audio url
    title: string;
    description: string;
    metrics?: {
        views?: string;
        likes?: string;
    }
}

export const ATELIER_MEDIA_SHOWCASE: MediaItem[] = [
    // [TAB A] Commercial & Video
    {
        id: 'tvc-01',
        type: 'video_tvc',
        thumbnail: '/images/atelier26/hero_wide.webp',
        title: "Atelier 26: The Beginning",
        description: "공식 런칭 트레일러 (Official Trailer)",
        metrics: { views: "1.2M Views" }
    },
    {
        id: 'tvc-02',
        type: 'video_tvc',
        thumbnail: '/images/atelier26/luna.webp',
        title: "Luna's Secret Life",
        description: "루나의 은밀한 취미 생활",
        metrics: { views: "800K Views" }
    },
    {
        id: 'short-01',
        type: 'video_shorts',
        thumbnail: '/images/atelier26/chip.webp',
        title: "Chip's Great Escape",
        description: "가방 속 탈출 작전 #Shorts",
        metrics: { views: "5M+", likes: "500K" }
    },
    {
        id: 'short-02',
        type: 'video_shorts',
        thumbnail: '/images/atelier26/reko.webp',
        title: "Reko Mimic Challenge",
        description: "성대모사 챌린지",
        metrics: { views: "2M", likes: "300K" }
    },
    {
        id: 'short-03',
        type: 'video_shorts',
        thumbnail: '/images/atelier26/sparky.webp',
        title: "Sparky Tech Review",
        description: "최신 태블릿 사용기 (By Gecko)",
        metrics: { views: "1.5M", likes: "200K" }
    },

    // [TAB B] Voice & Sound
    {
        id: 'audio-01',
        type: 'audio',
        thumbnail: '/images/atelier26/leo.webp',
        title: "Leo's Barking Symphony",
        description: "회의 방해용 짖음 모음집",
        src: "#"
    },
    {
        id: 'audio-02',
        type: 'audio',
        thumbnail: '/images/atelier26/reko.webp',
        title: "Reko's Human Voice",
        description: "집사 목소리 완벽 변조",
        src: "#"
    },

    // [TAB C] Social & UGC
    {
        id: 'soc-01',
        type: 'social_ugc',
        thumbnail: '/images/atelier26/hero_wide.webp',
        title: "@jin_design",
        description: "새로운 캐릭터 스케치 유출?",
        metrics: { likes: "5k", views: "Comment 120" }
    },
    {
        id: 'soc-02',
        type: 'social_ugc',
        thumbnail: '/images/atelier26/hero_wide.webp',
        title: "@haneul_art",
        description: "마감 직전의 책상 상황",
        metrics: { likes: "3.2k", views: "Comment 80" }
    },
    {
        id: 'soc-03',
        type: 'social_ugc',
        thumbnail: '/images/atelier26/leo.webp',
        title: "@dog_lover",
        description: "우리집 강아지도 이러는데 ㅋㅋ",
        metrics: { likes: "10k", views: "Comment 500" }
    },

    // [TAB D] Visual Assets
    {
        id: 'vis-01',
        type: 'image_poster',
        thumbnail: '/images/atelier26/hero_wide.webp',
        title: "Main Poster 2026",
        description: "Official Key Visual 8K"
    },
    {
        id: 'vis-02',
        type: 'image_poster',
        thumbnail: '/images/atelier26/luna.webp',
        title: "Character Card: Luna",
        description: "Concept Art"
    },
    {
        id: 'vis-03',
        type: 'image_poster',
        thumbnail: '/images/atelier26/chip.webp',
        title: "Character Card: Chip",
        description: "Concept Art"
    }
];
