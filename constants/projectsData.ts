export interface ProjectItem {
    id: string;
    title: string;
    category: string;
    slogan: string;
    desc: string;
    techStack: string[];
    type: 'HYPER-REALISM' | 'STYLIZED 3D' | 'VIRTUAL IDOL' | 'VIRTUAL K-POP GROUP' | 'AI COMPANION' | 'DIGITAL ANIMALS' | 'METAVERSE AVATAR' | '3D MASCOT ASSETS' | 'AI KIDS MODEL' | 'ANIMATION CHARACTER';

    image: string;
    videoPreview?: string;
}

export const PROJECTS: ProjectItem[] = [
    // [1] LUMINA (Main IP)
    {
        id: 'lumina',
        title: "LUMINA",
        category: "VIRTUAL K-POP GROUP",
        slogan: "완벽하지 않아서 더 인간적인",
        desc: "불완전함 속에서 피어나는 아이돌의 성장 서사",
        techStack: ["#UnrealEngine5", "#MetaHuman", "#MotionCapture"],
        type: "VIRTUAL IDOL",

        image: "/images/lumina/main_poster.jpg",
        videoPreview: "/videos/lumina_preview.mp4"
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

        image: "/images/atelier26/hero_wide_v2.jpg",
        videoPreview: "/videos/atelier26_preview.mp4"
    },

    // [7] Wonder Kids (3D Kids)
    {
        id: '3d-kids',
        title: "WONDER KIDS",
        category: "ANIMATION CHARACTER",
        slogan: "꿈꾸는 아이들",
        desc: "에듀테크와 애니메이션을 위한 3D 키즈 캐릭터",
        techStack: ["#Maya", "#Arnold", "#CharacterDesign"],
        type: "STYLIZED 3D",

        image: "https://images.unsplash.com/photo-1633511090164-b43840ea90bf?auto=format&fit=crop&w=800&q=80"
    }
];
