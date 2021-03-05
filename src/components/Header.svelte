<script>
  import ToggleTvMovie from './ToggleTvMovie.svelte'
  import Search from './Search.svelte'
  import { stores } from '@sapper/app'
  
	const { page } = stores()
	const { params } = $page

</script>

<header class="bg-secondary">
  <div class="max-w-7xl mx-auto flex justify-between pl-2 md:pl-5 lg:pl-7 pr-1 items-center h-10">
    <a class="text-3xl hover:text-selected" href='.'><i class="fa fa-home"></i></a>
    <ToggleTvMovie />
    <Search />
  </div>
</header>

<style>
  /* .tv-movie-select {
    display: flex;
    align-items: center;
    justify-content: center;
  } */

  /* header {
    background-color: var(--secondary-colour);
    padding: 0.2rem;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  } */

  /* .header-top {
    max-width: 1200px;
    margin: auto;
    display: flex;
    justify-content: space-between;
  } */
  /* .home, .home:visited {
    justify-content: left;
    font-size: 2em;
    font-weight: 600;
    text-decoration: none;
    cursor: pointer;
  } */


</style>