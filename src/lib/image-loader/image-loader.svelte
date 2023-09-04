<script>
  export let src
  export let alt

  import IntersectionObserver from './image-observer.svelte'
  import Image from './image.svelte'
  let nativeLoading = false
</script>

<IntersectionObserver once={true} let:intersecting={intersecting}>
  {#if intersecting || nativeLoading}
    <Image {alt} {src} />
  {/if}
</IntersectionObserver>
