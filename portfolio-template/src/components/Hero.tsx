import React from 'react';

const Hero: React.FC = () => {
    return (
        <div className="hero-container flex flex-col items-center justify-center text-center py-20">
            <img src="/pfp.png" alt="Profile" className="rounded-full w-32 h-32 mb-4" />
            <h1 className="text-4xl font-bold">Jordan Doe</h1>
            <p className="text-lg mt-2">Bachelor of Science in Computer Science</p>
            <p className="text-lg">Dual Minor in Artificial Intelligence and Cybersecurity</p>
        </div>
    );
};

export default Hero;