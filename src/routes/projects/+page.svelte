<script lang="ts">
	import { onMount } from 'svelte';
	import { fade, fly, scale } from 'svelte/transition';
	import { cubicOut, elasticOut } from 'svelte/easing';
	import * as Card from '$lib/components/ui/card';
	import { Button } from '$lib/components/ui/button';
	import { Badge } from '$lib/components/ui/badge';
	import * as Carousel from '$lib/components/ui/carousel';
	import { Canvas } from '@threlte/core';
	import Projects3DScene from '$lib/components/three/Projects3DScene.svelte';

	import * as roastmeImages from '$lib/assets/projects/roastme/index';
	import * as confessbayImages from '$lib/assets/projects/confessbay/index';
	import * as storeitImages from '$lib/assets/projects/store-it/index';
	import * as inretroImages from '$lib/assets/projects/inretro/index';
	import * as vaultsyImages from '$lib/assets/projects/vaultsy/index';

	let mounted = $state(false);

	const projects = [
		{
			id: 'roast-me',
			name: 'Roast Me',
			description:
				'An AI-powered roasting app that delivers hilarious, personalized insults based on user input.',
			images: [
				roastmeImages.image1,
				roastmeImages.image2,
				roastmeImages.image3,
				roastmeImages.image4,
				roastmeImages.image5,
				roastmeImages.image6
			],
			tech: ['Svelte', 'TypeScript', 'Tailwind CSS', 'Drizzle', 'PostgreSQL', 'Google AI'],
			link: 'https://roast-me-kit.vercel.app',
			github: 'https://github.com/ayushkumar48/roast-me'
		},
		{
			id: 'confessbay-app',
			name: 'ConfessBay App',
			description: 'A mobile app for anonymous confessions, built with modern web technologies.',
			images: [
				confessbayImages.image1,
				confessbayImages.image2,
				confessbayImages.image3,
				confessbayImages.image4,
				confessbayImages.image5,
				confessbayImages.image6
			],
			tech: ['React Native', 'Expo', 'Tamagui', 'TypeScript', 'TanStack Query'],
			link: null,
			github: 'https://github.com/ayushkumar48/confessbay-app'
		},
		{
			id: 'confessbay',
			name: 'ConfessBay',
			description: 'Web platform for sharing anonymous confessions with a sleek Svelte interface.',
			images: [
				confessbayImages.image1,
				confessbayImages.image2,
				confessbayImages.image3,
				confessbayImages.image4,
				confessbayImages.image5,
				confessbayImages.image6
			],
			tech: [
				'Svelte',
				'TypeScript',
				'Tailwind CSS',
				'Drizzle',
				'PostgreSQL',
				'AWS S3',
				'Socket.io'
			],
			link: 'https://confessbay.centralindia.cloudapp.azure.com',
			github: 'https://github.com/ayushkumar48/confessbay'
		},
		{
			id: 'store-it',
			name: 'Store It',
			description:
				'A full-stack cloud storage solution with mobile app and backend API for managing files securely and efficiently.',
			images: [storeitImages.image1, storeitImages.image2],
			tech: [
				'React Native',
				'Expo',
				'Tamagui',
				'TypeScript',
				'TanStack Query',
				'Hono',
				'Drizzle',
				'PostgreSQL',
				'Oracle Cloud'
			],
			link: null,
			github: 'https://github.com/ayushkumar48/store-it'
		},
		{
			id: 'inRetro',
			name: 'InRetro',
			description: 'A retro-style social media platform with nostalgic UI and modern features.',
			images: [inretroImages.image1, inretroImages.image2, inretroImages.image3],
			tech: ['Svelte', 'TypeScript', 'Tailwind CSS', 'Drizzle', 'PostgreSQL', 'Azure', 'Google AI'],
			link: 'https://inretro.vercel.app',
			github: 'https://github.com/ayushkumar48/inRetro'
		},
		{
			id: 'vaultsy',
			name: 'Vaultsy',
			description:
				'A developer-first secrets and environment variable manager. Organize, version, and sync your .env configs securely across all environments — with a clean dashboard and a powerful CLI.',
			images: [
				vaultsyImages.image1,
				vaultsyImages.image2,
				vaultsyImages.image3,
				vaultsyImages.image4,
				vaultsyImages.image5
			],
			tech: [
				'Svelte',
				'TypeScript',
				'Tailwind CSS',
				'Drizzle',
				'PostgreSQL',
				'Better Auth',
				'Vercel',
				'Bun'
			],
			link: 'https://vaultsy.vercel.app',
			github: 'https://github.com/Ayushkumar48/vaultsy'
		}
	];

	onMount(() => {
		mounted = true;
	});
