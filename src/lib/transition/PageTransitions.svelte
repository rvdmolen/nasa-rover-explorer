<script>
    import { fly, fade } from 'svelte/transition';
    export let refresh = '';
</script>


{#key refresh}
    <div class="transition-container flex-grow  flex" id="transition-container" in:fade>
       <slot></slot>
    </div>
{/key}
