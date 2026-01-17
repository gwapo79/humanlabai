
export const LUMINA_LORE = {
    projectGoal: {
        title: "LUMINA",
        content: "2026년 아이돌 트렌드는 'Identity Fatigue(정체성 피로)'에 대한 반작용입니다. Z~알파 세대는 '나는 이런 사람이야'라는 선언에 지쳐있으며, '나는 계속 변하는 존재'임을 인정받길 원합니다. LUMINA는 그룹이 아니라, 한 사람이 겪는 세 가지 감정 상태의 분화체입니다."
    },
    coreConcept: {
        catchphrase: "우리는 셋이지만, 사실 하나다.",
        definition: "LUMINA는 '완벽한 팀'이 아니라 '완성되지 않은 한 사람의 내면'입니다. 인간은 극한의 감정 상태에서 자아가 세 개의 페르소나로 분열되며, 그 분열된 자아들이 현실에 구현된 것이 바로 LUMINA입니다."
    },
    origin: {
        name: "YOONSEO (윤서)",
        identity: "평범한 대학생. 특별한 재능이 있는 것이 아니라 '감정 과부하' 상태에 놓인 인물.",
        rule: "윤서의 얼굴은 절대 공개되지 않습니다. 윤서는 특정 인물이 아니라 팬이 자신의 내면을 투사할 수 있는 '빈 자리'이자 '거울'이어야 하기 때문입니다.",
        trigger: "분열은 판타지가 아니라 심리적 생존 반응입니다. 계속된 비교, 자기검열, 감정 억압... 어느 순간부터 내가 나를 통제할 수 없게 되었을 때, 살기 위해 자아가 쪼개졌습니다."
    },
    personas: [
        {
            id: "SIA",
            name: "SIA (시아)",
            role: "CONTROL (통제)",
            visualKey: "Bangs, Long Straight Hair, Leather, Cold",
            essence: "감정을 느끼는 것이 위험해졌을 때 등장하는 '차단 시스템'.",
            quote: "망가지지 않기 위해, 나는 차갑게 남았다.",
            description: "감정을 억누르고 나를 시스템처럼 유지하려는 존재. 항상 옳지만 가장 외로운 상태. 랩은 감정이 아니라 결론처럼 들려야 한다.",
            // Corrected Mapping: Verified via Browser
            imagePath: "/images/lumina/member_sia.jpg",
            color: "from-gray-900 via-gray-950 to-black",
            textColor: "text-gray-200"
        },
        {
            id: "HAYEON",
            name: "HAYEON (혜연)",
            role: "SENSITIVITY (감정)",
            visualKey: "No Bangs, Wavy Hair, Fur, Warm",
            essence: "윤서가 감정을 허락받는 유일한 창구.",
            quote: "느끼지 않으면 살 수 없었어.",
            description: "분열의 원인 그 자체. 슬픔, 불안, 사랑받고 싶은 마음을 숨기지 못하는 상태. 시아가 얼리고 루나가 도망칠 때, 홀로 남아 아픔을 기억한다.",
            // Mapping to actual verified file
            imagePath: "/images/lumina/member_hayeon.jpg",
            color: "from-stone-800 via-stone-900 to-black",
            textColor: "text-orange-100"
        },
        {
            id: "LUNA",
            name: "LUNA (루나)",
            role: "ESCAPE (도피)",
            visualKey: "Cap, Headphones, Sporty, Neon",
            essence: "생각을 멈추기 위해 계속 움직이는 '비상 탈출구'.",
            quote: "멈추면 무너질 것 같아서, 계속 춤춘다.",
            description: "고민할 틈을 주지 않기 위해 몸을 움직이는 도피형 생존 본능. 가장 밝아 보이지만, 사실은 가장 불안정한 상태.",
            // Corrected Mapping: Verified via Browser (member_luna.jpg = Cap)
            imagePath: "/images/lumina/member_luna.jpg",
            color: "from-indigo-900 via-violet-950 to-black",
            textColor: "text-lime-300"
        }
    ],
    philosophy: {
        ending: "영원한 분열 (Eternal Fracture)",
        message: "통합되지 않습니다. 치유가 아니라 '공존'을 택하는 것이 2026년의 정서이기 때문입니다. '괜찮아. 정리되지 않아도 살아갈 수 있어.' 이것이 우리가 전하는 위로입니다."
    }
};

