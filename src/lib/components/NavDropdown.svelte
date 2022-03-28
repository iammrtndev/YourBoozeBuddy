<script>
  export let name = ''
</script>

<li class="nav-item dropdown">
  <a
    class="nav-link dropdown-toggle"
    id="navbarDropdown"
    role="button"
    data-bs-toggle="dropdown"
    aria-expanded="false"
  >
    {name}
  </a>
  <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
    <slot />
  </ul>
</li>
