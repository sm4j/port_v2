import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../styles/globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Jordan Small - Computer Science Portfolio',
    description: 'Computer Science graduate specializing in AI and Cybersecurity. Explore my projects and technical expertise.',
    keywords: 'Computer Science, AI, Cybersecurity, Portfolio, Machine Learning, Security, Web Development',
    authors: [{ name: 'Jordan Small' }],
};

interface LayoutProps {
    children: React.ReactNode;
}

const RootLayout: React.FC<LayoutProps> = ({ children }) => {
    return (
        <html lang="en">
            <body>
                <div className="min-h-screen flex flex-col">
                    <Header />
                    <main className="flex-grow pt-20">{children}</main>
                    <Footer />
                </div>
            </body>
        </html>
    );
};

export default RootLayout;