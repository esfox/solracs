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
  <h1 style:--bg-image={`url(${work.featuredImage})`}>
    {work.title}
  </h1>
  <a href="#details">
    <Button class="arrow-down" icon>
      {@html ArrowDown}
    </Button>
  </a>
</section>

<div class="hero-cover">
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
</div>

<style lang="scss">
  .hero {
    display: grid;
    place-items: center;
    position: sticky;
    top: 0;
    z-index: 0;

    img {
      width: 100%;
      height: 100vh;
      object-fit: cover;
      filter: brightness(0.6);
    }

    h1 {
      position: absolute;
      display: grid;
      place-items: center;
      width: 100%;
      height: 100%;
      top: 0;
      font-size: 72px;
      font-weight: 700;
      letter-spacing: -0.05em;
      color: #ffffff;
      background-image: var(--bg-image);
      background-position: center;
      background-size: cover;
      background-clip: text;
      filter: brightness(1.75);
      -webkit-text-fill-color: transparent;
    }

    a {
      position: absolute;
      bottom: 28px;
      left: 50%;
      transform: translateX(-50%);
      width: 64px;
      height: 64px;
    }

    :global(.arrow-down) {
      width: 100%;
      height: 100%;
      border-radius: 1000px;
      border: 0;
      padding: 12px;
      cursor: pointer;
    }
  }

  .hero-cover {
    background: var(--white);
    position: relative;
    z-index: 1;
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
    padding-block: 50px;

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
