<script>
	import { Popover } from 'flowbite-svelte';

	let { image, id } = $props();
</script>

<Popover class="text-md font-light phone:dark:bg-slate-900" triggeredBy={`#a${id}`}>
	{image.name}
</Popover>
<span
	class="flex select-none items-center justify-center rounded-full transition-transform duration-200 ease-in-out"
	id={`a${id}`}
>
	<img
		src={image.src}
		alt={image.name.toLowerCase()}
		draggable="false"
		class="mt-1 h-auto w-20 rounded-full bg-slate-300 p-4 shadow-md duration-200 hover:scale-110 dark:bg-slate-600"
	/>
</span>
