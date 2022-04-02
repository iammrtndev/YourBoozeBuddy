<script>
  export let Class = ''
  export let style = ''
</script>

<div
  class={`container-fluid text-white ${Class}`}
  {style}
>
  <div class="d-flex justify-content-center p-2 h-5">
    <slot />
  </div>
</div>
