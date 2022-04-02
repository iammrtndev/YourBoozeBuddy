<script lang="ts">
  import Banner from './_index/Banner.svelte'
  import { selectedDrinks } from './_index/compare'
  import Preferences from './_index/Preferences.svelte'
  import Rack from './_index/Rack.svelte'
</script>

<Banner Class="bg-primary">
  <div class="m-5">
    <h1 class="fw-bold">YourBoozeBuddy.com</h1>
    <p>Find your best/cheapest booze in the entire world!</p>
  </div>
</Banner>

{#if $selectedDrinks[0]}
  {$selectedDrinks[0].id}
{/if}

{#if $selectedDrinks[1]}
  {$selectedDrinks[1].id}
{/if}

{#await fetch('/drinks') then res}
  {#await res.json() then drinks}
    <Rack drinks={drinks.slice(0, 4)} />

    <Banner color="#0583F2">
      <h5
        class="bg text-center text-justify m-5 fs-3 text-decoration-underline"
      >
        The best price and the best quality recommended!
      </h5>
    </Banner>

    <Rack drinks={drinks.slice(4)} />
  {/await}
{/await}

<Preferences />
