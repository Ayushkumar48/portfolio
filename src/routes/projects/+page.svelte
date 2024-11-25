<script>
	import Project from '$lib/projects/Project.svelte';
	import { page } from '$app/stores';
	let { data } = $props();
	let width = $state(0);
	$effect(() => {
		currentPath = $page.url.pathname;
		width = window.innerWidth;
	});
</script>

<div
	class="flex h-full w-full flex-col items-center justify-center phone:mb-20 phone:mt-4 phone:gap-8 tablet:my-0 tablet:mb-0"
>
	{#if width >= 640}
		<div class="flex h-full w-full flex-col items-center justify-center gap-20">
			{#each data.data as img}
				<Project {img} />
			{/each}
		</div>
	{:else}
		<div
			class="flex justify-between phone:flex-col phone:flex-nowrap phone:items-center tablet:flex-row tablet:flex-wrap laptop:-mt-12 laptop:scale-90"
		>
			{#each data.data as img}
				<Project {img} />
			{/each}
		</div>
	{/if}
	<div>
		for upcoming projects, see my <a
			href="https://github.com/Ayushkumar48/"
			class="text-blue-700 underline"
			target="_blank">github</a
		>
	</div>
</div>
