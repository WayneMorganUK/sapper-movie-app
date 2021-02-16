<script>
  $media_type= 'movie'
  import ProgressBar from '../../components/ProgressBar.svelte'
  import { getMovieDetails, } from '../../components/fetchData'
  import { getTrailerId } from '../../components/fetchTrailer'
  import Spinner from '../../components/Spinner.svelte'
  import Modal from "../../components/Modal.svelte"
  import Persons from '../../components/Persons.svelte'
  import { media_type } from '../../components/store.js'
  import { stores } from '@sapper/app';
  
	const { page } = stores(); 
	const { params } = $page;

  let movie_id = params.id

  const ApiKey = process.env.SAPPER_APP_API_KEY
  const MOVIE_DETAIL_API = `https://api.themoviedb.org/3/movie/${movie_id}?api_key=${ApiKey}&language=en-US`
  const VIDEO_API = `https://api.themoviedb.org/3/movie/${movie_id}/videos?api_key=${ApiKey}&language=en-US`
  const IMAGE_API = "https://image.tmdb.org/t/p/"
  
  let modal;
  window.scrollTo({top: -1000, behavior: 'smooth'})
  
  let movie_details = []
  let active=false
  let trailer_id

  getMovieDetails(MOVIE_DETAIL_API).then(x => movie_details = x )

  getTrailerId(VIDEO_API).then(x => trailer_id = x )

  function toggleTrailer() {
      active = !active
  }

</script>

{#if movie_details.title}
  <div class='detail-header' style='background-image: url({IMAGE_API}original/{movie_details.backdrop_path})'>
    <div class='overlay'>
      <div class='keyboard'>
        <div class='single-column'>
          <div class='detail-inner'>
            <div class='poster-img'><img src={IMAGE_API + 'w500' +  movie_details.poster_path} alt='movie poster'></div>
            <div class='movie-data'>
              <div class='title'>
                <h2 class='movie-title'>{movie_details.title} <span class='release_date'>({movie_details.release_date.substring(0,4)})</span></h2>
                <div class='facts'>
                  <div class='date'>{movie_details.release_date}</div>
                  <div class='genres'>
                    {#each movie_details.genres as genre}
                      <a class='genre' href=#/genre/{genre.id} key={genre.id}>{genre.name}</a>
                    {/each}
                  </div>
                  <div class='duration'>{(movie_details.runtime - (movie_details.runtime % 60))/60}h {movie_details.runtime % 60}m</div>
                </div>
              </div>
              <div class='auto'>
                
                  {#if movie_details.vote_average}
                  <div class='rating'>
                    <ProgressBar progress={movie_details.vote_average} />
                  </div>
                  {/if}
                {#if trailer_id}
                <div class='play-trailer' on:click={() => modal.show()}>
                  <i class="fa fa-play fa-2x" style='line-height: 2.5;' aria-hidden="true"></i>
                  <p>Play Trailer</p>
                </div>
                {:else}
                <div class='play-trailer'>
                  <p>No Trailer Available</p>
                </div>
                {/if}

              </div>
              <div class='header-info'>
                <div class='tagline'>{movie_details.tagline}</div>
                <p class='overview'>Overview</p>
                <div class='overview-details'>{movie_details.overview}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div>
    <Persons {movie_id} />
  </div>
  <Modal bind:this={modal}>
    <iframe width='1080' height="600" title='preview'
      src="https://www.youtube.com/embed/{trailer_id}"
        controls='true'>
      <track default
      kind="captions" />
    </iframe>
  </Modal>
{:else}
  <Spinner />
{/if}


<style>
  .play-trailer p {
    display: flex;
    justify-content: center;
    margin-left: 15px;
    font-size: 1.4rem;
  }
  .genre {
    margin-left: 5px;
  }

  .genre:first-child {
    margin: 0;
  }
  .genre:not(:last-child):after {
    content: ", ";
}

  .overview {
    margin: 10px 0 8px 0;
    width: 100%;
    font-size: 1.3em;
    font-weight: 600;
  }
  .tagline {
    margin-bottom: 0;
    font-size: 1.1em;
    font-weight: 400;
    font-style: italic;
    opacity: 0.7;
    z-index: 0;
  }
  .header-info {
    width: 100%;
  }
  .auto {
    margin-bottom: 20px;
    width: 100%;
    height: 68px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
  }
  .duration {
    padding-left: 20px;
    position: relative;
    top: 0;
    left: 0;
  }
  .duration:before {
    font-size: 1.1em;
    line-height: 1;
    content: '\2022';
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 7px;
    display: inline-flex;
    align-content: center;
    align-items: center;
    z-index: -1;
}
  a {
    text-decoration: none;
    text-decoration-line: none;
    text-decoration-thickness: initial;
    text-decoration-style: initial;
    text-decoration-color: initial;
    font-weight: normal;
  }
  .date {
    padding-left: 0px;
  }
  .keyboard {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
  }
  .title {
    width:100%;
    margin-bottom: 24px;
    display: flex;
    flex-wrap: wrap;
  }
  .rating {
    background: transparent;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;
    width: 68px;
    height: 68px;
    transition: transform .2s;
    transform: scale(0.6);
  }
  .play-trailer{
    display:flex;
    text-decoration: none;
    padding-left: 20px;
  }
  .play-trailer:hover{
    cursor:pointer;
    text-decoration: none;
    opacity: 0.8;
    
  }
  .detail-header {
    border-bottom: 1px solid var(--primary-colour);
    background-position: right -200px top;
    background-size: cover;
    background-repeat: no-repeat;
  }
  .overlay {
	  background-image: linear-gradient(to right, rgb(158, 0, 1) 150px, rgba(105, 17, 145, 0.84) 100%);
  }
  .single-column {
    padding-top: 30px;
    padding-bottom: 30px;
    padding-left: 40px;
    padding-right: 40px;
    max-width: 1300px;
    width: 100%;
    z-index: 0;
    box-sizing: border-box;
  }

  .detail-inner {
    display:flex;
    flex-wrap: nowrap;
  }
  .poster-img img{
    border-width: 0;
    height: 450px;
    width: 300px;
    min-width: 300px;
    border-radius: 8px;
    overflow: hidden;
  }
  .movie-data {
    flex-wrap: wrap;
    align-items: flex-start;
    box-sizing: border-box;
    padding-left: 40px;
  }
  .movie-title {
    font-size: 2.2rem;
    font-weight: 600;
    padding: 0;
    margin: 0;
    width: 100%;
  }
  
  /* .movie-title:hover {
    color:rgba(255,255,255,0.7);
  } */
  /* .release_date {
    opacity: 0.8;
    font-weight: 400;
  }

  .release_date:hover {
    opacity: 1.2;
  }
 */

  .genres {
    padding-left: 20px;
    position: relative;
    top: 0;
    left: 0;
    text-decoration: none;
    /* color: white; */
  }
  .genres a{
    text-decoration: none;
    font-weight: normal;
  }

  .genres::before {
    font-size: 1.1em;
    line-height: 1;
    content: '\2022';
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 7px;
    display: inline-flex;
    align-content: center;
    align-items: center;
    z-index: -1;
  }
  .facts {
    display: flex;
  }

</style>