<script>
	import { goto } from '$app/navigation';
	import rightarrow from '$lib/assets/rightarrow.svg';
	let css = $state(
		'absolute bottom-3 left-6 bg-white p-2 text-sm justify-center items-center duration-150 ease-in-out flex flex-row rounded-full'
	);

	function addClass() {
		css += ' shadowuse';
	}

	function removeClass() {
		css = css.replace(' shadowuse', '');
	}
</script>

<!-- svelte-ignore a11y_no_static_element_interactions -->
<div
	class=" relative h-60 w-[31.5rem]
rounded-2xl border-2 border-white bg-red-300 p-6 text-justify text-lg shadow-lg dark:bg-slate-400 dark:text-black dark:shadow-md dark:shadow-white"
	onmouseenter={addClass}
	onmouseleave={removeClass}
>
	<div class="h-full">
		<p class="pb-2 text-left text-2xl font-bold">Let's create something special!</p>
		<p>
			If you want to collaborate or are interested in launching projects together, let's connect!
		</p>
	</div>
	<button class={css} onclick={() => goto('/contact')}>
		<div>Connect</div>
		<img src={rightarrow} alt="rightarrow" />
	</button>
</div>

<style>
	.shadowuse {
		box-shadow: 0 0 0 4px #e2e8f065;
	}
</style>
