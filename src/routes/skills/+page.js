// Import all skill icons
import cpp from '$lib/assets/skill-icons/c++.png';
import javascript from '$lib/assets/skill-icons/javascript.png';
import sveltekit from '$lib/assets/skill-icons/sveltekit.png';
import golang from '$lib/assets/skill-icons/golang.svg';
import python from '$lib/assets/skill-icons/python.png';
import nodejs from '$lib/assets/skill-icons/nodejs.png';
import expressjs from '$lib/assets/skill-icons/expressjs.svg';
import git from '$lib/assets/skill-icons/git.png';
import sql from '$lib/assets/skill-icons/sql.png';
import mongodb from '$lib/assets/skill-icons/mongodb.png';
import restapi from '$lib/assets/skill-icons/restapi.svg';
import ubuntu from '$lib/assets/skill-icons/ubuntu.svg';
import tailwind from '$lib/assets/skill-icons/tailwind.png';
import flowbite from '$lib/assets/skill-icons/flowbite.png';
import shadcn from '$lib/assets/skill-icons/shadcn.svg';
import aws from '$lib/assets/skill-icons/aws.svg';
import azure from '$lib/assets/skill-icons/azure.svg';
import cn from '$lib/assets/skill-icons/cn.svg';
import dsa from '$lib/assets/skill-icons/dsa.svg';
import oops from '$lib/assets/skill-icons/oops.svg';

// Map imports to their names
const skillIcons = {
	cpp: { src: cpp, name: 'C++' },
	javascript: { src: javascript, name: 'JavaScript' },
	sveltekit: { src: sveltekit, name: 'SvelteKit' },
	golang: { src: golang, name: 'GoLang' },
	python: { src: python, name: 'Python' },
	nodejs: { src: nodejs, name: 'NodeJS' },
	expressjs: { src: expressjs, name: 'ExpressJS' },
	git: { src: git, name: 'Git' },
	sql: { src: sql, name: 'SQL' },
	mongodb: { src: mongodb, name: 'MongoDB' },
	restapi: { src: restapi, name: 'REST API' },
	ubuntu: { src: ubuntu, name: 'Ubuntu' },
	tailwind: { src: tailwind, name: 'Tailwind CSS' },
	flowbite: { src: flowbite, name: 'Flowbite' },
	shadcn: { src: shadcn, name: 'ShadCN' },
	aws: { src: aws, name: 'AWS' },
	azure: { src: azure, name: 'Azure' },
	cn: { src: cn, name: 'Computer Networks' },
	dsa: { src: dsa, name: 'DSA' },
	oops: { src: oops, name: 'OOPS' }
};

export function load() {
	return {
		skills: Object.entries(skillIcons).map(([key, value]) => ({
			id: key,
			src: value.src,
			name: value.name
		}))
	};
}
