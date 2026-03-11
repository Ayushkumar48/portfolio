<script lang="ts">
	import { T, useTask } from '@threlte/core';
	import { Float } from '@threlte/extras';
	import * as THREE from 'three';

	type OrbitItem = {
		angle: number;
		radius: number;
		yOffset: number;
		size: number;
		color: string;
		speed: number;
		tilt: number;
	};

	const orbitItems: OrbitItem[] = [
		{ angle: 0, color: '#a3e635', radius: 2.2, yOffset: 0.0, size: 0.22, speed: 0.5, tilt: 0.2 },
		{
			angle: (Math.PI * 2) / 7,
			color: '#86efac',
			radius: 2.0,
			yOffset: 0.6,
			size: 0.18,
			speed: 0.6,
			tilt: 0.4
		},
		{
			angle: (Math.PI * 4) / 7,
			color: '#d9f99d',
			radius: 2.4,
			yOffset: -0.5,
			size: 0.2,
			speed: 0.45,
			tilt: 0.1
		},
		{
			angle: (Math.PI * 6) / 7,
			color: '#a3e635',
			radius: 2.1,
			yOffset: 0.8,
			size: 0.16,
			speed: 0.7,
			tilt: 0.5
		},
		{
			angle: (Math.PI * 8) / 7,
			color: '#86efac',
			radius: 2.5,
			yOffset: -0.3,
			size: 0.19,
			speed: 0.55,
			tilt: 0.3
		},
		{
			angle: (Math.PI * 10) / 7,
			color: '#d9f99d',
			radius: 2.2,
			yOffset: 0.4,
			size: 0.17,
			speed: 0.65,
			tilt: 0.6
		},
		{
			angle: (Math.PI * 12) / 7,
			color: '#a3e635',
			radius: 2.3,
			yOffset: -0.7,
			size: 0.21,
			speed: 0.5,
			tilt: 0.2
		}
	];

	const outerOrbit: OrbitItem[] = [
		{
			angle: Math.PI / 8,
			color: '#86efac',
			radius: 3.5,
			yOffset: 0.3,
			size: 0.13,
			speed: 0.3,
			tilt: 0.8
		},
		{
			angle: (Math.PI * 3) / 8,
			color: '#d9f99d',
			radius: 3.2,
			yOffset: -0.6,
			size: 0.11,
			speed: 0.35,
			tilt: 0.3
		},
		{
			angle: (Math.PI * 5) / 8,
			color: '#a3e635',
			radius: 3.6,
			yOffset: 0.7,
			size: 0.14,
			speed: 0.28,
			tilt: 0.5
		},
		{
			angle: (Math.PI * 7) / 8,
			color: '#86efac',
			radius: 3.3,
			yOffset: -0.2,
			size: 0.1,
			speed: 0.4,
			tilt: 0.7
		},
		{
			angle: (Math.PI * 9) / 8,
			color: '#d9f99d',
			radius: 3.5,
			yOffset: 0.5,
			size: 0.12,
			speed: 0.32,
			tilt: 0.4
		},
		{
			angle: (Math.PI * 11) / 8,
			color: '#a3e635',
			radius: 3.1,
			yOffset: -0.8,
			size: 0.13,
			speed: 0.38,
			tilt: 0.6
		},
		{
			angle: (Math.PI * 13) / 8,
			color: '#86efac',
			radius: 3.4,
			yOffset: 0.1,
			size: 0.09,
			speed: 0.33,
			tilt: 0.2
		},
		{
			angle: (Math.PI * 15) / 8,
			color: '#d9f99d',
			radius: 3.2,
			yOffset: -0.4,
			size: 0.11,
			speed: 0.42,
			tilt: 0.9
		}
	];

	let t = $state(0);
	let groupRef = $state<THREE.Group | undefined>(undefined);

	useTask((delta) => {
		t += delta;
		if (groupRef) {
			groupRef.rotation.y += delta * 0.06;
		}
	});

	function orbitPos(item: OrbitItem, time: number): [number, number, number] {
		const a = item.angle + time * item.speed;
		return [
			Math.cos(a) * item.radius,
			item.yOffset + Math.sin(time * item.speed * 0.5 + item.tilt) * 0.3,
			Math.sin(a) * item.radius
		];
	}
