<script>
  import {beforeUpdate, onMount} from 'svelte'
  import { page } from '$app/stores';
  import Nav from '$lib/nav/nav.svelte';
  import Footer from '$lib/footer/footer.svelte';
  import PageTransitions from '$lib/transition/PageTransitions.svelte';
  import '../app.css';


  export let key = $page.url.pathname // https://github.com/GiorgosK/svelte-page-transitions/issues/2
  beforeUpdate(() => {
      key = $page.url.pathname
      console.log(`Key ${key}`);
      
  })

  export let ready = false;
  onMount(() => {
      console.log('loaded');
      ready = true;
  })
</script>

<Nav />

<div class="grow">
    <PageTransitions refresh={key}>
        <slot />
    </PageTransitions>
</div>

<Footer />
