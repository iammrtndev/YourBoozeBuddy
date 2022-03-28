<script>
  export let Class = ''
</script>

<div class={`container-fluid text-white ${Class}`}>
  <div class="d-flex justify-content-center p-2 h-5">
    <slot />
  </div>
</div>
