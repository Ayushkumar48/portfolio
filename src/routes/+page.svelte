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
	class="mt-20 flex flex-col items-center justify-center gap-6 phone:-mb-[35rem] phone:-translate-y-[22rem] phone:scale-[0.6] tablet:-mb-10 tablet:-translate-y-20 tablet:scale-[0.85] laptop:mb-32 laptop:translate-y-0 laptop:scale-100"
>
	<div
		class="flex gap-6 phone:-translate-y-40 phone:flex-col tablet:translate-y-0 tablet:flex-col laptop:flex-row"
	>
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
