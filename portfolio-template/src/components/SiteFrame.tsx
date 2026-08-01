'use client';

import React from 'react';
import { usePathname } from 'next/navigation';
import Header from './Header';
import Footer from './Footer';

interface SiteFrameProps {
    children: React.ReactNode;
}

const SiteFrame: React.FC<SiteFrameProps> = ({ children }) => {
    const pathname = usePathname();
    const isTipPage = pathname === '/tipme';

    return (
        <div className="min-h-screen flex flex-col">
            {!isTipPage && <Header />}
            <main className={isTipPage ? 'flex-grow' : 'flex-grow pt-20'}>{children}</main>
            {!isTipPage && <Footer />}
        </div>
    );
};

export default SiteFrame;