export async function load() {
	const data = [
		{
			name: 'The Movie Database - Clone',
			alt: 'tmdb-clone',
			url: 'https://tmdb-cloned.vercel.app/'
		},
		{
			name: 'Buzzy',
			alt: 'buzzy',
			url: 'https://buzzy-todo.vercel.app/'
		},

		{
			name: 'Torbin Tech Store',
			alt: 'torbin',
			url: 'https://torbin.vercel.app/'
		},
		{
			name: 'inRetro',
			alt: 'inretro',
			url: 'https://inretro.vercel.app/'
		},
		{
			name: 'PokeDen',
			alt: 'pokeden',
			url: 'https://pokeden.vercel.app/'
		},
		{
			name: 'CMA',
			alt: 'cma',
			url: 'https://cma-tau.vercel.app/'
		}
	];

	const components = [];

	for (let i = 0; i < data.length; i++) {
		components[i] = {
			src: (await import(`$lib/assets/project-images/${data[i].alt}.png`)).default,
			url: data[i].url,
			name: data[i].name
		};
	}
	return { data: components };
}
