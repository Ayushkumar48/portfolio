<script lang="ts">
	import { motion } from 'motion-sv';
	import { cn } from '$lib/utils';

	type ElementType = 'span' | 'div' | 'p' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

	interface LineShadowTextProps {
		content: string;
		class?: string;
		shadowColor?: string;
		as?: ElementType;
	}

	let {
		content,
		class: className,
		shadowColor = 'black',
		as = 'span'
	}: LineShadowTextProps = $props();

	let MotionComponent = $derived(motion[as]);
</script>

<MotionComponent
	style={{ '--shadow-color': shadowColor }}
	class={cn('line-shadow-text relative z-0 inline-block whitespace-pre', className)}
	data-text={content}
>
	{content}
</MotionComponent>

<style>
	@keyframes line-shadow {
		0% {
			background-position: 0 0;
		}
		100% {
			background-position: 100% 100%;
		}
	}

	:global(.line-shadow-text)::after {
		content: attr(data-text);
		position: absolute;
		top: 0.04em;
		left: 0.04em;
		z-index: -10;
		background-image: linear-gradient(
			45deg,
			transparent 45%,
			var(--shadow-color) 45%,
			var(--shadow-color) 55%,
			transparent 0
		);
		background-size: 0.06em 0.06em;
		-webkit-background-clip: text;
		background-clip: text;
		-webkit-text-fill-color: transparent;
		color: transparent;
		animation: line-shadow 15s linear infinite;
	}
</style>
