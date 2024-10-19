<script lang="ts">
  const works = [
    {
      image:
        'https://fastly.picsum.photos/id/216/1920/1080.jpg?hmac=eRpceR4sD-vJpndVIFqLSdcDyDjiw5UOUznbHS4C2Yo',
      title: 'Work 1',
    },
    {
      image:
        'https://fastly.picsum.photos/id/358/1920/1080.jpg?hmac=1FA7Zn5y4_b671yi9SPafeIjAymnftxjw8iqqo2rHik',
      title: 'Work 2',
    },
    {
      image:
        'https://fastly.picsum.photos/id/301/1920/1080.jpg?hmac=-h20lEcazeSzwCALlmynk0Tgufw8NUP3OP4Bgz91jSs',
      title: 'Work 3',
    },
  ];
</script>

<section>
  <h1>
    featured
    <p class="alt-font">works</p>
  </h1>

  <ul class="list">
    {#each works as work}
      <li class="work">
        <img src={work.image} alt={work.title} />
        <h3>{work.title}</h3>
      </li>
    {/each}
  </ul>

  <div class="marquee">
    <div class="scrolling">
      <div>
        humility
        <span class="alt-font">in</span>
        simplicity
      </div>
      <div aria-hidden="true">
        humility
        <span class="alt-font">in</span>
        simplicity
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
    position: relative;
    height: 280px;

    img {
      position: absolute;
      width: 100%;
      height: 100%;
      object-fit: cover;
      z-index: -1;
      filter: brightness(0.5);
    }

    h3 {
      width: 100%;
      position: absolute;
      bottom: 0;
      text-align: center;
      padding-block: 18px;
      color: var(--white);
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
</style>
