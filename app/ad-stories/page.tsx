import { supabase } from '@/utils/supabase';
import AdStoryGrid from '@/components/AdStoryGrid'; // 기존 컴포넌트 재사용

// Re-export specific configuration if needed, or remove if not used in the final build.
// export const revalidate = 0; // Optional: force dynamic if needed, but 'await supabase' usually opts into dynamic behavior automatically in recent Next.js versions effectively, or we can rely on default caching.
// For now, let's keep it simple as per user request.

export default async function AdStoriesPage() {
    // 1. DB에서 데이터 가져오기 (비동기)
    const { data: stories, error } = await supabase
        .from('ad_stories')
        .select('*')
        .order('created_at', { ascending: false }); // 최신순 정렬

    if (error) {
        console.error("🔥 DB Error:", error);
        return <div className="text-white text-center py-20">데이터 로딩 실패</div>;
    }

    // 2. 날짜 포맷팅 (created_at -> YYYY-MM-DD)
    // Fix: Need to ensure the types match whatever AdStoryGrid expects.
    // Assuming AdStoryGrid expects { date: string, ... } which matches our transformation.
    const formattedStories = stories?.map(story => ({
        ...story,
        date: story.created_at.split('T')[0] // 타임스탬프 앞부분만 사용
    }));

    return (
        <main className="min-h-screen bg-black pt-24 px-6">
            <div className="max-w-7xl mx-auto">
                <h1 className="text-5xl font-bold text-white mb-12">
                    HumanLab <span className="text-humanlab-neon">Insights</span>
                </h1>
                {/* 클라이언트 컴포넌트에 DB 데이터 주입 */}
                <AdStoryGrid initialStories={formattedStories || []} />
            </div>
        </main>
    );
}
