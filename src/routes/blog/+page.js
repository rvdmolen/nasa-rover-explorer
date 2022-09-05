
export const load = async () => {
    console.log('In load function of blog.js');
    const response = await fetch(`https://dev.to/api/articles?username=brittneypostma`);
    const posts = await response.json();
    return {
        posts
    }
  }

