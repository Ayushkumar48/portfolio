<script>
	import Skill from '$lib/skills/Skill.svelte';
	let { data } = $props();
</script>

<div
	class="text-lightgray md:gap-8 flex flex-wrap items-center justify-center gap-6 tablet:mx-40 laptop:mx-52"
>
	{#each data.skills as image}
		<Skill {image} />
	{/each}
</div>
