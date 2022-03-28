<script>
  export let href = ''
  export let active = false
</script>

<li class="nav-item">
  <a class="nav-link" class:active aria-current="page" {href}><slot /></a>
</li>