// --- ADMIN-READY SCHEMA & DATA ---

export type MediaItem = {
    id: string;
    type: 'VIDEO' | 'MUSIC' | 'EDITORIAL';
    thumbnailUrl: string;
    title: string;
    subTitle?: string;
    releaseDate?: string;
    linkUrl?: string; // Optional for now
};

export type SocialLink = {
    platform: string;
    label: string;
    url: string;
    colorClass: string; // e.g., "hover:text-pink-500"
};

export const LUMINA_MEDIA: MediaItem[] = [
    // [VIDEO]
    {
        id: 'mv-01',
        type: 'VIDEO',
        thumbnailUrl: '/images/lumina/main_poster.jpg',
        title: "Debut Teaser 'FRACTURE'",
        subTitle: "Official Teaser #1",
        releaseDate: "Coming Soon"
    },
    {
        id: 'mv-02',
        type: 'VIDEO',
        thumbnailUrl: '/images/lumina/member_sia.jpg',
        title: "Concept Film : SIA Ver.",
        subTitle: "Character Trailer",
        releaseDate: "2026.05.20"
    },
    {
        id: 'mv-03',
        type: 'VIDEO',
        thumbnailUrl: '/images/lumina/member_luna.jpg',
        title: "Concept Film : LUNA Ver.",
        subTitle: "Character Trailer",
        releaseDate: "2026.05.22"
    },
    // [MUSIC]
    {
        id: 'music-01',
        type: 'MUSIC',
        thumbnailUrl: '/images/lumina/main_poster.jpg',
        title: "Shattered",
        subTitle: "1st EP [FRACTURE] - Title",
        releaseDate: "2026.06.01"
    },
    {
        id: 'music-02',
        type: 'MUSIC',
        thumbnailUrl: '/images/lumina/member_sia.jpg',
        title: "Control (Sia Solo)",
        subTitle: "Track 02",
        releaseDate: "2026.06.01"
    },
    {
        id: 'music-03',
        type: 'MUSIC',
        thumbnailUrl: '/images/lumina/member_luna.jpg',
        title: "Runaway (Luna Solo)",
        subTitle: "Track 03",
        releaseDate: "2026.06.01"
    },
    // [EDITORIAL]
    {
        id: 'edit-01',
        type: 'EDITORIAL',
        thumbnailUrl: '/images/lumina/member_yoonseo.jpg',
        title: "VOGUE Korea Digital Cover",
        subTitle: "June 2026 Issue",
        releaseDate: "2026.05.25"
    },
    {
        id: 'edit-02',
        type: 'EDITORIAL',
        thumbnailUrl: '/images/lumina/member_luna.jpg',
        title: "NIKE x LUNA Campaign",
        subTitle: "Global Ambassador",
        releaseDate: "2026.05.30"
    },
    {
        id: 'edit-03',
        type: 'EDITORIAL',
        thumbnailUrl: '/images/lumina/member_hayeon.jpg',
        title: "CHANEL Beauty x HAYEON",
        subTitle: "New Collection",
        releaseDate: "2026.06.05"
    }
];

export const SOCIAL_LINKS: SocialLink[] = [
    { platform: "YouTube", label: "Official MV & Vlog", url: "#", colorClass: "hover:text-red-600" },
    { platform: "Instagram", label: "@lumina_offcl", url: "#", colorClass: "hover:text-pink-500" },
    { platform: "TikTok", label: "Shorts & Challenge", url: "#", colorClass: "hover:text-cyan-400" },
    { platform: "Spotify", label: "Stream Now", url: "#", colorClass: "hover:text-green-500" }
];
