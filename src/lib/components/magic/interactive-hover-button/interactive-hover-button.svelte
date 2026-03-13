<script lang="ts">
	import { ArrowRight } from '@lucide/svelte';
	import { cn } from '$lib/utils';
	import type { Snippet } from 'svelte';
	import type { HTMLButtonAttributes } from 'svelte/elements';
	import { goto } from '$app/navigation';

	interface InteractiveHoverButtonProps extends HTMLButtonAttributes {
		children: Snippet;
		class?: string;
		icon?: Snippet;
		href?: string;
		target?: string;
		useWindow?: boolean;
	}

	let {
		children,
		class: className,
		icon,
		href,
		target,
		useWindow = false,
		...props
	}: InteractiveHoverButtonProps = $props();
</script>

<!-- eslint-disable svelte/no-navigation-without-resolve -->
<button
	class={cn(
		'group/btn relative w-auto cursor-pointer overflow-hidden rounded-full border bg-background p-2 px-6 text-center font-semibold',
		className
	)}
	{...props}
	onclick={() => {
		if (!href) return;
		if ((target && target !== '_blank') || useWindow) {
			window.open(href, target);
		} else {
			goto(href);
		}
	}}
>
	<div class="flex items-center justify-center gap-2">
		<div
			class="h-2 w-2 rounded-full bg-primary transition-all duration-300 group-hover/btn:scale-[100.8]"
		></div>
		<span
			class="inline-block transition-all duration-300 group-hover/btn:translate-x-12 group-hover/btn:opacity-0"
		>
			{@render children()}
		</span>
	</div>
	<div
		class="absolute top-0 z-10 flex h-full w-full translate-x-12 items-center justify-center gap-2 text-primary-foreground opacity-0 transition-all duration-300 group-hover/btn:-translate-x-5 group-hover/btn:opacity-100"
	>
		<span>{@render children()}</span>
		{#if icon}
			{@render icon()}
		{:else}
			<ArrowRight />
		{/if}
	</div>
</button>
