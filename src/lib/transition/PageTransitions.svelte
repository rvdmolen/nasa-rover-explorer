<script>
    import { fly, fade } from 'svelte/transition';
    export let refresh = '';
</script>

{#key refresh}
    <div id="transition-container" in:fade>
        <slot></slot>
    </div>
{/key}
