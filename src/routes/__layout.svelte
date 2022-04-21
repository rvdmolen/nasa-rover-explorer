<script>
    import {beforeUpdate, onMount} from 'svelte'
  import { page } from '$app/stores';
  import Nav from '$lib/nav/nav.svelte';
  import Footer from '$lib/footer/footer.svelte';
  import PageTransitions from '$lib/transition/PageTransitions.svelte';
  import '../global.css';

  export let key = $page.url.origin // https://github.com/GiorgosK/svelte-page-transitions/issues/2
  beforeUpdate(() => {
      key = $page.url.origin
      console.log(key);
  })

  export let ready = false;
  onMount(() => {
      console.log('loaded');
      ready = true;
  })
</script>

<Nav />

{#if (ready)}
    <PageTransitions refresh={key}>
        <div class="h-full">
            <slot />
        </div>
    </PageTransitions>
{/if}

<Footer />
