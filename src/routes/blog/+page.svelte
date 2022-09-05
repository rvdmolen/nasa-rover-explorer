<script>
    export let data;
</script>

<svelte:head>
    <title>Blog</title>
</svelte:head>

<section>
    <h1>Blog</h1>
    <ul>
        {#each data.posts as post}
            <li>
                <a href={`/blog/${post.id}`}> {post.title}</a>
            </li>
        {/each}

        {#each data.posts as post}
            <li>
                <a href={`/blog/${post.id}`}> {post.title}</a>
            </li>
        {/each}

        {#each data.posts as post}
            <li>
                <a href={`/blog/${post.id}`}> {post.title}</a>
            </li>
        {/each}
    </ul>
</section>