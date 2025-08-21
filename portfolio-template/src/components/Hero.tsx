import React from 'react';
import Link from 'next/link';

const Hero: React.FC = () => {
    return (
        <div className="hero-container relative min-h-screen flex flex-col items-center justify-center text-center py-20 bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-800">
            {/* Animated background elements */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute -top-40 -right-40 w-80 h-80 rounded-full bg-purple-500 opacity-20 animate-pulse"></div>
                <div className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full bg-blue-500 opacity-20 animate-bounce"></div>
                <div className="absolute top-1/2 left-1/4 w-64 h-64 rounded-full bg-indigo-500 opacity-10 animate-ping"></div>
            </div>
            
            {/* Content */}
            <div className="relative z-10 max-w-4xl mx-auto px-4">
                <div className="mb-8 relative">
                    <img 
                        src="/pfp.png" 
                        alt="Profile" 
                        className="rounded-full w-40 h-40 md:w-48 md:h-48 mb-6 border-4 border-white shadow-2xl mx-auto hover:scale-105 transition-transform duration-300" 
                    />
                    <div className="absolute inset-0 rounded-full w-40 h-40 md:w-48 md:h-48 mx-auto bg-gradient-to-tr from-purple-400 to-blue-400 opacity-30 animate-pulse"></div>
                </div>
                
                <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                    Jordan Small
                </h1>
                
                <div className="space-y-2 mb-8">
                    <p className="text-xl md:text-2xl text-blue-100 font-medium">
                        Bachelor of Science in Computer Science
                    </p>
                    <div className="flex flex-col md:flex-row justify-center items-center gap-2 md:gap-4 text-lg md:text-xl text-purple-200">
                        <span className="px-4 py-2 bg-white/10 rounded-full backdrop-blur-sm border border-white/20">
                            🤖 AI Minor
                        </span>
                        <span className="px-4 py-2 bg-white/10 rounded-full backdrop-blur-sm border border-white/20">
                            🔒 Cybersecurity Minor
                        </span>
                    </div>
                </div>
                
                <p className="text-lg md:text-xl text-blue-200 max-w-2xl mx-auto leading-relaxed mb-8">
                    Passionate about leveraging cutting-edge technology to solve complex problems and create innovative solutions at the intersection of AI and cybersecurity.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link href="/projects">
                        <button className="px-8 py-3 bg-gradient-to-r from-purple-500 to-blue-500 text-white font-semibold rounded-full hover:from-purple-600 hover:to-blue-600 transform hover:scale-105 transition-all duration-300 shadow-lg">
                            View My Work
                        </button>
                    </Link>
                    <Link href="/contact">
                        <button className="px-8 py-3 border-2 border-white text-white font-semibold rounded-full hover:bg-white hover:text-purple-900 transition-all duration-300">
                            Get In Touch
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Hero;