import { NextResponse } from 'next/server';
import { supabase } from '@/utils/supabase';
import { AD_STORIES } from '@/constants/adStoriesData';
import { PROJECTS } from '@/constants/projectsData';
import { LAB_NOTES } from '@/constants/labNotesData';

export async function GET() {
    try {
        // 1. Ad Stories 데이터 주입
        console.log("🚀 Uploading Ad Stories...");
        const storiesData = AD_STORIES.map(story => ({
            title: story.title,
            category: story.category,
            summary: story.summary,
            content: story.content,
            tags: story.tags,
            is_featured: story.isFeatured || false,
            published_date: story.date,
        }));

        const { error: storyError } = await supabase
            .from('ad_stories')
            .insert(storiesData);

        if (storyError) {
            console.warn("⚠️ Ad Stories upload warning (might be duplicates):", storyError.message);
        }

        // 2. Projects 데이터 주입
        console.log("🚀 Uploading Projects...");
        const projectsData = PROJECTS.map(project => ({
            title: project.title,
            category: project.category,
            description: project.desc,
            type: project.type,
            image_url: project.image,
        }));

        const { error: projectError } = await supabase
            .from('projects')
            .insert(projectsData);

        if (projectError) {
            console.warn("⚠️ Projects upload warning (might be duplicates):", projectError.message);
        }

        // 3. Lab Notes 데이터 주입
        console.log("🚀 Uploading Lab Notes...");
        const labData = LAB_NOTES.map(note => ({
            title: note.title,
            category: note.category,
            status: note.status,
            tech_stack: note.techStack,
            summary: note.summary,
            content: note.content
        }));

        let labErrorDetail = null;
        const { error: labError } = await supabase
            .from('lab_notes')
            .insert(labData);

        if (labError) {
            console.warn("⚠️ Lab Notes upload warning:", labError.message);
            labErrorDetail = labError;
        }

        return NextResponse.json({
            message: "✅ Data Seeding Completed Successfully!",
            details: "Check console for any warnings regarding duplicates.",
            labError: labErrorDetail
        });

    } catch (error: any) {
        console.error("❌ Seeding Failed:", error);
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
