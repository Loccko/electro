import env from "@/environment";

export default {
    async getCart(token) {
        const headers = {'Content-Type': 'application/json'}
        if (token) {
            headers['Authorization'] = `JWT ${token}`
        }
        const response = await fetch(env.endpoint, {
            method: 'POST',
            headers: headers,
            credentials: "include",
            body: JSON.stringify({
                query: `{
                          cart {
                            product {
                              id
                              title
                              priceWithDiscount
                              images {
                                size300x300 {
                                  link
                                }
                              }
                            }
                            amount
                          }
                        }`
            }),
        })
        return (await response.json()).data.cart;
    },
    async getWishlist(token) {
        const headers = {'Content-Type': 'application/json'}
        if (token) {
            headers['Authorization'] = `JWT ${token}`
        }
        const response = await fetch(env.endpoint, {
            method: 'POST',
            headers: headers,
            credentials: "include",
            body: JSON.stringify({
                query: `{
                          wishlist {
                            id
                            title
                            amount
                            priceWithDiscount
                            images {
                              size300x300 {
                                link
                              }
                            }
                          }
                        }`
            }),
        })
        return (await response.json()).data.wishlist;
    }

}