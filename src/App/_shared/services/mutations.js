import env from "@/environment";

export default {
    async addItemToRecentlyViewedProducts(id) {
        const response = await fetch(env.endpoint, {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            credentials: 'include',
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
    async addItemToWishlist(id, token) {
        const headers = {'Content-Type': 'application/json'}
        if (token) {
            headers['Authorization'] = `JWT ${token}`
        }
        const response = await fetch(env.endpoint, {
            method: "POST",
            headers: headers,
            credentials: "include",
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
        return (await response.json()).data.wishlist;
    },
    async removeItemFromWishlist(id, token) {
        const headers = {'Content-Type': 'application/json'}
        if (token) {
            headers['Authorization'] = `JWT ${token}`
        }
        const response = await fetch(env.endpoint, {
            method: "POST",
            headers: headers,
            credentials: 'include',
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
        return (await response.json()).data.wishlist;
    },
    async addItemToCart(id, token) {
        const headers = {'Content-Type': 'application/json'}
        if (token) {
            headers['Authorization'] = `JWT ${token}`
        }
        const response = await fetch(env.endpoint, {
            method: "POST",
            headers: headers,
            credentials: 'include',
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
    async removeItemFromCart(id, token) {
        const headers = {'Content-Type': 'application/json'}
        if (token) {
            headers['Authorization'] = `JWT ${token}`
        }
        const response = await fetch(env.endpoint, {
            method: "POST",
            headers: headers,
            credentials: 'include',
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
            headers: {"Content-Type": "application/json"},
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
        return (await response.json());
    },
    async authorizeUser(email, password) {
        const response = await fetch(env.endpoint, {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({
                query: `mutation {
                          authorizeUser(input: {email:"${email}", password: "${password}"}){
                            accessToken
                            refreshToken
                            accessTokenExpirationDate
                            refreshTokenExpirationDate
                          }
                        }`,
            }),
        });
        return (await response.json());
    },
    async createComment(id, text, rating, token) {
        const response = await fetch(env.endpoint, {
            method: "POST",
            headers: {'Content-Type': 'application/json', 'Authorization': `JWT ${token}`},
            credentials: "include",
            body: JSON.stringify({
                query: `mutation {
                          createComment(input: {
                            product: "${id}", 
                            text: "${text}", 
                            rating: ${rating}
                          }) {
                            comment {
                              id
                            }
                          }
                        }`
            }),
        });
        return await response.json()
    },
    async increaseItemCartAmount(id, token) {
        const headers = {'Content-Type': 'application/json'}
        if (token) {
            headers['Authorization'] = `JWT ${token}`
        }
        const response = await fetch(env.endpoint, {
            method: "POST",
            headers: headers,
            credentials: "include",
            body: JSON.stringify({
                query: `mutation {
                          increaseItemCartAmount(input:{
                            product: "${id}"
                          }) {
                            cart {
                              amount
                            }
                          }
                        }`
            }),
        });
        return await response.json()
    },
    async decreaseItemCartAmount(id, token) {
        const headers = {'Content-Type': 'application/json'}
        if (token) {
            headers['Authorization'] = `JWT ${token}`
        }
        const response = await fetch(env.endpoint, {
            method: "POST",
            headers: headers,
            credentials: "include",
            body: JSON.stringify({
                query: `mutation {
                          decreaseItemCartAmount(input:{
                            product: "${id}"
                          }) {
                            cart {
                              amount
                            }
                          }
                        }`
            }),
        });
        return await response.json()
    },
};
