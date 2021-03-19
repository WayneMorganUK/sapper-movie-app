<script lang='ts'>
  import { media_type, ApiKey } from '../../components/store.js'
  import { getMovieDetails, } from '../../components/fetchData.js'
  import { getTrailerId } from '../../components/fetchTrailer.js'
  import { onMount } from 'svelte'
  import { stores } from '@sapper/app'
  import Media from '../../components/Media.svelte'
	const { page } = stores(); 
	const { params } = $page;
  $media_type= 'movie'
  let movie_id:number = params.id

  const MOVIE_DETAIL_API = `https://api.themoviedb.org/3/movie/${movie_id}?api_key=${$ApiKey}&language=en-US`
  const VIDEO_API = `https://api.themoviedb.org/3/movie/${movie_id}/videos?api_key=${$ApiKey}&language=en-US`

  let movie_details:Array<string> = []
  let trailer_id:string

  onMount(async()=>{
    getMovieDetails(MOVIE_DETAIL_API).then(x => movie_details = x )
    getTrailerId(VIDEO_API).then(x => trailer_id = x )
  })

</script>
{#if movie_details.length!==0 && trailer_id}  
  <Media {movie_details} {trailer_id} {movie_id}/>
{/if}
