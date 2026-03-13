<script lang="ts">
	import { onMount } from 'svelte';
	import { fade, fly, scale } from 'svelte/transition';
	import { cubicOut } from 'svelte/easing';
	import * as Card from '$lib/components/ui/card';
	import { Badge } from '$lib/components/ui/badge';
	import { Button } from '$lib/components/ui/button';
	import InteractiveHoverButton from '$lib/components/magic/interactive-hover-button/interactive-hover-button.svelte';

	import LinkedInIcon from '$lib/assets/social/linkedin.svelte';
	import GitHubIcon from '$lib/assets/social/github.svelte';
	import DiscordIcon from '$lib/assets/social/discord.svelte';
	import LeetCodeIcon from '$lib/assets/social/leetcode.svelte';
	import ResumeIcon from '$lib/assets/social/resume.svelte';

	let mounted = $state(false);

	const socialLinks = [
		{
			name: 'LinkedIn',
			icon: LinkedInIcon,
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
			icon: GitHubIcon,
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
			icon: DiscordIcon,
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
			icon: LeetCodeIcon,
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
			icon: ResumeIcon,
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

		<div class="mb-20">
			<div class="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
				{#each socialLinks as social, index (social.name)}
					{@const Icon = social.icon}
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
								class="relative cursor-pointer p-0 shadow-none transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl"
							>
								<Card.Content
									class="flex h-full flex-col items-center justify-center gap-4 p-8 text-center"
								>
									<div
										class="flex h-24 w-24 items-center justify-center rounded-2xl transition-all duration-500 group-hover:scale-110 group-hover:rotate-6"
										style="background: linear-gradient(135deg, {social.color}20 0%, {social.color}05 100%);"
									>
										<div class="h-14 w-14">
											<Icon />
										</div>
									</div>

									<div>
										<h3 class="mb-2 text-2xl font-bold">{social.name}</h3>
										<p class="mb-3 text-sm text-muted-foreground">{social.description}</p>
										<Badge variant="secondary" class="text-xs">
											{social.category}
										</Badge>
									</div>

									<InteractiveHoverButton href={social.url} target="_blank" class="mt-4 w-full">
										Visit
									</InteractiveHoverButton>
								</Card.Content>
							</Card.Root>
						</a>
					{/if}
				{/each}
			</div>
		</div>

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
						class="cursor-pointer transition-all duration-300 hover:shadow-lg"
					>
						Let's Connect
					</Button>
					<Button
						size="lg"
						variant="outline"
						class="transition-all duration-300 hover:shadow-lg"
						href="mailto:ayushsuperstar48@gmail.com"
					>
						Send Email
					</Button>
				</div>
			</div>
		{/if}
	</div>
</div>
