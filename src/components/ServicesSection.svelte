<section>
  <h1>
    tools
    <span class="alt-font">and</span>
    <div>services</div>
  </h1>

  <h2>Photography</h2>
  <p>Lightroom</p>

  <h2>Graphic Design</h2>
  <p>Photoshop | Illustrator</p>

  <h2>Motion Graphics</h2>
  <p>After Effects | Premiere Pro</p>

  <h2>Music Production</h2>
  <p>Reaper | FL Studio</p>
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
    padding-block: 56px;
  }

  .alt-font {
    font-family: var(--font-secondary);
    font-style: italic;
    padding-inline: 2px;
  }

  h2 {
    font-size: 36px;
    font-weight: 700;
    letter-spacing: -1px;

    &:not(:first-of-type) {
      margin-top: 32px;
    }
  }

  p {
    font-size: 20px;
    font-weight: 400;
    letter-spacing: -1px;
    text-align: end;
    margin-top: 18px;
  }
</style>
