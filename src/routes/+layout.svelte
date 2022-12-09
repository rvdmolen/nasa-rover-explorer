<script>
  import {beforeUpdate, onMount} from 'svelte'
  import { page } from '$app/stores';
  import Nav from '$lib/nav/nav.svelte';
  import Banner from '$lib/banner/banner.svelte';
  import Footer from '$lib/footer/footer.svelte';
  import PageTransitions from '$lib/transition/PageTransitions.svelte';
  import '../app.css';


  export let key = $page.url.pathname // https://github.com/GiorgosK/svelte-page-transitions/issues/2
  beforeUpdate(() => {
      key = $page.url.pathname
  })

  export let ready = false;
  onMount(() => {
      ready = true;
  })
</script>


<div>
    <Nav />
    <Banner />
</div>

<div class="grow flex flex-col">
    <PageTransitions refresh={key}>
        <slot />
    </PageTransitions>
</div>

<div>
    <Footer />
</div>

