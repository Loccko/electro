import env from "@/environment";

export default {
  async fetchProducts(
    first = 20,
    category = null,
    orderBy = null,
    after = null,
    filters = null
  ) {
    let requestParams = {
      category,
      first,
      after,
      orderBy,
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

    if(filters) {
      str = str + ", filters:" + filters.substr(0, filters.length)
    }

    const response = await fetch(env.endpoint, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        query: `{
            products(${str}) {
              edges {
                node {
                  id
                  title
                  amount
                  keyFeatures
                  createdAt
                  category {
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
              }
              pageInfo {
                hasNextPage
                endCursor
              }
            }
        }`,
      }),
    });
    return (await response.json()).data.products.edges;
  },

  async fetchProduct(id) {
    const response = await fetch(env.endpoint, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        query: `{
          node (id: "${id}"){
            ...on Product {
              id
              title
              sku
              images {
                size75x75 {
                  link
                }
                size150x140 {
                  link
                }
                size720x660 {
                  link
                }
                size500x400 {
                  link
                }
              }
              category {
                id
                title
              }
              price
              discount
              priceWithDiscount
              amount
              isAvailable
              views
              overview
              keyFeatures
              description {
                name
                text
              }
              averageRating
              comments {
                id
                author {
                  id
                  email
                  phone
                  assignDate
                  data {
                    firstName
                    lastName
                    address {
                      city
                      street
                      apartment
                      zipCode
                    }
                  }
                }
                text
                rating
                createdAt
              }
              createdAt
            }
          }
        }
        `,
      }),
    });

    return (await response.json()).data.node;
  },

  async fetchRecentlyViewedProducts() {
    const response = await fetch(env.endpoint, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        query: `{
                          recentlyViewedProducts {
                            id
                            title
                            price
                            discount
                            priceWithDiscount
                            images {
                              size150x140 {
                                link
                              }
                            }
                          }
                        }`,
      }),
    });

    return (await response.json()).data.node;
  },
};
