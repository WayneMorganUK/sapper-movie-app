<script context="module" lang="ts">
  const ApiKey: string = process.env.SAPPER_APP_API_KEY
	const GENRES_MOVIE_API = new URL (`https://api.themoviedb.org/3/genre/movie/list?api_key=${ApiKey}&language-en-GB`)
	const GENRES_TV_API = new URL (`https://api.themoviedb.org/3/genre/tv/list?api_key=${ApiKey}&language-en-GB`)

	type Media = {
		genres:[Genre]
	}

	type MediaPlatform = "movie" | "tv";

	type Genre = {
		id: number;
		name: string;
	}

	type Genres = {
		[Key in MediaPlatform]: Genre[];
	}
	const genre:Genres = {
  	movie: [],
  	tv: []
	}

  export async function preload() {
    const res_mov:Response = await this.fetch(GENRES_MOVIE_API)
	  const res_mov_json:Media = await res_mov.json()
		genre.movie = res_mov_json.genres

		const res_tv:Response = await this.fetch(GENRES_TV_API)
		const res_tv_json:Media = await res_tv.json()
		genre.tv = res_tv_json.genres
		
		return { genre }

	}
	
</script>

<script lang="ts">
	export let genre:Genres = {
  	movie: [],
  	tv: []
	}

	import Header from '../components/Header.svelte'
	import { genres_list } from '../components/store'

	$genres_list= genre

</script>


<svelte:head>
	<link href='https://fonts.googleapis.com/css2?family=Source+Sans+Pro:ital,wght@0,200;0,300;0,400;0,600;0,700;0,900;1,200;1,300;1,400;1,600;1,700;1,900&display=swap' rel="stylesheet">
	<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
	<title>TMDB on Sapper</title>
</svelte:head>

<main class='overflow-y-hidden'>
	<Header />
	<section class= 'max-w-7xl mx-auto' >
		<slot></slot>
	</section>
</main>

