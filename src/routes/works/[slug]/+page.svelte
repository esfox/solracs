<script lang="ts">
  import type { PageData } from './$types';
  import ArrowDown from '$lib/assets/icons/arrow-down.svg?raw';
  import Expand from '$lib/assets/icons/expand.svg?raw';
  import Button from '../../../components/Button.svelte';

  export let data: PageData;
  $: work = data.work;
  $: nextWork = data.nextWork;
</script>

<section class="hero">
  <img src={work.featuredImage} alt={work.title} />
  <h1>{work.title}</h1>
  <a href="#details">
    <Button class="arrow-down" icon>
      {@html ArrowDown}
    </Button>
    <!-- <button class="arrow-down"> -->
    <!--   {@html ArrowDown} -->
    <!-- </button> -->
  </a>
</section>

<section id="details">
  <div class="heading">
    <h1>{work.title}</h1>
    <h2>{work.type.label}</h2>
  </div>

  <p>{work.description}</p>
</section>

<section class="media">
  {#each work.images as image}
    <div>
      <img src={image} alt={work.title} />
      <Button class="expand" icon>
        {@html Expand}
      </Button>
    </div>
  {/each}
</section>

<section class="next">
  <img src={nextWork.featuredImage} alt={nextWork.title} />
  <Button href={`/works/${nextWork.slug}`} class="next-project">next project</Button>
</section>

<style lang="scss">
  .hero {
    display: grid;
    place-items: center;
    position: relative;

    img {
      width: 100%;
      height: 100vh;
      object-fit: cover;
    }

    h1 {
      position: absolute;
      top: 24px;
      font-size: 40px;
      font-weight: 700;
      letter-spacing: -0.05em;
    }

    :global(.arrow-down) {
      position: absolute;
      bottom: 28px;
      left: 50%;
      transform: translateX(-50%);
      width: 64px;
      height: 64px;
      background: color-mix(in srgb, var(--black) 50%, transparent);
      border-radius: 1000px;
      border: 0;
      padding: 12px;
      cursor: pointer;

      &:hover {
        background: var(--black);
      }
    }
  }

  #details {
    padding-top: 24px;
    padding-bottom: 50px;
    padding-inline: 16px;

    .heading {
      display: flex;
      flex-wrap: wrap;

      h1 {
        font-size: 64px;
        font-weight: 700;
        letter-spacing: -0.05em;
      }

      h2 {
        flex-grow: 1;
        display: grid;
        place-items: end end;
        font-family: var(--font-secondary);
        text-transform: lowercase;
        letter-spacing: -0.05em;
        margin-top: 4px;
      }
    }

    p {
      line-height: 24px;
      text-align: center;
      margin-top: 20px;
      white-space: pre-wrap;

      &:first-of-type {
        margin-top: 32px;
      }
    }
  }

  .media {
    display: grid;
    gap: 20px;

    > div {
      position: relative;
      display: grid;
      place-items: end end;

      img {
        width: 100%;
        cursor: pointer;
      }

      :global(.expand) {
        position: absolute;
        bottom: 20px;
        right: 20px;
      }
    }
  }

  .next {
    width: 100%;
    position: relative;
    display: grid;
    place-items: center;
    margin-block: 50px;

    img {
      width: 100%;
      height: 280px;
      object-fit: cover;
    }

    & > :global(.next-project) {
      position: absolute;
      padding-inline: 32px;
      font-size: 24px;
      z-index: 2;
      letter-spacing: -0.05em;
    }
  }

  @media (min-width: 768px) {
    #details {
      h2 {
        margin-top: 0;
      }
    }
  }
</style>
