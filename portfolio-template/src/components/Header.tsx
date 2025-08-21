'use client';

import React, { useState } from 'react';
import Link from 'next/link';

const Header: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header className="fixed top-0 w-full bg-white/90 backdrop-blur-md border-b border-gray-200 z-50 shadow-sm">
            <nav className="max-w-6xl mx-auto px-4 py-4">
                <div className="flex justify-between items-center">
                    <div className="text-2xl font-bold bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
                        Jordan Small
                    </div>
                    
                    {/* Desktop Navigation */}
                    <ul className="hidden md:flex space-x-8">
                        <li>
                            <Link href="/" className="text-gray-700 hover:text-green-600 transition-colors duration-300 font-medium">
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link href="/about" className="text-gray-700 hover:text-green-600 transition-colors duration-300 font-medium">
                                About
                            </Link>
                        </li>
                        <li>
                            <Link href="/education" className="text-gray-700 hover:text-green-600 transition-colors duration-300 font-medium">
                                Education
                            </Link>
                        </li>
                        <li>
                            <Link href="/projects" className="text-gray-700 hover:text-green-600 transition-colors duration-300 font-medium">
                                Projects
                            </Link>
                        </li>
                        <li>
                            <Link href="/contact" className="px-6 py-2 bg-gradient-to-r from-green-500 to-blue-500 text-white rounded-full hover:from-green-600 hover:to-blue-600 transition-all duration-300 font-medium">
                                Contact
                            </Link>
                        </li>
                    </ul>

                    {/* Mobile Menu Button */}
                    <button 
                        className="md:hidden text-gray-700 hover:text-green-600 transition-colors duration-300"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </button>
                </div>

                {/* Mobile Navigation */}
                {isMenuOpen && (
                    <div className="md:hidden mt-4 py-4 border-t border-gray-200">
                        <ul className="space-y-4">
                            <li>
                                <Link href="/" className="block text-gray-700 hover:text-green-600 transition-colors duration-300 font-medium py-2">
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link href="/about" className="block text-gray-700 hover:text-green-600 transition-colors duration-300 font-medium py-2">
                                    About
                                </Link>
                            </li>
                            <li>
                                <Link href="/education" className="block text-gray-700 hover:text-green-600 transition-colors duration-300 font-medium py-2">
                                    Education
                                </Link>
                            </li>
                            <li>
                                <Link href="/projects" className="block text-gray-700 hover:text-green-600 transition-colors duration-300 font-medium py-2">
                                    Projects
                                </Link>
                            </li>
                            <li>
                                <Link href="/contact" className="inline-block px-6 py-2 bg-gradient-to-r from-green-500 to-blue-500 text-white rounded-full hover:from-green-600 hover:to-blue-600 transition-all duration-300 font-medium">
                                    Contact
                                </Link>
                            </li>
                        </ul>
                    </div>
                )}
            </nav>
        </header>
    );
};

export default Header;