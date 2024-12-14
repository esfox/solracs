<script lang="ts">
  import Button from './Button.svelte';

  let dialog: HTMLDialogElement;

  export const open = () => {
    dialog.showModal();
  };

  export const close = () => {
    dialog.close();
  };
</script>

<dialog bind:this={dialog}>
  <Button class="close" icon onClick={close}>
    <svg
      fill="var(--white)"
      height="100%"
      width="100%"
      version="1.1"
      id="Layer_1"
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 512 512"
      xml:space="preserve"
    >
      <g>
        <g>
          <polygon
            points="512,59.076 452.922,0 256,196.922 59.076,0 0,59.076 196.922,256 0,452.922 59.076,512 256,315.076 452.922,512
            512,452.922 315.076,256         "
          />
        </g>
      </g>
    </svg>
    <!-- <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24"> -->
    <!--   <path -->
    <!--     d="M 4.7070312 3.2929688 L 3.2929688 4.7070312 L 10.585938 12 L 3.2929688 19.292969 L 4.7070312 20.707031 L 12 13.414062 L 19.292969 20.707031 L 20.707031 19.292969 L 13.414062 12 L 20.707031 4.7070312 L 19.292969 3.2929688 L 12 10.585938 L 4.7070312 3.2929688 z" -->
    <!--   ></path> -->
    <!-- </svg> -->
  </Button>
  <slot />
</dialog>

<style lang="scss">
  dialog {
    z-index: 10;
    padding: 12px;
    width: 100%;
    height: 100%;
    max-width: 100%;
    max-height: 100%;
    top: 0;
    left: 0;
    border: none;
    outline: none;
    background: none;

    &::backdrop {
      background: color-mix(in srgb, var(--black) 70%, transparent);
    }

    :global(.close) {
      background: color-mix(in srgb, var(--white) 15%, transparent);
      outline: none;
      border: none;
      position: fixed;
      width: 48px;
      height: 48px;
      top: 24px;
      right: 24px;
      padding: 12px;
      border-radius: 1000px;

      &:hover {
        cursor: pointer;
        background: color-mix(in srgb, var(--white) 30%, transparent);
      }
    }
  }
</style>
