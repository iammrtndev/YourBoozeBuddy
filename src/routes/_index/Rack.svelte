<script lang="ts">
  import { chunk } from '$lib/scripts/utils'
  import DrinkCard from './DrinkCard.svelte'

  export let drinks: Drink[]
</script>

<div class="container py-5">
  <div class="row flex-column flex-md-row px-5 px-md-2">
    {#each chunk(drinks, 4) as rows}
      {#each rows as drink}
        <div class="col my-3">
          <DrinkCard {drink} />
        </div>
      {/each}
    {/each}
  </div>
</div>
