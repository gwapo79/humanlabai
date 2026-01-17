export const LUMINA_LORE = {
    project: {
        title: "LUMINA",
        subtitle: "FRACTURE",
        catchphrase: "우리는 셋이지만, 사실 하나다.",
        identity: "Virtual K-Pop / Storytelling IP",
        description: "LUMINA는 3인조 아이돌이면서 동시에, 현실 세계의 '한 명'(윤서)의 내면이 세 가지 상태로 분열되어 구현된 존재입니다."
    },
    yoonseo: {
        name: "윤서",
        role: "REALITY",
        desc: "불안한 현실의 자아. 얼굴 없는 관점.",
        visualRule: "얼굴 비공개 (후드, 실루엣, 그림자)"
    },
    members: {
        SIA: {
            id: "SIA",
            name: "SIA",
            role: "CONTROL",
            roleDetail: "통제 / 차단 / 냉각 / 방어",
            desc: "감정을 느끼는 것이 위험해졌을 때 등장하는 차단 시스템.",
            quote: "지금은 느끼면 안 돼.",
            visualDesc: "앞머리(뱅) + 긴 생머리, 브라운 톤/레더/체인/후프 이어링 (다크 무드, 강한 대비)",
            color: "from-gray-900 via-gray-950 to-black", // Dark/Cold
            textColor: "text-gray-200",
            imagePath: "/images/lumina/member_sia.jpg"
        },
        HAYEON: {
            id: "HAYEON",
            name: "HAYEON",
            role: "SENSITIVITY",
            roleDetail: "감정 / 기억 / 상처 / 체온",
            desc: "윤서가 감정을 허락받는 창구. 모든 것을 수용하는 따뜻한 슬픔.",
            quote: "지금 느끼는 걸 숨기지 않아도 돼.",
            visualDesc: "앞머리 없는 내추럴 롱 헤어, 블랙 퍼/서정적 무드 (감정 수용)",
            color: "from-stone-800 via-stone-900 to-black", // Warm Beige equivalent in Dark Mode (Stone/Orange tint)
            textColor: "text-orange-100",
            imagePath: "/images/lumina/member_hayeon.jpg"
        },
        LUNA: {
            id: "LUNA",
            name: "LUNA",
            role: "ESCAPE",
            roleDetail: "이탈 / 전환 / 분산 / 움직임",
            desc: "감정을 덮고 '밖으로' 나가게 만드는 탈출구.",
            quote: "일단 움직이자. 생각은 나중에.",
            visualDesc: "곱슬/웨이브 헤어, 캡/헤드폰 스타일 (스포티, 에너제틱)",
            color: "from-indigo-900 via-violet-950 to-black", // High Energy/Neon tint
            textColor: "text-lime-300",
            imagePath: "/images/lumina/member_luna.jpg"
        }
    }
} as const;
