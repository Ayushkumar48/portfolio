<script lang="ts">
	import { onMount } from 'svelte';
	import { fade, fly, scale } from 'svelte/transition';
	import { cubicOut, elasticOut } from 'svelte/easing';
	import * as Card from '$lib/components/ui/card';
	import MagicCard from '$lib/components/magic/magic-card/magic-card.svelte';
	import { Badge } from '$lib/components/ui/badge';
	import { Button } from '$lib/components/ui/button';
	import { SimpleIcon } from '$lib';
	import { mode } from 'mode-watcher';

	let mounted = $state(false);

	let isDark = $derived(mode.current === 'dark');

	const socialLinks = [
		{
			name: 'LinkedIn',
			icon: 'linkedin',
			color: '#0A66C2',
			url: 'https://linkedin.com/in/ayushkumar48',
			description: 'Connect with me professionally',
			category: 'Professional',
			gradient: {
				from: '#0A66C2',
				to: '#004182'
			}
		},
		{
			name: 'GitHub',
			icon: 'github',
			color: '#000000',
			url: 'https://github.com/ayushkumar48',
			description: 'Check out my projects and contributions',
			category: 'Code',
			gradient: {
				from: '#1f2937',
				to: '#111827'
			}
		},
		{
			name: 'Discord',
			icon: 'discord',
			color: '#5865F2',
			url: 'https://discord.com/users/ayushkumar48',
			description: 'Chat with me on Discord',
			category: 'Community',
			gradient: {
				from: '#5865F2',
				to: '#4752C4'
			}
		},
		{
			name: 'LeetCode',
			icon: 'leetcode',
			color: '#FFA726',
			url: 'https://leetcode.com/ayushkumar48',
			description: 'View my problem-solving journey',
			category: 'Competitive',
			gradient: {
				from: '#FFA726',
				to: '#FB8C00'
			}
		},
		{
			name: 'Resume',
			icon: 'readme',
			color: '#34C759',
			url: 'https://drive.google.com/file/d/1ymB83qcWbLq1q9gklbPEvYtudrOIax4T/view?usp=sharing',
			description: 'Download my resume',
			category: 'Documents',
			gradient: {
				from: '#34C759',
				to: '#00B34B'
			}
		}
	];

	const categories = [
		{ id: 'Professional', label: 'Professional', color: 'text-chart-1' },
		{ id: 'Code', label: 'Code', color: 'text-chart-2' },
		{ id: 'Community', label: 'Community', color: 'text-chart-3' },
		{ id: 'Competitive', label: 'Competitive', color: 'text-chart-4' },
		{ id: 'Documents', label: 'Documents', color: 'text-chart-5' }
	];

	const stats = [
		{
			id: 'platforms',
			value: '5',
			label: 'Active Platforms',
			gradient: 'from-chart-1/10 to-chart-2/10',
			color: 'text-chart-1'
		},
		{
			id: 'projects',
			value: '50+',
			label: 'Public Repositories',
			gradient: 'from-chart-2/10 to-chart-3/10',
			color: 'text-chart-2'
		},
		{
			id: 'connections',
			value: '500+',
			label: 'Connections',
			gradient: 'from-chart-3/10 to-chart-4/10',
			color: 'text-chart-3'
		},
		{
			id: 'problems',
			value: '200+',
			label: 'Problems Solved',
			gradient: 'from-chart-4/10 to-chart-5/10',
			color: 'text-chart-4'
		}
	];

	onMount(() => {
		mounted = true;
	});
</script>

