<script>
	import NavSec from './NavSec.svelte';
	import { DarkMode } from 'flowbite-svelte';
</script>

<div class="relative flex flex-row items-center justify-between px-12 py-4">
	<a href="/">
		<h1 class="text-4xl font-bold text-[#369492] dark:text-[#50c1bf]">ayush</h1>
	</a>
	<NavSec />
	<div class="flex h-full flex-row items-center justify-center gap-4">
		<DarkMode class="duration-[0.4s]" />
		<a href="/contact" class="hover:underline">Contact</a>
	</div>
</div>
