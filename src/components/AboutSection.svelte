<section>
  <img src="about-pic.jpeg" alt="solracs portrait" class="about-pic" />

  <div class="text">
    <h1>
      about
      <div class="alt-font">solracs.</div>
    </h1>

    <div class="paragraphs">
      <p>
        an aspiring multimedia artist looking to create and make your visions into reality through
        various mediums with a philosophy of “humility in simplicity”.
      </p>

      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus efficitur dapibus
        vestibulum. Phasellus elementum nisl eu quam pellentesque elementum. Ut placerat auctor
        porttitor. Donec placerat sem neque, congue aliquet elit pulvinar ut. Cras imperdiet lectus
        nec tortor laoreet, sit amet egestas metus condimentum. Mauris neque justo, interdum ut
        massa laoreet, ullamcorper scelerisque urna. Ut consectetur, nisi ac consectetur rutrum,
        libero lorem sagittis orci, ut vehicula neque mi eu dui.
      </p>

      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus efficitur dapibus
        vestibulum. Phasellus elementum nisl eu quam pellentesque elementum. Ut placerat auctor
        porttitor.
      </p>
    </div>
  </div>
</section>

<style lang="scss">
  .about-pic {
    width: 100%;
    height: 600px;
    margin: auto;
    margin-top: 48px;
    object-fit: cover;
  }

  h1 {
    font-weight: 700;
    font-size: 64px;
    line-height: 0.85;
    text-align: center;
    letter-spacing: -3px;
    padding-block: 48px;
  }

  .alt-font {
    font-family: var(--font-secondary);
    font-style: italic;
    font-weight: 500;
  }

  .paragraphs {
    display: grid;
    gap: 24px;
  }

  p {
    margin-inline: 20px;
    text-align: center;
    font-size: 16px;
    line-height: 22px;
  }

  @media (min-width: 480px) {
    h1 {
      margin-inline: 40px;
      text-align: start;

      div {
        display: inline;
      }
    }

    .alt-font {
      margin-top: -2px;
    }

    p {
      text-align: start;
      margin-inline: 40px;
    }

    .about-pic {
      width: 40%;
      height: 100%;
    }
  }

  @media (min-width: 900px) {
    section {
      display: flex;
      align-items: center;
      flex-direction: row-reverse;
      margin-top: 70px;
    }

    h1 {
      padding-top: 0;
    }

    .about-pic {
      width: 480px;
      height: 560px;
      margin-top: 0;
      margin-inline: 40px;
    }
  }
</style>
