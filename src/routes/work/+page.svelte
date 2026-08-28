<script lang="ts">
	import { onMount } from 'svelte';
	import { fade, fly } from 'svelte/transition';
	import { cubicOut } from 'svelte/easing';
	import * as Card from '$lib/components/ui/card';
	import MagicCard from '$lib/components/magic/magic-card/magic-card.svelte';
	import { Badge } from '$lib/components/ui/badge';
	import { mode } from 'mode-watcher';

	let mounted = $state(false);

	const gradientColors: Record<string, { from: string; to: string }> = {
		'bg-chart-1': { from: '#a3e635', to: '#4ade80' },
		'bg-chart-2': { from: '#34d399', to: '#06b6d4' },
		'bg-chart-3': { from: '#60a5fa', to: '#818cf8' }
	};

	let isDark = $derived(mode.current === 'dark');

	const experiences = [
		{
			company: 'BangDB',
			role: 'Software Engineer',
			period: 'Apr 2026 – Present',
			description:
				'Working on real-time applications, interactive dashboards, and scalable full-stack systems using modern web technologies.',
			highlights: [
				'Engineered a streaming AI response interface, incrementally rendering Markdown, charts, tables, and structured outputs in real time, reducing perceived latency and improving interactive user experience.',
				'Architected a no-code dashboard builder from scratch, enabling drag-and-drop layouts, resizable widgets, multiple chart types, reusable dashboards, and support for diverse data sources.',
				'Implemented real-time dashboard infrastructure featuring dynamic time ranges, configurable refresh intervals, live data streaming, dashboard sharing, snapshots, secure authentication, and embeddable dashboards for external applications.',
				'Contributed to migrating backend API routes from Node.js to Go, supporting the transition toward a more performant, scalable, and efficient backend architecture.'
			],
			color: 'bg-chart-4'
		},
		{
			company: 'ResponseNet',
			role: 'Software Developer',
			period: 'Jun 2025 – Mar 2026',
			description:
				'Build scalable backend services and real-time systems for production applications.',
			highlights: [
				'Collaborated and launched a UI using Next.js and shadcn/ui, improving usability and performance metrics by 20%+',
				'Defined secure backend services with Express.js and Neon PostgreSQL, enabling efficient data querying and consistent session handling, resulting in faster load times by 15%',
				'Configured instant notifications and real-time messaging using Firebase Cloud Messaging and Firestore listeners, delivering updates in <1s and increasing user engagement by 25%+'
			],
			color: 'bg-chart-1'
		},
		{
			company: 'Whatbytes',
			role: 'Software Developer Intern',
			period: 'Feb 2025 – May 2025',
			description:
				'Developed full-stack applications serving 1K+ active users with focus on performance.',
			highlights: [
				'Collaborated on production applications used by 1K+ active users, optimizing performance (30%), accessibility, and mobile responsiveness',
				'Delivered a hotel booking platform using Next.js, implementing advanced search filters, real-time booking logic, and calendar integration, reducing booking time by 40%',
				'Crafted a student focus-builder app in Next.js to help users manage Pomodoro-style time blocks, track focus streaks, and log productivity',
				'Contributed to a cross-platform health tracker using React Native, developing heart-rate visualization dashboards and real-time sync with APIs, improving data load speed by 25%'
			],
			color: 'bg-chart-2'
		},
		{
			company: 'SynapseIndia',
			role: 'Software Developer Intern',
			period: 'Aug 2024 – Jan 2025',
			description:
				'Optimized frontend performance and built reusable component libraries for multiple projects.',
			highlights: [
				'Optimized frontend performance by up to 35% through performance techniques like lazy loading, code-splitting, and caching, reducing page load time and improving Core Web Vitals',
				'Programmed responsive and accessible user interfaces using React.js and Next.js, ensuring 100% cross-browser compatibility and improving Lighthouse accessibility scores by 25%',
				'Created 20+ reusable UI components, improving design consistency and reducing development time by 40% across multiple projects'
			],
			color: 'bg-chart-3'
		}
	];

	onMount(() => {
		mounted = true;
	});
</script>

