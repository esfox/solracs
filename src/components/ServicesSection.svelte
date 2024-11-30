<section>
  <h1>
    tools
    <span class="alt-font">and</span>
    <div>services</div>
  </h1>

  <div class="item">
    <h2>Photography</h2>
    <p>Lightroom</p>
  </div>

  <div class="item">
    <h2>Graphic Design</h2>
    <p>Photoshop | Illustrator</p>
  </div>

  <div class="item">
    <h2>Motion Graphics</h2>
    <p>Premiere | After Effects</p>
  </div>

  <div class="item">
    <h2>Music Production</h2>
    <p>Reaper | FL Studio</p>
  </div>
</section>

<style lang="scss">
  section {
    padding-inline: 20px;
  }

  h1 {
    font-weight: 700;
    font-size: 64px;
    line-height: 0.85;
    text-align: center;
    letter-spacing: -3px;
    margin-bottom: 56px;
  }

  .alt-font {
    font-family: var(--font-secondary);
    font-style: italic;
    font-weight: 500;
    padding-inline: 2px;
  }

  .item:not(:first-of-type) {
    margin-top: 32px;
  }

  h2 {
    font-size: 36px;
    font-weight: 700;
    letter-spacing: -1px;
  }

  p {
    font-size: 20px;
    font-weight: 400;
    letter-spacing: -1px;
    text-align: end;
    margin-top: 18px;
  }

  @media (min-width: 768px) {
    section {
      width: 700px;
      margin: auto;
    }

    h1 div {
      display: inline;
    }

    .item {
      display: flex;
      align-items: center;
      justify-content: space-between;

      &:not(:first-of-type) {
        margin-top: 52px;
      }
    }

    p {
      margin-top: 0;
    }
  }

  @media (min-width: 1024px) {
    section {
      width: 1000px;
    }

    h1 {
      margin-bottom: 72px;
    }

    .alt-font {
      margin-top: -2px;
    }

    h2 {
      font-size: 42px;
    }

    p {
      font-size: 28px;
    }
  }
</style>
