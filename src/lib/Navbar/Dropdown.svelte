<script>
	import { Button } from 'flowbite-svelte';
	import { BarsOutline } from 'flowbite-svelte-icons';
	import { goto } from '$app/navigation';

	let list = ['home', 'about', 'skills', 'projects'];
	function navigateTo(item) {
		const path = `/${item === 'home' ? '' : item}`;
		goto(path);
	}
</script>

<div class="fixed left-1/2 z-50 -translate-x-1/2">
	<button
		id="dropdownDefaultButton"
		data-dropdown-toggle="dropdown"
		class=" z-[20] flex items-center rounded-full border-2 border-black border-opacity-25 bg-slate-200 p-3 text-center text-sm font-medium duration-200 ease-in-out hover:bg-slate-300 focus:outline-none dark:bg-slate-500 dark:text-white dark:hover:bg-slate-600"
		type="button"
	>
		<BarsOutline />
	</button>

	<div
		id="dropdown"
		class="z-10 hidden w-44 divide-y divide-gray-100 rounded-lg bg-white shadow dark:bg-gray-700"
	>
		<ul
			class="py-2 text-sm text-gray-700 dark:text-gray-200"
			aria-labelledby="dropdownDefaultButton"
		>
			{#each list as item}
				<li>
					<button
						onclick={() => navigateTo(item)}
						class="w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
					>
						{item[0].toUpperCase() + item.slice(1)}
					</button>
				</li>
			{/each}
		</ul>
	</div>
</div>
