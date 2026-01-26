export interface ProjectItem {
    id: string;
    title: string;
    category: string;
    slogan: string;
    desc: string;
    techStack: string[];
    type: 'HYPER-REALISM' | 'STYLIZED 3D' | 'VIRTUAL IDOL' | 'VIRTUAL K-POP GROUP' | 'AI COMPANION' | 'DIGITAL ANIMALS' | 'METAVERSE AVATAR' | '3D MASCOT ASSETS' | 'AI KIDS MODEL' | 'ANIMATION CHARACTER';
    gridArea: string;
    image: string;
    videoPreview?: string;
}

export const PROJECTS: ProjectItem[] = [
    // [1] LUMINA (Main IP) - ★ 기존 유지
    {
        id: 'lumina',
        title: "LUMINA",
        category: "VIRTUAL K-POP GROUP",
        slogan: "완벽하지 않아서 더 인간적인",
        desc: "불완전함 속에서 피어나는 아이돌의 성장 서사",
        techStack: ["#UnrealEngine5", "#MetaHuman", "#MotionCapture"],
        type: "VIRTUAL IDOL",
        gridArea: "md:col-span-2 md:row-span-2",
        image: "/images/lumina/main_poster.jpg", // 로컬 파일 유지
        videoPreview: "/videos/lumina_preview.mp4" // Placeholder
    },

    // [New] Atelier 26 (New IP)
    {
        id: 'atelier-26',
        title: "ATELIER 26",
        category: "ANIMATION CHARACTER IP",
        slogan: "동물들의 이중생활 모험기",
        desc: "초보 집사와 5인의 사고뭉치 동물들이 펼치는 좌충우돌 에피소드",
        techStack: ["#Blender", "#ToonShading", "#CharacterRigging"],
        type: "STYLIZED 3D",
        gridArea: "md:col-span-2 md:row-span-1",
        image: "/images/atelier26/hero_wide.webp",
        videoPreview: "/videos/atelier26_preview.mp4"
    },

    // [2] LUMIS (Mascots) - 3D 귀여운 로봇/캐릭터 느낌
    {
        id: 'lumis',
        title: "LUMIS",
        category: "AI COMPANION",
        slogan: "디지털 소울메이트",
        desc: "당신의 감정을 읽고 반응하는 반려 로봇 친구",
        techStack: ["#Three.js", "#WebGL", "#AI_Chatbot"],
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
        slogan: "영원히 곁에 머무는 친구",
        desc: "털 한 올, 숨소리까지 구현된 하이퍼 리얼리즘 반려동물",
        techStack: ["#StableDiffusion", "#LoRA", "#Img2Img"],
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
        slogan: "NEXT GEN AVATAR",
        desc: "게임과 메타버스를 위한 최적화된 3D 휴먼 캐릭터",
        techStack: ["#Unity", "#HumanGenerator", "#LowPoly"],
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
        slogan: "브랜드를 위한 동물 친구들",
        desc: "어디든 잘 어울리는 스타일라이즈드 3D 동물 에셋",
        techStack: ["#Cinema4D", "#Redshift", "#Cute3D"],
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
        slogan: "가장 순수한 미소",
        desc: "광고 촬영의 어려움을 해결하는 AI 아동 모델 솔루션",
        techStack: ["#Midjourney", "#FaceSwap", "#Commercial"],
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
        slogan: "꿈꾸는 아이들",
        desc: "에듀테크와 애니메이션을 위한 3D 키즈 캐릭터",
        techStack: ["#Maya", "#Arnold", "#CharacterDesign"],
        type: "STYLIZED 3D",
        gridArea: "md:col-span-1 md:row-span-1",
        // 3D Cartoon character vibe
        image: "https://images.unsplash.com/photo-1633511090164-b43840ea90bf?auto=format&fit=crop&w=800&q=80"
    }
];
