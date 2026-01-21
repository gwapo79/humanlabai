export interface ProjectItem {
    id: string;
    title: string;
    category: string;
    desc: string;
    type: 'HYPER-REALISM' | 'STYLIZED 3D' | 'VIRTUAL IDOL' | 'VIRTUAL K-POP GROUP' | 'AI COMPANION' | 'DIGITAL ANIMALS' | 'METAVERSE AVATAR' | '3D MASCOT ASSETS' | 'AI KIDS MODEL' | 'ANIMATION CHARACTER';
    gridArea: string;
    image: string;
}

export const PROJECTS: ProjectItem[] = [
    // [1] LUMINA (Main IP) - ★ 기존 유지
    {
        id: 'lumina',
        title: "LUMINA",
        category: "VIRTUAL K-POP GROUP",
        desc: "완벽하지 않아서 더 인간적인, 성장형 AI 아이돌 그룹",
        type: "VIRTUAL IDOL",
        gridArea: "md:col-span-2 md:row-span-2",
        image: "/images/lumina/main_poster.jpg" // 로컬 파일 유지
    },

    // [New] Atelier 26 (New IP)
    {
        id: 'atelier-26',
        title: "ATELIER 26",
        category: "ANIMATION CHARACTER IP",
        desc: "초보 집사와 5인의 사고뭉치 동물들의 이중생활 모험기",
        type: "STYLIZED 3D",
        gridArea: "md:col-span-2 md:row-span-1",
        image: "/images/atelier26/hero_wide.webp"
    },

    // [2] LUMIS (Mascots) - 3D 귀여운 로봇/캐릭터 느낌
    {
        id: 'lumis',
        title: "LUMIS",
        category: "AI COMPANION",
        desc: "당신의 감정을 읽고 반응하는 디지털 소울메이트",
        type: "STYLIZED 3D",
        gridArea: "md:col-span-1 md:row-span-1",
        // Cute 3D Robot Toy concept
        image: "https://images.unsplash.com/photo-1616499370260-485b3e5ed653?auto=format&fit=crop&w=800&q=80"
    },

    // [3] The Companions (Real Pets) - 초고화질 강아지 (실사)
    {
        id: 'real-pets',
        title: "THE COMPANIONS",
        category: "DIGITAL ANIMALS",
        desc: "털 한 올, 숨소리까지 구현된 실사 반려동물",
        type: "HYPER-REALISM",
        gridArea: "md:col-span-1 md:row-span-1",
        // Hyper realistic dog portrait
        image: "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&w=800&q=80"
    },

    // [4] Meta Humanoids (3D Humans) - 사이버펑크/미래지향적 3D 인물
    {
        id: '3d-humans',
        title: "META HUMANOIDS",
        category: "METAVERSE AVATAR",
        desc: "게임/메타버스 최적화 3D 인물 캐릭터",
        type: "STYLIZED 3D",
        gridArea: "md:col-span-1 md:row-span-2",
        // Futuristic 3D human/mannequin
        image: "https://images.unsplash.com/photo-1616423640778-28d1b53229bd?auto=format&fit=crop&w=600&q=80"
    },

    // [5] Toon Zoo (3D Animals) - 3D 아트토이 느낌
    {
        id: '3d-animals',
        title: "TOON ZOO",
        category: "3D MASCOT ASSETS",
        desc: "브랜드 마스코트용 스타일라이즈드 동물",
        type: "STYLIZED 3D",
        gridArea: "md:col-span-1 md:row-span-1",
        // 3D abstract animal/shape
        image: "https://images.unsplash.com/photo-1605647540924-852290f6b0d5?auto=format&fit=crop&w=800&q=80"
    },

    // [6] Little Models (Real Kids) - 스튜디오 조명 키즈 모델 (실사)
    {
        id: 'real-kids',
        title: "LITTLE MODELS",
        category: "AI KIDS MODEL",
        desc: "초상권 걱정 없는 광고용 실사 아동 모델",
        type: "HYPER-REALISM",
        gridArea: "md:col-span-2 md:row-span-1",
        // Professional Kid Model
        image: "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&w=1200&q=80"
    },

    // [7] Wonder Kids (3D Kids) - 픽사/애니메이션 스타일
    {
        id: '3d-kids',
        title: "WONDER KIDS",
        category: "ANIMATION CHARACTER",
        desc: "에듀테크/애니메이션용 3D 키즈 캐릭터",
        type: "STYLIZED 3D",
        gridArea: "md:col-span-1 md:row-span-1",
        // 3D Cartoon character vibe
        image: "https://images.unsplash.com/photo-1633511090164-b43840ea90bf?auto=format&fit=crop&w=800&q=80"
    }
];
