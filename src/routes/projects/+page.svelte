<script lang="ts">
	import { onMount } from 'svelte';
	import { fade, fly } from 'svelte/transition';
	import { cubicOut } from 'svelte/easing';
	import * as Card from '$lib/components/ui/card';
	import { Badge } from '$lib/components/ui/badge';
	import ExternalLinkIcon from '@lucide/svelte/icons/external-link';
	import * as Carousel from '$lib/components/ui/carousel';

	import * as roastmeImages from '$lib/assets/projects/roastme/index';
	import * as confessbayImages from '$lib/assets/projects/confessbay/index';
	import * as storeitImages from '$lib/assets/projects/store-it/index';
	import * as inretroImages from '$lib/assets/projects/inretro/index';
	import * as vaultsyImages from '$lib/assets/projects/vaultsy/index';
	import InteractiveHoverButton from '$lib/components/magic/interactive-hover-button/interactive-hover-button.svelte';
	import SimpleIcon from '$lib/components/simple-icon.svelte';

	let mounted = $state(false);

	const projects = [
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
			github: 'https://github.com/Ayushkumar48/vaultsy',
			showSite: true
		},
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
			github: 'https://github.com/ayushkumar48/roast-me',
			showSite: true
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
			github: 'https://github.com/ayushkumar48/inRetro',
			showSite: true
		}
	];

	onMount(() => {
		mounted = true;
	});
</script>

<div
	class="relative overflow-x-hidden bg-background bg-[radial-gradient(circle,color-mix(in_oklch,var(--foreground)_45%,transparent)_1px,transparent_1px)] bg-size-[20px_20px] px-3 py-24 font-['Inter'] sm:px-4 md:px-6 md:py-12 lg:px-8 xl:px-12"
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
					PROJECTS
				</h1>
				<p
					class="mx-auto max-w-2xl px-2 font-['Anton'] text-xs text-muted-foreground sm:text-sm md:text-lg lg:text-xl"
				>
					A showcase of innovative applications built with cutting-edge technologies, solving
					real-world problems
				</p>
			</div>
		{/if}

		<div class="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 md:gap-6 lg:grid-cols-3 lg:gap-8">
			{#each projects as project, i (project.id)}
				{#if mounted}
					<div
						in:fly={{ y: 50, duration: 600, delay: i * 100, easing: cubicOut }}
						class="group h-full"
					>
						<Card.Root class="flex h-full flex-col bg-background">
							<div
								class="absolute inset-0 -z-10 bg-linear-to-br from-transparent via-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"
								style="background: linear-gradient(135deg, transparent 0%, rgba(255, 62, 0, 0.1) 100%);"
							></div>

							<div class="overflow-hidden rounded-t-lg">
								<Carousel.Root class="w-full">
									<Carousel.Content>
										{#each project.images as image, j (j)}
											<Carousel.Item>
												<img
													src={image}
													alt="{project.name} screenshot {j + 1}"
													class="h-32 w-full object-cover sm:h-40 md:h-48"
												/>
											</Carousel.Item>
										{/each}
									</Carousel.Content>
									{#if project.images.length > 1}
										<Carousel.Previous
											class="left-1 h-5 w-5 opacity-0 transition-opacity duration-200 group-hover:opacity-100 sm:left-2 sm:h-6 sm:w-6 md:h-7 md:w-7"
										/>
										<Carousel.Next
											class="right-1 h-5 w-5 opacity-0 transition-opacity duration-200 group-hover:opacity-100 sm:right-2 sm:h-6 sm:w-6 md:h-7 md:w-7"
										/>
									{/if}
								</Carousel.Root>
							</div>

							<Card.Header class="p-3 sm:p-4 md:p-6">
								<Card.Title class="text-base sm:text-lg md:text-xl">{project.name}</Card.Title>
								<Card.Description class="text-xs sm:text-sm md:text-base"
									>{project.description}</Card.Description
								>
							</Card.Header>

							<Card.Content class="flex flex-1 flex-col px-3 py-2 sm:px-4 sm:py-3 md:px-6 md:py-4">
								<div class="mb-auto"></div>
								<div class="flex flex-wrap gap-1.5 sm:gap-2">
									{#each project.tech as tech (tech)}
										<Badge variant="secondary" class="text-xs sm:text-xs md:text-sm">
											{tech}
										</Badge>
									{/each}
								</div>
							</Card.Content>

							<Card.Footer
								class="flex flex-col gap-2 px-3 py-3 sm:flex-row sm:gap-2 sm:px-4 sm:py-4 md:gap-3 md:px-6 md:py-4"
							>
								{#if project.link}
									<InteractiveHoverButton
										href={project.link}
										target="_blank"
										class="w-full text-xs sm:text-sm"
										useWindow
									>
										{#if project.showSite}
											Visit Site
										{:else}
											View Demo
										{/if}
										{#snippet icon()}
											<ExternalLinkIcon class="h-3 w-3 sm:h-4 sm:w-4" />
										{/snippet}
									</InteractiveHoverButton>
								{/if}
								<InteractiveHoverButton
									href={project.github}
									target="_blank"
									class="w-full text-xs sm:text-sm"
									useWindow
								>
									GitHub
									{#snippet icon()}
										<SimpleIcon name="github" size="h-3 w-3 sm:h-4 sm:w-4" />
									{/snippet}
								</InteractiveHoverButton>
							</Card.Footer>
						</Card.Root>
					</div>
				{/if}
			{/each}
		</div>
	</div>
</div>
