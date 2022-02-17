<script>
  import Nav from '$lib/nav/nav.svelte';
  import Footer from '$lib/footer/footer.svelte';
  import '../global.css';

  let innerHeight;
</script>

<svelte:window bind:innerHeight />

<!-- <div class="flex flex-col h-screen">
  <div class="sticky"><Nav /></div>
  <div class="container flex-grow mx-auto px-4 py-4">
    <slot></slot>
  </div>
  <div><Footer /></div>
</div>  -->

<Nav />

<div style="min-height: {innerHeight-325}px;" class="container flex-grow mx-auto px-4 py-4">
  <slot></slot>
  
</div>


<div><Footer /></div>



<!-- <div class="flex flex-col justify-between h-screen">
  <div class="sticky fixed"><Nav /></div>
  <div class="container flex-grow mx-auto px-4 py-4">
    <slot></slot>
  </div>
  <div><Footer /></div>
</div>  -->