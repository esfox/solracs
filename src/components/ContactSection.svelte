<script>
  import Button from './Button.svelte';
</script>

<section>
  <h1>
    less yapping,
    <div>more creating.</div>
  </h1>
  <Button href="mailto:sabarillocarloschristian@gmail.com" class="email">
    sabarillocarloschristian@gmail.com
  </Button>
</section>

<style lang="scss">
  section {
    text-align: center;
    padding-bottom: 58px;

    > :global(.email) {
      margin-top: 24px;
      height: 60px;

      @media (min-width: 480px) {
        font-size: 20px;
      }
    }
  }

  h1 {
    font-weight: 700;
    font-size: 40px;
    letter-spacing: -1px;
  }

  @media (min-width: 768px) {
    h1 div {
      display: inline;
    }

    section {
      padding-bottom: 96px;

      > :global(.email) {
        margin-top: 36px;
        padding-inline: 36px;
        height: 80px;
        font-size: 36px;
      }
    }
  }
</style>
