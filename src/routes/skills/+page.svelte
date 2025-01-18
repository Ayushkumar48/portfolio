<script>
	import Skill from '$lib/skills/Skill.svelte';
	let images = [
		{ src: '/skill-icons/c++.png', name: 'C++' },
		{ src: '/skill-icons/javascript.png', name: 'JavaScript' },
		{ src: '/skill-icons/sveltekit.png', name: 'SvelteKit' },
		{ src: '/skill-icons/react.svg', name: 'React.js' },
		{ src: '/skill-icons/next.svg', name: 'Next.js' },
		{ src: '/skill-icons/golang.svg', name: 'GoLang' },
		{ src: '/skill-icons/python.png', name: 'Python' },
		{ src: '/skill-icons/nodejs.png', name: 'NodeJS' },
		{ src: '/skill-icons/expressjs.svg', name: 'ExpressJS' },
		{ src: '/skill-icons/git.png', name: 'Git' },
		{ src: '/skill-icons/sql.png', name: 'SQL' },
		{ src: '/skill-icons/mongodb.png', name: 'MongoDB' },
		{ src: '/skill-icons/dynamodb.svg', name: 'DynamoDB' },
		{ src: '/skill-icons/ubuntu.svg', name: 'Ubuntu' },
		{ src: '/skill-icons/docker.svg', name: 'Docker' },
		{ src: '/skill-icons/tailwind.png', name: 'Tailwind CSS' },
		{ src: '/skill-icons/flowbite.png', name: 'Flowbite' },
		{ src: '/skill-icons/shadcn.svg', name: 'ShadCN' },
		{ src: '/skill-icons/restapi.svg', name: 'REST API' },
		{ src: '/skill-icons/aws.svg', name: 'AWS' },
		{ src: '/skill-icons/azure.svg', name: 'Azure' },
		{ src: '/skill-icons/cn.svg', name: 'Computer Networks' },
		{ src: '/skill-icons/dsa.svg', name: 'DSA' },
		{ src: '/skill-icons/oops.svg', name: 'OOPS' }
	];
</script>

<div
	class="text-lightgray md:gap-8 flex flex-wrap items-center justify-center gap-6 tablet:mx-40 laptop:mx-52"
>
	{#each images as image, id}
		<Skill {image} {id} />
	{/each}
</div>
