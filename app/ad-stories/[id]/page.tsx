import { AD_STORIES } from "@/constants/adStoriesData";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Clock } from "lucide-react";
import { cn } from "@/lib/utils";
import { ReadingProgressBar } from "@/components/ad-stories/reading-progress-bar";

// Generate Static Params if we were doing SSG, but for now dynamic is fine.
// export async function generateStaticParams() {}

interface PageProps {
    params: Promise<{ id: string }>;
}

export default async function AdStoryDetailPage(props: PageProps) {
    const params = await props.params;
    const { id } = params;

    const story = AD_STORIES.find((s) => s.id === id);

    if (!story) {
        notFound();
    }

    const categoryColor = {
        'TREND_2026': 'text-pink-400 bg-pink-500/10 border-pink-500/20',
        'AI_MARKETING': 'text-blue-400 bg-blue-500/10 border-blue-500/20',
        'UX_PSYCHOLOGY': 'text-purple-400 bg-purple-500/10 border-purple-500/20',
        'BRAND_STRATEGY': 'text-emerald-400 bg-emerald-500/10 border-emerald-500/20',
    }[story.category] || 'text-gray-400 bg-gray-500/10 border-gray-500/20';

    return (
        <>
            <ReadingProgressBar />
            <article className="min-h-screen bg-black pt-32 pb-24 text-white">
                <div className="container mx-auto px-4 max-w-3xl">

                    {/* Back Button */}
                    <Link
                        href="/ad-stories"
                        className="inline-flex items-center gap-2 text-gray-500 hover:text-white transition-colors mb-12 group"
                    >
                        <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
                        <span className="font-medium">목록으로 돌아가기</span>
                    </Link>

                    {/* Header */}
                    <header className="mb-16 space-y-6">
                        <div className="flex flex-wrap gap-3 items-center">
                            <span className={cn("text-xs font-bold tracking-wider px-3 py-1 rounded-full border", categoryColor)}>
                                {story.category.replace('_', ' ')}
                            </span>
                            <div className="flex items-center gap-2 text-gray-500 text-sm font-mono">
                                <Clock className="w-4 h-4" />
                                {story.date}
                            </div>
                        </div>

                        <h1 className="text-4xl md:text-6xl font-bold leading-tight tracking-tight">
                            {story.title}
                        </h1>

                        <div className="flex flex-wrap gap-2 pt-2">
                            {story.tags.map(tag => (
                                <span key={tag} className="text-sm text-gray-400 bg-white/5 px-2 py-1 rounded">
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </header>

                    {/* Content */}
                    <div className="prose prose-invert prose-lg max-w-none">
                        <div className="text-xl md:text-2xl text-gray-300 font-medium leading-relaxed mb-12 border-l-4 border-blue-500 pl-6 py-2">
                            {story.summary}
                        </div>

                        {/* Render HTML content */}
                        <div
                            className="space-y-6 text-lg text-gray-300 leading-8"
                            dangerouslySetInnerHTML={{ __html: story.content }}
                        />
                    </div>

                    {/* Footer Navigation */}
                    <div className="mt-24 pt-12 border-t border-white/10 flex justify-center">
                        <Link
                            href="/ad-stories"
                            className="px-8 py-3 bg-white text-black font-bold rounded-full hover:bg-gray-200 transition-colors"
                        >
                            다른 인사이트 보러가기
                        </Link>
                    </div>

                </div>
            </article>
        </>
    );
}
