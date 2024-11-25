<script>
	import { page } from '$app/stores';
	import { goto } from '$app/navigation';
	import Dropdown from './Dropdown.svelte';

	let currentPath = $state(0);
	let width = $state(0);
	let list = ['home', 'about', 'skills', 'projects'];
	$effect(() => {
		currentPath = $page.url.pathname;
		width = window.innerWidth;
		console.log(width);
	});

	function navigateTo(item) {
		const path = `/${item === 'home' ? '' : item}`;
		goto(path);
	}
</script>

{#if width >= 640}
	<div
		class="fixed left-1/2 z-[20] flex w-[21rem] -translate-x-1/2 flex-row items-center justify-evenly rounded-3xl bg-slate-400 py-1 shadow-lg dark:bg-slate-600"
	>
		{#each list as item}
			<button
				onclick={() => navigateTo(item)}
				class={currentPath === `/${item === 'home' ? '' : item}`
					? 'rounded-3xl bg-white px-2 py-1 dark:text-black'
					: 'p-2' + ' delay-50 duration-[0.3s] ease-in-out hover:underline'}
			>
				{item[0].toUpperCase() + item.slice(1)}
			</button>
		{/each}
	</div>
{:else}
	<Dropdown />
{/if}
