<script lang="ts">
	import { T, useTask } from '@threlte/core';
	import { Float } from '@threlte/extras';
	import * as THREE from 'three';

	type Node = {
		pos: [number, number, number];
		r: number;
		color: string;
		speed: number;
		phase: number;
	};

	type Edge = {
		from: [number, number, number];
		to: [number, number, number];
		color: string;
	};

	const nodes: Node[] = [
		{ pos: [0, 0, 0], r: 0.22, color: '#a3e635', speed: 0.4, phase: 0 },
		{ pos: [2.5, 1.2, -0.5], r: 0.15, color: '#86efac', speed: 0.6, phase: 1.0 },
		{ pos: [-2.2, 0.8, 0.3], r: 0.17, color: '#d9f99d', speed: 0.5, phase: 2.1 },
		{ pos: [1.0, -2.0, 0.8], r: 0.13, color: '#a3e635', speed: 0.7, phase: 0.7 },
		{ pos: [-1.5, -1.8, -0.6], r: 0.14, color: '#86efac', speed: 0.45, phase: 3.2 },
		{ pos: [0.5, 2.5, 0.4], r: 0.12, color: '#d9f99d', speed: 0.65, phase: 1.8 },
		{ pos: [3.0, -0.5, 0.2], r: 0.11, color: '#a3e635', speed: 0.55, phase: 2.5 },
		{ pos: [-0.8, 2.0, -1.2], r: 0.1, color: '#86efac', speed: 0.5, phase: 0.4 },
		{ pos: [-3.0, -0.3, 0.5], r: 0.13, color: '#d9f99d', speed: 0.6, phase: 1.2 },
		{ pos: [1.8, 2.2, -0.8], r: 0.09, color: '#a3e635', speed: 0.7, phase: 2.9 }
	];

	const edges: Edge[] = [
		{ from: nodes[0].pos, to: nodes[1].pos, color: '#a3e635' },
		{ from: nodes[0].pos, to: nodes[2].pos, color: '#86efac' },
		{ from: nodes[0].pos, to: nodes[3].pos, color: '#d9f99d' },
		{ from: nodes[0].pos, to: nodes[4].pos, color: '#a3e635' },
		{ from: nodes[0].pos, to: nodes[5].pos, color: '#86efac' },
		{ from: nodes[1].pos, to: nodes[6].pos, color: '#d9f99d' },
		{ from: nodes[1].pos, to: nodes[9].pos, color: '#a3e635' },
		{ from: nodes[2].pos, to: nodes[8].pos, color: '#86efac' },
		{ from: nodes[2].pos, to: nodes[7].pos, color: '#d9f99d' },
		{ from: nodes[3].pos, to: nodes[6].pos, color: '#a3e635' },
		{ from: nodes[4].pos, to: nodes[8].pos, color: '#86efac' },
		{ from: nodes[5].pos, to: nodes[7].pos, color: '#d9f99d' },
		{ from: nodes[5].pos, to: nodes[9].pos, color: '#a3e635' }
	];

	function makeEdgeProps(from: [number, number, number], to: [number, number, number]) {
		const start = new THREE.Vector3(...from);
		const end = new THREE.Vector3(...to);
		const mid = new THREE.Vector3().addVectors(start, end).multiplyScalar(0.5);
		const length = start.distanceTo(end);
		const dir = new THREE.Vector3().subVectors(end, start).normalize();
		const quaternion = new THREE.Quaternion();
		quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), dir);
		const euler = new THREE.Euler().setFromQuaternion(quaternion);
		return { mid, length, euler };
	}

	let groupRef = $state<THREE.Group | undefined>(undefined);
	let t = $state(0);

	useTask((delta) => {
		t += delta;
		if (!groupRef) return;
		groupRef.rotation.y += delta * 0.12;
		groupRef.rotation.x = Math.sin(t * 0.2) * 0.08;
	});
</script>

<T.AmbientLight intensity={0.5} />
<T.DirectionalLight position={[4, 6, 4]} intensity={1.0} color="#d4ff00" />
<T.PointLight position={[-4, -2, -4]} intensity={0.7} color="#86efac" />

<T.Group bind:ref={groupRef}>
	<!-- Edges / connections -->
	{#each edges as edge, i (i)}
		{@const { mid, length, euler } = makeEdgeProps(edge.from, edge.to)}
		<T.Mesh position={[mid.x, mid.y, mid.z]} rotation={[euler.x, euler.y, euler.z]}>
			<T.CylinderGeometry args={[0.012, 0.012, length, 6]} />
			<T.MeshBasicMaterial color={edge.color} transparent opacity={0.25} />
		</T.Mesh>
	{/each}

	<!-- Nodes -->
	{#each nodes as node, i (i)}
		<Float speed={node.speed * 1.5} floatIntensity={0.35} rotationIntensity={0.2}>
			<T.Mesh position={node.pos}>
				<T.SphereGeometry args={[node.r, 24, 24]} />
				<T.MeshStandardMaterial
					color={node.color}
					metalness={0.7}
					roughness={0.15}
					emissive={node.color}
					emissiveIntensity={0.35}
				/>
			</T.Mesh>
			<!-- Pulse ring around each node -->
			<T.Mesh position={node.pos}>
				<T.TorusGeometry args={[node.r * 1.8, 0.008, 6, 48]} />
				<T.MeshBasicMaterial color={node.color} transparent opacity={0.2} />
			</T.Mesh>
		</Float>
	{/each}

	<!-- Central hub glow ring -->
	<T.Mesh rotation={[Math.PI / 2, 0, 0]}>
		<T.TorusGeometry args={[0.5, 0.03, 8, 80]} />
		<T.MeshBasicMaterial color="#a3e635" transparent opacity={0.5} />
	</T.Mesh>
	<T.Mesh rotation={[Math.PI / 3, 0, Math.PI / 4]}>
		<T.TorusGeometry args={[0.7, 0.018, 8, 80]} />
		<T.MeshBasicMaterial color="#d9f99d" transparent opacity={0.3} />
	</T.Mesh>
</T.Group>
