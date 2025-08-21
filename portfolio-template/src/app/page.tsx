import React from 'react';
import Hero from '../components/Hero';

const HomePage = () => {
    return (
        <main className="flex flex-col items-center justify-center min-h-screen">
            <Hero />
            <section className="text-center mt-8">
                <h1 className="text-4xl font-bold">Welcome to My Portfolio</h1>
                <p className="mt-4 text-lg">
                    I am a recent graduate with a Bachelor of Science in Computer Science, 
                    along with dual minors in Artificial Intelligence and Cybersecurity. 
                    Explore my work and learn more about my journey!
                </p>
            </section>
        </main>
    );
};

export default HomePage;