<script>
  import { onMount, tick } from 'svelte'
  import { media_type, ApiKey} from './store'
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
  <div class='grid mx-auto'>
    {#if films}
      <h2 class='my-5 text-2xl font-bold pl-3.5 xl:pl-0'>Movies</h2>
      <div class='flex flex-wrap sm:flex-nowrap sm:overflow-y-hidden relative'>
        {#each films as movie}
        <div class='w-28 h-56 flex-shrink-0 rounded mb-2 relative bg-secondary m-0.5 sm:mr-3 hover:bg-selected'>
            <a class='no-underline rounded w-28' href={`movie/${movie.id}`}>
              <img class='object-cover w-28 h-44 rounded-t' src={movie.poster_path ? IMAGE_API + movie.poster_path : DEFAULT_IMG } alt={movie.title} />
              <div class="w-28 h-12 p-0.5">
                <h4 class='text-sm text-center flex justify-center items-center text-textLight line-clamp-2'>{ movie.title }</h4>
              </div>
            </a>
          </div>
        {/each}
      </div>
    {/if}
    {#if tv}
      <h2 class='my-5 text-2xl font-bold pl-3.5 xl:pl-0'>TV</h2>
      <div class='flex flex-wrap sm:flex-nowrap sm:overflow-y-hidden relative'>
        {#each tv as show}
          <div class='w-28 flex-shrink-0 mb-2 rounded relative bg-secondary m-0.5 sm:mr-3 hover:bg-selected'>
            <a class='no-underline rounded' href={`tv/${show.id}`}>
              <img class='object-cover w-28 h-44 rounded-t'src={show.poster_path ? IMAGE_API + show.poster_path : DEFAULT_IMG } alt={show.name} />
              <div class="w-28 h-12 p-0.5">
                <h4 class='text-sm text-center flex justify-center items-center text-textLight line-clamp-2'>{ show.name }</h4>
              </div>
            </a>
            </div>
        {/each}
      </div>
    {/if}
  </div>
{/if}

<style>

/* h3 {
  color: var(--light-text);
  margin: 0;
  font-weight: 400;
  text-align:center;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 0.9rem;
} */
/* .container {
  margin: 0 auto;
  display: flex;
  overflow-y: hidden;
} */

/* .movie {
  text-decoration: none;
  margin-bottom: 0.5rem;
  position: relative;
  background-color: var(--secondary-colour);
  margin-right: 0.8rem;
  border-radius: 3px;
  transition: all .4s ease-in-out;
}  
.movie:hover {
  background-color:var(--selected);
} */

/* img {
  width: 150px;
  border-radius: 3px;
} */

/* @media only screen and (max-width: 600px) {
  .container{
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
  .wrapper{
    display: grid;
    grid-template-columns: 1fr;
  }
} */
</style>