</script>

<T.AmbientLight intensity={0.45} />
<T.DirectionalLight position={[5, 8, 4]} intensity={1.1} color="#d4ff00" />
<T.PointLight position={[-4, -3, -4]} intensity={0.7} color="#86efac" />
<T.PointLight position={[0, 4, 0]} intensity={0.5} color="#ffffff" />

<T.Group bind:ref={groupRef}>
	<!-- Central core — double icosahedron -->
	<Float speed={0.8} floatIntensity={0.15} rotationIntensity={0.6}>
		<T.Mesh>
			<T.IcosahedronGeometry args={[0.7, 1]} />
			<T.MeshStandardMaterial
				color="#a3e635"
				metalness={0.75}
				roughness={0.15}
				emissive="#a3e635"
				emissiveIntensity={0.2}
			/>
		</T.Mesh>
		<T.Mesh>
			<T.IcosahedronGeometry args={[0.75, 1]} />
			<T.MeshBasicMaterial color="#d9f99d" wireframe transparent opacity={0.3} />
		</T.Mesh>
	</Float>

	<!-- Orbital path rings -->
	<T.Mesh rotation={[Math.PI / 2, 0, 0]}>
		<T.TorusGeometry args={[2.25, 0.012, 6, 160]} />
		<T.MeshBasicMaterial color="#a3e635" transparent opacity={0.15} />
	</T.Mesh>
	<T.Mesh rotation={[Math.PI / 2, 0, 0]}>
		<T.TorusGeometry args={[3.35, 0.008, 6, 200]} />
		<T.MeshBasicMaterial color="#86efac" transparent opacity={0.1} />
	</T.Mesh>

	<!-- Inner orbit icosahedra -->
	{#each orbitItems as item, i (i)}
		{@const pos = orbitPos(item, t)}
		<T.Mesh position={pos}>
			<T.IcosahedronGeometry args={[item.size, 0]} />
			<T.MeshStandardMaterial
				color={item.color}
				metalness={0.6}
				roughness={0.2}
				emissive={item.color}
				emissiveIntensity={0.25}
			/>
		</T.Mesh>
		<!-- Small glow dot -->
		<T.Mesh position={pos}>
			<T.SphereGeometry args={[item.size * 0.35, 8, 8]} />
			<T.MeshBasicMaterial color="#ffffff" transparent opacity={0.4} />
		</T.Mesh>
	{/each}

	<!-- Outer orbit octahedra -->
	{#each outerOrbit as item, i (i)}
		{@const pos = orbitPos(item, t)}
		<T.Mesh position={pos}>
			<T.OctahedronGeometry args={[item.size, 0]} />
			<T.MeshStandardMaterial
				color={item.color}
				metalness={0.5}
				roughness={0.3}
				emissive={item.color}
				emissiveIntensity={0.2}
			/>
		</T.Mesh>
	{/each}

	<!-- Equatorial accent rings -->
	<T.Mesh rotation={[Math.PI * 0.42, 0, Math.PI * 0.15]}>
		<T.TorusGeometry args={[1.4, 0.02, 8, 100]} />
		<T.MeshBasicMaterial color="#d9f99d" transparent opacity={0.35} />
	</T.Mesh>
	<T.Mesh rotation={[-Math.PI * 0.35, Math.PI * 0.2, 0]}>
		<T.TorusGeometry args={[1.6, 0.014, 8, 100]} />
		<T.MeshBasicMaterial color="#a3e635" transparent opacity={0.2} />
	</T.Mesh>
</T.Group>
