<script>
	import { media_type, genres_list, selected } from '../components/store.js'

</script>

	<section id='genres' class='wide p-0.5'>
			{#each $genres_list[$media_type] as genre}
				<a 
					on:click="{() => $selected=genre.id}"
					class:selected="{$selected===genre.id}"
					class='genre'
					href={`genre/${genre.id}`} 
					key=${genre.id}>{genre.name}
				</a>
			{/each}
	</section>


<style>
	.selected {
    background-color: var(--selected);
		cursor: default;
  }

	
	/* .genres {
		display: flex;
		overflow-y:hidden;
		justify-content: center;
		height: 30px;
		background-color: var(--primary-colour);
		max-width: 1250px;
		margin: 5px auto;
		padding: 2px;
		font-size: 0.7em;
		border-radius: 15px;
		align-items:center;
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
		flex-wrap: nowrap;
		justify-content: center;
		white-space: nowrap;
  } */



	/* .genre:hover:not(.selected) {
    color: black;
    background-color: var(--selected);
    cursor: pointer;
  } */
	/* @media only screen and (max-width: 600px) {

  }
	@media only screen and (max-width: 600px) {
		.genres {
			border-radius: 0;
		}
	} */
</style>
