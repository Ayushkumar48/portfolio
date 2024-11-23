<script>
	import resume from '$lib/assets/resume.svg';
	import { AppBar } from '@skeletonlabs/skeleton';
	import rightarrow from '$lib/assets/rightarrow.svg';

	let css = $state('absolute bottom-2 left-2 rounded-full bg-white p-2 duration-150 ease-in-out');

	function addClass() {
		css += ' shadowuse';
	}

	function removeClass() {
		css = css.replace(' shadowuse', '');
	}
</script>

<button
	class="relative flex h-60 w-60 items-center justify-center rounded-2xl border-2 border-white bg-[#176995] shadow-xl dark:shadow-md dark:shadow-white"
	onmouseenter={addClass}
	onmouseleave={removeClass}
>
	<img src={rightarrow} alt="rightarrow" class={css} />
	<img src={resume} alt="resume" class="h-20 w-auto" />
</button>

<style>
	.shadowuse {
		box-shadow: 0 0 0 4px #e2e8f065;
	}
</style>
