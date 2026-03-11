<script lang="ts">
	import { T, useTask } from '@threlte/core';
	import { Float } from '@threlte/extras';
	import * as THREE from 'three';

	let mouseX = $state(0);
	let mouseY = $state(0);
	let groupRef = $state<THREE.Group | undefined>(undefined);

	function handleMouseMove(e: MouseEvent) {
		mouseX = (e.clientX / window.innerWidth - 0.5) * 2;
		mouseY = (e.clientY / window.innerHeight - 0.5) * 2;
	}

	useTask((delta) => {
		if (!groupRef) return;
		groupRef.rotation.y += delta * 0.15;
		groupRef.rotation.x += delta * 0.08;
		groupRef.position.x += (mouseX * 1.5 - groupRef.position.x) * 0.03;
		groupRef.position.y += (-mouseY * 1.0 - groupRef.position.y) * 0.03;
	});

	const satellites = [
		{ pos: [2.5, 1.0, 0.5] as [number, number, number], r: 0.14, color: '#a3e635' },
		{ pos: [-2.2, -0.8, 1.2] as [number, number, number], r: 0.1, color: '#86efac' },
		{ pos: [0.8, 2.4, -1.0] as [number, number, number], r: 0.12, color: '#d9f99d' },
		{ pos: [-1.5, 1.8, 1.5] as [number, number, number], r: 0.08, color: '#a3e635' },
		{ pos: [1.8, -2.0, -0.5] as [number, number, number], r: 0.11, color: '#86efac' }
	];
</script>

<svelte:window on:mousemove={handleMouseMove} />

<T.AmbientLight intensity={0.4} />
<T.DirectionalLight position={[5, 8, 5]} intensity={1.2} color="#d4ff00" />
<T.PointLight position={[-5, -3, -5]} intensity={0.8} color="#86efac" />
<T.PointLight position={[3, 5, -3]} intensity={0.6} color="#ffffff" />

<T.Group bind:ref={groupRef}>
	<!-- Central torus knot -->
	<Float speed={1.2} floatIntensity={0.4} rotationIntensity={0.3}>
		<T.Mesh castShadow>
			<T.TorusKnotGeometry args={[1.1, 0.35, 200, 24, 2, 3]} />
			<T.MeshStandardMaterial color="#a3e635" metalness={0.6} roughness={0.2} />
		</T.Mesh>
	</Float>

	<!-- Wireframe overlay -->
	<Float speed={0.8} floatIntensity={0.2} rotationIntensity={0.5}>
		<T.Mesh>
			<T.TorusKnotGeometry args={[1.15, 0.37, 80, 12, 2, 3]} />
			<T.MeshBasicMaterial color="#d9f99d" wireframe={true} transparent opacity={0.25} />
		</T.Mesh>
	</Float>

	<!-- Orbiting ring 1 -->
	<T.Mesh rotation={[Math.PI / 3, 0, Math.PI / 6]}>
		<T.TorusGeometry args={[2.2, 0.025, 8, 120]} />
		<T.MeshBasicMaterial color="#a3e635" transparent opacity={0.4} />
	</T.Mesh>

	<!-- Orbiting ring 2 -->
	<T.Mesh rotation={[-Math.PI / 4, Math.PI / 5, 0]}>
		<T.TorusGeometry args={[2.6, 0.018, 8, 120]} />
		<T.MeshBasicMaterial color="#86efac" transparent opacity={0.3} />
	</T.Mesh>

	<!-- Orbiting ring 3 -->
	<T.Mesh rotation={[0, Math.PI / 3, Math.PI / 2]}>
		<T.TorusGeometry args={[3.0, 0.012, 8, 120]} />
		<T.MeshBasicMaterial color="#d9f99d" transparent opacity={0.2} />
	</T.Mesh>

	<!-- Small floating satellite spheres -->
	{#each satellites as sphere, i (i)}
		<Float speed={1.5} floatIntensity={0.6}>
			<T.Mesh position={sphere.pos}>
				<T.SphereGeometry args={[sphere.r, 16, 16]} />
				<T.MeshStandardMaterial
					color={sphere.color}
					metalness={0.8}
					roughness={0.1}
					emissive={sphere.color}
					emissiveIntensity={0.3}
				/>
			</T.Mesh>
		</Float>
	{/each}
</T.Group>
