<script lang="ts">
  export let href = '#';
  export let bgImageSrc = '';
  export let bgImageAlt = '';
  export let label = '';
</script>

<a {href}>
  <div class="bg-container">
    <img src={bgImageSrc} alt={bgImageAlt} />
  </div>
  <h3>{label}</h3>
</a>

<style lang="scss">
  a {
    display: grid;
    place-items: center;
    position: relative;
    width: 100%;
    height: 280px;
    text-decoration: none;

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

  @keyframes marquee {
    from {
      transform: translateX(0);
    }
    to {
      transform: translateX(-50%);
    }
  }

  @media (min-width: 768px) {
    a {
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
