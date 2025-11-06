import React from 'react';
import Hero from '../components/Hero';

const HomePage = () => {
    return (
        <div className="min-h-screen">
            <Hero />
            
            {/* Skills Section */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-6xl mx-auto px-4">
                    <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
                        Technical Expertise
                    </h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                            <div className="text-4xl mb-4">💻</div>
                            <h3 className="text-xl font-semibold mb-4 text-gray-800">Software Development</h3>
                            <p className="text-gray-600">
                                Proficient in multiple programming languages including Python, Java, JavaScript, and C++. 
                                Experience with web development/mobile app frameworks and software engineering principles.
                            </p>
                        </div>
                        
                        <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                            <div className="text-4xl mb-4">🤖</div>
                            <h3 className="text-xl font-semibold mb-4 text-gray-800">Artificial Intelligence</h3>
                            <p className="text-gray-600">
                                Specialized knowledge in machine learning, neural networks, and AI algorithms. 
                                Experience with TensorFlow, PyTorch, and data analysis frameworks.
                            </p>
                        </div>
                        
                        <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                            <div className="text-4xl mb-4">🔒</div>
                            <h3 className="text-xl font-semibold mb-4 text-gray-800">Cybersecurity</h3>
                            <p className="text-gray-600">
                                Strong foundation in network security, cryptography, and security protocols. 
                                Understanding of ethical hacking and security assessment methodologies.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Recent Projects Preview */}
            <section className="py-20 bg-white">
                <div className="max-w-6xl mx-auto px-4">
                    <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
                        Featured Projects
                    </h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            {
                                title: 'Marvel Dream Teams',
                                description: 'Completely integrated mobile iOS application that allows users to create and share their own Marvel superhero teams. Built using a SwiftUI frontend and a Firebase backend with Marvel API integration.',
                                tags: ['SwiftUI', 'ParseSwift', 'Firebase'],
                                link: 'https://github.com/sm4j/marveldreamteams',
                                image: '/mdt.png'
                            },
                            {
                                title: 'FlightPath',
                                description: 'Led a five-member team\'s development of an FAU Career Networking Platform that connects students, faculty, and employers. Built with a Next.js frontend and full a AWS cloud architecture.',
                                tags: ['React', 'Next.js', 'PostgresSQL', 'AWS'],
                                link: 'https://flightpath.network',
                                image: '/fp.png'
                            },
                            {
                                title: 'CPU Scheduling Algorithm Simulator',
                                description: 'A desktop application that simulates various CPU scheduling algorithms including FCFS, SJF, Round Robin MLFQ. Built using C++.',
                                tags: ['C++', 'Operating Systems', 'Computer Architecture'],
                                link: 'https://github.com/sm4j/cpu_scheduler',
                                image: '/cpu.png'
                            }
                        ].map((proj) => (
                            <a
                                key={proj.title}
                                href={proj.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group block p-6 rounded-xl border bg-white hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-green-200"
                                aria-label={`View ${proj.title}`}
                            >
                                <div className="flex items-start gap-4 mb-4">
                                    {proj.image && (
                                        <img src={proj.image} alt={`${proj.title} logo`} className="w-12 h-12 object-contain rounded-md" />
                                    )}
                                    <div>
                                        <h3 className="text-xl font-semibold mb-1 text-gray-800 group-hover:text-green-600 transition-colors duration-200">{proj.title}</h3>
                                        <p className="text-gray-600 text-sm line-clamp-4">{proj.description}</p>
                                    </div>
                                </div>
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {proj.tags.map((t) => (
                                        <span key={t} className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">{t}</span>
                                    ))}
                                </div>
                                <div className="text-right">
                                    <span className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-green-500 to-blue-500 text-white rounded-lg opacity-100 group-hover:opacity-100 transition-opacity duration-300 font-medium text-sm">
                                        View Project
                                        <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                        </svg>
                                    </span>
                                </div>
                            </a>
                        ))}
                    </div>
                    
                    <div className="text-center mt-12">
                        <a href="/projects" className="inline-block px-8 py-3 bg-gradient-to-r from-green-500 to-blue-500 text-white font-semibold rounded-full hover:from-green-600 hover:to-blue-600 transform hover:scale-105 transition-all duration-300 shadow-lg">
                            View All Projects
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default HomePage;