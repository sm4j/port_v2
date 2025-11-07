import React from 'react';

interface ProjectCardProps {
    title: string;
    description: string;
    link: string;
    technologies: string[];
    image?: string;
    category: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, link, technologies, image, category }) => {
    return (
        <div className="card group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
            {/* Project Image/Icon */}
            <div className="relative overflow-hidden rounded-t-xl bg-gradient-to-br from-green-500 to-blue-500 h-48 flex items-center justify-center">
                {image ? (
                    <img src={image} alt={title} className="w-full h-full object-cover" />
                ) : (
                    <div className="text-6xl text-white opacity-80">
                        {category === 'AI' ? '🤖' : category === 'Hardware' ? '🔧' : category === 'Mobile Apps' ? '📱' : category === 'Security' ? '🔒' : category === 'Web' ? '🌐' : '💻'}
                    </div>
                )}
                <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
            </div>

            <div className="p-6">
                {/* Category Badge */}
                <div className="mb-3">
                    <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${
                        category === 'AI' ? 'bg-green-100 text-green-700' :
                        category === 'Security' ? 'bg-emerald-100 text-emerald-700' :
                        category === 'Web' ? 'bg-blue-100 text-blue-700' :
                        category === 'Hardware' ? 'bg-yellow-100 text-yellow-700' :
                        category === 'Mobile Apps' ? 'bg-purple-100 text-purple-700' :
                        'bg-gray-100 text-gray-700'
                    }`}>
                        {category}
                    </span>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-green-600 transition-colors duration-300">
                    {title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 mb-4 line-clamp-3">
                    {description}
                </p>

                {/* Technologies */}
                <div className="mb-4">
                    <div className="flex flex-wrap gap-2">
                        {technologies.map((tech, index) => (
                            <span 
                                key={index}
                                className="px-2 py-1 bg-gray-100 text-gray-600 rounded text-xs"
                            >
                                {tech}
                            </span>
                        ))}
                    </div>
                </div>

                {/* Action Button */}
                <div className="flex items-center justify-between">
                    <a 
                        href={link} 
                        className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-green-500 to-blue-500 text-white rounded-lg hover:from-green-600 hover:to-blue-600 transition-all duration-300 font-medium text-sm"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        View Project
                        <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                    </a>
                    <button className="p-2 text-gray-400 hover:text-red-500 transition-colors duration-300">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;