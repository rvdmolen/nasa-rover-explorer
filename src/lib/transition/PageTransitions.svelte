<script>
    import { fly } from 'svelte/transition';
    export let refresh = '';
</script>

{#key refresh}
    <div class="flex-grow px-4 py-4 "
            in:fly="{{ y: -50, duration: 250, delay: 300 }}"
            out:fly="{{ y: -50, duration: 250 }}"
    >
        <slot/>
    </div>
{/key}
