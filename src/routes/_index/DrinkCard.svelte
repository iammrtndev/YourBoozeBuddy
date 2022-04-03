<script lang="ts">
  import { select, selectedDrinks } from './compare'

  export let drink: Drink
  let active = false

  $: active = $selectedDrinks.includes(drink)
</script>

<div
  class="Drink card"
  class:active
  on:click={() => select(drink)}
>
  <div class="card-body">
    <img
      src={drink.image}
      class="card-img-top w-100"
      alt="Image of {drink.name}"
    />
    <h5 class="card-title text-center fw-bold">{drink.name}</h5>
    <p class="card-text">
      {drink.description.split(' ').slice(0, 10).join(' ') + '...'}
    </p>
  </div>
</div>

<style>
  .Drink {
    cursor: pointer;
  }

  .active {
    outline: 2px solid var(--bs-primary);
  }
</style>
