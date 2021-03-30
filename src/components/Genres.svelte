<script >
	import { media_type, genres_list, selected } from '../components/store.js'

</script>

<<<<<<< HEAD
	<section id='genres' class='max-w-7xl mx-auto xl:py-0.5'>
		<div class='bg-primary flex overflow-y-hidden h-8 max-w-7xl mx-auto p-0.5 text-xs items-center xl:rounded-full'>
=======
	<section id='genres' class='wide p-0.5'>
>>>>>>> parent of 7e0b86e (Tailwind updates)
			{#each $genres_list[$media_type] as genre}
				<a 
					on:click="{() => $selected=genre.id}"
					class:selected="{$selected===genre.id}"
<<<<<<< HEAD
					class='bg-secondary flex flex-nowrap justify-center border-border rounded-full border-2 no-underline font-semibold px-1 py-0.5 m-0.5 whitespace-nowrap flex-grow hover:bg-selected hover:cursor-pointer'
					href={`genre/${genre.id}`}>
					{genre.name}
=======
					class='genre'
					href={`genre/${genre.id}`} 
					key=${genre.id}>{genre.name}
>>>>>>> parent of 7e0b86e (Tailwind updates)
				</a>
			{/each}
	</section>


<style>
	.selected {
    background-color: var(--selected);
		cursor: default;
  }
</style>
