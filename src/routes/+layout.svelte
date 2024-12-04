<script lang="ts">
  import '../styles/reset.css';
  import '../styles/main.css';
  import Footer from '../components/Footer.svelte';
</script>

<main>
  <div>
    <slot />
  </div>
  <Footer />
</main>

<style lang="scss">
  main {
    height: 100%;
    display: flex;
    flex-direction: column;

    > div {
      flex-grow: 1;
    }
  }
</style>
