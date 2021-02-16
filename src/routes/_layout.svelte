<script>
	import Header from '../components/Header.svelte'
	import Genres from '../components/Genres.svelte'
	import { media_type } from '../components/store'
	console.log('Layout page')
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
		display: flex;
		flex-wrap: wrap;
		font-size: 0.7em;
		border-radius: 15px;
		align-items:center;
		justify-content: center;
	}
</style>
