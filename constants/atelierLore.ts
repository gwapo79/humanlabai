
export const ATELIER_LORE = {
    projectGoal: {
        title: "ATELIER 26",
        content: "디자인 스튜디오 '아틀리에 26'에서 벌어지는 초보 집사(진, 하늘)와 범상치 않은 5인 크루의 좌충우돌 성장 코믹 드라마."
    },
    coreConcept: {
        catchphrase: "초보 집사와 5인의 사고뭉치들",
        definition: "인간에게는 멘붕의 연속이지만, 동물들에게는 '우리가 집사를 돌본다'는 자부심이 가득한 시선 대비 시트콤."
    },
    humans: {
        jin: {
            name: "JIN (진)",
            role: "Interior Designer",
            desc: "예민한 완벽주의자형 허당. 스파키의 발걸음에서 디자인 영감을 얻곤 한다."
        },
        haneul: {
            name: "HANEUL (하늘)",
            role: "Freelance Illustrator",
            desc: "동물 애호가이나 현실 육아에 지친 집사. 24시간이 모자란 마감 인생."
        }
    },
    origin: {
        name: "JIN & HANEUL (진 & 하늘)",
        identity: "초보 집사 / 휴먼 하우스메이트",
        rule: "인간과 동물의 동상이몽. 인간은 사고를 수습하느라 바쁘고, 동물은 나름의 이유로 바쁘다.",
        trigger: "예민한 디자이너와 감성적인 일러스트레이터가 5마리 동물들과 함께 살며 겪는, 결코 평범하지 않은 일상의 기록."
    },
    personas: [
        {
            id: "LEO",
            name: "LEO (레오)",
            species: "Dog (Maltipoo)",
            role: "GUM-LIKE TROUBLE MAKER (껌딱지 사고뭉치)",
            visualKey: "Red Paisley Bandana",
            essence: "화상 회의 방해 전문. 하지만 우울할 땐 최고의 위로.",
            quote: "놀아줘! 지금 당장! (와장창)",
            description: "긍정 에너지 폭발하는 말티푸. 빨간 반다나를 하고 화상 회의 때마다 짖어서 방해하지만, 집사가 우울해 보이면 제일 먼저 다가와 위로하는 사랑스러운 껌딱지 강아지.",
            relationship: "화상 회의 방해 및 원단 훼손 / 집사 위로 담당",
            imagePath: "/images/atelier26/leo.webp",
            color: "from-amber-600 via-orange-500 to-yellow-400",
            textColor: "text-amber-100"
        },
        {
            id: "LUNA",
            name: "LUNA (루나)",
            species: "Cat (Munchkin)",
            role: "PRACTICAL RANK 1 (실질적 서열 1위)",
            visualKey: "Black Choker & Silver Tag",
            essence: "작업 책상 점령자. 뜻밖의 디자인 영감을 주는 뮤즈.",
            quote: "이 색깔이 더 낫네. (키보드 꾹)",
            description: "짧은 다리의 먼치킨 고양이지만 집 안의 진정한 지배자. 블랙 초커를 하고 있으며, 집사들이 일할 때 키보드 위를 밟고 지나가 오타를 내지만 가끔 그 오타가 기가 막힌 아이디어가 된다.",
            relationship: "작업 책상 점령 및 키보드 오타 작업 / 뜻밖의 색조합 완성",
            imagePath: "/images/atelier26/luna.webp",
            color: "from-slate-800 via-slate-900 to-black",
            textColor: "text-slate-200"
        },
        {
            id: "REKO",
            name: "REKO (레코)",
            species: "Parrot (Cockatiel)",
            role: "HUMAN VOICE COPIER (인간 말 복사기)",
            visualKey: "Yellow Crest & Feathers",
            essence: "집사들의 부부싸움 멘트 수집가.",
            quote: "진! 밥 먹어! 아니 그거 말고!",
            description: "노란 깃이 매력적인 왕관앵무. 집사들의 말버릇은 물론, 부부싸움 멘트까지 정확히 복사해 손님 앞에서 재연하는 앵무새. 분위기를 싸하게 만드는 재주가 있다.",
            relationship: "집사들의 부부싸움 멘트 복사 및 손님 앞 재연",
            imagePath: "/images/atelier26/reko.webp",
            color: "from-yellow-300 via-yellow-500 to-orange-500",
            textColor: "text-yellow-100"
        },
        {
            id: "SPARKY",
            name: "SPARKY (스파키)",
            species: "Lizard (Leopard Gecko)",
            role: "SMART BUTLER (스마트 집사)",
            visualKey: "Operating Smart Devices",
            essence: "폴터가이스트급 기술 지원.",
            quote: "(조용히 태블릿 잠금해제)",
            description: "레오파드 게코 도마뱀. 작은 발바닥으로 태블릿 터치와 스마트 조명을 조작한다. 집사들은 기계 오작동인 줄 알지만 사실 스파키의 은밀한 도움이다.",
            relationship: "태블릿 및 조명 조작 / 폴터가이스트급 기술 지원",
            imagePath: "/images/atelier26/sparky.webp",
            color: "from-lime-400 via-lime-600 to-green-800",
            textColor: "text-lime-100"
        },
        {
            id: "CHIP",
            name: "CHIP (칩)",
            species: "Hamster (Djungarian)",
            role: "COLLECTOR THIEF (수집광 도둑)",
            visualKey: "Leather Backpack",
            essence: "나의 물건은 나의 것, 너의 물건도 나의 것.",
            quote: "이 에어팟은 좋은 침대가 되겠어.",
            description: "작지만 재빠른 정글리안 햄스터. 가죽 백팩을 메고 다니며 에어팟 한 쪽, 연필깎이 등 작은 소품들을 은신처로 가져간다. 덕분에 집사들은 강제로 대청소를 하게 된다.",
            relationship: "에어팟, 연필깎이 등 소품 은신처 은닉 / 대청소 유발자",
            imagePath: "/images/atelier26/chip.webp",
            color: "from-amber-800 via-brown-600 to-amber-950",
            textColor: "text-amber-200"
        }
    ],
    episodes: [
        {
            title: "공포의 마감 전야",
            desc: "하늘이 마감을 앞두고 밤샘 작업을 하는 날, 5인 크루가 벌이는 대환장 파티. 커피 쏟기, 전원 코드 뽑기 위기, 그리고 마침내 찾아온 평화(잠)."
        },
        {
            title: "첫 번째 가족사진",
            desc: "진과 하늘이 큰맘 먹고 단체 사진을 찍으려 하지만, 레오의 난입과 레코의 비행으로 엉망진창이 되는 과정. 결국 가장 자연스러운 'B컷'이 베스트 컷이 된다."
        }
    ],
    strategy: {
        media: "1인칭 시점 브이로그 & 공감 밈(Meme)",
        merch: "캐릭터 실제 아이템 (미니 백팩, 반다나) 굿즈 연계"
    },
    philosophy: {
        ending: "Coexistence in Chaos",
        message: "완벽하지 않아도 괜찮아. 서로가 있어서 채워지는 빈틈. '우리는 서로를 돌봅니다(가끔은 괴롭히지만).'"
    }
};
