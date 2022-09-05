<script>
    export let data;
</script>

<svelte:head>
    <title>{data.post.title}</title>
</svelte:head>

<article>
    <h1>{data.post.title}</h1>
    {@html data.post.body_html}
</article>