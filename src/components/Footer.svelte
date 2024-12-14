<script lang="ts">
  export let withBackToTop = false;
</script>

<section>
  <div class="text-content">
    <div>
      <h2>solracs.</h2>
      <p>humility <span class="alt-font">in</span> simplicity.</p>
    </div>
    <a href="/">back to home</a>
  </div>

  <div class="terms-link-bottom">
    {#if withBackToTop}
      <a href="#top">back to top</a>
    {:else}
      <a href="#">terms & conditions</a>
    {/if}
  </div>
</section>

<style lang="scss">
  section {
    background: var(--black);
    color: var(--white);
    padding-inline: 20px;
    padding-block: 28px;
  }

  .text-content {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  h2 {
    font-size: 32px;
  }

  p {
    margin-top: 2px;
  }

  .alt-font {
    font-family: var(--font-secondary);
    font-style: italic;
  }

  a {
    color: var(--white);
    text-decoration: none;
    padding-block: 12px;
  }

  .terms-link-bottom {
    display: grid;
    place-items: center;
    margin-top: 36px;

    a {
      padding: 12px;
    }
  }

  @media (min-width: 640px) {
    .terms-link-bottom {
      margin-top: -46px;
    }
  }
</style>
