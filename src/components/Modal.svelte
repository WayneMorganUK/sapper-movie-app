<script>
  export let trailer_id
  let shown = false;
  export function show() {
    shown = true;
  }
  export function hide() {
    shown = false;
  }

</script>

{#if shown}
  <div class="modal-wrapper">
    <div class="modal">
      
        <div class = 'header'>
          <!-- <div class='title'>Trailer</div> -->
          
          </div>
         
        <div class= 'ytplayer'>
          <iframe class='trailer'  title='preview'
            src="https://www.youtube.com/embed/{trailer_id}?rel=0"
            controls='true'
            allowfullscreen >
            <track default kind="captions" />
        </iframe>
        </div>
    </div><div class="close" on:click={() => hide()}><i class="fa fa-window-close" aria-hidden="true"></i></div>   
  </div>
{/if}

<style>

  .ytplayer {
    position: relative;
    padding-bottom: 56.25%;
  }
  .trailer {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

  .modal-wrapper {
    background-color: rgba(0, 0, 0, 0.76);
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    z-index: 1000;
  }

  .modal {
    background-color: var(--background-colour);
    margin: 0 auto;
    overflow: hidden;
    padding-bottom: 56.25%;
    position: relative;
    height: 80vh;
    width: 80vw;
    padding-top: 2px;
    padding-left: 5px;
    padding-right: 5px;
  }
  .header {
    display: inline-flex;
    justify-content: space-between;
  }
  .close {
    cursor: pointer;
    position: absolute;
    top: 5px;
    left: 5px;
    color: red;
    font-size: 3rem;
  }
  .close:hover {
    font-weight: bold;
  }
  @media only screen and (max-width: 640px) {
    /* .ytplayer {
      height: 100vh;
      width: 100vw;
    } */
    .close {
      font-size: 1rem;
    }

  }

</style>