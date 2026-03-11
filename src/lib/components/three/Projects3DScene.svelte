<script lang="ts">
	import { T, useTask } from '@threlte/core';
	import { Float } from '@threlte/extras';
	import * as THREE from 'three';

	type Shape = {
		pos: [number, number, number];
		rot: [number, number, number];
		size: number;
		color: string;
		speed: number;
		phase: number;
		type: 'box' | 'octa' | 'icosa' | 'dodeca' | 'torus';
	};

	const shapes: Shape[] = [
		{
			pos: [-2.8, 1.2, -0.5],
			rot: [0.3, 0.5, 0.1],
			size: 0.38,
			color: '#a3e635',
			speed: 0.5,
			phase: 0.0,
			type: 'box'
		},
		{
			pos: [2.6, 1.5, 0.3],
			rot: [0.1, 0.2, 0.4],
			size: 0.32,
			color: '#86efac',
			speed: 0.65,
			phase: 1.2,
			type: 'icosa'
		},
		{
			pos: [0.5, -2.2, 0.8],
			rot: [0.6, 0.1, 0.3],
			size: 0.3,
			color: '#d9f99d',
			speed: 0.55,
			phase: 2.1,
			type: 'octa'
		},
		{
			pos: [-1.8, -1.8, -0.4],
			rot: [0.2, 0.7, 0.1],
			size: 0.28,
			color: '#a3e635',
			speed: 0.45,
			phase: 0.8,
			type: 'dodeca'
		},
		{
			pos: [3.2, -0.6, 0.5],
			rot: [0.4, 0.3, 0.6],
			size: 0.26,
			color: '#86efac',
			speed: 0.7,
			phase: 3.0,
			type: 'box'
		},
		{
			pos: [-3.0, -0.3, 0.2],
			rot: [0.1, 0.5, 0.2],
			size: 0.24,
			color: '#d9f99d',
			speed: 0.6,
			phase: 1.5,
			type: 'icosa'
		},
		{
			pos: [1.2, 2.8, -0.6],
			rot: [0.5, 0.2, 0.4],
			size: 0.22,
			color: '#a3e635',
			speed: 0.5,
			phase: 2.6,
			type: 'octa'
		},
		{
			pos: [-1.0, 2.2, 1.0],
			rot: [0.3, 0.6, 0.1],
			size: 0.2,
			color: '#86efac',
			speed: 0.8,
			phase: 0.3,
			type: 'torus'
		},
		{
			pos: [2.0, -2.5, -0.3],
			rot: [0.2, 0.1, 0.5],
			size: 0.18,
			color: '#d9f99d',
			speed: 0.55,
			phase: 1.9,
			type: 'box'
		},
		{
			pos: [-2.5, 2.4, 0.4],
			rot: [0.4, 0.3, 0.2],
			size: 0.16,
			color: '#a3e635',
			speed: 0.62,
			phase: 3.4,
			type: 'dodeca'
		},
		{
			pos: [3.5, 1.0, -0.8],
			rot: [0.1, 0.4, 0.6],
			size: 0.15,
			color: '#86efac',
			speed: 0.48,
			phase: 0.6,
			type: 'icosa'
		},
		{
			pos: [-0.4, -3.0, 0.5],
			rot: [0.6, 0.2, 0.3],
			size: 0.17,
			color: '#d9f99d',
			speed: 0.72,
			phase: 2.3,
			type: 'octa'
		}
	];

	let t = $state(0);
	let groupRef = $state<THREE.Group | undefined>(undefined);
	let mouseX = $state(0);
	let mouseY = $state(0);

	function handleMouseMove(e: MouseEvent) {
		mouseX = (e.clientX / window.innerWidth - 0.5) * 2;
		mouseY = (e.clientY / window.innerHeight - 0.5) * 2;
	}

	useTask((delta) => {
		t += delta;
		if (!groupRef) return;
		groupRef.rotation.y += delta * 0.07;
		groupRef.rotation.x += (mouseY * 0.15 - groupRef.rotation.x) * 0.03;
		groupRef.position.x += (mouseX * 0.4 - groupRef.position.x) * 0.025;
	});
</script>

<svelte:window on:mousemove={handleMouseMove} />

<T.AmbientLight intensity={0.4} />
<T.DirectionalLight position={[5, 8, 4]} intensity={1.1} color="#d4ff00" />
<T.PointLight position={[-5, -3, -4]} intensity={0.75} color="#86efac" />
<T.PointLight position={[0, 5, 2]} intensity={0.5} color="#ffffff" />

