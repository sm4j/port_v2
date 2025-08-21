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
                                Experience with web development frameworks and software engineering principles.
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
                        <div className="bg-gradient-to-br from-purple-50 to-blue-50 p-6 rounded-xl border border-purple-100 hover:shadow-lg transition-shadow duration-300">
                            <h3 className="text-xl font-semibold mb-3 text-gray-800">AI-Powered Security Analyzer</h3>
                            <p className="text-gray-600 mb-4">
                                Machine learning model for detecting network anomalies and potential security threats.
                            </p>
                            <div className="flex flex-wrap gap-2">
                                <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm">Python</span>
                                <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">TensorFlow</span>
                                <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm">Cybersecurity</span>
                            </div>
                        </div>

                        <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-xl border border-blue-100 hover:shadow-lg transition-shadow duration-300">
                            <h3 className="text-xl font-semibold mb-3 text-gray-800">Smart Campus App</h3>
                            <p className="text-gray-600 mb-4">
                                Full-stack web application for campus navigation and resource management.
                            </p>
                            <div className="flex flex-wrap gap-2">
                                <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">React</span>
                                <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm">Node.js</span>
                                <span className="px-3 py-1 bg-yellow-100 text-yellow-700 rounded-full text-sm">MongoDB</span>
                            </div>
                        </div>

                        <div className="bg-gradient-to-br from-green-50 to-teal-50 p-6 rounded-xl border border-green-100 hover:shadow-lg transition-shadow duration-300">
                            <h3 className="text-xl font-semibold mb-3 text-gray-800">Encryption Toolkit</h3>
                            <p className="text-gray-600 mb-4">
                                Comprehensive cryptographic toolkit with multiple encryption algorithms implementation.
                            </p>
                            <div className="flex flex-wrap gap-2">
                                <span className="px-3 py-1 bg-red-100 text-red-700 rounded-full text-sm">Java</span>
                                <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm">Cryptography</span>
                                <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">Security</span>
                            </div>
                        </div>
                    </div>
                    
                    <div className="text-center mt-12">
                        <a href="/projects" className="inline-block px-8 py-3 bg-gradient-to-r from-purple-500 to-blue-500 text-white font-semibold rounded-full hover:from-purple-600 hover:to-blue-600 transform hover:scale-105 transition-all duration-300 shadow-lg">
                            View All Projects
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default HomePage;