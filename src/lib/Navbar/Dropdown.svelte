<script>
	import { Button, Dropdown, DropdownItem, DropdownDivider } from 'flowbite-svelte';
	import { BarsOutline } from 'flowbite-svelte-icons';
	import { goto } from '$app/navigation';
	let dropdownOpen = false;
	let list = ['home', 'about', 'skills', 'projects'];
	function handleClick(item) {
		const path = `/${item === 'home' ? '' : item}`;
		goto(path);
		dropdownOpen = false;
	}
</script>

<div class="fixed left-1/2 z-50 -translate-x-1/2">
	<Button
		class="z-20 flex items-center rounded-full border-2 border-black border-opacity-25 bg-transparent p-3 text-center text-sm font-medium duration-200 ease-in-out focus-within:ring-0 hover:bg-slate-300 focus:bg-slate-300 focus:outline-none dark:bg-transparent dark:text-white dark:hover:bg-slate-600 dark:focus:bg-slate-600"
	>
		<BarsOutline class="text-black dark:text-white" />
	</Button>
	<Dropdown bind:open={dropdownOpen}>
		{#each list as item}
			<DropdownItem on:click={() => handleClick(item)} class="px-12">
				{item[0].toUpperCase() + item.slice(1)}
			</DropdownItem>
		{/each}
	</Dropdown>
</div>
