<script lang="ts">
  import LinkSectionWithBg from '../../components/LinkSectionWithBg.svelte';
  import { works, type workTypes } from '../../data';

  type WorkType = typeof workTypes;

  export let data: { workType: WorkType[keyof WorkType] };
  const workType = data.workType;
  const label = workType.label;
  const _works = works.filter((work) => work.type.slug === workType.slug);
</script>

<h1>{label}</h1>

{#each _works as work}
  <LinkSectionWithBg
    href={`works/${work.slug}`}
    label={work.title}
    bgImageSrc={work.featuredImage}
    bgImageAlt={work.title}
  />
{/each}

<br />

<style lang="scss">
  h1 {
    text-align: center;
    letter-spacing: -4px;
    font-size: 58px;
    padding-block: 100px;

    @media (min-width: 768px) {
      font-size: 100px;
    }
  }
</style>
