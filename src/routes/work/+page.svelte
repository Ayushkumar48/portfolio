<script lang="ts">
	import { onMount } from 'svelte';
	import { fade, fly } from 'svelte/transition';
	import { cubicOut } from 'svelte/easing';
	import * as Card from '$lib/components/ui/card';
	import { Badge } from '$lib/components/ui/badge';

	let mounted = $state(false);

	const experiences = [
		{
			company: 'ResponseNet',
			role: 'Software Developer',
			period: 'Jun 2025 – Present',
			description:
				'Building scalable backend services and real-time systems for production applications.',
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

<div class="bg-background px-4 py-12 font-['Inter'] md:px-8 lg:px-12">
	<div class="mx-auto mb-20 max-w-5xl">
		{#if mounted}
			<div class="mb-16 text-center" in:fade={{ duration: 800, easing: cubicOut }}>
				<h1
					class="mb-4 bg-linear-to-r from-primary via-chart-1 to-chart-4 bg-clip-text font-['Anton'] text-6xl text-transparent md:text-7xl lg:text-8xl"
				>
					WORK EXPERIENCE
				</h1>
				<p class="text-lg text-muted-foreground md:text-xl">
					My journey through different companies and roles
				</p>
			</div>
		{/if}

		<div class="relative">
			<div
				class="absolute top-0 left-8 hidden h-full w-0.5 bg-linear-to-b from-chart-1 via-chart-2 to-chart-3 md:block"
			></div>

			<div class="space-y-12">
				{#each experiences as exp, index (exp.period)}
					{#if mounted}
						<div
							class="relative flex flex-col md:flex-row md:gap-8"
							in:fly={{ y: 50, duration: 600, delay: index * 150, easing: cubicOut }}
						>
							<div class="mb-4 flex items-start md:mb-0">
								<div
									class="relative z-10 flex h-16 w-16 shrink-0 items-center justify-center rounded-full border-4 border-background {exp.color} shadow-lg"
								>
									<span class="text-2xl font-bold text-white">{index + 1}</span>
								</div>
							</div>

							<div class="group flex-1">
								<Card.Root class="transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl">
									<Card.Header>
										<div class="flex flex-col justify-between gap-2 md:flex-row md:items-start">
											<div>
												<Card.Title class="text-2xl md:text-3xl">{exp.company}</Card.Title>
												<Card.Description class="text-lg md:text-xl">{exp.role}</Card.Description>
											</div>
											<Badge variant="secondary" class="w-fit text-base">
												{exp.period}
											</Badge>
										</div>
									</Card.Header>

									<Card.Content>
										<p class="mb-4 text-muted-foreground">
											{exp.description}
										</p>

										<div class="space-y-3">
											<h4 class="text-sm font-semibold tracking-wide uppercase">
												Key Achievements
											</h4>
											<ul class="space-y-2">
												{#each exp.highlights as highlight (highlight)}
													<li class="flex items-start gap-3">
														<span class="mt-1 shrink-0">
															<svg
																class="h-5 w-5 {exp.color.replace('bg-', 'text-')}"
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
														<span class="text-sm leading-relaxed md:text-base">
															{highlight}
														</span>
													</li>
												{/each}
											</ul>
										</div>
									</Card.Content>
								</Card.Root>
							</div>
						</div>
					{/if}
				{/each}
			</div>
		</div>
	</div>
</div>
