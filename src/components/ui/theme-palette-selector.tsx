"use client";

import {useTheme} from 'next-themes';
import * as React from 'react';

const THEMES = [
	{ id: "sun-stone", label: "Sun & Stone", icon: "🌞" },
	{ id: "mountain-earth", label: "Mountain Earth", icon: "🌄" },
	{ id: "royal-sky", label: "Royal Sky", icon: "🌌" },
	{ id: "sacred-valley", label: "Sacred Valley", icon: "🌱" },
];

export function ThemePaletteSelector() {
	const { theme, setTheme, resolvedTheme } = useTheme();
	const [open, setOpen] = React.useState(false);
	const [mounted, setMounted] = React.useState(false);

	React.useEffect(() => setMounted(true), []);
	const displayValueForIcon = mounted ? (resolvedTheme || theme || "theme-sun-stone-light") : "theme-sun-stone-light";
	const currentPalette = THEMES.find(t => displayValueForIcon.includes(`-${t.id}-`)) || THEMES[0];

	function selectPalette(paletteId: string) {
		if (!mounted) return;

		const currentActualTheme = resolvedTheme || theme || "theme-sun-stone-light";
		const currentMode = currentActualTheme.endsWith("-dark") ? "dark" : "light";
		const newTheme = `theme-${paletteId}-${currentMode}`;
		setTheme(newTheme);
		setOpen(false);
	}	return (
		<div className="relative" suppressHydrationWarning>
			<button
				className="btn btn-icon disabled:opacity-50"
				aria-label="Select theme palette"
				title={currentPalette.label}
				onClick={() => setOpen(o => !o)}
				disabled={!mounted}
				type="button"
			>
				<span className="text-lg">{currentPalette.icon}</span>
			</button>
			{mounted && open && (
				<ul className="absolute right-0 mt-2 w-48 bg-surface dark:bg-dark-surface border border-border dark:border-dark-border rounded-md shadow-lg z-50">					{THEMES.map((t) => {
						const displayThemeForList = resolvedTheme || theme || "theme-sun-stone-light";
						const isActive = displayThemeForList.includes(`-${t.id}-`);

						return (
							<li key={t.id}>
								<button
									className={`w-full flex items-center gap-2 px-4 py-2 text-left hover:bg-accent/20 dark:hover:bg-accent-dark/20 transition-colors ${isActive ? "font-bold" : ""}`}
									onClick={() => selectPalette(t.id)}
									type="button"
								>
									<span className="text-lg">{t.icon}</span>
									<span>{t.label}</span>
									{isActive && <span className="ml-auto">✓</span>}
								</button>
							</li>
						);
					})}
				</ul>
			)}
		</div>
	);
}
