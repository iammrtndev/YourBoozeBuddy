<script lang="ts">
  export let title: string
</script>

<nav
  class="navbar navbar-expand-lg navbar-light bg-light sticky-top"
  style="background-color: #ffffff;"
>
  <div class="container-fluid">
    <a class="navbar-brand" href="/">{title}</a>
    <div id="middle">
      <slot name="middle" />
    </div>

    <button
      class="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarHide"
      aria-controls="navbarHide"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon" />
    </button>

    <div class="collapse navbar-collapse" id="navbarHide">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <slot />
      </ul>
    </div>
  </div>
</nav>

<style>
  nav {
    font-size: 18px;
  }

  #middle {
    position: absolute;
    height: 52px;
    top: 0;
    left: 50%;
    transform: translateX(-40%);
    display: flex;
    align-items: center;
  }
</style>
