<script>
  import ToggleTvMovie from './ToggleTvMovie.svelte'
  import Search from './Search.svelte'
  import { stores } from '@sapper/app';
  
	const { page } = stores(); 
	const { params } = $page;

  console.log('params id', params)

  
</script>

<header>
  <div class='header-top'>
    <a class='home' href='.'><i class="fa fa-home"></i> Home</a>
    <div class='tv-movie-select'>
      <ToggleTvMovie />
    </div>
    <Search />
  </div>
</header>

<style>
  .tv-movie-select {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  header {
    background-color: var(--secondary-colour);
    padding: 0.2rem;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  }

  .header-top {
    max-width: 1200px;
    margin: auto;
    display: flex;
    justify-content: space-between;
  }
  .home, .home:visited {
    justify-content: left;
    font-size: 2em;
    font-weight: 600;
    text-decoration: none;
    cursor: pointer;
  }
</style>