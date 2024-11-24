<script>
	import ReHorizontalAbout from '$lib/cards/ReHorizontalAbout.svelte';
	import ReHorizontalContact from '$lib/cards/ReHorizontalContact.svelte';
	import ReHorizontalJourney from '$lib/cards/ReHorizontalJourney.svelte';
	import ReHorizontalPokeden from '$lib/cards/ReHorizontalPokeden.svelte';
	import ReVerticalCma from '$lib/cards/ReVerticalCMA.svelte';
	import ReVerticalTorbin from '$lib/cards/ReVerticalTorbin.svelte';
	import SqDarkToggler from '$lib/cards/SqDarkToggler.svelte';
	import SqGithub from '$lib/cards/SqGithub.svelte';
	import SqLeetcode from '$lib/cards/SqLeetcode.svelte';
	import SqLinkedin from '$lib/cards/SqLinkedin.svelte';
</script>

<div
	class="phone:scale-[0.7] tablet:scale-[0.85] laptop:scale-100 phone:-translate-y-[22rem] tablet:-translate-y-20 laptop:translate-y-0 phone:-mb-[35rem] tablet:-mb-10 laptop:mb-32 mt-20 flex flex-col items-center justify-center gap-6"
>
	<div class="phone:flex-col tablet:flex-row laptop:flex-row flex gap-6">
		<div class="flex flex-col gap-6">
			<ReHorizontalAbout />
			<div class="flex flex-row gap-6">
				<SqDarkToggler />
				<SqLinkedin />
			</div>
			<ReHorizontalPokeden />
			<ReHorizontalJourney />
		</div>
		<div class="flex flex-col gap-6">
			<div class="flex flex-row gap-6">
				<div class="flex flex-col gap-6">
					<SqGithub />
					<ReVerticalCma />
				</div>
				<div class="flex flex-col gap-6">
					<ReVerticalTorbin />
					<SqLeetcode />
				</div>
			</div>
			<ReHorizontalContact />
		</div>
	</div>
</div>
