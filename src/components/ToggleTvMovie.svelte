<script>
  import { current_page, media_type } from './store.js'
  import { goto } from '@sapper/app';
 

  function toggleMovie() {
    if ($media_type !== 'movie'){
      console.log('media type', $media_type)
      $media_type='movie'
      console.log('media type', $media_type)
      $current_page = 1
      goto('/')
    }
  }

  async function toggleTv() {
    if ($media_type !== 'tv'){
      console.log('media type', $media_type)
      $current_page = 1
      console.log('media type', $media_type)
      $media_type='tv'
      
      goto('/')
    }
  }

  // function togglePeople() {
  //   console.log('media type', $media_type)
  //   if ($media_type !== 'people'){
  //     console.log('media type', $media_type)
  //     $media_type='people'
  //     $current_page = 1
  //     goto('/')
  //   }
  // }
  
  
</script>
<div class="selector">
  <div class="anchor selected">
    <h3 >
      <a class:active={$media_type==='movie'} on:click|preventDefault = {toggleMovie} href="" data-group="movie"><i class="fa fa-video-camera" aria-hidden="true"></i>
      </a>
    </h3>
  </div>

  <div class="anchor">
    <h3>
      <a class:active={$media_type==='tv'} on:click|preventDefault = {toggleTv} href="" data-group="tv"><i class="fa fa-television" aria-hidden="true"></i>
      </a>
    </h3>
  </div>

  <!-- <div class="anchor">
    <h3>
      <a class:active={$media_type==='people'} on:click|preventDefault = {togglePeople} href="" data-group="tv">People </a>
    </h3>
  </div> -->
</div>

<style>
  .selector {
    display: flex;
    justify-content: right;
    align-items:center;
    height: 30px;
    color: var(--light-text);
    border-left: 2px solid var(--light-text);
    border-top: 2px solid var(--light-text);
    border-bottom: 2px solid var(--border-colour);
    border-right: 2px solid var(--border-colour);
    border-radius: 30px;
  }
  

  .anchor {
    box-sizing: border-box;
    color: rgb(0, 0, 0);
    left: 0px;
    position: relative;
    top: 0px;
    z-index: 1
  }
  h3 {
    display: inline-flex;
    align-content: center;
    align-items: center;
    justify-content: center;
    font-size: 1em;
    white-space: nowrap;
  }
  a {
    text-decoration: none;
    transition-delay: 0s;
    transition-duration: 0.5s;
    transition-property: -webkit-text-fill-color;
    transition-timing-function: ease;
    white-space: nowrap;
    padding: 3px 20px;
    border-width: 2px solid none;
  }

  .active {
    background-color:var(--selected);
    border-radius: 15px;
    border: 1px solid #979393;
    padding: 3px 19px;

  }
</style>