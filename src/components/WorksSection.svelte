<script lang="ts">
  import { works } from '../data';
</script>

<section>
  <h1>
    featured
    <p class="alt-font">works</p>
  </h1>

  <ul class="list">
    {#each works as work}
      <li class="work">
        <div class="bg-container">
          <img src={work.featuredImage} alt={work.title} />
        </div>
        <h3>{work.title}</h3>
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

  .work {
    display: grid;
    place-items: center;
    position: relative;
    width: 100%;
    height: 280px;

    .bg-container {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      overflow: hidden;

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        z-index: -1;
        filter: brightness(0.5);
        transition:
          filter 150ms ease-in-out,
          transform 150ms ease-in-out;
      }
    }

    h3 {
      font-size: 36px;
      padding-block: 18px;
      color: var(--white);
      z-index: 1;
      transition: font-size 150ms ease-in-out;
    }

    &:hover {
      h3 {
        font-size: 38px;
      }

      img {
        filter: brightness(0.65);
        transform: scale(1.05);
      }
    }
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

    .work {
      height: 480px;

      h3 {
        font-size: 48px;
      }

      &:hover {
        h3 {
          font-size: 52px;
        }
      }
    }
  }
</style>
