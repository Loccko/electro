import env from "@/environment";

export default {
  async fetchCategoryProducts(first=20, category=null, after=null) {
    let requestParams = {
      category,
      first,
      after,
    }

    if(requestParams.after === null) {
      delete requestParams.after
    }
    
    let str = ''

    for (const iterator in requestParams) {
      let val = requestParams[iterator]
      if(typeof requestParams[iterator] == 'string'){
        val=`"${val}"`
      }
      str = str+','+ iterator + ': ' +val
    }

    const response = await fetch(env.endpoint, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        query: `{
            products(${str}) {
              edges {
                node {
                  price
                  title
                  priceWithDiscount
                  averageRating
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
};
