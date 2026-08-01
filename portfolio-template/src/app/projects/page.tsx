import type { Metadata } from 'next';
import ProjectsClient from './ProjectsClient';

export const metadata: Metadata = {
    title: 'Projects | Jordan Small',
};

export default function ProjectsPage() {
    return <ProjectsClient />;
}
