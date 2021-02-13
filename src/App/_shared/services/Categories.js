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
              size212x305 {
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
  },

  async fetchCategoriesWithoutSubcategories(){
    const response = await fetch(env.endpoint, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ query: `
        query {
          categoriesWithoutSubcategories {
            id
            title
            images {
              size212x305 {
                link
              }
            }
            products {
              id
              title
              price
              images {
                size212x200 {
                  link
                }
              }
            }
          }
        }` 
      }),
    })
    return (await response.json()).data.categoriesWithoutSubcategories
  }
}