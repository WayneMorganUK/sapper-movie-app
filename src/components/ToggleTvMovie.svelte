<script>
  import { current_page, media_type } from './store.js'
  import { goto } from '@sapper/app';

  function toggleMovie() {
    if ($media_type !== 'movie'){
      $media_type='movie'
      $current_page = 1
      goto('/')
    }
  }

  async function toggleTv() {
    if ($media_type !== 'tv'){
      $current_page = 1
      $media_type='tv'
      goto('/')
    }
  }

</script>

<div class="selector">
  <div class="anchor">
      <button
        class:active={$media_type==='movie'}
        on:click|preventDefault = {toggleMovie}>
          <i class="fa fa-video-camera" aria-hidden="true"></i>
      </button>
  </div>
  <div class="anchor">
      <button 
        class:active={$media_type==='tv'}
        on:click|preventDefault = {toggleTv}>
          <i class="fa fa-television" aria-hidden="true"></i>
      </button>
  </div>
</div>

<style>
  .selector {
    display: flex;
    justify-content: right;
    align-items:center;
    width: 120px;
    height: 30px;
    color: var(--light-text);
    border-left: 2px solid var(--light-text);
    border-top: 2px solid var(--light-text);
    border-bottom: 2px solid var(--border-colour);
    border-right: 2px solid var(--border-colour);
    border-radius: 15px;
  }

  .anchor {
    box-sizing: border-box;
    left: 0px;
    position: relative;
    top: 0px;
    z-index: 1
  }

  button {
    display: inline-flex;
    align-content: center;
    align-items: center;
    justify-content: center;
    font-size: 1em;
    white-space: nowrap;
    text-decoration: none;
    transition-delay: 0s;
    transition-duration: 0.5s;
    transition-property: -webkit-text-fill-color;
    transition-timing-function: ease;
    color: var(--light-text);
    height:28px;
    width: 59px;
    border-radius: 15px;
    border:none;
    background-color: var(--background-color);
    border: 1px solid var(--background-color);
  }

  button:hover:not(.active) {
    color:var(--selected);
    cursor: pointer;
  }

  .active {
    
    background-color:var(--selected);
    border: 1px solid #979393;
  }

</style>