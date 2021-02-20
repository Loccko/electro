import env from "@/environment";

export default {
  async getMe(token) {
    const response = await fetch(env.endpoint, {
        method: 'POST',
        headers: {'Content-Type': 'application/json', 'Authorization': `JWT ${token}`},
        body: JSON.stringify({
            query: `{
              me {
                id
                email
                data {
                  firstName
                  lastName
                }
              }
            }`
          }),
      })
      return (await response.json()).data.me;
  },

  async refreshAccessToken (token) {
    const response = await fetch(env.endpoint, {
      method: 'POST',
      headers: {'Content-Type': 'application/json', 'Authorization': `JWT ${token}`},
      body: JSON.stringify({
          query: `mutation {
            tokens: refreshToken(input:{}) {
              accessToken
              accessTokenExpirationDate
            }
          }`
        }),
    })

    return (await response.json()).data;
  }
}