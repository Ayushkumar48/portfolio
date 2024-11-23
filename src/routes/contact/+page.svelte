<script>
	import { enhance } from '$app/forms';
	import { Button } from 'flowbite-svelte';
	import { toast } from 'svelte-sonner';
	let { form } = $props();
	$effect(() => {
		if (form?.success === true) {
			toast.success('Message sent successfully!!');
		} else if (form?.success === false) {
			toast.error('Error occured while sending message!!!');
		}
	});
</script>

<div class="flex items-center justify-center">
	<form class="flex w-[35rem] flex-col gap-6" method="POST" use:enhance>
		<div class="w-full">
			<label for="name">Name:</label>
			<input
				type="text"
				class="w-full rounded-xl dark:bg-slate-700 dark:placeholder-gray-50 dark:placeholder-opacity-[0.5]"
				name="name"
				placeholder="name"
				required
			/>
		</div>
		<div class="w-full">
			<label for="email">Email:</label>
			<input
				type="email"
				class="w-full rounded-xl dark:bg-slate-700 dark:placeholder-gray-50 dark:placeholder-opacity-[0.5]"
				name="email"
				placeholder="email"
				required
			/>
		</div>
		<div class="w-full">
			<label for="message">Message:</label>
			<textarea
				name="message"
				class="w-full rounded-xl dark:bg-slate-700 dark:placeholder-gray-50 dark:placeholder-opacity-[0.5]"
				id="message"
				rows="4"
				placeholder="type your message..."
				required
			></textarea>
		</div>
		<div class="flex justify-center">
			<Button color="purple" type="submit">Submit</Button>
		</div>
	</form>
</div>
