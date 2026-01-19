import LiveFeed from "@/components/live/live-feed";
import { LiveFilter } from "@/components/live/live-filter";

export default function LivePage() {
    return (
        <div className="min-h-screen bg-black">
            {/* [LIVE-01] HEADER */}
            <section className="pt-32 pb-16 px-4 container mx-auto text-center border-b border-white/10">
                <h1 className="text-5xl md:text-7xl font-bold tracking-tighter text-white mb-6">
                    LIVE ACTIVITY
                </h1>
                <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                    캐릭터와 브랜드의 실시간 운영 로그.<br />
                    이것은 우리가 지금도 일하고 있다는 증거입니다.
                </p>
            </section>

            {/* [LIVE-02] FILTER & [LIVE-03] FEED */}
            <div className="relative">
                <LiveFilter />
                <div className="container mx-auto px-4 max-w-4xl">
                    <LiveFeed />
                </div>
            </div>
        </div>
    );
}
