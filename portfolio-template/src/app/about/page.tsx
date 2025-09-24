import React from 'react';

const AboutPage = () => {
    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
            <div className="max-w-6xl mx-auto px-4 py-20">
                {/* Hero Section */}
                <div className="text-center mb-16">
                    <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-6">
                        About <span className="text-gradient">Me</span>
                    </h1>
                    <div className="w-24 h-1 bg-gradient-to-r from-green-500 to-blue-500 mx-auto"></div>
                </div>

                {/* Main Content */}
                <div className="grid lg:grid-cols-3 gap-12 mb-16">
                    {/* Profile Card */}
                    <div className="lg:col-span-1">
                        <div className="card p-8 text-center sticky top-28">
                            <img 
                                src="/pfp.png" 
                                alt="Profile" 
                                className="w-48 h-48 rounded-full mx-auto mb-6 border-4 border-green-200 shadow-xl hover:scale-105 transition-transform duration-300" 
                            />
                            <h2 className="text-2xl font-bold text-gray-800 mb-2">Jordan Doe</h2>
                            <p className="text-green-600 font-semibold mb-4">Computer Science Graduate</p>
                            <div className="space-y-2">
                                <div className="inline-block px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm">
                                    🎓 BS Computer Science
                                </div>
                                <div className="inline-block px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm ml-2">
                                    🤖 AI Minor
                                </div>
                                <div className="inline-block px-4 py-2 bg-emerald-100 text-emerald-700 rounded-full text-sm">
                                    🔒 Cybersecurity Minor
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Content */}
                    <div className="lg:col-span-2 space-y-8">
                        {/* Introduction */}
                        <div className="card p-8">
                            <h2 className="text-3xl font-bold text-gray-800 mb-4">My Journey</h2>
                            <p className="text-gray-600 text-lg leading-relaxed mb-4">
                                Throughout my academic and professional journey, I’ve cultivated both technical 
                                and interpersonal strengths. From coding projects and cybersecurity challenges to 
                                AI-driven research, I’ve gained hands-on experience applying theory to real-world 
                                problems. At the same time, my background in sales and my ability to communicate 
                                effectively have given me a unique edge: I can translate complex technical concepts 
                                into clear, compelling narratives that resonate with stakeholders, teammates, and 
                                clients alike.
                            </p>
                            <p className="text-gray-600 text-lg leading-relaxed">
                                This combination of skills has shaped me into a versatile professional—equally 
                                comfortable designing system architectures, pitching ideas persuasively, or 
                                collaborating across diverse teams to bring a shared vision to life.
                            </p>
                        </div>

                        {/* Skills & Expertise */}
                        <div className="card p-8">
                            <h2 className="text-3xl font-bold text-gray-800 mb-6">Technical Expertise</h2>
                            <div className="grid md:grid-cols-2 gap-6">
                                <div>
                                    <h3 className="text-xl font-semibold text-green-600 mb-3">Languages & Frameowkrs</h3>
                                    <div className="flex flex-wrap gap-2">
                                        <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">Python</span>
                                        <span className="px-3 py-1 bg-yellow-100 text-yellow-700 rounded-full text-sm">JavaScript</span>
                                        <span className="px-3 py-1 bg-red-100 text-red-700 rounded-full text-sm">Java</span>
                                        <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm">C++</span>
                                        <span className="px-3 py-1 bg-emerald-100 text-emerald-700 rounded-full text-sm">SQL</span>
                                        <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm">HTML/CSS</span>
                                        <span className="px-3 py-1 bg-pink-100 text-pink-700 rounded-full text-sm">C</span>
                                        <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">PHP</span>
                                        <span className="px-3 py-1 bg-orange-100 text-gray-700 rounded-full text-sm">SwiftUI</span>
                                        <span className="px-3 py-1 bg-green-100 text-gray-700 rounded-full text-sm">VHDL</span>
                                        <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">React</span>
                                        <span className="px-3 py-1 bg-yellow-100 text-yellow-700 rounded-full text-sm">Next.js</span>
                                    </div>
                                </div>
                                <div>
                                    <h3 className="text-xl font-semibold text-gray-800 mb-3">Libraries & AI/ML Tools</h3>
                                    <div className="flex flex-wrap gap-2">
                                        <span className="px-3 py-1 bg-orange-100 text-orange-700 rounded-full text-sm">TensorFlow</span>
                                        <span className="px-3 py-1 bg-red-100 text-red-700 rounded-full text-sm">PyTorch</span>
                                        <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">Scikit-learn</span>
                                        <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm">Pandas</span>
                                        <span className="px-3 py-1 bg-yellow-100 text-yellow-700 rounded-full text-sm">NumPy</span>
                                        <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm">Matplotlib</span>
                                        <span className="px-3 py-1 bg-teal-100 text-teal-700 rounded-full text-sm">ParseAPI</span>
                                        <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">SageMath</span>
                                    </div>
                                </div>
                                <div>
                                    <h3 className="text-xl font-semibold text-gray-800 mb-3">Technologies</h3>
                                    <div className="flex flex-wrap gap-2">
                                        <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">Git</span>
                                        <span className="px-3 py-1 bg-black text-white rounded-full text-sm">AWS</span>
                                        <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm">Xcode</span>
                                        <span className="px-3 py-1 bg-teal-100 text-teal-700 rounded-full text-sm">Altera Quartus</span>
                                        <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">MS Office</span>
                                        <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm">Visual Studio</span>
                                        <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">Firebase</span>
                                        <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">Vivado</span>
                                        <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm">Jupyter</span>
                                        <span className="px-3 py-1 bg-yellow-100 text-yellow-700 rounded-full text-sm">Back4app</span>
                                    </div>
                                </div>
                                <div>
                                    <h3 className="text-xl font-semibold text-gray-800 mb-3">Security Tools</h3>
                                    <div className="flex flex-wrap gap-2">
                                        <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">Wireshark</span>
                                        <span className="px-3 py-1 bg-red-100 text-red-700 rounded-full text-sm">Burp Suite</span>
                                        <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm">Metasploit</span>
                                        <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">Splunk</span>
                                        <span className="px-3 py-1 bg-red-100 text-red-700 rounded-full text-sm">Cain and Abel</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Interests & Goals */}
                        <div className="card p-8">
                            <h2 className="text-3xl font-bold text-gray-800 mb-4">Interests & Goals</h2>
                            <p className="text-gray-600 text-lg leading-relaxed mb-4">
                               I’m deeply fascinated by the intersection of AI and cybersecurity—two fields 
                               that are rapidly reshaping how we live and work. My goal is to contribute to 
                               innovative solutions that not only push technological boundaries but also 
                               address critical global challenges such as data privacy, digital trust, and 
                               secure AI adoption.
                            </p>
                            <p className="text-gray-600 text-lg leading-relaxed">
                                Looking ahead, I aspire to pursue opportunities where I can continue building 
                                on my technical foundation while also leveraging my communication and leadership 
                                skills. Whether it’s guiding clients through transformative tech solutions, 
                                driving cross-disciplinary innovation, or leading teams to tackle high-stakes 
                                challenges, I aim to grow into a role that fuses technical problem-solving with 
                                human connection and impact.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Stats Section */}
                <div className="grid md:grid-cols-4 gap-6 text-center">
                    <div className="card p-6">
                        <div className="text-3xl font-bold text-green-600 mb-2">4.0</div>
                        <div className="text-gray-600">GPA</div>
                    </div>
                    <div className="card p-6">
                        <div className="text-3xl font-bold text-blue-600 mb-2">15+</div>
                        <div className="text-gray-600">Projects Completed</div>
                    </div>
                    <div className="card p-6">
                        <div className="text-3xl font-bold text-green-600 mb-2">3</div>
                        <div className="text-gray-600">Internships</div>
                    </div>
                    <div className="card p-6">
                        <div className="text-3xl font-bold text-orange-600 mb-2">5+</div>
                        <div className="text-gray-600">Certifications</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutPage;