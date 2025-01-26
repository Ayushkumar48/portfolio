<script>
	import photo from '$lib/assets/minecraftboy.webp';
</script>

<svelte:head>
	<title>Ayush Kumar - About Me</title>
</svelte:head>

<div
	class="rounded-lg text-justify text-lg font-light shadow-md phone:-mx-12 phone:-mt-20 phone:mb-0 phone:scale-[0.8] phone:bg-white phone:px-8 phone:py-10 tablet:mx-10 tablet:mb-40 tablet:mt-0 tablet:translate-y-20 tablet:scale-110 tablet:px-12 laptop:mx-20 laptop:mb-60 laptop:py-14 laptop:pl-16 laptop:pr-20 dark:text-[#b5bbc4] phone:dark:bg-slate-800"
>
	<img src={photo} alt="boy" class="h-28 w-auto scale-90 rounded-full shadow-md" />
	<br />
	<p>
		Hello, I'm <span class="text-2xl font-bold">Ayush Kumar</span>, a final-year Computer Science
		student at Vellore Institute of Technology, Bhopal. I am passionate about leveraging technology
		to solve real-world problems and creating impactful solutions through innovative development
		practices.
	</p>
	<br />
	<p>
		With hands-on experience in full-stack development, I have worked on a variety of projects that
		highlight my proficiency in SvelteKit, Node.js, MongoDB, and cloud platforms like AWS and Azure.
		Projects such as "CMA" (an interactive car management system) and "Torbin Tech Store" (an online
		tech store) showcase my ability to integrate backend systems with user-friendly front-end
		frameworks. I focus on building solutions that are efficient, secure, and scalable, ensuring
		smooth user interactions and enhanced system performance.
	</p>
	<br />
	<p>
		During my internship at SynapseIndia, I worked on machine learning model development, where I
		collaborated with a team to improve model performance and streamline processes. This experience
		reinforced my technical expertise and strengthened my ability to work effectively in a team
		environment.
	</p>
	<br />
	<p>
		I’ve also developed strong problem-solving skills, particularly in data structures and
		algorithms, having solved over 230 problems on LeetCode. My participation in hackathons has
		further refined my ability to deliver practical solutions under time constraints, enhancing my
		quick-thinking and adaptability.
	</p>
	<br />
	<p>
		Outside of coding, I’m a sports enthusiast, playing badminton and table tennis to stay active.
		I’m also passionate about exploring the latest technology trends, contributing to open-source
		projects, and participating in tech competitions to challenge and grow my skills.
	</p>
	<br />
	<p>
		Whether I’m developing an interactive car management system or designing a community platform
		for Pokémon enthusiasts, I strive to create solutions that are efficient, scalable, and
		user-friendly. If you’re looking for a developer who combines technical expertise with a
		creative mindset,
	</p>
	<p>I’d love to <a href="/contact" class="text-blue-700 underline">connect!</a></p>
</div>
