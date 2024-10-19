<section>
  <img
    src="https://fastly.picsum.photos/id/151/1920/1080.jpg?hmac=CZiGkkZt5j1ZobW0BJfRfZdVQl250S_ia7gsV0X5mEg"
    alt="hero"
    class="bg-img"
  />
  <div class="headings">
    <h1>solracs.</h1>
    <h2>multimedia artist</h2>
  </div>
</section>

<style lang="scss">
  section {
    position: relative;
    height: 100vh;
  }

  .bg-img {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    object-fit: cover;
    z-index: -1;
  }

  .headings {
    width: 100%;
    position: absolute;
    bottom: 0;
    text-align: center;
    color: var(--white);
    padding-bottom: 72px;

    h1 {
      font-size: 64px;
      font-weight: 700;
      line-height: 0.85;
      letter-spacing: -2px;
    }

    h2 {
      font-family: var(--font-secondary);
      font-style: italic;
      font-size: 40px;
      font-weight: 400;
      line-height: 1;
    }
  }
</style>
