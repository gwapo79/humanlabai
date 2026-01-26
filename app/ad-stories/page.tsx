import AdStoryGrid from '@/components/AdStoryGrid';
import { AD_STORIES } from '@/constants/adStoriesData';

export default function AdStoriesPage() {
    // 상수 데이터 사용 (Supabase DB 대신)
    const formattedStories = AD_STORIES.map(story => ({
        ...story,
        created_at: story.date, // 호환성을 위해 date를 created_at으로 매핑
    }));

    return (
        <main className="min-h-screen bg-black pt-24 px-6">
            <div className="max-w-7xl mx-auto">
                <h1 className="text-5xl font-bold text-white mb-12">
                    HumanLab <span className="text-humanlab-neon">Insights</span>
                </h1>
                <AdStoryGrid initialStories={formattedStories} />
            </div>
        </main>
    );
}
