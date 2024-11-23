<script>
	import { ArrowRightOutline } from 'flowbite-svelte-icons';
	import { quintInOut } from 'svelte/easing';
	import { fade } from 'svelte/transition';
	let { img } = $props();
	let hovered = $state(false);
	function starthover() {
		hovered = true;
	}
	function endHover() {
		hovered = false;
	}
</script>

<!-- svelte-ignore a11y_no_static_element_interactions -->
<!-- svelte-ignore a11y_mouse_events_have_key_events -->
<div class="flex w-1/2 items-center justify-center p-8">
	<a
		href={img.url}
		target="_blank"
		class="relative overflow-hidden rounded-xl duration-200 hover:scale-105"
		onmouseover={starthover}
		onmouseleave={endHover}
	>
		<img
			src={img.src}
			alt={img.alt}
			class="h-auto w-full rounded-xl border-2 border-slate-500 dark:border-2 dark:border-white"
		/>
		{#if hovered}
			<div
				class="absolute left-1/2 top-1/2 z-10 flex h-full w-full -translate-x-1/2 -translate-y-1/2 items-center justify-center bg-[#31c48e9b] text-2xl text-white underline"
				transition:fade={{ duration: 150, easing: quintInOut }}
			>
				<span>{img.name}</span>
				<ArrowRightOutline
					class="ml-2 rotate-[-45deg] scale-[1.5] rounded-full bg-white p-1 text-black"
				/>
			</div>
		{/if}
	</a>
</div>
