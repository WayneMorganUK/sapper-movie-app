<script>
	import MovieCard from '../components/MovieCard.svelte'
	import { fade } from 'svelte/transition'
	export let movies
</script>

<section class='movie-container'>
	{#if movies.length > 0 } 
		{#each movies as movie, i}
			<MovieCard key={i} {...movie}/>
		{/each}
	{/if}
</section>

<style>

	.movie-container {
		background-color:var(--primary-colour);
		display: flex;
		flex-wrap: wrap;
		justify-content:space-around;
		max-width: 1250px;
		margin-left: auto;
		margin-right: auto;
		border-radius:15px;
	}


</style>