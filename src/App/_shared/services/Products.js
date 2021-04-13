import env from "@/environment";

export default {
    async fetchProducts(amount = 20, category = null, orderBy = null, filters = null, search = null) {
        let requestParams = {
            category,
            amount,
            orderBy,
            search,
        };
        for (const iterator in requestParams) {
            if (requestParams[iterator] === null) {
                delete requestParams[iterator];
            }
        }

        let str = "";

        for (const iterator in requestParams) {
            let val = requestParams[iterator];
            if (typeof requestParams[iterator] == "string") {
                val = `"${val}"`;
            }
            str = str + "," + iterator + ": " + val;
        }

        if (filters) {
            const filters_stringified = []
            for (const filter in filters) {
                const current_filter = filters[filter]
                if (current_filter.options.length > 0) {
                    filters_stringified.push('{name: "' + current_filter.name + '", options: ' + JSON.stringify(current_filter.options) + '}')
                }
            }
            str += ', filters: [' + filters_stringified + ']'
        }

        const response = await fetch(env.endpoint, {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({
                query: `{
                          products(${str}) {
                            id
                            title
                            amount
                            keyFeatures
                            createdAt
                            categories {
                              title
                              id
                            }
                            price
                            discount
                            priceWithDiscount
                            averageRating
                            sku
                            comments {
                              id
                            }
                            images {
                              size150x140 {
                                link
                              }
                              size212x200 {
                                link
                              }
                              size75x75 {
                                link
                              }
                            }
                          }
                        }`,
            }),
        });
        return (await response.json()).data.products
    },
    async fetchProduct(id) {
        const response = await fetch(env.endpoint, {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({
                query: `{
                          node (id: "${id}"){
                            ...on Product {
                              id
                              title
                              sku
                              images {
                                size720x660 {
                                  link
                                }
                              }
                              categories {
                                id
                                title
                              }
                              price
                              discount
                              priceWithDiscount
                              amount
                              isAvailable
                              overview
                              keyFeatures
                              description {
                                name
                                text
                              }
                              averageRating
                              comments {
                                author {
                                  data {
                                    firstName
                                    lastName
                                  }
                                }
                                text
                                rating
                                createdAt
                              }
                            }
                          }
                        }`,
            }),
        });

        return (await response.json()).data.node;
    },
    async fetchRecentlyViewedProducts() {
        const response = await fetch(env.endpoint, {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            credentials: "include",
            body: JSON.stringify({
                query: `{
                          recentlyViewedProducts {
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
                            }
                          }
                        }`,
            }),
        });

        return (await response.json()).data.recentlyViewedProducts;
    },
};
