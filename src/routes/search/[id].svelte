<script>
	import MainSection from '../../components/MainSection.svelte'
	import { stores } from '@sapper/app';
	import { media_type } from '../../components/store.js'
import Spinner from '../../components/Spinner.svelte';

	const { page } = stores(); 
  const ApiKey = process.env.SAPPER_APP_API_KEY
	const SEARCH_API = `https://api.themoviedb.org/3/search/${$media_type}?api_key=${ApiKey}&language=en-GB"&page=1&include_adult=true&query="`
	
	$: api_url = (SEARCH_API + $page.params.id + '&page=')

</script>

{#if $page.params.id}
	{#key $page}
		<MainSection id = 'search' {api_url} />
	{/key}
	{:else}
	<Spinner />
{/if}