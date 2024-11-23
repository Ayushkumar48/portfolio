<script>
	import { onMount } from 'svelte';
	import { Popover, Button, A } from 'flowbite-svelte';

	let { image, id } = $props();
	let alt = image.split('.')[0];
	let name = alt[0].toUpperCase() + alt.slice(1);
</script>

<Popover class="text-md font-light dark:bg-slate-900" triggeredBy={`#a${id}`}>
	{name}
</Popover>
<span
	class="flex select-none items-center justify-center rounded-full transition-transform duration-200 ease-in-out"
	id={`a${id}`}
>
	<img
		src={'./skill-icons/' + image}
		alt={alt.toLowerCase()}
		draggable="false"
		class="mt-1 h-auto w-20 rounded-full bg-slate-300 p-4 shadow-md duration-200 hover:scale-110 dark:bg-slate-600"
	/>
</span>
