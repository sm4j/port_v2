'use client';

import React, { useState } from 'react';
import ProjectCard from '../../components/ProjectCard';

const projects = [
    {
        title: 'AI-Powered Security Analyzer',
        description: 'Machine learning model that analyzes network traffic patterns to detect potential security threats and anomalies in real-time. Uses deep learning algorithms to identify suspicious activities.',
        link: 'https://github.com/jordan/ai-security-analyzer',
        technologies: ['Python', 'TensorFlow', 'Pandas', 'Scikit-learn', 'Flask'],
        category: 'AI'
    },
    {
        title: 'Smart Campus Navigation App',
        description: 'Full-stack web application that helps students navigate campus efficiently. Features real-time location tracking, building information, and event management system.',
        link: 'https://github.com/jordan/campus-nav-app',
        technologies: ['React', 'Node.js', 'MongoDB', 'Express', 'Google Maps API'],
        category: 'Web'
    },
    {
        title: 'Cryptographic Toolkit',
        description: 'Comprehensive encryption and decryption toolkit implementing various cryptographic algorithms including AES, RSA, and custom hash functions for secure data transmission.',
        link: 'https://github.com/jordan/crypto-toolkit',
        technologies: ['Java', 'Spring Boot', 'OpenSSL', 'JUnit', 'Maven'],
        category: 'Security'
    },
    {
        title: 'Neural Network Visualizer',
        description: 'Interactive web application for visualizing neural network architectures and training processes. Helps students understand deep learning concepts through visual representation.',
        link: 'https://github.com/jordan/nn-visualizer',
        technologies: ['JavaScript', 'D3.js', 'Python', 'FastAPI', 'TensorFlow.js'],
        category: 'AI'
    },
    {
        title: 'Penetration Testing Framework',
        description: 'Automated penetration testing framework for web applications. Includes vulnerability scanning, SQL injection detection, and comprehensive security reporting.',
        link: 'https://github.com/jordan/pentest-framework',
        technologies: ['Python', 'Selenium', 'SQLMap', 'Nmap', 'Docker'],
        category: 'Security'
    },
    {
        title: 'E-Commerce Platform',
        description: 'Full-featured e-commerce platform with user authentication, payment processing, inventory management, and responsive design for optimal user experience.',
        link: 'https://github.com/jordan/ecommerce-platform',
        technologies: ['Next.js', 'TypeScript', 'Stripe', 'PostgreSQL', 'Tailwind CSS'],
        category: 'Web'
    },
    {
        title: 'Sentiment Analysis API',
        description: 'RESTful API service that performs sentiment analysis on text data using natural language processing. Trained on multiple datasets for improved accuracy.',
        link: 'https://github.com/jordan/sentiment-api',
        technologies: ['Python', 'NLTK', 'Flask', 'Docker', 'AWS'],
        category: 'AI'
    },
    {
        title: 'Blockchain Voting System',
        description: 'Secure voting system built on blockchain technology ensuring transparency, immutability, and voter anonymity. Includes smart contracts for vote validation.',
        link: 'https://github.com/jordan/blockchain-voting',
        technologies: ['Solidity', 'Web3.js', 'Ethereum', 'React', 'Truffle'],
        category: 'Security'
    },
    {
        title: 'Personal Finance Tracker',
        description: 'Mobile-responsive web app for tracking personal finances with budget management, expense categorization, and financial goal setting features.',
        link: 'https://github.com/jordan/finance-tracker',
        technologies: ['Vue.js', 'Node.js', 'Chart.js', 'MySQL', 'JWT'],
        category: 'Web'
    }
];

const ProjectsPage = () => {
    const [selectedCategory, setSelectedCategory] = useState('All');
    const categories = ['All', 'AI', 'Security', 'Web'];

    const filteredProjects = selectedCategory === 'All' 
        ? projects 
        : projects.filter(project => project.category === selectedCategory);

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
            <div className="max-w-7xl mx-auto px-4 py-20">
                {/* Hero Section */}
                <div className="text-center mb-16">
                    <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-6">
                        My <span className="text-gradient">Projects</span>
                    </h1>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
                        A showcase of innovative projects spanning AI, cybersecurity, and web development
                    </p>
                    <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto"></div>
                </div>

                {/* Filter Buttons */}
                <div className="flex justify-center mb-12">
                    <div className="bg-white rounded-full p-1 shadow-lg">
                        {categories.map((category) => (
                            <button
                                key={category}
                                onClick={() => setSelectedCategory(category)}
                                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                                    selectedCategory === category
                                        ? 'bg-gradient-to-r from-purple-500 to-blue-500 text-white shadow-lg'
                                        : 'text-gray-600 hover:text-purple-600'
                                }`}
                            >
                                {category}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Projects Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                    {filteredProjects.map((project, index) => (
                        <div
                            key={index}
                            className="opacity-0 animate-fade-in"
                            style={{ animationDelay: `${index * 0.1}s`, animationFillMode: 'forwards' }}
                        >
                            <ProjectCard 
                                title={project.title}
                                description={project.description}
                                link={project.link}
                                technologies={project.technologies}
                                category={project.category}
                            />
                        </div>
                    ))}
                </div>

                {/* Stats Section */}
                <div className="bg-white rounded-2xl shadow-xl p-8">
                    <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Project Statistics</h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        <div className="text-center">
                            <div className="text-4xl font-bold text-purple-600 mb-2">15+</div>
                            <div className="text-gray-600">Total Projects</div>
                        </div>
                        <div className="text-center">
                            <div className="text-4xl font-bold text-blue-600 mb-2">5</div>
                            <div className="text-gray-600">AI Projects</div>
                        </div>
                        <div className="text-center">
                            <div className="text-4xl font-bold text-green-600 mb-2">4</div>
                            <div className="text-gray-600">Security Projects</div>
                        </div>
                        <div className="text-center">
                            <div className="text-4xl font-bold text-orange-600 mb-2">6</div>
                            <div className="text-gray-600">Web Projects</div>
                        </div>
                    </div>
                </div>

                {/* Call to Action */}
                <div className="text-center mt-16">
                    <h2 className="text-3xl font-bold text-gray-800 mb-4">Interested in Collaboration?</h2>
                    <p className="text-xl text-gray-600 mb-8">
                        Let's work together on innovative projects that make a difference.
                    </p>
                    <a 
                        href="/contact"
                        className="btn-primary inline-block"
                    >
                        Get In Touch
                    </a>
                </div>
            </div>

            <style jsx>{`
                @keyframes fade-in {
                    from {
                        opacity: 0;
                        transform: translateY(20px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }
                .animate-fade-in {
                    animation: fade-in 0.6s ease-out;
                }
            `}</style>
        </div>
    );
};

export default ProjectsPage;