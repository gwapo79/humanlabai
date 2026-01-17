import { prisma } from "@/lib/prisma";
import { ProjectsClient } from "@/components/projects/project-list-client";

export default async function ProjectsPage() {
    // Determine status text presentation if needed, but for now passing raw DB objects
    // The ProjectCard component might need adjustment if it expects specific fields.
    // Assuming DB fields match mock data close enough or I will fix ProjectCard later.

    // Check if DB is empty, if so, we might want to return empty list or auto-seed?
    // User requested "Replace Hardcoded Data".

    // We need to fetch Entity data ? 
    // The UI shows Image, Title, Category, Status, Description.
    // Project model has these.

    const projects = await prisma.project.findMany({
        orderBy: { updatedAt: 'desc' }
    });

    return <ProjectsClient initialProjects={projects} />;
}
