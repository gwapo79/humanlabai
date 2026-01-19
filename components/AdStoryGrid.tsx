"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { AdStory } from '@/constants/adStoriesData';
import { AdStoryCard } from '@/components/ad-stories/ad-story-card';

interface AdStoryGridProps {
    initialStories: AdStory[];
}

export default function AdStoryGrid({ initialStories }: AdStoryGridProps) {
    const [filter, setFilter] = useState('ALL');
    const categories = ['ALL', 'TREND_2026', 'AI_MARKETING', 'UX_PSYCHOLOGY', 'BRAND_STRATEGY', 'CULTURE'];

    const filteredStories = filter === 'ALL'
        ? initialStories
        : initialStories.filter(story => story.category === filter);

    return (
        <div>
            {/* Category Tabs */}
            <div className="flex flex-wrap gap-2 mb-12">
                {categories.map((cat) => (
                    <button
                        key={cat}
                        onClick={() => setFilter(cat)}
                        className={`px-4 py-2 rounded-full text-sm font-bold transition-all ${filter === cat
                                ? 'bg-white text-black'
                                : 'bg-zinc-900 text-zinc-500 hover:bg-zinc-800'
                            }`}
                    >
                        {cat.replace('_', ' ')}
                    </button>
                ))}
            </div>

            {/* Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <AnimatePresence mode='popLayout'>
                    {filteredStories.map((story) => (
                        <motion.div
                            key={story.id}
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.9 }}
                            layout
                        >
                            <AdStoryCard story={story} />
                        </motion.div>
                    ))}
                </AnimatePresence>
            </div>

            {filteredStories.length === 0 && (
                <div className="text-center py-20 text-gray-500">
                    No stories found in this category.
                </div>
            )}
        </div>
    );
}
