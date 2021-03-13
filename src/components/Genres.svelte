<script>
	import { media_type, genres_list, selected } from '../components/store.js'

</script>

	<section id='genres' class='max-w-7xl mx-auto p-0.5'>
		<div class='bg-primary flex overflow-y-hidden h-8 max-w-7xl mx-auto p-0.5 text-xs items-center xl:rounded-full'>
			{#each $genres_list[$media_type] as genre}
				<a 
					on:click="{() => $selected=genre.id}"
					class:selected="{$selected===genre.id}"
					class='bg-secondary flex flex-nowrap justify-center border-border rounded-full border-2 no-underline font-semibold px-1 py-0.5 m-0.5 whitespace-nowrap flex-grow hover:bg-selected hover:cursor-pointer'
					href={`genre/${genre.id}`} 
					key=${genre.id}>{genre.name}
				</a>
			{/each}
		</div>
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
