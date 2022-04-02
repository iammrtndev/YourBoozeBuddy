<script lang="ts">
  import { chunk } from '$lib/scripts/utils'

  export let drinks: Drink[]
</script>

<div class="container py-5">
  <div class="row flex-column flex-md-row px-5 px-md-2">
    {#each chunk(drinks, 4) as rows}
      {#each rows as drink}
        <div class="col my-3">
          <div class="card">
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
        </div>
      {/each}
    {/each}
  </div>
</div>
