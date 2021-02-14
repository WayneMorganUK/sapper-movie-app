<script>
  import { media_type } from  './store.js'
  import ProgressBar from './ProgressBar.svelte'
  import Spinner from './Spinner.svelte'
  import { fade } from 'svelte/transition'
  const IMAGE_API = 'https://image.tmdb.org/t/p/w300'
  const DEFAULT_IMG = 'default.jpg'

  export let poster_path
  export let name
  export let title
  export let vote_average
  export let overview
  export let id
  export let release_date
  release_date ? release_date : 0
  export let first_air_date

</script>
{#if id}

  <div class='movie'>
    <div class= 'movie-inner'>
      <div class='movie-front'>
        <img class='movie-img'  src={poster_path ? IMAGE_API + poster_path : DEFAULT_IMG } alt={title?title:name} /> 
        <div class='movie-info'>
          <h3 class='title'>{ title?title:name}</h3>
            <p class='release-date'>{release_date ? release_date.substring(0,4) : first_air_date ? first_air_date.substring(0,4): '-'}</p>
        </div>
        <div class='vote'>
          <ProgressBar progress={vote_average} />
        </div>
      </div>
      <a class='movie-back'href={`${$media_type}/${id}`}>
        <h3>Overview</h3>
        <p>{overview}</p>
      </a>
    </div>
  </div>
 
{:else}
  <Spinner />
{/if}

<style>
  .movie {
    width: 230px;
    margin-top: 0.5rem;
    margin-bottom: 0.5rem;
    perspective: 1000px;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    border-bottom-left-radius: 8px;
    border-bottom-right-radius: 8px;
 }
  
  .movie-inner {
    /* position: relative;
    width: 100%;
    height: 100%; */
    transition: transform 0.8s;
    transform-style: preserve-3d;
  } 
  .movie-front, .movie-back {
    /* width: 100%;
    height: 100%; */
    color: var(--dark-text);
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
    background-color: white;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    border-bottom-left-radius: 8px;
    border-bottom-right-radius: 8px;
  }


  .movie-back {
    transform: rotateY(180deg);
    position: absolute;
    bottom: 0;
    padding:0.5rem;
    height: 100%;
    overflow: auto;
    transition: 0.3s ease-in-out;
    font-size: 0.9em;
    font-weight: 600;
    z-index: 5;
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
  }  
  
  .movie-img {
    object-fit: cover;
    max-width: 100%;
    height: 345px;
    border-top-left-radius: 7px;
    border-top-right-radius: 7px;
  }
  .movie-back h3 {
    margin-top: 5px;
    margin-bottom: 0px;
    font-size: 1.3rem;
    text-transform: uppercase;
    color: white;
    background-color:var(--secondary-colour);
    padding-left: 10px;
    border-radius: 5px;
  }
  .title {
    color: var(--dark-text);
    width: 200px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  a {
    text-decoration: none;
  }
  .movie:hover .movie-inner {
    transform: rotateY(180deg);
  }

  .movie-info {
    padding: 0.5rem;
    margin-left: 1rem;
  }
  
  .movie-info h3 {
    margin: 0;
    font-weight: 600;
    font-size: 16px;
  }

  .release-date {
    margin: 0;
    font-size: 1.1rem;
    font-weight: 900;
  }

  .vote {
    transform: scale(0.44);
    transform-origin: top left;
    z-index: 2;
    position: absolute; 
    left: 18px;
    top: 309px;
    color:var(--dark-text);
  }
  
  </style>