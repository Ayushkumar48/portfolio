<script>
	import linkedin from '$lib/assets/linkedin.svg';
	import { AppBar } from '@skeletonlabs/skeleton';
	import rightarrow from '$lib/assets/rightarrow.svg';

	let css = $state(
		'absolute bottom-2 left-2 rounded-full bg-white p-2 duration-150 ease-in-out z-10'
	);
	let css2 = $state('h-32 w-auto duration-200 ease-in-out');
	function addClass() {
		css += ' shadowuse';
		css2 += ' scale-[1.2]';
	}

	function removeClass() {
		css = css.replace(' shadowuse', '');
		css2 = css2.replace(' scale-[1.2]', '');
	}
</script>

<!-- svelte-ignore a11y_no_static_element_interactions -->
<div
	class="relative flex h-60 w-60 items-center justify-center rounded-2xl border-2 border-white bg-[#0288D1] shadow-xl dark:shadow-md dark:shadow-white"
	onmouseenter={addClass}
	onmouseleave={removeClass}
>
	<a href="https://www.linkedin.com/in/ayushkumar48/" target="_blank">
		<img src={rightarrow} alt="rightarrow" class={css} />
	</a>
	<img src={linkedin} alt="linkedin" class={css2} />
</div>

<style>
	.shadowuse {
		box-shadow: 0 0 0 4px #e2e8f065;
	}
</style>
