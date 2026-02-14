<script lang="ts">
	import HomeIcon from '@lucide/svelte/icons/home';
	import BriefcaseIcon from '@lucide/svelte/icons/briefcase';
	import SparklesIcon from '@lucide/svelte/icons/sparkles';
	import CodeIcon from '@lucide/svelte/icons/code';
	import MailIcon from '@lucide/svelte/icons/mail';
	import DarkModeToggler from './dark-mode-toggler.svelte';
	import { cn } from '$lib/utils';
	import { Button } from './ui/button';
	import { page } from '$app/state';
	import { resolve } from '$app/paths';
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
			name: 'Contact',
			href: '/contact',
			icon: MailIcon,
			class: 'bg-popover text-popover-foreground'
		}
	];
</script>

<div
	class="fixed bottom-4 left-1/2 z-50 -translate-x-1/2 transform rounded-full border border-border bg-card px-6 py-3 shadow-lg"
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
		<DarkModeToggler />
	</div>
</div>
