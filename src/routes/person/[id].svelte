<script>
  import { onMount } from  'svelte'
  import KnownFor from '../../components/KnownFor.svelte'
  import Spinner from '../../components/Spinner.svelte'

  import { stores } from '@sapper/app';
	const { page } = stores(); 
	const { params } = $page;
  console.log('Person ID page')

  
  const ApiKey = process.env.SAPPER_APP_API_KEY
  const PERSONS_API = `https://api.themoviedb.org/3/person/${params.id}?api_key=${ApiKey}&language=en-US`
  const IMAGE_API = 'https://image.tmdb.org/t/p/w500/'
  let person = []
  let personId = params.id

  onMount(async () => {
    person = await fetch(PERSONS_API)
    .then(x => x.json())
	})

  function toggleTrailer() {
      active = !active
  }

</script>

{#if person.id}
  <div class='container'>
    <div class='wrapper'>
      <div class='personal'>
        {#if person.profile_path}
          <img src={ IMAGE_API + person.profile_path } alt='profile'>
        {:else}
          <i class="icon fa fa-user-o fa-5x"></i>
        {/if}
        <h2>Personal Info</h2>
        <h3>Known For</h3>
        <p>{person.known_for_department}</p>
        <h3>Gender</h3>
        {#if person.gender === 2}
          <p>Male</p>
        {:else}
          <p>Female</p>
        {/if}
        
          <h3>Birthdate</h3>
        {#if person.birthday}
        <p>{person.birthday}</p>
        {:else}
          <p>Unknown</p>
        {/if}
        <h3>Place of Birth</h3>
        {#if person.place_of_birth}
          <p>{person.place_of_birth}</p>
          {:else}
          <p>Unknown</p>
        {/if}
        {#if (person.also_known_as && person.also_known_as.length) }
          <h3>Also Known As</h3>
          {#each person.also_known_as as alias}
            <p>{alias}</p>
          {/each}
        {/if}
      </div>
      <div class="info">
        <div class='persons-card'>
          <h2 class='name'>{person.name}</h2>
          <h3>Biography</h3>
          <p>{person.biography}</p>
          <div class='known-for'>
            <h2 class='known-for-title'>Known For</h2>
            <KnownFor {personId}/>
          </div>
        </div>
      </div>
    </div>
  </div>
  {:else}
	<Spinner />
{/if}


<style>
  .known-for {
    padding-top: 30px;
  }
  .info {
    max-width: 1000px;
    width:100%;
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
  .container {
    margin: 0 auto;
    width: 1250px;
    padding-bottom: 70px;
  }

  .wrapper {
    display: flex;
    overflow: auto;
  }

  .persons-card {
    margin-bottom: 0.5rem;
    position: relative;
    background-color:var(--primary-colour);
    margin-left: 0.8rem;
    border-radius: 15px;
    padding: 15px;
  }

  img, .icon {
    width: 250px;
    border-radius: 15px;
  }

  .icon {
    display: inline-block;
    height: 165px;
    width: 110px;
    position: relative;
    top: 40px;
    left: 20px;
  }
</style>

