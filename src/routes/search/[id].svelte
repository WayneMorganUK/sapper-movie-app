<script>
	import MainSection from '../../components/MainSection.svelte'
	import { stores } from '@sapper/app';
	import { media_type } from '../../components/store.js'
	const { page } = stores(); 
	const { params } = $page;

	console.log(params)

  const ApiKey = process.env.SAPPER_APP_API_KEY
	const SEARCH_API = `https://api.themoviedb.org/3/search/${$media_type}?api_key=${ApiKey}&language=en-GB"&page=1&include_adult=true&query="`
	
	$: api_url = (SEARCH_API + params.id + '&page=')

</script>

{#key params.id}
	<MainSection id = 'search' {api_url}/>
{/key}