<script>
	import { page } from '$app/stores';
	import { goto } from '$app/navigation';

	$: currentPath = $page.url.pathname;
	let list = ['home', 'about', 'skills', 'projects'];
	function navigateTo(item) {
		const path = `/${item === 'home' ? '' : item}`;
		goto(path);
	}
</script>

<div
	class="fixed left-1/2 z-[20] flex w-[21rem] -translate-x-1/2 flex-row items-center justify-evenly rounded-3xl bg-slate-400 py-1 shadow-lg dark:bg-slate-600"
>
	{#each list as item}
		<button
			on:click={() => navigateTo(item)}
			class={currentPath === `/${item === 'home' ? '' : item}`
				? 'rounded-3xl bg-white px-2 py-1 dark:text-black'
				: 'p-2' + ' delay-50 duration-[0.3s] ease-in-out hover:underline'}
		>
			{item[0].toUpperCase() + item.slice(1)}
		</button>
	{/each}
</div>
