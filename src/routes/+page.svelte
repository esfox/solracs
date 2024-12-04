<script lang="ts">
  import HeroSection from '../components/HeroSection.svelte';
  import WorksSection from '../components/WorksSection.svelte';
  import AboutSection from '../components/AboutSection.svelte';
  import ServicesSection from '../components/ServicesSection.svelte';
  import ContactSection from '../components/ContactSection.svelte';
  import Divider from '../components/Divider.svelte';
</script>

<div id="top" aria-hidden="true" style="height: 0; visibility: hidden;"></div>

<HeroSection />
<WorksSection />
<AboutSection />
<Divider class="about-services-divider" />
<ServicesSection />
<Divider class="services-contact-divider" />
<ContactSection />

<style lang="scss">
  :global(.about-services-divider) {
    margin-block: 56px;

    @media (min-width: 1024px) {
      margin-block: 72px;
    }
  }

  :global(.services-contact-divider) {
    margin-block: 56px;

    @media (min-width: 1024px) {
      margin-block: 96px;
    }
  }
</style>
