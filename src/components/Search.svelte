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
<section id='search'>
  <form class='flex justify-end items-center pr-0.5' label='search form'
    on:submit|preventDefault = {handleOnSubmit}>
    <input 
      label='search'
      class='bg-transparent w-24 xl:w-48 h-7 rounded-full text-l px-2 text-textLight placeholder-textLight::placeholder border-2 border-border'
      type='text'
      placeholder='Search...'
      bind:value={searchTerm}
      
    />
  </form>
</section>