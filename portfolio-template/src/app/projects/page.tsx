import React from 'react';
import ProjectCard from '../../components/ProjectCard';

const projects = [
    {
        title: 'Project One',
        description: 'A brief description of Project One, highlighting its features and technologies used.',
        link: 'https://github.com/username/project-one'
    },
    {
        title: 'Project Two',
        description: 'A brief description of Project Two, highlighting its features and technologies used.',
        link: 'https://github.com/username/project-two'
    },
    {
        title: 'Project Three',
        description: 'A brief description of Project Three, highlighting its features and technologies used.',
        link: 'https://github.com/username/project-three'
    }
];

const ProjectsPage = () => {
    return (
        <div className="projects-container">
            <h1 className="text-3xl font-bold mb-4">Projects</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {projects.map((project, index) => (
                    <ProjectCard key={index} title={project.title} description={project.description} link={project.link} />
                ))}
            </div>
        </div>
    );
};

export default ProjectsPage;