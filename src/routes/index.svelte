<script lang="ts">
  import { page } from '$app/stores'
  import DropdownDivider from '$lib/components/DropdownDivider.svelte'
  import DropdownItem from '$lib/components/DropdownItem.svelte'
  import ModalFullscreen from '$lib/components/ModalFullscreen.svelte'
  import Navbar from '$lib/components/Navbar.svelte'
  import NavDropdown from '$lib/components/NavDropdown.svelte'
  import NavItem from '$lib/components/NavItem.svelte'
  import { onMount } from 'svelte'
  import Banner from './_index/Banner.svelte'
  import { selectedDrinks } from './_index/compare'
  import DrinkCompareCard from './_index/DrinkCompareCard.svelte'
  import Preferences from './_index/Preferences.svelte'
  import Rack from './_index/Rack.svelte'

  let drinks: Drink[]

  onMount(async () => {
    const res = await fetch('/drinks')
    drinks = await res.json()

    const params = new URLSearchParams(window.location.search)
    const drink0 = params.get('drink0')
    const drink1 = params.get('drink1')
    if (drink0 == null || drink1 == null) return
    if (drink0 == drink1) return

    $selectedDrinks[0] = drinks.find((d) => d.id === params.get('drink0'))
    $selectedDrinks[1] = drinks.find((d) => d.id === params.get('drink1'))

    new bootstrap.Modal(document.querySelector('#compare')).show()
  })
</script>

<Navbar title="YourBoozeBuddy">
  <div slot="middle" data-bs-toggle="modal" data-bs-target="#compare">
    {#if $selectedDrinks.includes(null) == false}
      <button class="btn btn-outline-primary">Compare</button>
    {:else}
      <span class="navbar-text">Select 2 to compare</span>
    {/if}
  </div>
  <NavItem href="/" active={$page.routeId == ''}>Home</NavItem>
  <NavItem href="/contact" active={$page.routeId == 'contact'}>Contact</NavItem>
  <NavDropdown name="Compare">
    <DropdownItem href="#">Vine</DropdownItem>
    <DropdownItem href="#">Vodka</DropdownItem>
    <DropdownItem href="#">Whiskey</DropdownItem>
    <DropdownItem href="#">Beer</DropdownItem>
    <DropdownItem href="#">Liquor</DropdownItem>
    <DropdownDivider />
    <DropdownItem href="#">Something else here</DropdownItem>
  </NavDropdown>
</Navbar>

<ModalFullscreen
  title={`${$selectedDrinks[0]?.name} VS ${$selectedDrinks[1]?.name}`}
  id="compare"
>
  {#if $selectedDrinks.includes(null) == false}
    <div class="container">
      <div class="row gx-5">
        <div class="col">
          <DrinkCompareCard drink={$selectedDrinks[0]} />
        </div>
        <div class="col">
          <DrinkCompareCard drink={$selectedDrinks[1]} />
        </div>
      </div>
    </div>
  {/if}
</ModalFullscreen>

<Banner Class="bg-primary">
  <div class="m-5">
    <h1 class="fw-bold">YourBoozeBuddy.com</h1>
    <p>Find your best/cheapest booze in the entire world!</p>
  </div>
</Banner>

{#if drinks}
  <Rack drinks={drinks.slice(0, 4)} />

  <Banner style="background: var(--bs-blue)">
    <h5 class="bg text-center text-justify m-5 fs-3 text-decoration-underline">
      The best price and the best quality recommended!
    </h5>
  </Banner>

  <Rack drinks={drinks.slice(4)} />
{/if}

<Preferences />