</script>

<!-- 3D Canvas backdrop -->
<div class="pointer-events-none fixed inset-0 -z-10">
	<Canvas>
		<Projects3DScene />
	</Canvas>
</div>

<div
	class="overflow-x-hidden bg-background/70 px-4 py-12 font-['Inter'] backdrop-blur-[2px] md:px-8 lg:px-12"
>
	<div class="mx-auto mb-20 max-w-7xl">
		{#if mounted}
			<div class="relative mb-20" in:fade={{ duration: 800, easing: cubicOut }}>
				<div class="text-center">
					<h1
						class="mb-6 bg-linear-to-r from-primary via-chart-1 to-chart-4 bg-clip-text font-['Anton'] text-6xl text-transparent md:text-7xl lg:text-8xl"
					>
						PROJECTS
					</h1>
					<p class="mx-auto max-w-2xl font-['Anton'] text-lg text-muted-foreground md:text-xl">
						A showcase of innovative applications built with cutting-edge technologies, solving
						real-world problems
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

		<div class="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
			{#each projects as project, i (project.id)}
				{#if mounted}
					<div
						in:fly={{ y: 50, duration: 600, delay: i * 100, easing: cubicOut }}
						class="group h-full"
					>
						<Card.Root class="flex h-full flex-col">
							<div
								class="absolute inset-0 -z-10 bg-linear-to-br from-transparent via-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"
								style="background: linear-gradient(135deg, transparent 0%, rgba(255, 62, 0, 0.1) 100%);"
							></div>

							<div class="overflow-hidden">
								<Carousel.Root class="w-full">
									<Carousel.Content>
										{#each project.images as image, j (j)}
											<Carousel.Item>
												<img
													src={image}
													alt="{project.name} screenshot {j + 1}"
													class="h-48 w-full object-cover"
												/>
											</Carousel.Item>
										{/each}
									</Carousel.Content>
									{#if project.images.length > 1}
										<Carousel.Previous
											class="left-2 h-7 w-7 opacity-0 transition-opacity duration-200 group-hover:opacity-100"
										/>
										<Carousel.Next
											class="right-2 h-7 w-7 opacity-0 transition-opacity duration-200 group-hover:opacity-100"
										/>
									{/if}
								</Carousel.Root>
							</div>

							<Card.Header>
								<Card.Title>{project.name}</Card.Title>
								<Card.Description>{project.description}</Card.Description>
							</Card.Header>

							<Card.Content class="flex flex-1 flex-col">
								<div class="mb-auto"></div>
								<div class="flex flex-wrap gap-2">
									{#each project.tech as tech (tech)}
										<Badge variant="secondary">
											{tech}
										</Badge>
									{/each}
								</div>
							</Card.Content>

							<Card.Footer class="flex gap-3 pt-4">
								{#if project.link}
									<Button href={project.link} class="flex-1" target="_blank">View Demo</Button>
								{/if}
								<Button href={project.github} variant="outline" class="flex-1" target="_blank"
									>GitHub</Button
								>
							</Card.Footer>
						</Card.Root>
					</div>
				{/if}
			{/each}
		</div>
	</div>
</div>
