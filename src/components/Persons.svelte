<script>
  import { onMount } from  'svelte'
  import { media_type } from './store.js'
  
  export let movie_id
  const ApiKey = process.env.SAPPER_APP_API_KEY
  const PERSONS_API = `https://api.themoviedb.org/3/${$media_type}/${movie_id}/credits?api_key=${ApiKey}&language=en-US`
  const IMAGE_API = 'https://image.tmdb.org/t/p/w200/'
  let persons = []

  onMount(async () => {
    persons = await fetch(PERSONS_API)
		.then(x => x.json())
    .then(x => x.cast)
	})
</script>

{#if persons}
  <div class='container'>
    <h2>Top Billed Cast</h2>
    <div class='person-wrapper'>
      {#each persons as person}
      
        <div class='persons-card'>
          <a class='person-link' href={`person/${person.id}`} key={person.id}>
            {#if person.profile_path}
              <img src={ IMAGE_API + person.profile_path } alt='profile'>
              {:else}
              <i class="icon fa fa-user-o fa-5x"></i>
              {/if}
            <h4 class='character'>{person.character}</h4>
            <h4 class='name'>{person.name}</h4>
          </a>
        </div>
      {/each}
    </div>
  </div>
{/if}

<style>
  .person-link {
    text-decoration: none;
    pointer-events: auto;
    cursor: pointer; 
  }  
  .persons-card:hover {
    background-color:var(--selected);
  }
  .name, .character{
    color: var(--light-text);
    margin: 0;
    font-weight: 400;
    text-align:center;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .name {
    font-weight:400;
    color: var(--light-text);
  }
  
  .character{
    font-weight:600;
    color:rgb(246, 236, 96);
  }

  .container {
    margin: 20px auto;
    width: 1250px;
    padding-left: 20px;
    background-color: var(--secondary-colour);
    border-radius: 15px;
    padding-top: 5px;
  }

  .person-wrapper {
    display: flex;
    overflow-y: hidden;
    position: relative;
    top: 0;
    left: 0;
  }

  /* .person-wrapper::after {
    content: '';
    width: 60px;
    height: 100%;
    position: absolute;
    top: 0;
    right: 0;
    background-image: linear-gradient(to right, rgba(255,255,255,0) 0%, #932432 100%);
    will-change: opacity;
  } */

  .persons-card {
    margin-bottom: 0.5rem;
    position: relative;
    background-color:var(--primary-colour);
    margin-right: 0.8rem;
    border-radius: 3px;
    transition: all .4s ease-in-out;
    cursor: pointer; 
  }

  img {
    width: 110px;
    border-radius: 3px;
  }

  .icon {
    display: inline-block;
    height: 165px;
    width: 110px;
    position: relative;
    top: 40px;
    left: 20px;
    z-index: 1;
  }
  @media only screen and (max-width: 600px) {
    .person-wrapper {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
    }
    .container {
      width: auto;
      margin: 2px auto;
      padding-left: 2px;
      background-color: var(--secondary-colour);
      border-radius: 0;
      padding-top: 5px;
      display: grid;
      grid-template-columns: 1fr;
    }
    img {
      border-radius: 3px;
      object-fit: contain;
      width: 100%;
    }
    .persons-card {
      margin: 0.15rem;
    }
  }
</style>

