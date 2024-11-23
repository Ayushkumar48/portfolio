<script>
	import pokeden from '$lib/assets/project-images/pokeden.png';
	import { AppBar } from '@skeletonlabs/skeleton';
	import rightarrow from '$lib/assets/rightarrow.svg';
	import { goto } from '$app/navigation';

	let css = $state('absolute bottom-2 left-2 rounded-full bg-white p-2 duration-150 ease-in-out');
	let css2 = $state(
		'absolute w-auto translate-x-[8rem] rotate-[25deg] scale-[0.8] rounded-3xl object-contain duration-200 ease-in-out'
	);

	function addClass() {
		css += ' shadowuse';
		css2 += ' scale-[0.9]';
	}

	function removeClass() {
		css = css.replace(' shadowuse', '');
		css2 = css2.replace(' scale-[0.9]', '');
	}
</script>

<!-- svelte-ignore a11y_no_static_element_interactions -->
<div
	class="relative flex h-60 w-[31.5rem] items-center justify-center overflow-hidden rounded-2xl border-2 border-white bg-[#f9a1bb] shadow-xl dark:bg-slate-700 dark:shadow-md dark:shadow-white"
	onmouseenter={addClass}
	onmouseleave={removeClass}
>
	<a href="https://pokeden.vercel.app/" target="_blank">
		<img src={rightarrow} alt="rightarrow" class={css} />
	</a>

	<img src={pokeden} alt="linkedin" class={css2} />
</div>

<style>
	.shadowuse {
		box-shadow: 0 0 0 4px #e2e8f065;
	}
</style>
