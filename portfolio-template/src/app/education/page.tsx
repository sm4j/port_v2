import React from 'react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Education | Jordan Small',
};

const EducationPage = () => {
    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
            <div className="max-w-6xl mx-auto px-4 py-20">
                {/* Hero Section */}
                <div className="text-center mb-16">
                    <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-6">
                        My <span className="text-gradient">Education</span>
                    </h1>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Academic journey in Computer Science with specialized focus on AI and Cybersecurity
                    </p>
                    <div className="w-24 h-1 bg-gradient-to-r from-green-500 to-blue-500 mx-auto mt-6"></div>
                </div>

                {/* Main Degree */}
                <div className="card p-8 mb-12 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-green-400 to-blue-400 opacity-10 transform rotate-45 translate-x-16 -translate-y-16"></div>
                    <div className="relative z-10">
                        <div className="flex items-start justify-between flex-col lg:flex-row gap-6">
                            <div className="flex-1">
                                <div className="flex items-center mb-4">
                                       <div className="w-16 h-16 rounded-full mr-4 bg-gradient-to-br from-green-500 to-blue-500 p-0.5">
                                           <div className="w-full h-full bg-white rounded-full flex items-center justify-center">
                                        <img src="/fau-logo.png" alt="Florida Atlantic University logo" className="w-10 h-10 object-contain" />
                                           </div>
                                    </div>
                                    <div>
                                        <h2 className="text-3xl font-bold text-gray-800">Bachelor of Science</h2>
                                        <p className="text-xl text-green-600 font-semibold">Computer Science</p>
                                    </div>
                                </div>
                                <div className="grid md:grid-cols-2 gap-4 mb-6">
                                    <div>
                                        <p className="text-gray-600"><strong>University:</strong> Florida Atlantic University</p>
                                        <p className="text-gray-600"><strong>Graduation:</strong> December 2025</p>
                                        <p className="text-gray-600"><strong>GPA:</strong> 3.97/4.0</p>
                                    </div>
                                    <div>
                                        <p className="text-gray-600"><strong>Summa Cum Laude</strong></p>
                                        <p className="text-gray-600"><strong>President's List:</strong> 2024-2025</p>
                                        <p className="text-gray-600"><strong>Dean's List:</strong> 2023</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Minors */}
                <div className="grid md:grid-cols-2 gap-8 mb-12">
                    <div className="card p-8">
                        <div className="flex items-center mb-4">
                            <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-blue-500 rounded-full flex items-center justify-center text-white text-xl mr-4">
                                🤖
                            </div>
                            <h3 className="text-2xl font-bold text-gray-800">Artificial Intelligence Minor</h3>
                        </div>
                        <p className="text-gray-600 mb-4">
                            Specialized coursework in machine learning, neural networks, and AI algorithms with hands-on projects.
                        </p>
                        <div className="space-y-2">
                            <h4 className="font-semibold text-gray-800">Key Courses:</h4>
                            <ul className="text-gray-600 space-y-1">
                                <li>• Machine Learning Fundamentals</li>
                                <li>• Deep Learning & Neural Networks</li>
                                <li>• Natural Language Processing</li>
                                <li>• Computer Vision</li>
                                <li>• AI Ethics & Bias</li>
                            </ul>
                        </div>
                    </div>

                    <div className="card p-8">
                        <div className="flex items-center mb-4">
                            <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-blue-500 rounded-full flex items-center justify-center text-white text-xl mr-4">
                                🔒
                            </div>
                            <h3 className="text-2xl font-bold text-gray-800">Cybersecurity Minor</h3>
                        </div>
                        <p className="text-gray-600 mb-4">
                            Comprehensive study of network security, cryptography, and security assessment methodologies.
                        </p>
                        <div className="space-y-2">
                            <h4 className="font-semibold text-gray-800">Key Courses:</h4>
                            <ul className="text-gray-600 space-y-1">
                                <li>• Network Security Principles</li>
                                <li>• Cryptography & Data Protection</li>
                                <li>• Ethical Hacking & Penetration Testing</li>
                                <li>• Digital Forensics</li>
                                <li>• Security Risk Management</li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Core Computer Science Curriculum */}
                <div className="card p-8 mb-12">
                    <h3 className="text-3xl font-bold text-gray-800 mb-6">Core Computer Science Curriculum</h3>
                    <div className="grid md:grid-cols-3 gap-6">
                        <div>
                            <h4 className="text-lg font-semibold text-green-600 mb-3">Programming & Software Engineering</h4>
                            <ul className="text-gray-600 space-y-1">
                                <li>• Data Structures & Algorithms</li>
                                <li>• Object-Oriented Programming</li>
                                <li>• Software Engineering Principles</li>
                                <li>• Database Systems</li>
                                <li>• Web Development</li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="text-lg font-semibold text-blue-600 mb-3">Systems & Architecture</h4>
                            <ul className="text-gray-600 space-y-1">
                                <li>• Computer Systems Architecture</li>
                                <li>• Operating Systems</li>
                                <li>• Computer Networks</li>
                                <li>• Design of Digital Systems</li>
                                <li>• Cloud Computing</li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="text-lg font-semibold text-green-600 mb-3">Theory & Mathematics</h4>
                            <ul className="text-gray-600 space-y-1">
                                <li>• Discrete Mathematics</li>
                                <li>• Stochastic Models & Principles</li>
                                <li>• Calculus III</li>
                                <li>• Theory of Computation</li>
                                <li>• Algorithm Analysis</li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Certifications & Awards */}
                <div className="grid md:grid-cols-2 gap-8">
                    <div className="card p-6">
                        <h3 className="text-2xl font-bold text-gray-800 mb-4">🏆 Awards & Recognition</h3>
                        <ul className="space-y-3">
                            <li className="flex items-center">
                                <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                                <span className="text-gray-600">President's List (2023-2025)</span>
                            </li>
                            <li className="flex items-center">
                                <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                                <span className="text-gray-600">3+ Letters of Recommendation</span>
                            </li>
                            <li className="flex items-center">
                                <div className="w-2 h-2 bg-emerald-500 rounded-full mr-3"></div>
                                <span className="text-gray-600">Credited Reference List</span>
                            </li>
                            <li className="flex items-center">
                                <div className="w-2 h-2 bg-orange-500 rounded-full mr-3"></div>
                                <span className="text-gray-600">Undergraduate Excellence Grant Recipient</span>
                            </li>
                        </ul>
                    </div>

                    <div className="card p-6">
                        <h3 className="text-2xl font-bold text-gray-800 mb-4">📜 Certifications</h3>
                        <ul className="space-y-3">
                            <li className="flex items-center">
                                <div className="w-2 h-2 bg-red-500 rounded-full mr-3"></div>
                                <span className="text-gray-600">CodePath Intermediate iOS Development Certification</span>
                            </li>
                            <li className="flex items-center">
                                <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                                <span className="text-gray-600">CodePath Intermediate Cybersecurity Certification</span>
                            </li>
                            <li className="flex items-center">
                                <div className="w-2 h-2 bg-emerald-500 rounded-full mr-3"></div>
                                <span className="text-gray-600">Google/Coursera Project Management Professional Certification</span>
                            </li>
                            <li className="flex items-center">
                                <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                                <span className="text-gray-600">CompTIA Security+ (In Progress)</span>
                            </li>
                        </ul>
                    </div>
                </div>
                {/* First Degree */}
                <div className="card p-8 mb-12 mt-12 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-green-400 to-blue-400 opacity-10 transform rotate-45 translate-x-16 -translate-y-16"></div>
                    <div className="relative z-10">
                        <div className="flex items-start justify-between flex-col lg:flex-row gap-6">
                            <div className="flex-1">
                                <div className="flex items-center mb-4">
                                       <div className="w-16 h-16 rounded-full mr-4 bg-gradient-to-br from-green-500 to-blue-500 p-0.5">
                                           <div className="w-full h-full bg-white rounded-full flex items-center justify-center">
                                        <img src="/bc-logo.jpeg" alt="Broward College logo" className="w-10 h-10 object-contain" />
                                           </div>
                                    </div>
                                    <div>
                                        <h2 className="text-3xl font-bold text-gray-800">Associates Degree</h2>
                                        <p className="text-xl text-green-600 font-semibold">General Engineering</p>
                                    </div>
                                </div>
                                <div className="grid md:grid-cols-2 gap-4 mb-6">
                                    <div>
                                        <p className="text-gray-600"><strong>University:</strong> Broward College</p>
                                        <p className="text-gray-600"><strong>Graduation:</strong> December 2019</p>
                                        <p className="text-gray-600"><strong>GPA:</strong> 3.97/4.0</p>
                                    </div>
                                    <div>
                                        <p className="text-gray-600"><strong>Summa Cum Laude</strong></p>
                                        <p className="text-gray-600"><strong>President's List:</strong> All Semesters</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EducationPage;