<script >
	import { media_type, genres_list, selected } from '../components/store.js'

</script>

	<section id='genres' class='max-w-7xl mx-auto xl:py-0.5'>
		<div class='bg-primary flex overflow-y-hidden h-8 max-w-7xl mx-auto p-0.5 text-xs items-center xl:rounded-full'>
			{#each $genres_list[$media_type] as genre}
				<a 
					on:click="{() => $selected=genre.id}"
					class:selected="{$selected===genre.id}"
					class='bg-secondary flex flex-nowrap justify-center border-border rounded-full border-2 no-underline font-semibold px-1 py-0.5 m-0.5 whitespace-nowrap flex-grow hover:bg-selected hover:cursor-pointer'
					href={`genre/${genre.id}`}>
					{genre.name}
				</a>
			{/each}
		</div>
	</section>


<style>
	.selected {
    background-color: var(--selected);
		cursor: default;
  }
</style>
