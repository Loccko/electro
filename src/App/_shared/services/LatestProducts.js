import env from "@/environment";

export default {
  async fetchLatestProducts() {
    const response = await fetch(env.endpoint, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        query: `{
                  products(first: 24, orderBy: "latest") {
                    edges {
                      node {
                        id
                        title
                        price
                        images {
                          size150x140 {
                            link
                          }
                        }
                      }
                    }
                  }
                }`,
      }),
    });
    return (await response.json()).data.products.edges;
  },
};
