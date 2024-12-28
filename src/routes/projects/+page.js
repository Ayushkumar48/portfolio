export async function load() {
	const data = [
		{
			name: 'inRetro',
			alt: 'inretro',
			url: 'https://inretro.vercel.app/'
		},
		{
			name: 'CMA',
			alt: 'cma',
			url: 'https://cma-tau.vercel.app/'
		},
		{
			name: 'Torbin Tech Store',
			alt: 'torbin',
			url: 'https://torbin.vercel.app/'
		},
		{
			name: 'PokeDen',
			alt: 'pokeden',
			url: 'https://pokeden.vercel.app/'
		},
		{
			name: 'Tic Tac Toe',
			alt: 'tictactoe',
			url: 'https://xotictactoe.vercel.app/'
		},
		{
			name: 'Big Trivia',
			alt: 'bigtrivia',
			url: 'https://bigtrivia.vercel.app/'
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
