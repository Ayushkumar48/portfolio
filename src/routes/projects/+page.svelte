<script>
	import Project from '$lib/projects/Project.svelte';
	let { data } = $props();
</script>

<div
	class="phone:gap-40 phone:mt-20 tablet:mb-20 laptop:mb-20 tablet:gap-8 laptop:gap-8 mt-10 flex w-full flex-col items-center justify-center"
>
	<div
		class="laptop:mx-48 phone:scale-[1.4] tablet:scale-100 laptop:scale-100 flex flex-wrap justify-between"
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
