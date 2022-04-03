<script lang="ts">
  export let drink: Drink
</script>

<div class="DrinkDetails card">
  <div class="card-body">
    <img
      src={drink.image}
      class="card-img-top w-100"
      alt="Image of {drink.name}"
    />
  </div>
</div>
<h3 class="fs-3 text-center my-3">{drink.name}</h3>
<p class="text-decoration-underline">Description :</p>
<p>{drink.description}</p>
