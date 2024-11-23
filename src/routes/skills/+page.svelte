<script>
	import Skill from '$lib/skills/Skill.svelte';
	let images = $state([
		'c++.png',
		'javaScript.png',
		'svelteKit.png',
		'goLang.svg',
		'python.png',
		'nodeJS.png',
		'expressJS.svg',
		'git.png',
		'sql.png',
		'mongoDB.png',
		'restAPI.svg',
		'ubuntu.svg',
		'tailwind.png',
		'flowbite.png',
		'shadcn.svg',
		'aWS.svg',
		'azure.svg',
		'cN.svg',
		'dSA.svg',
		'oOPS.svg'
	]);
</script>

<div class="text-lightgray mx-52 flex flex-wrap items-center justify-center gap-6 md:gap-8">
	{#each images as image, id}
		<Skill {image} {id} />
	{/each}
</div>
