import type { Metadata } from 'next';
import ContactClient from './ContactClient';

export const metadata: Metadata = {
    title: 'Contacting Jordan Small',
};

export default function ContactPage() {
    return <ContactClient />;
}
