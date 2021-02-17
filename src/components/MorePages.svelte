<script>
  export let total_pages
  import { current_page } from '../components/store.js'

  import { createEventDispatcher } from 'svelte';
  const dispatch = createEventDispatcher();

  function handleMorePages() {
    $current_page +=1
    dispatch('change', ($current_page) );
  }
  
</script>

{#if (total_pages > 1) }

<section class= 'more'>
  <button class="page-link" aria-label="Previous" on:click|preventDefault ="{() => handleMorePages()}">MORE</button>
</section>

{/if}

<style>

.page-link {
  background-color:var(--secondary-colour);
  border-radius:30px;
  border: 2px solid var(--border-colour);
  margin: 5px 10px;
  text-decoration: none;
  font-weight: 600;
  padding-bottom: 4px;
  padding-left: 20px;
  padding-right: 20px;
  padding-top: 2px;
  display: flex;
  justify-content: center;
  transition: all .4s ease-in-out;
  min-width: 200px;
  color: var(--light-text)

}  
.page-link:hover {
  color: black;
    background-color: rgb(19, 143, 70);
    cursor: pointer;
  }

.more {
  background-color: var(--primary-colour);
  max-width: 1250px;
  margin: 10px auto;
  padding: 5px 20px;
  display: flex;
  justify-content: center;
  font-size: 16px;
  border-radius: 15px;
}
</style>