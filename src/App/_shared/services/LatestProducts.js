import env from "@/environment";

export default {
  async fetchLatestProducts(first=24, orderBy=null) {
    const response = await fetch(env.endpoint, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        query: `{
          products(first: ${first}, orderBy: "${orderBy}") {
            edges {
              node {
                id
                title
                price
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
                discount
                price
                priceWithDiscount
                averageRating
              }
            }
          }
        }`,
      }),
    });
    return (await response.json()).data.products.edges;
  },
};
