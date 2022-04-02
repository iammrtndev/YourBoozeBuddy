<script lang="ts">
  import { select, selectedDrinks } from './compare'

  export let drink: Drink
  let activeOne = false
  let activeTwo = false

  $: activeOne = $selectedDrinks[0] == drink
  $: activeTwo = $selectedDrinks[1] == drink
</script>

<div
  class="Drink card"
  class:activeOne
  class:activeTwo
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

  .activeOne {
    border: 3px solid var(--bs-primary);
  }

  .activeTwo {
    border: 3px solid var(--bs-blue);
  }
</style>
