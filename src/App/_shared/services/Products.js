import env from "@/environment";

export default {
  async fetchCategoryProducts(first = 20, category = null, after = null) {
    let requestParams = {
      category,
      first,
      after,
    };

    if (requestParams.after === null) {
      delete requestParams.after;
    }

    let str = "";

    for (const iterator in requestParams) {
      let val = requestParams[iterator];
      if (typeof requestParams[iterator] == "string") {
        val = `"${val}"`;
      }
      str = str + "," + iterator + ": " + val;
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
                  price
                  title
                  amount
                  keyFeatures
                  createdAt
                  categories {
                    title
                    id
                  }
                  priceWithDiscount
                  averageRating
                  sku
                  comments {
                    id
                  }
                  images {
                    size75x75 {
                      link
                    }
                    size212x200 {
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
              categories {
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

    return (await response.json()).data.node
  },
};
