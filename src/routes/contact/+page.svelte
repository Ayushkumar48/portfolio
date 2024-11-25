<script>
	import { enhance } from '$app/forms';
	import { Button } from 'flowbite-svelte';
	import { toast } from 'svelte-sonner';
	import { Input, Textarea } from 'flowbite-svelte';
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
		<div class="flex w-full flex-col gap-1">
			<label for="name">Name:</label>
			<Input
				type="text"
				class="w-full rounded-xl phone:dark:bg-slate-700 phone:dark:placeholder-opacity-[0.5]"
				name="name"
				id="name"
				placeholder="name"
				required
			/>
		</div>
		<div class="flex w-full flex-col gap-1">
			<label for="email">Email:</label>
			<Input
				type="email"
				class="w-full rounded-xl phone:dark:bg-slate-700 phone:dark:placeholder-opacity-[0.5]"
				name="email"
				id="email"
				placeholder="email"
				required
			/>
		</div>
		<div class="flex w-full flex-col gap-1">
			<label for="message">Message:</label>
			<Textarea
				name="message"
				class="w-full rounded-xl phone:dark:bg-slate-700 phone:dark:placeholder-opacity-[0.5]"
				id="message"
				rows="4"
				placeholder="type your message..."
				required
			></Textarea>
		</div>
		<div class="flex justify-center">
			<Button color="purple" type="submit" class="duration-150">Submit</Button>
		</div>
	</form>
</div>
