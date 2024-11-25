<script>
	import Navbar from '$lib/Navbar/Navbar.svelte';
	import { Toaster } from 'svelte-sonner';
	import '../app.css';
	let { children } = $props();
</script>

<div class="flex h-full w-full flex-col justify-between">
	<Navbar />
	<div class="phone:px-2 phone:py-1 tablet:px-12 tablet:py-8">
		{@render children()}
	</div>
	<div class="mt-20 w-full pb-4 text-center opacity-50">@2024 Ayush Kumar</div>
</div>

<Toaster richColors />
