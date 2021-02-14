<script>
	import { onMount } from 'svelte';
	import MainSection from '../components/MainSection.svelte'
	import { media_type } from '../components/store.js'

  const ApiKey = process.env.SAPPER_APP_API_KEY

	$: FEATURED_API = `https://api.themoviedb.org/3/trending/${$media_type}/week?api_key=${ApiKey}&language=en-GB`
	
	$: api_url = (FEATURED_API + '&page=')

</script>

{#key $media_type}
	<MainSection id='home' {api_url}/>
{/key}