<script>
  import { onMount } from 'svelte'
	import { media_type } from '../components/store.js'
	import { fade } from 'svelte/transition'

  const ApiKey = process.env.SAPPER_APP_API_KEY
	const GENRES_API = `https://api.themoviedb.org/3/genre/${$media_type}/list?api_key=${ApiKey}&language-en-GB`

	let genres = []
	let selected=''
		
	onMount(async () => {
		genres = await fetch(GENRES_API)
		.then(x => x.json())
		.then(x => x.genres)
	})

</script>

<div class='sticky'>
		{#each genres as genre}
			<a 
				on:click="{() => selected=genre.id}"
				transition:fade
				class:selected="{selected===genre.id}"
				class='genre' 
				href={`genre/${genre.id}`} 
				key=${genre.id}>{genre.name}
			</a>
		{/each}
</div>

<style>
	.sticky {
		display: flex;
		position: absolute;
	}
  .genre {
		background-color: var(--secondary-colour);
		border-radius: 30px;
		border: 2px solid var(--border-colour);
		margin: 2px;
		text-decoration: none;
		font-weight: 600;
		padding-bottom: 2px;
		padding-left: 8px;
		padding-right: 8px;
		padding-top: 1px;
		display: flex;
		justify-content: center;
  }  
  .genre:hover {
		background-color: rgb(155, 89, 218);
		color: black;
	}

	.selected {
    font-weight: 900;
    background-color: var(--selected);
    scale: 1.1;
  }

</style>
