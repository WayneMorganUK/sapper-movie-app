<script>
  import { onMount } from 'svelte'
  import { ApiKey} from './store'
  let films=[]
  let tv = []
  export let personId

  const IMAGE_API = 'https://image.tmdb.org/t/p/w300'
  const DEFAULT_IMG = 'default.jpg'
  const KNOWN_API = `https://api.themoviedb.org/3/person/${personId}/combined_credits?api_key=${$ApiKey}&language=en-US`

  let movies = []

  onMount(async () => {
    movies = await fetch(KNOWN_API)
    .then(x => x.json())
    .then(x => x.cast)
    films= await movies.filter(function(movie) {
      return movie.media_type === 'movie'
    })
    tv=movies.filter(function(movie) {
      return movie.media_type === 'tv'
    })
	})

</script>

{#if movies}
  <section id='known-for' class='grid mx-auto'>
    {#if films}
      <h3 class='flex xl:inline-block justify-center xl:justify-start xl:my-5 text-2xl font-bold'>Movies</h3>
      <div class='flex flex-wrap justify-center sm:justify-start sm:flex-nowrap sm:overflow-y-hidden relative'>
        {#each films as movie}
          <div class='w-28 h-56 flex-shrink-0 rounded mb-2 relative bg-secondary m-0.5 sm:mr-3 hover:bg-selected'>
            <a class='rounded w-28' href={`movie/${movie.id}`}>
              <img class='object-cover w-28 h-44 rounded-t' src={movie.poster_path ? IMAGE_API + movie.poster_path : DEFAULT_IMG } alt={movie.title} />
              <div class="w-28 h-12 p-0.5">
                <h6 class='text-sm text-center flex justify-center items-center text-textLight line-clamp-2'>{ movie.title }</h6>
              </div>
            </a>
          </div>
        {/each}
      </div>
    {/if}
    {#if tv}
      <h3 class='flex xl:inline-block justify-center xl:justify-start xl:my-5 text-2xl font-bold'>TV</h3>
      <div class='flex flex-wrap justify-center sm:justify-start sm:flex-nowrap sm:overflow-y-hidden relative'>
        {#each tv as show}
          <div class='w-28 h-56 flex-shrink-0 rounded mb-2 relative bg-secondary m-0.5 sm:mr-3 hover:bg-selected'>
            <a class='rounded w-28' href={`tv/${show.id}`}>
              <img class='object-cover w-28 h-44 rounded-t'src={show.poster_path ? IMAGE_API + show.poster_path : DEFAULT_IMG } alt={show.name} />
              <div class="w-28 h-12 p-0.5">
                <h4 class='text-sm text-center flex justify-center items-center text-textLight line-clamp-2'>{ show.name }</h4>
              </div>
            </a>
            </div>
        {/each}
      </div>
    {/if}
  </section>
{/if}