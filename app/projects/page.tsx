import { PROJECTS } from '@/constants/projectsData';
import { ProjectsClient } from '@/components/projects/project-list-client';

export default function ProjectsPage() {
    return (
        <ProjectsClient initialProjects={PROJECTS} />
    );
}
