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

export const MEDIA_SHOWCASE: MediaItem[] = [
    // [TAB A] Commercial & Video
    {
        id: 'tvc-01',
        type: 'video_tvc',
        thumbnail: '/images/lumina/main_poster.jpg',
        title: "LUMINA x NIKE Global Campaign",
        description: "나이키 2026 S/S 시즌 글로벌 앰버서더 캠페인 메인 필름",
        metrics: { views: "2.4M Views" }
    },
    {
        id: 'tvc-02',
        type: 'video_tvc',
        thumbnail: '/images/lumina/member_luna.jpg',
        title: "Galaxy S26 Ultra TVC",
        description: "삼성전자 갤럭시 S26 시리즈 'Nightography' 편",
        metrics: { views: "1.8M Views" }
    },
    {
        id: 'short-01',
        type: 'video_shorts',
        thumbnail: '/images/lumina/member_hayeon.jpg',
        title: "Magnetic Challenge",
        description: "틱톡 챌린지 누적 조회수 1,000만 달성",
        metrics: { views: "10M+", likes: "1.2M" }
    },
    {
        id: 'short-02',
        type: 'video_shorts',
        thumbnail: '/images/lumina/member_sia.jpg',
        title: "OOTD Check",
        description: "데일리룩 스타일링 숏폼",
        metrics: { views: "850K", likes: "120K" }
    },
    {
        id: 'short-03',
        type: 'video_shorts',
        thumbnail: '/images/lumina/member_yoonseo.jpg',
        title: "Behind The Scene",
        description: "화보 촬영 현장 비하인드",
        metrics: { views: "500K", likes: "50K" }
    },

    // [TAB B] Voice & Sound
    {
        id: 'audio-01',
        type: 'audio',
        thumbnail: '/images/lumina/member_sia.jpg',
        title: "Morning Call (Brand Song)",
        description: "코스메틱 브랜드 'PURE' 캠페인 송",
        src: "#" // Dummy Source
    },
    {
        id: 'audio-02',
        type: 'audio',
        thumbnail: '/images/lumina/member_hayeon.jpg',
        title: "Audio Book Narration",
        description: "밀리의 서재 '감정 수업' 오디오북 낭독",
        src: "#"
    },
    {
        id: 'audio-03',
        type: 'audio',
        thumbnail: '/images/lumina/member_luna.jpg',
        title: "Game Character Voice",
        description: "넥슨 신작 'PROJECT: L' 캐릭터 보이스",
        src: "#"
    },

    // [TAB C] Social & UGC
    {
        id: 'soc-01',
        type: 'social_ugc',
        thumbnail: '/images/lumina/member_luna.jpg',
        title: "@fan_account_01",
        description: "팬아트: Cyberpunk Style Luna",
        metrics: { likes: "12k", views: "Comment 400" }
    },
    {
        id: 'soc-02',
        type: 'social_ugc',
        thumbnail: '/images/lumina/member_hayeon.jpg',
        title: "@daily_lumina",
        description: "공항 패션 직찍 (Incheon Airport)",
        metrics: { likes: "8.5k", views: "Comment 210" }
    },
    {
        id: 'soc-03',
        type: 'social_ugc',
        thumbnail: '/images/lumina/member_sia.jpg',
        title: "@tech_review",
        description: "LUMINA 굿즈 언박싱 리뷰",
        metrics: { likes: "5k", views: "Comment 150" }
    },
    {
        id: 'soc-04',
        type: 'social_ugc',
        thumbnail: '/images/lumina/main_poster.jpg',
        title: "@dance_crew",
        description: "Debut Song Cover Dance",
        metrics: { likes: "22k", views: "Comment 800" }
    },

    // [TAB D] Visual Assets
    {
        id: 'vis-01',
        type: 'image_poster',
        thumbnail: '/images/lumina/main_poster.jpg',
        title: "Official Debut Poster",
        description: "High Resolution (8K)"
    },
    {
        id: 'vis-02',
        type: 'image_poster',
        thumbnail: '/images/lumina/member_sia.jpg',
        title: "SIA: Vogue Pictorial",
        description: "B-Cut Selection"
    },
    {
        id: 'vis-03',
        type: 'image_poster',
        thumbnail: '/images/lumina/member_hayeon.jpg',
        title: "HAYEON: Nature Republic",
        description: "Outdoor Campaign"
    },
    {
        id: 'vis-04',
        type: 'image_poster',
        thumbnail: '/images/lumina/member_luna.jpg',
        title: "LUNA: Street Vibe",
        description: "Seoul Fashion Week"
    }
];
