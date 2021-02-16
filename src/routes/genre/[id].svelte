<script>
	import MainSection from '../../components/MainSection.svelte'
	import { media_type } from '../../components/store.js'
  import { stores } from '@sapper/app'

  const { page } = stores();
  const ApiKey = process.env.SAPPER_APP_API_KEY
	$: MOVIE_GENRE_API = `https://api.themoviedb.org/3/discover/${$media_type}?api_key=${ApiKey}&with_genres=`

	// ?$: api_url = ()


</script>
	{#key $page.params.id}
		<MainSection id = 'genres' api_url={MOVIE_GENRE_API + $page.params.id + '&page='} />
	{/key}


