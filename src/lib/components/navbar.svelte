<script lang="ts">
	import HomeIcon from '@lucide/svelte/icons/home';
	import BriefcaseIcon from '@lucide/svelte/icons/briefcase';
	import SparklesIcon from '@lucide/svelte/icons/sparkles';
	import CodeIcon from '@lucide/svelte/icons/code';
	import Share2Icon from '@lucide/svelte/icons/share-2';
	import MenuIcon from '@lucide/svelte/icons/menu';
	import { cn } from '$lib/utils';
	import { Button, buttonVariants } from './ui/button';
	import * as Sheet from './ui/sheet';
	import { page } from '$app/state';
	import { resolve } from '$app/paths';
	import AnimatedThemeToggler from './magic/animated-theme-toggler/animated-theme-toggler.svelte';

	let isMenuOpen = $state(false);

	const tabsData = [
		{
			name: 'Home',
			href: '/',
			icon: HomeIcon,
			class: 'bg-background text-background-foreground'
		},
		{
			name: 'Work',
			href: '/work',
			icon: BriefcaseIcon,
			class: 'bg-primary text-primary-foreground'
		},
		{
			name: 'Skills',
			href: '/skills',
			icon: SparklesIcon,
			class: 'bg-muted text-muted-foreground'
		},
		{
			name: 'Projects',
			href: '/projects',
			icon: CodeIcon,
			class: 'bg-secondary text-secondary-foreground'
		},
		{
			name: 'Social',
			href: '/social',
			icon: Share2Icon,
			class: 'bg-popover text-popover-foreground'
		}
	];

	function closeMenu() {
		isMenuOpen = false;
	}
</script>

<div
	class="fixed bottom-4 left-1/2 z-50 hidden -translate-x-1/2 transform rounded-full border border-border bg-card px-6 py-3 shadow-lg md:block"
>
	<div class="flex items-center justify-between gap-8">
		<a class="text-lg font-semibold text-foreground" href={resolve('/')}>Ayush Kumar</a>
		<div class="flex gap-4">
			{#each tabsData as tab (tab.name)}
				{@const currentTab = tab.href === page.url.pathname}
				{@const Icon = tab.icon}
				<Button
					href={tab.href}
					variant="link"
					class={cn(
						'flex items-center gap-2 rounded-full px-3 py-2 transition-colors',
						currentTab ? tab.class : 'text-muted-foreground hover:text-foreground'
					)}
				>
					<Icon class="h-4 w-4" />
					<span class="text-sm">{tab.name}</span>
				</Button>
			{/each}
		</div>
		<AnimatedThemeToggler />
	</div>
</div>

<div
	class="fixed top-0 right-0 left-0 z-50 flex items-center justify-between border-b border-border bg-card px-4 py-4 md:hidden"
>
	<a class="text-base font-semibold text-foreground" href={resolve('/')}>Ayush Kumar</a>
	<div class="flex items-center gap-4">
		<AnimatedThemeToggler />
		<Sheet.Root bind:open={isMenuOpen}>
			<Sheet.Trigger class={cn(buttonVariants({ variant: 'default' }))}>
				<MenuIcon class="h-5 w-5" />
			</Sheet.Trigger>
			<Sheet.Content side="left" class="w-64">
				<Sheet.Header class="mb-6">
					<Sheet.Title>Navigation</Sheet.Title>
				</Sheet.Header>

				<nav class="flex flex-col space-y-2">
					{#each tabsData as tab (tab.name)}
						{@const currentTab = tab.href === page.url.pathname}
						{@const Icon = tab.icon}
						<Button
							href={tab.href}
							onclick={closeMenu}
							variant="link"
							class={cn(
								'flex w-full items-center justify-start gap-8 rounded-full px-3 py-2 transition-colors',
								currentTab ? tab.class : 'text-muted-foreground hover:text-foreground'
							)}
						>
							<Icon class="h-4 w-4" />
							<span class="text-sm">{tab.name}</span>
						</Button>
					{/each}
				</nav>
			</Sheet.Content>
		</Sheet.Root>
	</div>
</div>
