'use client';

import React, { useState } from 'react';

type TipOption = {
	name: string;
	description: string;
	href: string;
	accent: string;
	icon: React.ReactNode;
	note: string;
	extra?: string;
};

const phoneNumberDisplay = '(786) 365-6629';
const phoneNumberHref = 'sms:+17863656629';

const sparkleDots = [
	{ top: '10%', left: '12%', size: '0.5rem', delay: '0s' },
	{ top: '18%', left: '82%', size: '0.65rem', delay: '0.7s' },
	{ top: '34%', left: '18%', size: '0.4rem', delay: '1.2s' },
	{ top: '46%', left: '76%', size: '0.55rem', delay: '1.8s' },
	{ top: '62%', left: '10%', size: '0.45rem', delay: '0.4s' },
	{ top: '74%', left: '86%', size: '0.6rem', delay: '1.1s' },
	{ top: '84%', left: '24%', size: '0.35rem', delay: '1.5s' },
	{ top: '88%', left: '68%', size: '0.5rem', delay: '0.2s' },
];

const tipOptions: TipOption[] = [
	{
		name: 'PayPal',
		description: 'A simple way to leave a little something if you feel like it.',
		href: 'https://paypal.me/smalljordan',
		accent: 'from-sky-500 to-blue-600',
		note: 'paypal.me/smalljordan',
		icon: (
			<svg className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
				<path d="M7.5 19.5H5.2c-.5 0-.9-.4-.8-.9l2.1-13c.1-.5.5-.9 1-.9h7.8c2.7 0 4.7 1.9 4.7 4.5 0 3.7-2.5 6.1-6.3 6.1h-2.2c-.5 0-.9.4-1 .9l-.5 3.3c-.1.5-.5.9-1 .9zM13 5.6h-3.3c-.5 0-.9.4-1 .9l-1 6.1c-.1.5.3 1 .8 1h2.4c2.5 0 4.2-1.6 4.6-4 .3-2-.8-4-2.5-4z" />
			</svg>
		),
	},
	{
		name: 'Venmo',
		description: 'Handy if Venmo is already your go-to.',
		href: 'https://venmo.com/sm4jo',
		accent: 'from-cyan-500 to-sky-600',
		note: '@sm4jo',
		icon: (
			<svg className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
				<path d="M19.2 5.4c.4.8.6 1.7.6 2.9 0 3.7-3.1 8.5-5.6 11.7H9.8L6.6 6.7l4.9-.5 1.7 9.4c1-1.6 2.2-4.1 2.2-6 0-1-.2-1.7-.4-2.3z" />
			</svg>
		),
	},
	{
		name: 'Cash App',
		description: 'Quick and easy if Cash App is the most convenient for you.',
		href: 'https://cash.app/$jdoll4r',
		accent: 'from-emerald-500 to-teal-600',
		note: '$jdoll4r',
		icon: (
			<svg className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
				<path d="M12 3.5a8.5 8.5 0 1 0 8.5 8.5A8.51 8.51 0 0 0 12 3.5Zm3.4 5.7-1.5 1a1.6 1.6 0 0 0-.7-.5 2 2 0 0 0-.8-.2c-.7 0-1.1.3-1.1.8 0 .3.1.5.4.7.3.2.7.3 1.3.5.9.3 1.7.7 2.1 1.2.4.5.6 1 .6 1.8 0 1-.4 1.8-1.1 2.4-.7.6-1.7.9-2.9.9-1.8 0-3.2-.7-4.2-2l1.6-1.1c.7.9 1.6 1.4 2.7 1.4.5 0 .9-.1 1.1-.3.2-.2.4-.4.4-.7 0-.3-.1-.5-.4-.7-.3-.2-.7-.4-1.3-.5-.9-.3-1.7-.7-2.1-1.2-.4-.5-.6-1-.6-1.7 0-.9.3-1.7 1-2.3.7-.6 1.6-.9 2.8-.9 1.4 0 2.5.5 3.3 1.4z" />
			</svg>
		),
	},
	{
		name: 'Apple Pay',
		description: 'Apple Cash and Apple Pay can use this phone number directly.',
		href: phoneNumberHref,
		accent: 'from-slate-700 to-slate-900',
		note: 'Tap to text this Apple Pay number',
		extra: phoneNumberDisplay,
		icon: (
			<svg className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
				<path d="M16.7 12.7c0 2.7 2.4 3.6 2.4 3.6-.1.4-.4 1.5-1.2 2.6-.7 1-1.5 2-2.6 2s-1.5-.6-2.8-.6c-1.3 0-1.8.6-2.8.6s-1.8-1-2.6-2c-1-.9-1.7-2.5-1.7-4.1 0-2.6 1.7-4.1 3.4-4.1 1 0 1.8.6 2.3.6.6 0 1.5-.7 2.6-.7.4 0 1.9.1 2.8 1.5-.1 0-1.8.8-1.8 2.6zm-2.1-6.7c.6-.7 1-1.7.9-2.7-.9.1-1.9.6-2.5 1.3-.5.5-1 1.4-.9 2.4 1 .1 1.9-.5 2.5-1z" />
			</svg>
		),
	},
	{
		name: 'Zelle',
		description: 'Zelle is set up with the same phone number for easy sending.',
		href: phoneNumberHref,
		accent: 'from-violet-600 to-fuchsia-700',
		note: 'Tap to copy this Zelle number',
		extra: phoneNumberDisplay,
		icon: (
			<svg className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
				<path d="M12 3.5a8.5 8.5 0 1 0 8.5 8.5A8.51 8.51 0 0 0 12 3.5Zm4.6 6.1h-6l4.8 6.2H8.9v-1.8h6l-4.8-6.2h6.5v1.8z" />
			</svg>
		),
	},
];

