<script lang="ts">
	import * as simpleIcons from 'simple-icons';

	interface Props {
		name: string;
		color?: string;
		class?: string;
		size?: string;
	}

	let { name, color, class: className, size = 'h-6 w-6' }: Props = $props();

	function getIcon(iconName: string) {
		const key = `si${iconName.charAt(0).toUpperCase()}${iconName.slice(1)}`;
		return simpleIcons[key as keyof typeof simpleIcons];
	}

	// Convert Tailwind size classes to pixel values
	const sizeMap: Record<string, string> = {
		'h-4 w-4': '16px',
		'h-5 w-5': '20px',
		'h-6 w-6': '24px',
		'h-7 w-7': '28px',
		'h-8 w-8': '32px',
		'h-10 w-10': '40px',
		'h-12 w-12': '48px',
		'h-16 w-16': '64px',
		'h-20 w-20': '80px'
	};

	const pixelSize = $derived(sizeMap[size] || '24px');
	const icon = $derived(getIcon(name));
</script>

{#if icon}
	<svg
		role="img"
		viewBox="0 0 24 24"
		style="width: {pixelSize}; height: {pixelSize};"
		class={className || ''}
		fill={color || 'currentColor'}
		aria-label={icon.title}
	>
		<title>{icon.title}</title>
		<path d={icon.path} />
	</svg>
{/if}
