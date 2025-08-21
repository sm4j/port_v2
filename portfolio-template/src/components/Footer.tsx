import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white py-4">
            <div className="container mx-auto text-center">
                <p>&copy; {new Date().getFullYear()} Your Name. All rights reserved.</p>
                <p>
                    <a href="/about" className="text-gray-400 hover:text-white">About</a> | 
                    <a href="/projects" className="text-gray-400 hover:text-white">Projects</a> | 
                    <a href="/contact" className="text-gray-400 hover:text-white">Contact</a>
                </p>
            </div>
        </footer>
    );
};

export default Footer;