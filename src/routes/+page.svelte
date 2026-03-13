<script lang="ts">
	import LineShadowText from '$lib/components/magic/line-shadow-text/line-shadow-text.svelte';
	import LightRays from '$lib/components/magic/light-rays/light-rays.svelte';
</script>

<div class="relative min-h-screen w-full overflow-hidden py-18">
	<LightRays count={5} blur={40} />
	<div
		class="flex min-h-screen w-full flex-col items-center justify-center px-4 py-8 sm:px-6 md:px-8 lg:px-10"
	>
		<div
			class="flex w-full max-w-4xl flex-col gap-6 rounded-xl bg-accent/80 px-4 py-6 text-accent-foreground backdrop-blur-sm sm:gap-8 sm:rounded-2xl sm:px-6 sm:py-8 md:gap-10 md:px-8"
		>
			<h2 class="text-center text-5xl leading-tight font-extrabold sm:text-7xl xl:text-9xl">
				LATENCY <LineShadowText content="SLAYER" shadowColor="var(--primary-foreground)" />
			</h2>

			<div class="w-full">
				<p class="w-4/5 text-sm leading-relaxed sm:w-3/5 sm:text-base md:w-2/5 md:text-lg">
					I build high-performance backend systems that power scalable, real-time applications. From
					APIs to databases, I focus on reliability, security, and clean architecture that holds up
					in production.
				</p>
			</div>
			<div class="flex w-full justify-end">
				<p
					class="w-4/5 text-right text-sm leading-relaxed sm:w-3/5 sm:text-base md:w-2/5 md:text-lg"
				>
					With a strong interest in system design and performance optimization, I enjoy turning
					complex ideas into simple, efficient solutions that deliver real value to users.
				</p>
			</div>
		</div>
		<div
			class="mt-6 w-full max-w-4xl rounded-xl border border-border bg-card/85 px-4 py-6 text-card-foreground shadow-lg backdrop-blur-sm sm:mt-8 sm:rounded-2xl sm:px-6 sm:py-8 md:mt-10 md:px-8"
		>
			<h3 class="text-2xl font-bold sm:text-3xl md:text-4xl">About Me</h3>
			<p class="mt-3 text-sm leading-relaxed text-muted-foreground sm:mt-4 sm:text-base md:text-lg">
				I'm Ayush Kumar, a Backend-focused Software Engineer with hands-on experience building
				scalable APIs, real-time systems, and data-driven platforms. Currently working at
				ResponseNet, I specialize in Node.js, PostgreSQL, Redis, and modern web technologies. My
				journey includes optimizing production applications for 1K+ users, reducing latency to under
				1 second, and improving performance metrics by up to 35%. I'm passionate about system
				design, clean architecture, and delivering solutions that make a real impact. When I'm not
				coding backend services, I'm exploring new technologies like Go and Rust, or building side
				projects like ConfessBay and Store It that challenge me to think differently about
				scalability and user experience.
			</p>
			<p class="mt-3 text-sm leading-relaxed text-muted-foreground sm:mt-4 sm:text-base md:text-lg">
				Throughout my career, I've had the opportunity to work across the full stack—from crafting
				responsive UIs with Next.js and SvelteKit to architecting secure backend services and
				real-time messaging systems. I graduated from VIT Bhopal with a degree in Computer Science,
				and since then, I've contributed to products that serve thousands of users daily. I believe
				in writing code that's not just functional, but maintainable, performant, and built with the
				end user in mind. Whether it's shaving off milliseconds from API response times or designing
				database schemas that scale, I'm always chasing that perfect balance between elegance and
				efficiency.
			</p>
		</div>
	</div>
</div>
