<script>
  import { media_type, ApiKey } from '../../components/store.js'
  import { getMovieDetails, } from '../../components/fetchData.js'
  import { getTrailerId } from '../../components/fetchTrailer.js'
  import Media from '../../components/Media.svelte'
  import { stores } from '@sapper/app'
	const { page } = stores(); 
	const { params } = $page;
  $media_type= 'movie'
  let movie_id = params.id

  const MOVIE_DETAIL_API = `https://api.themoviedb.org/3/movie/${movie_id}?api_key=${$ApiKey}&language=en-US`
  const VIDEO_API = `https://api.themoviedb.org/3/movie/${movie_id}/videos?api_key=${$ApiKey}&language=en-US`

  let movie_details = []
  let trailer_id

  getMovieDetails(MOVIE_DETAIL_API).then(x => movie_details = x )

  getTrailerId(VIDEO_API).then(x => trailer_id = x )
  $: console.log('trailer', trailer_id)

</script>
{#if movie_details.title && trailer_id}
  <Media {movie_details} {trailer_id} {movie_id}/>
{/if}
