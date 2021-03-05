<script>
  import { onMount } from  'svelte'
  import KnownFor from '../../components/KnownFor.svelte'
  import Spinner from '../../components/Spinner.svelte'
  import { ApiKey } from '../../components/store.js'

  import { stores } from '@sapper/app';
	const { page } = stores(); 
	const { params } = $page;

  const PERSONS_API = `https://api.themoviedb.org/3/person/${params.id}?api_key=${$ApiKey}&language=en-US`
  const IMAGE_API = 'https://image.tmdb.org/t/p/w500/'
  let person = []

  onMount(async () => {
    person = await fetch(PERSONS_API)
    .then(x => x.json())
	})

  function toggleTrailer() {
      active = !active
  }

</script>

{#if person.id}
  <div class='mx-auto max-w-7xl xl:pb-20 xl:mt-5'>
    <div class='bg-primary xl:bg-bgcolour grid xl:grid-cols-5 xl:grid-rows-auto xl:auto-rows-fr' > 
      <div class='xl:col-start-1 xl:col-end-2 xl:row-start-1 xl:row-end-3 '>
        <h2 class='text-2xl mx-auto xl:hidden'>{person.name}</h2>
        {#if person.profile_path}
          <img class='w-64 rounded-2xl mx-auto' src={ IMAGE_API + person.profile_path } alt='profile'>
        {:else}
          <i class="icon w-64 fa fa-user-o fa-5x"></i>
        {/if}
        <div class='p-3'>
          <h2 class='text-2xl mt-2'>Personal Info</h2>
          <h3 class='text-lg font-bold mt-4 mb-1'>Known For</h3>
          <p>{person.known_for_department}</p>
          <h3 class='text-lg font-bold mt-4 mb-1'>Gender</h3>
          {#if person.gender === 2}
            <p>Male</p>
          {:else}
            <p>Female</p>
          {/if}
          <h3 class='text-lg font-bold mt-4 mb-1'>Birthdate</h3>
          {#if person.birthday}
            <p>{person.birthday}</p>
          {:else}
            <p>Unknown</p>
          {/if}
          <h3 class='text-lg font-bold mt-4 mb-1'>Place of Birth</h3>
          {#if person.place_of_birth}
            <p>{person.place_of_birth}</p>
            {:else}
            <p>Unknown</p>
          {/if}
          {#if (person.also_known_as && person.also_known_as.length) }
            <h3 class='text-lg font-bold mt-4 mb-1'>Also Known As</h3>
            {#each person.also_known_as as alias}
              <p>{alias}</p>
            {/each}
          {/if}
        </div>
      </div>
      <div class="xl:col-start-2 xl:col-end-6 xl:row-start-1 xl:row-end-2">
        <div class='mb-2 relative bg-primary xl:ml-5 p-3.5 rounded-2xl'>
          <h2 class='text-2xl hidden xl:inline-block'>{person.name}</h2>
          <h3 class='text-lg font-bold mt-4 mb-1'>Biography</h3>
          <p>{person.biography}</p>

        </div>
      </div>
      <div class="xl:col-start-2 xl:col-end-6 xl:row-start-2 xl:row-end-3 xl:bg-primary xl:ml-5 xl:p-3.5 xl:rounded-2xl">
        <div class='pt-8'>
          <h2 class='text-2xl pl-3.5 xl:pl-0'>Known For</h2>
          <KnownFor personId = {params.id}/>
        </div>
        </div>
    </div>
  </div>
  {:else}
	<Spinner />
{/if}


<style>
  /* .container {
    margin: 0 auto;
    max-width: 1250px;
    padding-bottom: 70px;
  } */
    /* .wrapper {
    display: grid;
    grid-template-columns: 1fr 4fr;
  }
  img, .icon {
    width: 250px;
    border-radius: 15px;
  } */

  /* .icon {
    display: inline-block;
    height: 165px;
    width: 110px;
    position: relative;
    top: 40px;
    left: 20px;
  }
  .info {
    max-width: 1000px;
    width:100%;
  }
  .persons-card {
    margin-bottom: 0.5rem;
    position: relative;
    background-color:var(--primary-colour);
    margin-left: 0.8rem;
    border-radius: 15px;
    padding: 15px;
  } */


/* 
  .known-for {
    padding-top: 30px;
  }

  h2 {
    color: white;
    margin: 0;
    padding: 0;
    font-weight: 400;
    text-align:center;
    display: flex;
    align-items: center;
  }
  h3 {
    margin: 0;
    padding: 15px 0 5px 0;
  }

  p {
    margin: 0;
    padding: 0;
  }

 */






  /* @media only screen and (max-width: 600px) {
    .wrapper{
      display: grid;
      grid-template-columns: 1fr;
    }
    .personal {
      padding: 20px;
    }
    img {
      width: 100%;
    }
    .persons-card {
      margin-left: 0;
    }
    .container {
      padding-bottom: 0;
    }
  } */
</style>

