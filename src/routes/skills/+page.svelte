<script lang="ts">
	import { onMount } from 'svelte';
	import FlickeringGrid from '$lib/components/magic/flickering-grid/flickering-grid.svelte';
	import { BorderBeam } from '$lib/components/magic/border-beam';
	import MagicCard from '$lib/components/magic/magic-card/magic-card.svelte';
	import { fade, fly, scale } from 'svelte/transition';
	import { cubicOut, elasticOut } from 'svelte/easing';
	import { Tween } from 'svelte/motion';
	import { SimpleIcon } from '$lib';
	import * as Card from '$lib/components/ui/card';
	import { Badge } from '$lib/components/ui/badge';
	import { Progress } from '$lib/components/ui/progress';
	import { mode } from 'mode-watcher';

	let mounted = $state(false);
	let isDark = $derived(mode.current === 'dark');

	const gradientColors: Record<string, { from: string; to: string }> = {
		'from-chart-1 via-chart-2 to-chart-3': { from: '#a3e635', to: '#6b7280' },
		'from-chart-2 via-chart-4 to-chart-5': { from: '#34d399', to: '#6366f1' },
		'from-chart-4 via-chart-1 to-primary': { from: '#60a5fa', to: '#a3e635' },
		'from-chart-3 via-chart-2 to-chart-1': { from: '#f59e0b', to: '#a3e635' }
	};

	const featuredSkills = [
		{ id: 'nodejs', name: 'Node.js', icon: 'nodedotjs', color: '#339933', proficiency: 95 },
		{
			id: 'typescript',
			name: 'TypeScript',
			icon: 'typescript',
			color: '#3178C6',
			proficiency: 90
		},
		{ id: 'sveltekit', name: 'SvelteKit', icon: 'svelte', color: '#FF3E00', proficiency: 95 },
		{
			id: 'postgresql',
			name: 'PostgreSQL',
			icon: 'postgresql',
			color: '#4169E1',
			proficiency: 88
		},
		{ id: 'react', name: 'React', icon: 'react', color: '#61DAFB', proficiency: 90 },
		{ id: 'nextjs', name: 'Next.js', icon: 'nextdotjs', color: '#000000', proficiency: 90 }
	];

	const skillGroups = [
		{
			id: 'backend',
			title: 'Backend Excellence',
			description: 'Building scalable server-side systems',
			gradient: 'from-chart-1 via-chart-2 to-chart-3',
			skills: [
				{ id: 'nodejs-be', name: 'Node.js', icon: 'nodedotjs', color: '#339933' },
				{ id: 'express', name: 'Express.js', icon: 'express', color: '#000000' },
				{ id: 'hono', name: 'Hono', icon: 'hono', color: '#E36002' },
				{ id: 'go', name: 'Go', icon: 'go', color: '#00ADD8' },
				{ id: 'gin', name: 'Gin', icon: 'gin', color: '#00ADD8' },
				{ id: 'rust', name: 'Rust', icon: 'rust', color: '#000000' },
				{ id: 'pino', name: 'Pino', icon: 'pino', color: '#00A98F' },
				{ id: 'prometheus', name: 'Prometheus', icon: 'prometheus', color: '#E6522C' }
			]
		},
		{
			id: 'database',
			title: 'Database & Caching',
			description: 'Data persistence & optimization',
			gradient: 'from-chart-2 via-chart-4 to-chart-5',
			skills: [
				{ id: 'postgresql-db', name: 'PostgreSQL', icon: 'postgresql', color: '#4169E1' },
				{ id: 'mongodb', name: 'MongoDB', icon: 'mongodb', color: '#47A248' },
				{ id: 'redis', name: 'Redis', icon: 'redis', color: '#DC382D' },
				{ id: 'dynamodb', name: 'DynamoDB', icon: 'amazondynamodb', color: '#4053D6' },
				{ id: 'firebase', name: 'Firebase', icon: 'firebase', color: '#FFCA28' },
				{ id: 'drizzle', name: 'Drizzle ORM', icon: 'drizzle', color: '#C5F74F' }
			]
		},
		{
			id: 'frontend',
			title: 'Frontend Mastery',
			description: 'Creating beautiful user experiences',
			gradient: 'from-chart-4 via-chart-1 to-primary',
			skills: [
				{ id: 'react-fe', name: 'React', icon: 'react', color: '#61DAFB' },
				{ id: 'nextjs-fe', name: 'Next.js', icon: 'nextdotjs', color: '#000000' },
				{ id: 'sveltekit-fe', name: 'SvelteKit', icon: 'svelte', color: '#FF3E00' },
				{ id: 'reactnative', name: 'React Native', icon: 'react', color: '#61DAFB' },
				{ id: 'expo', name: 'Expo', icon: 'expo', color: '#000020' },
				{ id: 'tanstack', name: 'TanStack Query', icon: 'reactquery', color: '#FF4154' }
			]
		},
		{
			id: 'cloud',
			title: 'Cloud & Infrastructure',
			description: 'Deploying at scale',
			gradient: 'from-chart-3 via-chart-2 to-chart-1',
			skills: [
				{ id: 'aws', name: 'AWS', icon: 'amazonwebservices', color: '#FF9900' },
				{ id: 'azure', name: 'Azure', icon: 'microsoftazure', color: '#0078D4' },
				{ id: 'oracle', name: 'Oracle Cloud', icon: 'oracle', color: '#F80000' },
				{ id: 'git', name: 'Git', icon: 'git', color: '#F05032' }
			]
		}
	];

	const languages = [
		{ id: 'js', name: 'JavaScript', icon: 'javascript', color: '#F7DF1E', years: 3 },
		{ id: 'ts', name: 'TypeScript', icon: 'typescript', color: '#3178C6', years: 2.5 },
		{ id: 'go-lang', name: 'Go', icon: 'go', color: '#00ADD8', years: 1 },
		{ id: 'rust-lang', name: 'Rust', icon: 'rust', color: '#000000', years: 0.5 },
		{ id: 'cpp', name: 'C++', icon: 'cplusplus', color: '#00599C', years: 2 }
	];

	const stats = [
		{
			id: 'tech',
			value: '30+',
			label: 'Technologies',
			gradient: 'from-chart-1/10 to-chart-2/10',
			color: 'text-chart-1'
		},
		{
			id: 'years',
			value: '3+',
			label: 'Years Experience',
			gradient: 'from-chart-2/10 to-chart-4/10',
			color: 'text-chart-2'
		},
		{
			id: 'users',
			value: '1K+',
			label: 'Users Served',
			gradient: 'from-chart-3/10 to-chart-5/10',
			color: 'text-chart-3'
		},
		{
			id: 'projects',
			value: '10+',
			label: 'Projects Built',
			gradient: 'from-chart-4/10 to-primary/10',
			color: 'text-chart-4'
		}
	];

	const progress0 = new Tween(0, { duration: 1500, easing: cubicOut });
	const progress1 = new Tween(0, { duration: 1500, easing: cubicOut });
	const progress2 = new Tween(0, { duration: 1500, easing: cubicOut });
	const progress3 = new Tween(0, { duration: 1500, easing: cubicOut });
	const progress4 = new Tween(0, { duration: 1500, easing: cubicOut });
	const progress5 = new Tween(0, { duration: 1500, easing: cubicOut });

	const progressTweens = [progress0, progress1, progress2, progress3, progress4, progress5];

	onMount(() => {
		mounted = true;
		featuredSkills.forEach((skill, i) => {
			setTimeout(() => {
				progressTweens[i].target = skill.proficiency;
			}, i * 100);
		});
	});
