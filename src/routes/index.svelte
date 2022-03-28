<script>
  import Banner from './_components/Banner.svelte'
  import Preferences from './_components/Preferences.svelte'
  import Products from './_components/Products.svelte'
</script>

<Banner Class="bg-primary">
  <div class="m-5">
    <h1 class="fw-bold">YourBoozeBuddy.com</h1>
    <p>Find your best/cheapest booze in the entire world!</p>
  </div>
</Banner>

<Products />

<Banner Class="bg-secondary">
  <h5 class="text-center text-justify m-5 fs-3 text-decoration-underline">
    The best price and the best quality recommended!
  </h5>
</Banner>

<Products />


<Preferences />
