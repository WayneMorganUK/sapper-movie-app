<script>
	import { onMount } from 'svelte';
	import MainSection from '../components/MainSection.svelte'
	import { media_type, ApiKey, selected } from '../components/store.js'
	$selected = ''
	$: api_url = (`https://api.themoviedb.org/3/trending/${$media_type}/week?api_key=${$ApiKey}&language=en-GB` + '&page=')

</script>

{#key $media_type}
	<MainSection id='home' {api_url}/>
{/key}