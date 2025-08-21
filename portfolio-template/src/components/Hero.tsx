'use client';

import React from 'react';
import Link from 'next/link';

const Hero: React.FC = () => {
    // Generate matrix characters
    const generateMatrixColumns = () => {
        const columns = [];
        const columnCount = 20;
        
        for (let i = 0; i < columnCount; i++) {
            const chars = [];
            const charCount = Math.floor(Math.random() * 20) + 10;
            
            for (let j = 0; j < charCount; j++) {
                chars.push(Math.random() > 0.5 ? '1' : '0');
            }
            
            columns.push(
                <div
                    key={i}
                    className="matrix-column absolute text-green-500 opacity-20 select-none pointer-events-none"
                    style={{
                        left: `${(i / columnCount) * 100}%`,
                        animation: `matrix-rain ${Math.random() * 3 + 2}s linear infinite`,
                        animationDelay: `${Math.random() * 2}s`,
                        fontSize: '14px',
                        lineHeight: '20px'
                    }}
                >
                    {chars.map((char, index) => (
                        <div key={index} style={{ 
                            fontFamily: 'Courier New, monospace',
                            fontWeight: 'bold',
                            textShadow: '0 0 5px #10b981'
                        }}>
                            {char}
                        </div>
                    ))}
                </div>
            );
        }
        return columns;
    };

    return (
        <div className="hero-container relative min-h-screen flex flex-col items-center justify-center text-center py-20 bg-gradient-to-br from-gray-900 via-green-900 to-gray-800">
            {/* Matrix background */}
            <div className="absolute inset-0 overflow-hidden">
                {generateMatrixColumns()}
            </div>
            
            {/* Content */}
            <div className="relative z-10 max-w-4xl mx-auto px-4">
                <div className="mb-8 relative">
                    <img 
                        src="/pfp.png" 
                        alt="Profile" 
                        className="rounded-full w-40 h-40 md:w-48 md:h-48 mb-6 border-4 border-white shadow-2xl mx-auto" 
                    />
                </div>
                
                <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
                    Jordan Small
                </h1>
                
                <div className="space-y-2 mb-8">
                    <p className="text-xl md:text-2xl text-blue-100 font-medium">
                        Bachelor of Science in Computer Science
                    </p>
                    <div className="flex flex-col md:flex-row justify-center items-center gap-2 md:gap-4 text-lg md:text-xl text-green-200">
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
                        <button className="px-8 py-3 bg-gradient-to-r from-green-500 to-blue-500 text-white font-semibold rounded-full hover:from-green-600 hover:to-blue-600 transform hover:scale-105 transition-all duration-300 shadow-lg">
                            View My Work
                        </button>
                    </Link>
                    <Link href="/contact">
                        <button className="px-8 py-3 border-2 border-white text-white font-semibold rounded-full hover:bg-white hover:text-green-900 transition-all duration-300">
                            Get In Touch
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Hero;