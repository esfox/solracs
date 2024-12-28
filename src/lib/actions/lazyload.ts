// Taken from https://svelte.dev/playground/adb8dc564044415f8ffbbd240a39d68d?version=3.44.2

// See how the options work here: https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API
let intersectionObserverOptions = {
  root: null,
  rootMargin: '0px',
  threshold: 0,
};

export const lazyload = (
  image: HTMLImageElement,
  { src, onLoad }: { src: string; onLoad: (image: HTMLImageElement) => void },
) => {
  const loaded = () => {
    onLoad(image);
  };

  const observer = new IntersectionObserver((entries) => {
    if (entries[0].isIntersecting) {
      image.src = src; // replace placeholder src with the image src on observe

      // check if instantly loaded
      if (image.complete) {
        loaded();
      } else {
        image.addEventListener('load', loaded); // if the image isn't loaded yet, add an event listener
      }
    }
  }, intersectionObserverOptions);

  observer.observe(image); // intersection observer

  return {
    destroy() {
      image.removeEventListener('load', loaded); // clean up the event listener
    },
  };
};
