<script>
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
        <div class = 'title'>
          <p>Trailer</p>
          <div class="close" on:click={() => hide()}>Close</div>
        </div>    
        <div class= 'ytplayer'><slot /></div>
    </div>
  </div>
{/if}

<style>
  .modal-wrapper {
    background-color: rgb(0, 0, 0);
    background-color: rgba(0, 0, 0, 0.76);
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    z-index: 1000;
  }

  .modal {
    background-color:var(--background-colour);
    width: -moz-fit-content;
    width: fit-content;
    padding: 1rem;
    margin: 0 auto;
    height: fit-content;
    height: -moz-fit-content;
  }
  .title {
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 1.5em;
    font-weight: 700;
  }
  .close {
    display: flex;
    justify-content: right;
    cursor: pointer;
  }
  .close:hover {
    font-weight: bold;
  }
</style>