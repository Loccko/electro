import env from '@/environment'

export default {
  async fetchCategories(){
    const response = await fetch(env.endpoint, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ query: `
        query {
          rootCategories {
            title
            id
            images {
              size500x400 {
                link
              }
            }
            subcategories {
              id
              title
              subcategories {
                id
                title
              }
            }
          }
        }` 
      }),
    })
    return (await response.json()).data.rootCategories
   // .then(res => res;
  }
}