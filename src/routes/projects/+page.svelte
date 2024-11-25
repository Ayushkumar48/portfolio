<script>
	import Project from '$lib/projects/Project.svelte';
	let { data } = $props();
</script>

<div class="flex w-full flex-col items-center justify-center phone:gap-8">
	<div
		class="flex flex-wrap justify-between phone:-mt-20 tablet:mt-0 laptop:-mt-12 laptop:scale-90"
	>
		{#each data.data as img}
			<Project {img} />
		{/each}
	</div>
	<div>
		for upcoming projects, see my <a
			href="https://github.com/Ayushkumar48/"
			class="text-blue-700 underline"
			target="_blank">github</a
		>
	</div>
</div>
