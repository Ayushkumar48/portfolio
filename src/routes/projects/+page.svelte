<script>
	import Project from '$lib/projects/Project.svelte';
	let { data } = $props();
</script>

<div class="mb-20 mt-10 flex w-full flex-col items-center justify-center gap-8">
	<div class="mx-48 flex flex-wrap justify-between">
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
