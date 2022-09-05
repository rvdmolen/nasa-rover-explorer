
/** @type {import('./$types').PageLoad} */
export const load = async ({ params }) => {   
    const response = await fetch(
        `https://dev.to/api/articles/${params.slug}`
    )
    const post = await response.json()
    return {
        post
    }
};