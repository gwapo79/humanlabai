'use client';

import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { LAB_NOTES } from '@/constants/labNotesData';
import { motion } from 'framer-motion';

interface PageProps {
    params: Promise<{ id: string }>;
}

export default async function LabDetailPage({ params }: PageProps) {
    const { id } = await params;
    const note = LAB_NOTES.find((n) => n.id === id);

    if (!note) {
        notFound();
    }

    return (
        <div className="min-h-screen bg-black text-white pt-32 pb-20">
            {/* Progress Bar (Simple) */}
            <motion.div
                className="fixed top-0 left-0 right-0 h-1 bg-humanlab-neon origin-left z-50"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 1, ease: 'easeOut' }}
            />

            <div className="max-w-4xl mx-auto px-6 md:px-0">
                {/* Navigation */}
                <Link
                    href="/lab"
                    className="inline-flex items-center text-gray-500 hover:text-humanlab-neon transition-colors mb-12 font-mono text-xs uppercase tracking-widest gap-2"
                >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" /></svg>
                    Back to Lab
                </Link>

                {/* Header Section */}
                <header className="mb-20">
                    <div className="flex items-center gap-4 mb-6">
                        <span className="text-humanlab-neon font-mono text-sm border border-humanlab-neon/50 px-3 py-1 rounded">
                            {note.category.replace('_', ' ')}
                        </span>
                        <span className="text-gray-500 font-mono text-sm">
                            {note.date}
                        </span>
                        <span className="ml-auto text-xs font-bold text-gray-600 bg-gray-900 border border-gray-800 px-2 py-1 rounded uppercase">
                            {note.status.replace('_', ' ')}
                        </span>
                    </div>

                    <h1 className="text-4xl md:text-6xl font-black leading-tight mb-8 text-white">
                        {note.title}
                    </h1>

                    <div className="flex flex-wrap gap-3">
                        {note.techStack.map((stack) => (
                            <span key={stack} className="text-sm text-gray-400 bg-gray-900 px-4 py-2 rounded-full border border-gray-800">
                                {stack}
                            </span>
                        ))}
                    </div>
                </header>

                {/* Content Body */}
                <div
                    className="prose prose-invert prose-lg max-w-none"
                    dangerouslySetInnerHTML={{ __html: note.content }}
                />

                {/* Footer */}
                <div className="mt-32 pt-12 border-t border-gray-900 flex justify-between items-center text-gray-600 font-mono text-xs uppercase">
                    <div>HumanLab AI Research</div>
                    <div>Confidential • Authorized Personnel Only</div>
                </div>
            </div>
        </div>
    );
}