<div class="bg-background/30 px-4 py-12 font-['Inter'] md:px-8 lg:px-12">
	<div class="mx-auto mb-20 max-w-6xl">
		{#if mounted}
			<div class="mb-16 text-center" in:fade={{ duration: 800, easing: cubicOut }}>
				<h1
					class="mb-4 bg-linear-to-r from-primary via-chart-1 to-chart-4 bg-clip-text font-['Anton'] text-6xl text-transparent md:text-7xl lg:text-8xl"
				>
					CONNECT WITH ME
				</h1>
				<p class="text-lg text-muted-foreground md:text-xl">
					Find me across platforms, share opportunities, or just say hello
				</p>
			</div>
		{/if}

		<!-- Social Links Grid -->
		<div class="mb-20">
			<div class="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
				{#each socialLinks as social, index (social.name)}
					{#if mounted}
						<!-- eslint-disable svelte/no-navigation-without-resolve -->
						<a
							href={social.url}
							target="_blank"
							rel="noopener noreferrer"
							in:fly={{ y: 50, duration: 600, delay: index * 100, easing: cubicOut }}
							class="group h-full"
						>
							<Card.Root
								class="relative h-full cursor-pointer overflow-hidden border-none p-0 shadow-none transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl"
							>
								<MagicCard
									gradientColor={isDark ? '#4a4a4a' : '#D9D9D9'}
									gradientFrom={social.gradient.from}
									gradientTo={social.gradient.to}
									gradientSize={350}
									gradientOpacity={isDark ? 0.6 : 0.08}
									class="h-full rounded-xl"
								>
									<Card.Content
										class="flex h-full flex-col items-center justify-center gap-4 p-8 text-center"
									>
										<div
											class="flex h-24 w-24 items-center justify-center rounded-2xl transition-all duration-500 group-hover:scale-110 group-hover:rotate-6"
											style="background: linear-gradient(135deg, {social.color}20 0%, {social.color}05 100%);"
										>
											<SimpleIcon name={social.icon} color={social.color} size="h-14 w-14" />
										</div>

										<div>
											<h3 class="mb-2 text-2xl font-bold">{social.name}</h3>
											<p class="mb-3 text-sm text-muted-foreground">{social.description}</p>
											<Badge variant="secondary" class="text-xs">
												{social.category}
											</Badge>
										</div>

										<Button
											variant="outline"
											class="mt-4 w-full transition-all duration-300 group-hover:bg-primary group-hover:text-primary-foreground"
										>
											Visit →
										</Button>
									</Card.Content>
								</MagicCard>
							</Card.Root>
						</a>
					{/if}
				{/each}
			</div>
		</div>

		<!-- Stats Section -->
		<div class="mb-16">
			<h2 class="mb-8 text-3xl font-black">Presence & Activity</h2>
			<div class="grid gap-6 md:grid-cols-4">
				{#if mounted}
					{#each stats as stat, i (stat.id)}
						<div
							in:scale={{ duration: 600, delay: 500 + i * 100, start: 0.5, easing: elasticOut }}
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

		<!-- Categories Info -->
		<div class="mb-16">
			<h2 class="mb-8 text-3xl font-black">How to Connect</h2>
			<div class="grid gap-4 md:grid-cols-5">
				{#each categories as category, i (category.id)}
					{#if mounted}
						<div
							in:fly={{
								x: -30,
								duration: 500,
								delay: 600 + i * 80,
								easing: cubicOut
							}}
							class="group"
						>
							<Card.Root class="h-full transition-all duration-300 hover:scale-105 hover:shadow-lg">
								<Card.Content class="p-6 text-center">
									<div class="mb-3 text-2xl font-bold {category.color}">
										{category.label}
									</div>
									<p class="text-xs text-muted-foreground">
										{#if category.id === 'Professional'}
											Professional networking and opportunities
										{:else if category.id === 'Code'}
											See my work and contributions
										{:else if category.id === 'Community'}
											Direct messaging and collaboration
										{:else if category.id === 'Competitive'}
											Problem solving and algorithms
										{:else if category.id === 'Documents'}
											Resume and credentials
										{/if}
									</p>
								</Card.Content>
							</Card.Root>
						</div>
					{/if}
				{/each}
			</div>
		</div>

		<!-- Call to Action -->
		{#if mounted}
			<div
				in:scale={{ duration: 700, delay: 800, start: 0.9, easing: cubicOut }}
				class="relative overflow-hidden rounded-3xl bg-linear-to-r from-primary/20 via-chart-1/20 to-chart-4/20 p-12 text-center"
			>
				<div class="absolute inset-0 -z-10 opacity-30">
					<div
						class="absolute inset-0 bg-linear-to-r from-primary to-chart-4 opacity-20 blur-3xl"
					></div>
				</div>

				<h2 class="mb-4 text-3xl font-black md:text-4xl">Let's Build Something Amazing</h2>
				<p class="mb-8 text-lg text-muted-foreground">
					Interested in collaboration, opportunities, or just want to chat? Reach out on any
					platform above!
				</p>

				<div class="flex flex-wrap justify-center gap-4">
					<Button
						size="lg"
						onclick={() => window.open('https://linkedin.com/in/ayushkumar48', '_blank')}
						class="transition-all duration-300 hover:shadow-lg"
					>
						Let's Connect
					</Button>
					<Button
						size="lg"
						variant="outline"
						onclick={() => (window.location.href = 'mailto:contact@example.com')}
						class="transition-all duration-300 hover:shadow-lg"
					>
						Send Email
					</Button>
				</div>
			</div>
		{/if}
	</div>
</div>
