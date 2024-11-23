import { fail } from '@sveltejs/kit';

export const actions = {
	default: async ({ request }) => {
		try {
			const data = await request.formData();
			const name = data.get('name');
			const email = data.get('email');
			const message = data.get('message');

			const googleFormUrl =
				'https://docs.google.com/forms/d/e/1FAIpQLScbt-lUz_fDAROGCDUTU2HWyJjKmQOuwzan-Xq4-FpWWRnanA/formResponse';
			const googleFormData = new URLSearchParams({
				'entry.1164465672': name,
				'entry.1617541231': email,
				'entry.1764977190': message
			});

			const response = await fetch(googleFormUrl, {
				method: 'POST',
				body: googleFormData,
				headers: {
					'Content-Type': 'application/x-www-form-urlencoded'
				}
			});

			if (response.ok) {
				return { success: true };
			} else {
				console.error('Failed to submit:', response.statusText);
				return fail(500, { message: 'There was an error submitting your message.' });
			}
		} catch (error) {
			console.error('Error during submission:', error);
			return fail(500, { message: 'An unexpected error occurred.' });
		}
	}
};
