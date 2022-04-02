<script>
  export let Class = ''
  export let color = ''
</script>

<div
  class={`container-fluid text-white ${Class}`}
  style={`background: ${color}`}
>
  <div class="d-flex justify-content-center p-2 h-5">
    <slot />
  </div>
</div>
