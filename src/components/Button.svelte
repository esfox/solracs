<script lang="ts">
  let className: string = '';

  export { className as class };
  export let href: string | undefined = undefined;
  export let icon = false;
</script>

<svelte:element this={href ? 'a' : 'button'} class={className} href={href || undefined} class:icon>
  <slot />
</svelte:element>

<style>
  a,
  button {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    background: var(--black);
    border: none;
    border-radius: 1000px;
    color: var(--white);
    font-size: 16px;
    text-decoration: none;
    padding: 16px 16px;
    cursor: pointer;

    &:hover {
      background: var(--black-light);
    }

    &.icon {
      width: 48px;
      height: 48px;
      background: color-mix(in srgb, var(--black) 50%, transparent);
      border-radius: 1000px;
      border: 0;
      padding: 12px;

      &:hover {
        background: var(--black);
      }
    }
  }
</style>