<div
	class="min-h-screen w-full bg-background/30 px-3 py-24 font-['Inter'] sm:px-4 md:px-8 md:py-12 lg:px-12"
>
	<div class="mx-auto mb-12 w-full max-w-5xl sm:mb-16 md:mb-20">
		{#if mounted}
			<div
				class="mb-12 text-center sm:mb-14 md:mb-16"
				in:fade={{ duration: 800, easing: cubicOut }}
			>
				<h1
					class="mb-3 bg-linear-to-r from-primary via-chart-1 to-chart-4 bg-clip-text font-['Anton'] text-4xl text-transparent sm:text-5xl md:text-7xl lg:text-8xl"
				>
					WORK EXPERIENCE
				</h1>
				<p class="text-base text-muted-foreground sm:text-lg md:text-xl">
					My journey through different companies and roles
				</p>
			</div>
		{/if}

		<div class="relative w-full">
			<div class="space-y-8 sm:space-y-10 md:space-y-12">
				{#each experiences as exp, index (exp.period)}
					{#if mounted}
						<div
							class="relative flex flex-col md:flex-row md:gap-6 lg:gap-8"
							in:fly={{ y: 50, duration: 600, delay: index * 150, easing: cubicOut }}
						>
							<!-- Timeline Circle -->
							<div class="mb-4 flex items-start md:mb-0 md:pt-1">
								<div
									class="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full border-4 border-background {exp.color} shadow-lg sm:h-14 sm:w-14 md:h-16 md:w-16"
								>
									<span class="text-xl font-bold text-white sm:text-2xl">{index + 1}</span>
								</div>
							</div>

							<!-- Content Card -->
							<div class="group w-full flex-1">
								<Card.Root
									class="border-none p-0 shadow-none transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl"
								>
									<MagicCard
										gradientColor={isDark ? '#4a4a4a' : '#D9D9D9'}
										gradientFrom={gradientColors[exp.color].from}
										gradientTo={gradientColors[exp.color].to}
										gradientSize={350}
										gradientOpacity={isDark ? 0.6 : 0.08}
										class="rounded-xl"
									>
										<Card.Header class="border-b border-border p-4 sm:p-5 md:p-6">
											<div
												class="flex flex-col justify-between gap-3 sm:gap-4 md:flex-row md:items-start"
											>
												<div class="w-full md:w-auto">
													<Card.Title class="text-lg sm:text-xl md:text-2xl lg:text-3xl"
														>{exp.company}</Card.Title
													>
													<Card.Description class="text-sm sm:text-base md:text-lg lg:text-xl">
														{exp.role}
													</Card.Description>
												</div>
												<Badge
													variant="secondary"
													class="w-fit shrink-0 text-xs sm:text-sm md:text-base"
												>
													{exp.period}
												</Badge>
											</div>
										</Card.Header>

										<Card.Content class="p-4 sm:p-5 md:p-6">
											<p class="mb-4 text-xs text-muted-foreground sm:text-sm md:text-base">
												{exp.description}
											</p>

											<div class="space-y-3 md:space-y-4">
												<h4
													class="text-xs font-semibold tracking-wide uppercase sm:text-sm md:text-base"
												>
													Key Achievements
												</h4>
												<ul class="space-y-2 sm:space-y-3">
													{#each exp.highlights as highlight (highlight)}
														<li class="flex items-start gap-2 sm:gap-3">
															<span class="mt-0.5 shrink-0 sm:mt-1">
																<svg
																	class="h-4 w-4 sm:h-5 sm:w-5 {exp.color.replace('bg-', 'text-')}"
																	fill="currentColor"
																	viewBox="0 0 20 20"
																>
																	<path
																		fill-rule="evenodd"
																		d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
																		clip-rule="evenodd"
																	/>
																</svg>
															</span>
															<span
																class="text-xs leading-relaxed sm:text-sm md:text-base md:leading-relaxed"
															>
																{highlight}
															</span>
														</li>
													{/each}
												</ul>
											</div>
										</Card.Content>
									</MagicCard>
								</Card.Root>
							</div>
						</div>
					{/if}
				{/each}
			</div>
		</div>
	</div>
</div>
