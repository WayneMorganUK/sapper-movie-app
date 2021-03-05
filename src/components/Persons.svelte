<script>
  import { onMount } from  'svelte'
  import { media_type, ApiKey } from './store.js'
  
  export let movie_id
  const PERSONS_API = `https://api.themoviedb.org/3/${$media_type}/${movie_id}/credits?api_key=${$ApiKey}&language=en-US`
  const IMAGE_API = 'https://image.tmdb.org/t/p/w200/'
  let persons = []

  onMount(async () => {
    persons = await fetch(PERSONS_API)
		.then(x => x.json())
    .then(x => x.cast)
	})
</script>

{#if persons.length}
  <div class='max-w-7xl mx-auto xl:mt-5 xl:mb-10 bg-secondary xl:pl-5 pt-1 xl:rounded-2xl'>
    <h2 class='flex xl:inline-block justify-center xl:justify-start xl:my-5 text-2xl font-bold'>Top Billed Cast</h2>
    <div class='flex flex-wrap sm:flex-nowrap sm:overflow-y-hidden relative'>
      {#each persons as person}
        <div class='w-28 flex-shrink-0 mb-2 rounded relative bg-primary m-0.5 sm:mr-3 hover:bg-selected'>
          <a class='no-underline' href={`person/${person.id}`} key={person.id}>
            {#if person.profile_path}
              <img class='w-28 h-44 rounded-t' src={ IMAGE_API + person.profile_path } alt='profile' />
              {:else}
              <i class="w-28 h-44 rounded-2xl relative top-10 left-5 icon fa fa-user-o fa-5x"></i>
              {/if}
            <h4 class='text-center flex justify-center items-center text-yellow-700 font-semibold'>{person.character}</h4>
            <h4 class='text-center flex justify-center items-center text-textLight'>{person.name}</h4>
          </a>
        </div>
      {/each}
    </div>
  </div>
{/if}

<style>
    /* .container {
    margin: 20px auto;
    width: 1250px;
    padding-left: 20px;
    background-color: var(--secondary-colour);
    border-radius: 15px;
    padding-top: 5px;
  } */

  /* .person-wrapper {
    display: flex;
    overflow-y: hidden;
    position: relative;
    top: 0;
    left: 0;
  } */
  /* .persons-card {
    margin-bottom: 0.5rem;
    position: relative;
    background-color:var(--primary-colour);
    margin-right: 0.8rem;
    border-radius: 3px;
    transition: all .4s ease-in-out;
    cursor: pointer; 
  }
  .persons-card:hover {
    background-color:var(--selected);
  }

  .person-link {
    text-decoration: none;
    pointer-events: auto;
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
  } */





/* 
  .name, .character{
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
  } */





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






  /* @media only screen and (max-width: 600px) {
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
  } */
</style>

