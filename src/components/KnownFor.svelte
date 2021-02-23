<script>
  import { onMount, tick } from 'svelte'
  import { media_type } from './store'
  let films=[]
  let tv = []
  export let personId

  const IMAGE_API = 'https://image.tmdb.org/t/p/w300'
  const DEFAULT_IMG = 'default.jpg'
  const ApiKey = process.env.SAPPER_APP_API_KEY
  const KNOWN_API = `https://api.themoviedb.org/3/person/${personId}/combined_credits?api_key=${ApiKey}&language=en-US`

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
<div class="wrapper">
  
    {#if films}
    <h2>Movies</h2>
    <div class='container'>
      {#each films as movie}
          <a class='movie'href={`movie/${movie.id}`}>
            <img src={movie.poster_path ? IMAGE_API + movie.poster_path : DEFAULT_IMG } alt={movie.title} />
            <div class='movie-info'>
              <h3>{ movie.title }</h3>
            </div>
          </a>
        {/each}
    </div>
     {/if}
     {#if tv}
     <h2>TV</h2>
     <div class='container'>
     {#each tv as show}
          <a class='movie'href={`tv/${show.id}`}>
            <img src={show.poster_path ? IMAGE_API + show.poster_path : DEFAULT_IMG } alt={show.name} />
            <div class='movie-info'>
              <h3>{ show.name }</h3>
            </div>
          </a>
      {/each}
      </div>
      {/if}
  </div>
{/if}

<style>

h3 {
  color: var(--light-text);
  margin: 0;
  font-weight: 400;
  text-align:center;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 0.9rem;
}
.container {
  margin: 0 auto;
  display: flex;
  overflow-y: hidden;
}

.movie {
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
}

img {
  width: 150px;
  border-radius: 3px;
}

</style>