<T.Group bind:ref={groupRef}>
	{#each shapes as shape, i (i)}
		<Float speed={shape.speed * 1.4} floatIntensity={0.5} rotationIntensity={0.4}>
			{#if shape.type === 'box'}
				<T.Mesh
					position={shape.pos}
					rotation={[
						shape.rot[0] + t * shape.speed * 0.3,
						shape.rot[1] + t * shape.speed * 0.2,
						shape.rot[2]
					]}
				>
					<T.BoxGeometry args={[shape.size, shape.size, shape.size]} />
					<T.MeshStandardMaterial
						color={shape.color}
						metalness={0.65}
						roughness={0.2}
						emissive={shape.color}
						emissiveIntensity={0.2}
					/>
				</T.Mesh>
				<T.Mesh
					position={shape.pos}
					rotation={[
						shape.rot[0] + t * shape.speed * 0.3,
						shape.rot[1] + t * shape.speed * 0.2,
						shape.rot[2]
					]}
				>
					<T.BoxGeometry args={[shape.size * 1.06, shape.size * 1.06, shape.size * 1.06]} />
					<T.MeshBasicMaterial color={shape.color} wireframe transparent opacity={0.18} />
				</T.Mesh>
			{:else if shape.type === 'icosa'}
				<T.Mesh
					position={shape.pos}
					rotation={[
						shape.rot[0] + t * shape.speed * 0.25,
						shape.rot[1] + t * shape.speed * 0.35,
						shape.rot[2]
					]}
				>
					<T.IcosahedronGeometry args={[shape.size, 1]} />
					<T.MeshStandardMaterial
						color={shape.color}
						metalness={0.7}
						roughness={0.15}
						emissive={shape.color}
						emissiveIntensity={0.25}
					/>
				</T.Mesh>
				<T.Mesh
					position={shape.pos}
					rotation={[
						shape.rot[0] + t * shape.speed * 0.25,
						shape.rot[1] + t * shape.speed * 0.35,
						shape.rot[2]
					]}
				>
					<T.IcosahedronGeometry args={[shape.size * 1.08, 1]} />
					<T.MeshBasicMaterial color={shape.color} wireframe transparent opacity={0.15} />
				</T.Mesh>
			{:else if shape.type === 'octa'}
				<T.Mesh
					position={shape.pos}
					rotation={[
						shape.rot[0] + t * shape.speed * 0.4,
						shape.rot[1],
						shape.rot[2] + t * shape.speed * 0.2
					]}
				>
					<T.OctahedronGeometry args={[shape.size, 0]} />
					<T.MeshStandardMaterial
						color={shape.color}
						metalness={0.6}
						roughness={0.25}
						emissive={shape.color}
						emissiveIntensity={0.2}
					/>
				</T.Mesh>
				<T.Mesh
					position={shape.pos}
					rotation={[
						shape.rot[0] + t * shape.speed * 0.4,
						shape.rot[1],
						shape.rot[2] + t * shape.speed * 0.2
					]}
				>
					<T.OctahedronGeometry args={[shape.size * 1.1, 0]} />
					<T.MeshBasicMaterial color={shape.color} wireframe transparent opacity={0.18} />
				</T.Mesh>
			{:else if shape.type === 'dodeca'}
				<T.Mesh
					position={shape.pos}
					rotation={[
						shape.rot[0],
						shape.rot[1] + t * shape.speed * 0.3,
						shape.rot[2] + t * shape.speed * 0.15
					]}
				>
					<T.DodecahedronGeometry args={[shape.size, 0]} />
					<T.MeshStandardMaterial
						color={shape.color}
						metalness={0.72}
						roughness={0.18}
						emissive={shape.color}
						emissiveIntensity={0.22}
					/>
				</T.Mesh>
				<T.Mesh
					position={shape.pos}
					rotation={[
						shape.rot[0],
						shape.rot[1] + t * shape.speed * 0.3,
						shape.rot[2] + t * shape.speed * 0.15
					]}
				>
					<T.DodecahedronGeometry args={[shape.size * 1.08, 0]} />
					<T.MeshBasicMaterial color={shape.color} wireframe transparent opacity={0.15} />
				</T.Mesh>
			{:else if shape.type === 'torus'}
				<T.Mesh
					position={shape.pos}
					rotation={[
						shape.rot[0] + t * shape.speed * 0.5,
						shape.rot[1] + t * shape.speed * 0.3,
						shape.rot[2]
					]}
				>
					<T.TorusGeometry args={[shape.size, shape.size * 0.35, 12, 48]} />
					<T.MeshStandardMaterial
						color={shape.color}
						metalness={0.65}
						roughness={0.2}
						emissive={shape.color}
						emissiveIntensity={0.3}
					/>
				</T.Mesh>
			{/if}
		</Float>
	{/each}

	<!-- Central decorative spinning icosahedron -->
	<Float speed={0.5} floatIntensity={0.1} rotationIntensity={0.8}>
		<T.Mesh>
			<T.IcosahedronGeometry args={[0.55, 2]} />
			<T.MeshStandardMaterial
				color="#a3e635"
				metalness={0.8}
				roughness={0.1}
				emissive="#a3e635"
				emissiveIntensity={0.3}
			/>
		</T.Mesh>
		<T.Mesh>
			<T.IcosahedronGeometry args={[0.62, 1]} />
			<T.MeshBasicMaterial color="#d9f99d" wireframe transparent opacity={0.25} />
		</T.Mesh>
	</Float>

	<!-- Sweeping orbital rings (rotation driven by t, not bind:ref) -->
	<T.Mesh rotation={[Math.PI / 2.4, 0, t * 0.15]}>
		<T.TorusGeometry args={[1.8, 0.018, 6, 160]} />
		<T.MeshBasicMaterial color="#a3e635" transparent opacity={0.2} />
	</T.Mesh>
	<T.Mesh rotation={[Math.PI / 3.5, Math.PI / 6, -t * 0.1]}>
		<T.TorusGeometry args={[2.5, 0.012, 6, 160]} />
		<T.MeshBasicMaterial color="#86efac" transparent opacity={0.15} />
	</T.Mesh>
</T.Group>
