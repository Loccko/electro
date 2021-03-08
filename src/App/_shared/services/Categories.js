import env from '@/environment'

export default {
    async fetchCategories() {
        const response = await fetch(env.endpoint, {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                query: `
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
        return (await response.json()).data.rootCategories;
    },
    async fetchCategoriesWithoutSubcategories() {
        const response = await fetch(env.endpoint, {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                query: `
                        query {
                          categoriesWithoutSubcategories {
                            id
                            title
                            images {
                              size212x305 {
                                link
                              }
                              size246x176 {
                                link
                              }
                            }
                            products {
                              id
                              title
                              price
                              discount
                              priceWithDiscount
                              amount
                              categories {
                                id
                                title
                              }
                              images {
                                size212x200 {
                                  link
                                }
                                size212x305 {
                                  link
                                }
                              }
                            }
                          }
                        }`
            }),
        })
        return (await response.json()).data.categoriesWithoutSubcategories;
    },
    async fetchCategory(id) {
        const response = await fetch(env.endpoint, {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                query: `{
                          node(id: "${id}") {
                            id
                            ... on Category {
                              id
                              title
                              amount
                              categoriesFromRoot {
                                id
                                title
                              }
                              subcategories {
                                id
                                title
                                amount
                              }
                              filters {
                                name
                                options {
                                  count
                                  name
                                }
                              }
                            }
                          }
                        }`
            }),
        })
        return (await response.json()).data.node;
    },
    async fetchRootCategories() {
        const response = await fetch(env.endpoint, {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                query: `
                        query {
                          rootCategories {
                            title
                            id
                            amount
                          }
                        }`
            }),
        })
        return (await response.json()).data.rootCategories;
    },
}