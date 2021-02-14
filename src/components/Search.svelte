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

<form 
  on:submit|preventDefault = {handleOnSubmit}>
  <input 
    label='search'
    class='search'
    type='text'
    placeholder='Search...'
    bind:value={searchTerm}
    on:change = {(e) => (e.target.value)}
  />
</form>

  <style>
    input[type=text], .search {
      color: var(--light-text);
      border-left: 2px solid var(--light-text);
      border-top: 2px solid var(--light-text);
      border-bottom: 2px solid var(--border-colour);
      border-right: 2px solid var(--border-colour);
    }
  
    input[type=text]::placeholder {
      color:   var(--light-text);
    }

    form {
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
  }

    </style>