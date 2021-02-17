import env from "@/environment";

export default {
  async addItemToRecentlyViewedProducts(id) {
    const response = await fetch(env.endpoint, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        query: `mutation {
          addItemToRecentlyViewedProducts(input: {product: "${id}"}){
            recentlyViewedProducts {
              id
            }
          }
        }`,
      }),
    });
    return (await response.json()).data;
  },
  async increaseProductViews(id) {
    const response = await fetch(env.endpoint, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        query: `mutation {
          increaseProductViews (input :{product: "${id}"}){
            product {
              id
            }
          }
        }`,
      }),
    });
    return (await response.json()).data;
  },
  async addItemToWishlist(id) {
    const response = await fetch(env.endpoint, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        query: `mutation {
          addItemToWishlist(input: {product: "${id}"}) {
            wishlist {
              id
              title
            }
          }
        }`,
      }),
    });
    return (await response.json()).data;
  },
  async removeItemFromWishlist(id) {
    const response = await fetch(env.endpoint, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        query: `mutation {
          removeItemFromWishlist(input: {product: "${id}"}) {
            wishlist {
              id
              title
            }
          }
        }`,
      }),
    });
    return (await response.json()).data;
  },
  async addItemToCart(id) {
    const response = await fetch(env.endpoint, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        query: `mutation {
          addItemToCart(input: {product: "${id}"}) {
            cart {
              amount
              product {
                id
                title
                images {
                  size720x660 {
                    link
                  }
                }
              }
            }
          }
        }`,
      }),
    });
    return (await response.json()).data;
  },
  async removeItemFromCart(id) {
    const response = await fetch(env.endpoint, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        query: `mutation {
          removeItemFromCart(input: {product: "${id}"}) {
            cart {
              amount
              product {
                id
                title
                images {
                  size720x660 {
                    link
                  }
                }
              }
            }
          }
        }`,
      }),
    });
    return (await response.json()).data;
  },
  async createUser(email, password, phone, firstName, lastName) {
    const response = await fetch(env.endpoint, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        query: `mutation {
          createUser(input: {email:"${email}", password: "${password}", phone:"${phone}", firstName:"${firstName}", lastName:"${lastName}"}){
            user {
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
          }
        }`,
      }),
    });
    return (await response.json()).data;
  },
};
