<script lang='ts'>
	import MainSection from '../components/MainSection.svelte'
	import { media_type, ApiKey, selected } from '../components/store.js'
	$selected = ''
	$: api_url = new URL(`https://api.themoviedb.org/3/trending/${$media_type}/week?api_key=${$ApiKey}&language=en-GB` + '&page=')

</script>

{#key $media_type}
	<MainSection api_url={api_url}/>
{/key}