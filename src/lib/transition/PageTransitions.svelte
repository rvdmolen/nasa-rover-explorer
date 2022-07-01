<script>
    import { fly, fade } from 'svelte/transition';
    export let refresh = '';
</script>

{#key refresh}
<!--    <div id="transition-container" in:fly="{{ y: -50, duration: 250, delay: 300 }}">-->
<!--        <slot></slot>-->
<!--    </div>-->
    <div id="transition-container" in:fade>
        <slot></slot>
    </div>
{/key}
