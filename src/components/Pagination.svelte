<script>
  export let total_pages
  import { current_page } from './store.js'  

  import { createEventDispatcher } from 'svelte';
  const dispatch = createEventDispatcher();
  
  let pages=[]
  const LEFT_PAGE = 'LEFT';
  const RIGHT_PAGE = 'RIGHT';
  const totalNumbers = 9
  const totalBlocks = 11

  function rangex(size, startAt = 0) {
    return [...Array(size).keys()].map(i => i + startAt);
  }

  function range(from, to) {
    let i = from;
    const range = []
    while (i <= to) {
      range.push(i)
      i += 1
    }
    return range
  }

  function fetchPageNumbers() {
    if (total_pages > totalBlocks) {
      let startPage = (Math.max(2, $current_page - 3))
      let endPage = Math.min(total_pages - 1, $current_page + 3);
      pages = range(startPage, endPage);

      const hasLeftSpill = startPage > 2;
      const hasRightSpill = (total_pages - endPage) > 1;
      const spillOffset = totalNumbers - (pages.length + 1);

      if (hasLeftSpill && !hasRightSpill) {
          const extraPages = range(startPage - spillOffset, startPage - 1);
          pages = [LEFT_PAGE, ...extraPages, ...pages]
        } else if (!hasLeftSpill && hasRightSpill) {
          const extraPages = range(endPage + 1, endPage + spillOffset);
          pages = [...pages, ...extraPages, RIGHT_PAGE]
        } else if (hasLeftSpill && hasRightSpill)  {
          pages = [LEFT_PAGE, ...pages, RIGHT_PAGE]
      }
      pages = [1,...pages,total_pages]
    } else {
    pages = range(1, total_pages)
  }
}
  function handleClick(page) {
    if (page !== $current_page) {
      $current_page = page
      dispatch('change', page);
    }
  }
  
  $: fetchPageNumbers($current_page)
  
   
</script>
{#if (total_pages > 1) }
<section id='pagination' class='wide p-1 justify-between' >
  
    {#each pages as page}
      {#if (page === LEFT_PAGE)}
        <button class="btn" aria-label="Previous" on:click|preventDefault ="{() => handleClick($current_page -1)}">
          <i class="fa fa-angle-left"></i>
        </button>
      {:else if (page === RIGHT_PAGE)}
        <button class="btn" aria-label="Next" on:click|preventDefault ="{() => handleClick($current_page + 1)}">
          <i class="fa fa-angle-right"></i>
        </button>
      {:else}
        <button class="btn { $current_page === page ? 'active' : ''}" on:click|preventDefault ="{() => handleClick(page) }">
          { page }
        </button>
      {/if}
    {/each}
 
</section>
 {/if}

<style>
  i {
    font-size: 14px;
  }

  /* .page-link {
    color:var(--light-text);
    width: 95px;
		background-color:var(--secondary-colour);
		border-radius:30px;
		border: 2px solid var(--border-colour);
		margin: 2px 10px;
		text-decoration: none;
		font-weight: 600;
		padding-bottom: 2px;
		padding-top: 1px;
		transition: all .4s ease-in-out;
  }   */
  /* .page-link:hover:not(.active) {
    color: black;
    background-color: rgb(19, 143, 70);
    cursor: pointer;
  } */
  .active {
    background-color:var(--selected);
  }

	/* .pagination {
		background-color: var(--primary-colour);
		max-width: 1250px;
		margin: 5px auto;
		padding: 2px;
    display: flex;
    flex-wrap: nowrap;
    justify-content: center;
		font-size: 12px;
		border-radius: 15px;
    height: 30px;
	} */
  /* @media only screen and (max-width: 600px) {
  .pagination {
    border-radius: 0;
    justify-content: space-between;
  }
  .page-link {
    margin: 0;
    font-size: 12px;
    font-weight: 400;
    padding-right:5px;
    padding-left: 5px;
    max-width:90px;
  }
} */
</style>