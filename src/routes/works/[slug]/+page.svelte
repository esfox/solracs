<script lang="ts">
  import type { PageData } from './$types';
  import ArrowDown from '$lib/assets/icons/arrow-down.svg?raw';
  import Expand from '$lib/assets/icons/expand.svg?raw';
  import { lazyload } from '$lib/actions/lazyload';
  import Button from '../../../components/Button.svelte';
  import PhotoSwipeLightbox from 'photoswipe/lightbox';
  import 'photoswipe/photoswipe.css';
  import { onMount } from 'svelte';
  import Lightbox from '../../../components/Lightbox.svelte';

  type WorkImage = PageData['work']['images'][number];

  export let data: PageData;

  $: work = data.work;
  $: nextWork = data.nextWork;

  let lightbox: Lightbox;
  let enlargedImage: WorkImage;
  let loadingImages = true;

  const gallerySelector = '#media';

  const onImageLoad = (image: HTMLImageElement) => {
    image.classList.add('loaded');
  };

  const enlargeImage = (image: WorkImage) => {
    enlargedImage = image;
    lightbox.open();
  };

  const onImageClick = (image: WorkImage) => {
    enlargeImage(image);
  };

  const onImageKeypress = (event: KeyboardEvent, image: WorkImage) => {
    const { currentTarget, key } = event;
    const isTriggerKey = key === 'Enter' || key === ' ';
    if (document.activeElement !== currentTarget || !isTriggerKey) {
      return;
    }

    enlargeImage(image);
  };

  // onMount(async () => {
  //   // Taken from: https://github.com/dimsemenov/PhotoSwipe/issues/796#issuecomment-1600367024
  //   async function prepareImagesForPhotoswipe() {
  //     // Get the <a> tags from the image gallery
  //     const imagesList: NodeListOf<HTMLAnchorElement> = document.querySelectorAll(
  //       `${gallerySelector} a`,
  //     );
  //     const promisesList: Promise<void>[] = [];
  //     imagesList.forEach((element) => {
  //       const promise = new Promise<void>(function (resolve) {
  //         let image = new Image();
  //         const href = element.getAttribute('href');
  //         if (!href) {
  //           return;
  //         }
  //
  //         image.src = href;
  //         image.onload = () => {
  //           element.dataset.pswpWidth = image.width.toString();
  //           element.dataset.pswpHeight = image.height.toString();
  //           resolve(); // Resolve the promise only if the image has been loaded
  //         };
  //
  //         image.onerror = () => {
  //           resolve();
  //         };
  //       });
  //
  //       promisesList.push(promise);
  //     });
  //
  //     // Wait for all promises to be resolved
  //     await Promise.all(promisesList);
  //   }
  //
  //   await prepareImagesForPhotoswipe();
  //   loadingImages = false;
  //
  //   const gallery = new PhotoSwipeLightbox({
  //     gallery: gallerySelector,
  //     children: 'a',
  //     showHideAnimationType: 'fade',
  //     pswpModule: () => import('photoswipe'),
  //   });
  //
  //   gallery.init();
  // });
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

  <section id="media">
    {#each work.images as image}
      <div
        class="item"
        role="button"
        on:click={() => onImageClick(image)}
        on:keypress={(event) => onImageKeypress(event, image)}
        tabindex="0"
      >
        <img
          use:lazyload={{
            src: image.thumbnail,
            onLoad: onImageLoad,
          }}
          alt="porfolio"
        />
        <Button class="expand" icon>
          {@html Expand}
        </Button>
      </div>
    {/each}
  </section>

  <!-- <section id="media"> -->
  <!--   {#if loadingImages} -->
  <!--     <h2 class="loading">loading...</h2> -->
  <!--   {/if} -->
  <!---->
  <!--   {#each work.images as image} -->
  <!--     <a href={image.url} target="_blank" class="item"> -->
  <!--       {#if !loadingImages} -->
  <!--         <img src={image.thumbnail} alt={work.title} /> -->
  <!--       {/if} -->
  <!--       <Button class="expand" icon> -->
  <!--         {@html Expand} -->
  <!--       </Button> -->
  <!--     </a> -->
  <!--   {/each} -->
  <!-- </section> -->

  <section class="next">
    <img src={nextWork.featuredImage} alt={nextWork.title} />
    <Button href={`/works/${nextWork.slug}`} class="next-project">next project</Button>
  </section>
</div>

<Lightbox bind:this={lightbox}>
  {#if enlargedImage}
    <img src={enlargedImage.url} alt="porfolio" loading="lazy" />
  {/if}
</Lightbox>

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

  #media {
    display: grid;
    gap: 20px;

    // .loading {
    //   text-align: center;
    //   margin: 16px 32px;
    //   font-weight: 500;
    // }

    > .item {
      position: relative;
      display: grid;
      place-items: end end;

      img {
        width: 100%;
        height: 480px;
        cursor: pointer;
        object-fit: cover;
        opacity: 0;
        transform: translateY(20px);
        transition:
          opacity 0.4s ease-in-out,
          transform 0.4s ease-in-out;

        &:global(.loaded) {
          opacity: 1;
          transform: translateY(0);
        }
      }

      :global(.expand) {
        position: absolute;
        bottom: 20px;
        right: 20px;
        background: color-mix(in srgb, var(--black) 50%, transparent);

        &:hover {
          background: color-mix(in srgb, var(--black) 70%, transparent);
        }
      }
    }

    @media (min-width: 768px) {
      grid-template-columns: repeat(3, 1fr);
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
      filter: brightness(0.5);
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
