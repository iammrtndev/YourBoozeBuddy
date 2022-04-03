<script>
  import Navbar from '../lib/components/Navbar.svelte'
  import NavItem from '$lib/components/NavItem.svelte'
  import NavDropdown from '$lib/components/NavDropdown.svelte'
  import DropdownItem from '$lib/components/DropdownItem.svelte'
  import BootstrapJS from 'bootstrap/dist/js/bootstrap.min.js?url'
  import DropdownDivider from '$lib/components/DropdownDivider.svelte'
  import { page } from '$app/stores'
</script>

<svelte:head>
  <script src={BootstrapJS}></script>
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="" />
  <link
    href="https://fonts.googleapis.com/css2?family=Fredoka:wght@300&display=swap"
    rel="stylesheet"
  />
</svelte:head>

<slot />

<style global>
  @import '$lib/assets/theme.css';

  body {
    font-family: 'Fredoka', sans-serif;
    font-size: 18px;
  }
</style>
