<!-- this is the homepage -->

<script>
	import { onMount } from 'svelte';

	const url = 'https://weatherapi-com.p.rapidapi.com/search.json?q=Buenos%20Aires';
	const options = {
		method: 'GET',
		headers: {
			'x-rapidapi-key': '1f7fbaad6dmsh09e368f3cd3564dp188a58jsnc4128f36ad2f',
			'x-rapidapi-host': 'weatherapi-com.p.rapidapi.com'
		}
	};

	onMount(async () => {
		try {
			const response = await fetch(url, options);
			if (!response.ok) {
				throw new Error('Network response was not ok');
			}
			const result = await response.json();
			console.log({result});

		} catch (error) {
			console.error('Fetch error:', error);
		}
	});
</script>

<h1>Lo que está renderizando</h1>
<p>Visit <a href="https://svelte.dev/docs/kit">svelte.dev/docs/kit</a> to read the documentation</p>

<style>
	h1 {
		font-family:
			system-ui,
			-apple-system,
			BlinkMacSystemFont,
			'Segoe UI',
			Roboto,
			Oxygen,
			Ubuntu,
			Cantarell,
			'Open Sans',
			'Helvetica Neue',
			sans-serif;
	}
</style>