export default function TipMeClient() {
	const [copied, setCopied] = useState(false);

	const copyPhoneNumber = async () => {
		try {
			await navigator.clipboard.writeText(phoneNumberDisplay);
			setCopied(true);
			window.setTimeout(() => setCopied(false), 1800);
		} catch {
			setCopied(false);
		}
	};

	return (
		<div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-slate-950 via-emerald-900 to-indigo-950 px-4 py-12 text-white">
			<div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(110,231,183,0.28),transparent_28%),radial-gradient(circle_at_80%_20%,_rgba(125,211,252,0.24),transparent_26%),radial-gradient(circle_at_15%_85%,_rgba(244,114,182,0.18),transparent_24%)]" />
			<div className="pointer-events-none absolute inset-0 opacity-35 mix-blend-screen" />
			<div className="pointer-events-none absolute left-6 top-24 h-24 w-24 rounded-full bg-emerald-300/25 blur-2xl animate-float" />
			<div className="pointer-events-none absolute right-8 top-56 h-32 w-32 rounded-full bg-sky-300/25 blur-2xl animate-float" style={{ animationDelay: '0.8s' }} />
			<div className="pointer-events-none absolute bottom-10 left-1/2 h-40 w-40 -translate-x-1/2 rounded-full bg-fuchsia-400/15 blur-3xl animate-pulse" />
			{sparkleDots.map((dot, index) => (
				<div
					key={index}
					className="pointer-events-none absolute rounded-full bg-white/90 shadow-[0_0_14px_rgba(255,255,255,0.8)] animate-pulse"
					style={{
						top: dot.top,
						left: dot.left,
						width: dot.size,
						height: dot.size,
						animationDelay: dot.delay,
						animationDuration: '2.8s',
					}}
				/>
			))}
			<div className="mx-auto max-w-xl">
				<div className="relative overflow-hidden rounded-[2rem] border border-white/20 bg-white/10 p-6 shadow-[0_30px_90px_-30px_rgba(59,130,246,0.55)] backdrop-blur-2xl sm:p-8">
					<div className="absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r from-emerald-300 via-cyan-300 to-fuchsia-300" />
					<div className="absolute -right-20 -top-20 h-56 w-56 rounded-full bg-emerald-400/30 blur-3xl animate-float" />
					<div className="absolute -left-24 bottom-0 h-56 w-56 rounded-full bg-sky-500/25 blur-3xl animate-float" style={{ animationDelay: '1s' }} />
					<div className="absolute inset-0 bg-[linear-gradient(transparent_0%,rgba(255,255,255,0.045)_50%,transparent_100%)] bg-[length:100%_12px] opacity-40" />
					<div className="absolute inset-0 rounded-[2rem] ring-1 ring-inset ring-white/10" />

					<div className="relative text-center">
						<div className="mx-auto mb-5 flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-emerald-300 via-cyan-300 to-fuchsia-300 p-[3px] shadow-[0_0_40px_rgba(56,189,248,0.4)]">
							<div className="flex h-full w-full items-center justify-center rounded-full bg-slate-950/90 p-1">
								<img src="/pfp.png" alt="Jordan Small" className="h-full w-full rounded-full object-cover" />
							</div>
						</div>
						<p className="mb-3 text-xs font-semibold uppercase tracking-[0.35em] text-emerald-200/90 drop-shadow-[0_0_10px_rgba(110,231,183,0.45)]">
							Thanks for being here
						</p>
						<h1 className="bg-gradient-to-r from-white via-emerald-100 to-cyan-100 bg-clip-text text-4xl font-bold tracking-tight text-transparent drop-shadow-[0_8px_24px_rgba(15,23,42,0.35)] sm:text-5xl">
							Leave a little love
						</h1>
						<p className="mx-auto mt-4 max-w-md text-sm leading-6 text-slate-100/90 sm:text-base">
							If you’d like to leave a tip, pick whichever option feels easiest. If not, no worries at all - just being here means a lot.
						</p>

						<div className="mt-6 flex flex-wrap items-center justify-center gap-2 text-xs text-slate-100">
							<span className="rounded-full border border-emerald-300/30 bg-emerald-300/12 px-3 py-1 shadow-[0_0_18px_rgba(16,185,129,0.16)]">Flexible Options</span>
							<span className="rounded-full border border-sky-300/30 bg-sky-300/12 px-3 py-1 shadow-[0_0_18px_rgba(56,189,248,0.16)]">Quick and Easy</span>
						</div>
					</div>

					<div className="relative mt-8 space-y-4">
						{tipOptions.map((option) => (
							option.name === 'Zelle' ? (
								<button
									key={option.name}
									type="button"
									onClick={copyPhoneNumber}
									className="group flex w-full items-center gap-4 rounded-2xl border border-white/10 bg-white/10 p-4 text-left shadow-lg shadow-black/10 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-white/30 hover:bg-white/20 hover:shadow-[0_18px_50px_-18px_rgba(56,189,248,0.55)] focus:outline-none focus:ring-2 focus:ring-emerald-300"
									aria-label="Copy Zelle phone number"
								>
									<div className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br ${option.accent} text-white shadow-lg ring-1 ring-white/20`}>
										{option.icon}
									</div>

									<div className="min-w-0 flex-1 text-left">
										<div className="flex items-center gap-2">
											<h2 className="text-lg font-semibold text-white">{option.name}</h2>
										</div>
										<p className="mt-1 text-sm text-slate-300">{option.description}</p>
										{option.extra ? (
											<div className="mt-3 inline-flex max-w-full items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-sm font-medium text-white">
												<svg className="h-4 w-4 text-emerald-200" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
													<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.518 4.552a1 1 0 01-.244 1.04l-2.2 2.2a16 16 0 006.586 6.586l2.2-2.2a1 1 0 011.04-.244l4.552 1.518A1 1 0 0121 19.72V21a2 2 0 01-2 2c-9.389 0-17-7.611-17-17a2 2 0 012-2z" />
												</svg>
												<span className="truncate">{option.extra}</span>
											</div>
										) : null}
										<p className="mt-1 truncate text-xs text-emerald-200/80">
											{copied ? 'Copied to clipboard - paste it into Zelle' : option.note}
										</p>
									</div>

									<div className="ml-auto flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/10 text-slate-100 transition-transform duration-300 group-hover:translate-x-1 group-hover:bg-white/15">
										<svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
											<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 16h8M8 12h8m-7 8h6a2 2 0 002-2V6a2 2 0 00-2-2H9.172a2 2 0 00-1.414.586L5.586 6.757A2 2 0 005 8.172V18a2 2 0 002 2z" />
										</svg>
									</div>
								</button>
							) : (
								<a
									key={option.name}
									href={option.href}
									target={option.href.startsWith('http') ? '_blank' : undefined}
									rel={option.href.startsWith('http') ? 'noopener noreferrer' : undefined}
									className="group flex items-center gap-4 rounded-2xl border border-white/10 bg-white/10 p-4 shadow-lg shadow-black/10 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-white/30 hover:bg-white/20 hover:shadow-[0_18px_50px_-18px_rgba(16,185,129,0.5)] focus:outline-none focus:ring-2 focus:ring-emerald-300"
									aria-label={`${option.name} tip option`}
								>
									<div className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br ${option.accent} text-white shadow-lg ring-1 ring-white/20`}>
										{option.icon}
									</div>

									<div className="min-w-0 flex-1 text-left">
										<div className="flex items-center gap-2">
											<h2 className="text-lg font-semibold text-white">{option.name}</h2>
										</div>
										<p className="mt-1 text-sm text-slate-300">{option.description}</p>
										{option.extra ? (
											<div className="mt-3 inline-flex max-w-full items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-sm font-medium text-white">
												<svg className="h-4 w-4 text-emerald-200" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
													<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.518 4.552a1 1 0 01-.244 1.04l-2.2 2.2a16 16 0 006.586 6.586l2.2-2.2a1 1 0 011.04-.244l4.552 1.518A1 1 0 0121 19.72V21a2 2 0 01-2 2c-9.389 0-17-7.611-17-17a2 2 0 012-2z" />
												</svg>
												<span className="truncate">{option.extra}</span>
											</div>
										) : null}
										<p className="mt-1 truncate text-xs text-emerald-200/80">{option.note}</p>
									</div>

									<div className="ml-auto flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/10 text-slate-100 transition-transform duration-300 group-hover:translate-x-1 group-hover:bg-white/15">
										<svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
											<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
										</svg>
									</div>
								</a>
							)
						))}
					</div>

					<div className="relative mt-8 flex justify-center">
						<a
							href="/"
							className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-gradient-to-r from-emerald-300/20 via-cyan-300/20 to-fuchsia-300/20 px-5 py-3 text-sm font-semibold text-white shadow-[0_0_25px_rgba(56,189,248,0.16)] transition-all duration-300 hover:-translate-y-0.5 hover:border-white/30 hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-emerald-300"
							aria-label="View the main site"
						>
								See more about me
								<svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
									<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
								</svg>
							</a>
					</div>
				</div>
			</div>
		</div>
	);
}