</script>

<div class="fixed inset-0 -z-10 h-full w-full">
	<FlickeringGrid
		squareSize={4}
		gridGap={8}
		flickerChance={0.6}
		color="var(--secondary)"
		maxOpacity={0.4}
	/>
</div>

<div
	class="w-full overflow-x-hidden bg-background/30 px-3 py-24 font-['Inter'] sm:px-4 md:px-6 md:py-12 lg:px-8 xl:px-12"
>
	<div class="mx-auto mb-12 w-full max-w-7xl sm:mb-16 md:mb-20">
		{#if mounted}
			<div
				class="relative mb-10 text-center sm:mb-14 md:mb-20"
				in:fade={{ duration: 800, easing: cubicOut }}
			>
				<h1
					class="mb-3 bg-linear-to-r from-primary via-chart-1 to-chart-4 bg-clip-text font-['Anton'] text-3xl text-transparent sm:text-4xl md:text-6xl lg:text-7xl xl:text-8xl"
				>
					TECH STACK
				</h1>
				<p
					class="mx-auto max-w-2xl px-2 font-['Anton'] text-xs text-muted-foreground sm:text-sm md:text-lg lg:text-xl"
				>
					A comprehensive toolkit for building high-performance, scalable applications that handle
					real-world complexity
				</p>
			</div>
		{/if}

		<div class="mb-12 sm:mb-14 md:mb-16">
			<h2 class="mb-4 text-lg font-black sm:mb-5 md:mb-8 md:text-2xl lg:text-3xl">
				Core Technologies
			</h2>
			<div class="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4 md:gap-6 lg:grid-cols-3">
				{#each featuredSkills as skill, i (skill.id)}
					{#if mounted}
						<div
							in:fly={{ y: 50, duration: 600, delay: i * 100, easing: cubicOut }}
							class="group w-full"
						>
							<Card.Root
								class="relative overflow-hidden transition-all duration-500 hover:-translate-y-1 hover:shadow-lg sm:hover:-translate-y-2 sm:hover:shadow-2xl"
							>
								<div
									class="absolute inset-0 -z-10 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
									style="background: linear-gradient(135deg, transparent 0%, {skill.color}10 100%);"
								></div>
								<BorderBeam
									duration={6}
									size={180}
									borderWidth={1.5}
									colorFrom="transparent"
									colorTo="var(--cyan)"
								/>
								<BorderBeam
									duration={6}
									delay={3}
									size={180}
									borderWidth={1.5}
									colorFrom="transparent"
									colorTo="var(--purple)"
								/>

								<Card.Content
									class="flex flex-col items-start gap-3 p-3 sm:flex-row sm:items-center sm:gap-4 sm:p-4 md:p-6"
								>
									<div
										class="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6 sm:h-14 sm:w-14 md:h-16 md:w-16 md:rounded-2xl"
										style="background: linear-gradient(135deg, {skill.color}20 0%, {skill.color}05 100%);"
									>
										<SimpleIcon
											name={skill.icon}
											color={skill.color}
											size="h-7 w-7 sm:h-8 sm:w-8 md:h-10 md:w-10"
										/>
									</div>

									<div class="w-full flex-1">
										<h3 class="mb-2 text-sm font-bold sm:text-base md:text-lg">{skill.name}</h3>
										<div class="flex items-center gap-2">
											<Progress
												value={progressTweens[i].current}
												class="h-1.5 flex-1 sm:h-2 [&>div]:transition-none!"
											/>
											<span class="text-xs font-semibold text-muted-foreground sm:text-sm">
												{Math.round(progressTweens[i].current)}%
											</span>
										</div>
									</div>
								</Card.Content>
							</Card.Root>
						</div>
					{/if}
				{/each}
			</div>
		</div>

		<div class="mb-12 grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4 md:auto-rows-fr md:gap-6">
			{#each skillGroups as group, i (group.id)}
				{#if mounted}
					<div
						in:fly={{
							x: i % 2 === 0 ? -50 : 50,
							duration: 700,
							delay: 200 + i * 150,
							easing: cubicOut
						}}
						class="group h-full"
					>
						<Card.Root
							class="h-full border-none p-0 shadow-none transition-all duration-300 hover:scale-[1.02] hover:shadow-xl sm:hover:shadow-2xl"
						>
							<MagicCard
								gradientColor={isDark ? '#4a4a4a' : '#D9D9D9'}
								gradientFrom={gradientColors[group.gradient].from}
								gradientTo={gradientColors[group.gradient].to}
								gradientSize={350}
								gradientOpacity={isDark ? 0.6 : 0.08}
								class="flex h-full flex-col rounded-lg sm:rounded-xl"
							>
								<Card.Header class="border-b border-border p-3 sm:p-4 md:p-6">
									<Card.Title class="text-lg font-black sm:text-xl md:text-2xl"
										>{group.title}</Card.Title
									>
									<Card.Description class="text-xs sm:text-sm md:text-base"
										>{group.description}</Card.Description
									>
									<div
										class="mt-2 h-0.5 w-12 rounded-full bg-linear-to-r {group.gradient} sm:mt-3"
									></div>
								</Card.Header>

								<Card.Content class="flex-1 p-3 sm:p-4 md:p-6">
									<div class="flex flex-wrap gap-2">
										{#each group.skills as skill, j (skill.id)}
											<div
												in:scale={{
													duration: 400,
													delay: 400 + i * 150 + j * 50,
													start: 0.8,
													easing: cubicOut
												}}
												class="group/skill"
											>
												<Badge
													variant="secondary"
													class="flex items-center gap-2 px-2.5 py-1.5 text-xs transition-all duration-300 hover:scale-105 hover:bg-accent hover:text-accent-foreground hover:shadow-lg sm:px-3 sm:py-2 sm:text-sm md:px-4 md:py-2.5 md:text-base"
												>
													<SimpleIcon
														name={skill.icon}
														size="h-4 w-4 sm:h-4 sm:w-4 md:h-5 md:w-5"
														color={skill.color}
														class="transition-all duration-800 ease-in-out group-hover/skill:rotate-360 group-hover/skill:fill-black!"
													/>
													<span>{skill.name}</span>
												</Badge>
											</div>
										{/each}
									</div>
								</Card.Content>
							</MagicCard>
						</Card.Root>
					</div>
				{/if}
			{/each}
		</div>

		<div class="mb-12 sm:mb-14 md:mb-16">
			<h2 class="mb-4 text-lg font-black sm:mb-5 md:mb-8 md:text-2xl lg:text-3xl">
				Programming Languages
			</h2>
			<div class="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 md:gap-6 lg:grid-cols-5">
				{#each languages as lang, i (lang.id)}
					{#if mounted}
						<div
							in:fly={{ y: 30, duration: 500, delay: 600 + i * 80, easing: cubicOut }}
							class="group"
						>
							<Card.Root
								class="text-center transition-all duration-500 hover:-translate-y-1 hover:shadow-lg sm:hover:-translate-y-2 sm:hover:shadow-xl"
							>
								<Card.Content class="p-3 sm:p-4 md:p-6">
									<div
										class="mx-auto mb-3 flex h-14 w-14 items-center justify-center rounded-lg bg-accent/30 transition-all duration-500 group-hover:scale-110 group-hover:rotate-6 sm:mb-4 sm:h-16 sm:w-16 md:h-20 md:w-20 md:rounded-2xl"
									>
										<SimpleIcon
											name={lang.icon}
											color={lang.color}
											size="h-7 w-7 sm:h-8 sm:w-8 md:h-12 md:w-12"
										/>
									</div>
									<h3 class="mb-1 text-xs font-bold sm:mb-2 sm:text-sm md:text-lg">{lang.name}</h3>
									<p class="text-xs text-muted-foreground sm:text-xs md:text-sm">
										{lang.years} year{lang.years > 1 ? 's' : ''}
									</p>
								</Card.Content>
							</Card.Root>
						</div>
					{/if}
				{/each}
			</div>
		</div>

		<div class="mb-12 sm:mb-14">
			<div class="grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-4 md:gap-6">
				{#if mounted}
					{#each stats as stat, i (stat.id)}
						<div
							in:scale={{ duration: 600, delay: 800 + i * 100, start: 0.5, easing: elasticOut }}
							class="group"
						>
							<Card.Root
								class="overflow-hidden bg-linear-to-br {stat.gradient} h-full text-center transition-all duration-500 hover:scale-105"
							>
								<Card.Content class="p-8">
									<div class="mb-2 text-5xl font-black {stat.color}">{stat.value}</div>
									<p class="text-sm font-medium tracking-wide text-muted-foreground uppercase">
										{stat.label}
									</p>
								</Card.Content>
							</Card.Root>
						</div>
					{/each}
				{/if}
			</div>
		</div>
	</div>
</div>
