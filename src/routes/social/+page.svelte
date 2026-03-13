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

<div
	class="w-full bg-background/30 px-3 py-24 font-['Inter'] sm:px-4 md:px-6 md:py-12 lg:px-8 xl:px-12"
>
	<div class="mx-auto mb-12 w-full max-w-6xl sm:mb-16 md:mb-20">
		{#if mounted}
			<div
				class="mb-10 text-center sm:mb-12 md:mb-16"
				in:fade={{ duration: 800, easing: cubicOut }}
			>
				<h1
					class="mb-3 bg-linear-to-r from-primary via-chart-1 to-chart-4 bg-clip-text font-['Anton'] text-3xl text-transparent sm:text-4xl md:text-6xl lg:text-7xl xl:text-8xl"
				>
					CONNECT WITH ME
				</h1>
				<p class="px-2 text-xs text-muted-foreground sm:text-sm md:text-lg lg:text-xl">
					Find me across platforms, share opportunities, or just say hello
				</p>
			</div>
		{/if}

		<div class="mb-12 sm:mb-14 md:mb-20">
			<div class="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4 md:gap-5 lg:grid-cols-3 lg:gap-6">
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
								class="relative h-full cursor-pointer p-0 shadow-none transition-all duration-300 hover:scale-[1.02] hover:shadow-lg sm:hover:shadow-2xl"
							>
								<Card.Content
									class="flex h-full flex-col items-center justify-center gap-2 p-4 text-center sm:gap-3 sm:p-6 md:gap-4 md:p-8"
								>
									<div
										class="flex h-16 w-16 items-center justify-center rounded-lg transition-all duration-500 group-hover:scale-110 group-hover:rotate-6 sm:h-20 sm:w-20 md:h-24 md:w-24 md:rounded-2xl"
										style="background: linear-gradient(135deg, {social.color}20 0%, {social.color}05 100%);"
									>
										<div class="h-9 w-9 sm:h-11 sm:w-11 md:h-14 md:w-14">
											<Icon />
										</div>
									</div>

									<div class="flex-1">
										<h3 class="mb-1 text-base font-bold sm:mb-2 sm:text-lg md:text-2xl">
											{social.name}
										</h3>
										<p class="mb-2 text-xs text-muted-foreground sm:mb-3 sm:text-xs md:text-sm">
											{social.description}
										</p>
										<Badge variant="secondary" class="text-xs sm:text-xs md:text-sm">
											{social.category}
										</Badge>
									</div>

									<InteractiveHoverButton
										href={social.url}
										target="_blank"
										class="mt-2 w-full text-xs sm:mt-3 sm:text-sm md:mt-4 md:text-base"
										useWindow
									>
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
				class="relative overflow-hidden rounded-2xl bg-linear-to-r from-primary/20 via-chart-1/20 to-chart-4/20 p-6 text-center sm:rounded-3xl sm:p-8 md:p-12"
			>
				<div class="absolute inset-0 -z-10 opacity-30">
					<div
						class="absolute inset-0 bg-linear-to-r from-primary to-chart-4 opacity-20 blur-3xl"
					></div>
				</div>

				<h2 class="mb-3 text-xl font-black sm:mb-4 md:mb-4 md:text-3xl lg:text-4xl">
					Let's Build Something Amazing
				</h2>
				<p class="mb-4 text-xs text-muted-foreground sm:mb-6 sm:text-sm md:mb-8 md:text-lg">
					Interested in collaboration, opportunities, or just want to chat? Reach out on any
					platform above!
				</p>

				<div class="flex flex-col gap-2 sm:flex-row sm:justify-center sm:gap-3 md:gap-4">
					<Button
						size="sm"
						href="https://linkedin.com/in/ayushkumar48"
						target="_blank"
						rel="noopener noreferrer"
						class="w-full cursor-pointer text-xs transition-all duration-300 hover:shadow-lg sm:w-auto sm:text-sm md:text-base"
					>
						Let's Connect
					</Button>
					<Button
						size="sm"
						variant="outline"
						class="w-full text-xs transition-all duration-300 hover:shadow-lg sm:w-auto sm:text-sm md:text-base"
						href="mailto:ayushsuperstar48@gmail.com"
					>
						Send Email
					</Button>
				</div>
			</div>
		{/if}
	</div>
</div>
