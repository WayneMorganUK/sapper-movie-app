<script context="module">
  const ApiKey = process.env.SAPPER_APP_API_KEY
	const GENRES_MOVIE_API = `https://api.themoviedb.org/3/genre/movie/list?api_key=${ApiKey}&language-en-GB`
	const GENRES_TV_API = `https://api.themoviedb.org/3/genre/tv/list?api_key=${ApiKey}&language-en-GB`

  export async function preload() {
		const genres={}
    const res_mov = await this.fetch(GENRES_MOVIE_API)
		const res_mov_json = await res_mov.json()
		genres.movie = await res_mov_json.genres
		const res_tv = await this.fetch(GENRES_TV_API)
		const res_tv_json = await res_tv.json()
		genres.tv = await res_tv_json.genres
		
		return { genres }
	}
	
</script>

<script>
	export let genres ={}

	import Header from '../components/Header.svelte'
	import Genres from '../components/Genres.svelte'
	import { media_type } from '../components/store'
	import { genres_list } from '../components/store'
	$genres_list = genres

</script>


<svelte:head>
	<link href='https://fonts.googleapis.com/css2?family=Source+Sans+Pro:ital,wght@0,200;0,300;0,400;0,600;0,700;0,900;1,200;1,300;1,400;1,600;1,700;1,900&display=swap' rel="stylesheet">
	<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
	<title>TMDB on Sapper</title>
</svelte:head>

<main>
	<Header />
	<div class='genres'>
		{#key $media_type}
			<Genres />
		{/key}
	</div>
	<slot></slot>
</main>

<style>
	main {
		overflow-y:hidden;
	}

	.genres{
		height: 30px;
		background-color: var(--primary-colour);
		max-width: 1250px;
		margin: 5px auto;
		padding: 2px;
		font-size: 0.7em;
		border-radius: 15px;
		align-items:center;
		justify-content: center;
	}
	@media only screen and (max-width: 600px) {
  .genres {
    border-radius: 0;
  }
	}
</style>
