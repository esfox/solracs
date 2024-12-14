<script lang="ts">
  import LinkSectionWithBg from './LinkSectionWithBg.svelte';
  import { works } from '../data';

  const workTypesArray = works.map((work) => work.type);
</script>

<section>
  <h1>
    featured
    <p class="alt-font">works</p>
  </h1>

  <ul class="list">
    {#each workTypesArray as workType}
      <li>
        <LinkSectionWithBg
          href={`/${workType.slug}`}
          bgImageSrc={workType.featuredImage}
          bgImageAlt={workType.label}
          label={workType.label}
        />
      </li>
    {/each}
  </ul>

  <div class="marquee">
    <div class="scrolling">
      <div>
        humility
        <span class="alt-font">in</span>
        simplicity.
      </div>

      <div aria-hidden="true">
        humility
        <span class="alt-font">in</span>
        simplicity.
      </div>
    </div>
  </div>
</section>

<style lang="scss">
  .alt-font {
    font-family: var(--font-secondary);
    font-style: italic;
  }

  h1 {
    font-weight: 700;
    font-size: 64px;
    line-height: 0.85;
    text-align: center;
    letter-spacing: -3px;
    padding-block: 64px;
  }

  .list {
    display: grid;
    gap: 10px;
    list-style: none;
    padding: 0;
    padding-bottom: 70px;
  }

  .marquee {
    display: flex;
    height: 150px;
    font-size: 112px;
    background-color: var(--black);
    color: var(--white);
    font-weight: 700;
    text-wrap: nowrap;
    overflow: hidden;
    letter-spacing: -3px;
    padding-top: 8px;

    .scrolling {
      display: flex;
      animation: marquee 10s linear infinite;

      div {
        padding-inline: 50px;
      }
    }

    .alt-font {
      font-weight: 500;
    }
  }

  @keyframes marquee {
    from {
      transform: translateX(0);
    }
    to {
      transform: translateX(-50%);
    }
  }

  @media (min-width: 480px) {
    h1 p {
      display: inline;
    }
  }

  @media (min-width: 768px) {
    .list {
      gap: 48px;
    }
  }
</style>
