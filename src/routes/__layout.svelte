<script>
  import Nav from '$lib/nav/nav.svelte';
  import Footer from '$lib/footer/footer.svelte';
  import '../global.css';
</script>

<div class="flex flex-col h-screen">
  <div><Nav /></div>
  <div class="container flex-grow mx-auto px-4 py-4">
    <slot></slot>
  </div>
  <div><Footer /></div>
</div> 

