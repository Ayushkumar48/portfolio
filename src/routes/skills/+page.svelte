<script lang="ts">
	import { onMount } from 'svelte';
	import { fade, fly, scale } from 'svelte/transition';
	import { cubicOut, elasticOut } from 'svelte/easing';
	import { Tween } from 'svelte/motion';
	import { SimpleIcon } from '$lib';
	import * as Card from '$lib/components/ui/card';
	import { Badge } from '$lib/components/ui/badge';
	import { Progress } from '$lib/components/ui/progress';

	let mounted = $state(false);

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

<div class="overflow-x-hidden bg-background px-4 py-12 font-['Inter'] md:px-8 lg:px-12">
	<div class="mx-auto mb-20 max-w-7xl">
		{#if mounted}
			<div class="relative mb-20" in:fade={{ duration: 800, easing: cubicOut }}>
				<div class="text-center">
					<h1
						class="mb-6 bg-linear-to-r from-primary via-chart-1 to-chart-4 bg-clip-text font-['Anton'] text-6xl text-transparent md:text-7xl lg:text-8xl"
					>
						TECH STACK
					</h1>
					<p class="mx-auto max-w-2xl font-['Anton'] text-lg text-muted-foreground md:text-xl">
						A comprehensive toolkit for building high-performance, scalable applications that handle
						real-world complexity
					</p>
				</div>

				<div class="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
					<div
						class="absolute -top-20 -right-20 h-72 w-72 rounded-full bg-chart-1/20 blur-3xl"
						in:scale={{ duration: 1000, start: 0.5, easing: elasticOut }}
					></div>
					<div
						class="absolute top-40 -left-20 h-96 w-96 rounded-full bg-chart-2/20 blur-3xl"
						in:scale={{ duration: 1200, delay: 200, start: 0.5, easing: elasticOut }}
					></div>
				</div>
			</div>
		{/if}

		<div class="mb-16">
			<h2 class="mb-8 text-3xl font-black">Core Technologies</h2>
			<div class="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
				{#each featuredSkills as skill, i (skill.id)}
					{#if mounted}
						<div in:fly={{ y: 50, duration: 600, delay: i * 100, easing: cubicOut }} class="group">
							<Card.Root class="transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl">
								<div
									class="absolute inset-0 -z-10 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
									style="background: linear-gradient(135deg, transparent 0%, {skill.color}10 100%);"
								></div>

								<Card.Content class="flex items-center gap-4 p-6">
									<div
										class="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6"
										style="background: linear-gradient(135deg, {skill.color}20 0%, {skill.color}05 100%);"
									>
										<SimpleIcon name={skill.icon} color={skill.color} size="h-10 w-10" />
									</div>

									<div class="flex-1">
										<h3 class="mb-2 text-xl font-bold">{skill.name}</h3>
										<div class="flex items-center gap-2">
											<Progress
												value={progressTweens[i].current}
												class="flex-1 [&>div]:transition-none!"
											/>
											<span class="text-sm font-semibold text-muted-foreground">
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

		<div class="mb-16 grid gap-6 md:grid-cols-2">
			{#each skillGroups as group, i (group.id)}
				{#if mounted}
					<div
						in:fly={{
							x: i % 2 === 0 ? -50 : 50,
							duration: 700,
							delay: 200 + i * 150,
							easing: cubicOut
						}}
						class="group relative overflow-hidden rounded-3xl bg-linear-to-br {group.gradient} p-0.5 transition-all duration-500 hover:shadow-2xl"
					>
						<Card.Root class="h-full bg-card/95 backdrop-blur-xl">
							<Card.Header>
								<Card.Title class="text-3xl font-black">{group.title}</Card.Title>
								<Card.Description>{group.description}</Card.Description>
								<div class="mt-3 h-1 w-16 rounded-full bg-linear-to-r {group.gradient}"></div>
							</Card.Header>

							<Card.Content>
								<div class="flex flex-wrap gap-3">
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
												class="flex items-center gap-3 px-4 py-2.5 text-base transition-all duration-300 hover:scale-105 hover:bg-accent hover:text-accent-foreground hover:shadow-lg"
											>
												<SimpleIcon
													name={skill.icon}
													size="h-5 w-5"
													color={skill.color}
													class="transition-all duration-800 ease-in-out group-hover/skill:rotate-360 group-hover/skill:fill-black!"
												/>
												<span>{skill.name}</span>
											</Badge>
										</div>
									{/each}
								</div>
							</Card.Content>
						</Card.Root>
					</div>
				{/if}
			{/each}
		</div>

		<div class="mb-16">
			<h2 class="mb-8 text-3xl font-black">Programming Languages</h2>
			<div class="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
				{#each languages as lang, i (lang.id)}
					{#if mounted}
						<div
							in:fly={{ y: 30, duration: 500, delay: 600 + i * 80, easing: cubicOut }}
							class="group"
						>
							<Card.Root
								class="text-center transition-all duration-500 hover:-translate-y-2 hover:shadow-xl"
							>
								<Card.Content class="p-6">
									<div
										class="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-2xl bg-accent/30 transition-all duration-500 group-hover:scale-110 group-hover:rotate-6"
									>
										<SimpleIcon name={lang.icon} color={lang.color} size="h-12 w-12" />
									</div>
									<h3 class="mb-2 text-lg font-bold">{lang.name}</h3>
									<p class="text-sm text-muted-foreground">
										{lang.years} year{lang.years > 1 ? 's' : ''}
									</p>
								</Card.Content>
							</Card.Root>
						</div>
					{/if}
				{/each}
			</div>
		</div>

		<div class="mb-16">
			<div class="grid gap-6 md:grid-cols-4">
				{#if mounted}
					{#each stats as stat, i (stat.id)}
						<div
							in:scale={{ duration: 600, delay: 800 + i * 100, start: 0.5, easing: elasticOut }}
							class="group"
						>
							<Card.Root
								class="overflow-hidden bg-linear-to-br {stat.gradient} text-center transition-all duration-500 hover:scale-105"
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
