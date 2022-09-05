/** @type {import('./$types').LayoutLoad} */
export function load({url}) {
    console.log('In load function of layout.js');    
    return {
        props: {
            key: url
        }
    };
  }

