<script>
	import { media_type } from '../components/store.js'
	import { genres_list } from '../components/store.js'

	let selected=''

</script>

<div class='sticky'>
		{#each $genres_list[$media_type] as genre}
			<a 
				on:click="{() => selected=genre.id}"
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
		overflow-y:hidden;

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
  }

	.selected {
    background-color: var(--selected);
		cursor: default;
  }

	.genre:hover:not(.selected) {
    color: black;
    background-color: var(--selected);
    cursor: pointer;
  }
	@media only screen and (max-width: 600px) {

  }

</style>
