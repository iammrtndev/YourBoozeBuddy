<script lang="ts">
  export let id: string
  export let title: string
</script>

<div class="modal fade" tabindex="-1" aria-hidden="true" {id}>
  <div class="modal-dialog modal-dialog-centered modal-fullscreen">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title">{title}</h5>
        <button
          type="button"
          class="btn-close"
          data-bs-dismiss="modal"
          aria-label="Close"
        />
      </div>
      <div class="modal-body">
        <slot />
      </div>
    </div>
  </div>
</div>
