import type { Metadata } from 'next';
import TipMeClient from './TipMeClient';

export const metadata: Metadata = {
	title: 'Feeling Generous?',
};

export default function TipMePage() {
	return <TipMeClient />;
}
