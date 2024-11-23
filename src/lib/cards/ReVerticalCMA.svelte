<script>
	import cma from '$lib/assets/project-images/cma.png';
	import { AppBar } from '@skeletonlabs/skeleton';
	import rightarrow from '$lib/assets/rightarrow.svg';

	let css = $state('absolute bottom-2 left-2 rounded-full bg-white p-2 duration-150 ease-in-out');
	let css2 = $state(
		'absolute top-32 w-auto translate-x-10 -rotate-[30deg] scale-[1.7] rounded-2xl object-contain duration-200 ease-in-out'
	);
	function addClass() {
		css += ' shadowuse';
		css2 += ' scale-[2]';
	}

	function removeClass() {
		css = css.replace(' shadowuse', '');
		css2 = css2.replace(' scale-[2]', '');
	}
</script>

<!-- svelte-ignore a11y_no_static_element_interactions -->
<div
	class="relative flex h-[31.5rem] w-60 items-center justify-center overflow-hidden rounded-2xl border-2 border-white bg-[#98D0FF] shadow-xl dark:bg-slate-700 dark:shadow-md dark:shadow-white"
	onmouseenter={addClass}
	onmouseleave={removeClass}
>
	<a href="https://cma-tau.vercel.app/" target="_blank">
		<img src={rightarrow} alt="rightarrow" class={css} />
	</a>
	<img src={cma} alt="linkedin" class={css2} />
</div>

<style>
	.shadowuse {
		box-shadow: 0 0 0 4px #e2e8f065;
	}
</style>
