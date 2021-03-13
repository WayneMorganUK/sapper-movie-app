<script>
  import {goto} from '@sapper/app'
  
  let searchTerm
  const handleOnSubmit = () => {
    if (searchTerm) {
      let searching = searchTerm
      searchTerm = ''
      goto(`/search/${searching}`)
		}
  }
</script>
<section id='search' class=''>
  <form class='flex justify-end items-center pr-0.5' label='search form'
    on:submit|preventDefault = {handleOnSubmit}>
    <input 
      label='search'
      class='bg-transparent w-24 xl:w-48 h-7 rounded-full text-l px-2 text-textLight placeholder-textLight::placeholder border-2 border-border'
      type='text'
      placeholder='Search...'
      bind:value={searchTerm}
      on:change = {(e) => (e.target.value)}
    />
  </form>
</section>

  <style>    
  /* form {
    display: flex;
    justify-content: right;
    align-items:center;
  }  
  .search {
    background-color: transparent;
    border-radius: 30px;
    font-family: inherit;
    font-size: 1.2rem;
    padding: 0.5rem 1.0rem;
    height: 30px;
    color: var(--light-text);
  }
    .search:focus {
    outline: 0;
  } */
    /* input[type=text], .search {
      color: var(--light-text);
      border-left: 2px solid var(--light-text);
      border-top: 2px solid var(--light-text);
      border-bottom: 2px solid var(--border-colour);
      border-right: 2px solid var(--border-colour);
    }
  
    input[type=text]::placeholder {
      color:   var(--light-text);
    } */




  
/* 
  @media only screen and (max-width: 600px) {
    .search {
  width: 120px;
  }
} */


    </style>