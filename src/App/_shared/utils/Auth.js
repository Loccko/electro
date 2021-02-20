const moment = require('moment')
import AuthService from "@/App/_shared/services/Auth"

const Auth = class {
  constructor(){

  }

  writeTokensToLS({ accessToken, refreshToken, accessTokenExpirationDate, refreshTokenExpirationDate}){
    localStorage.setItem('accessToken', accessToken);
    localStorage.setItem('refreshToken', refreshToken);
    localStorage.setItem('accessTokenExpirationDate', accessTokenExpirationDate);
    localStorage.setItem('refreshTokenExpirationDate', refreshTokenExpirationDate);
  }

  validate(){
    let validationResult = {
      accessTokenValid: false,
      refreshTokenValid: false
    }

    if(localStorage.getItem('accessTokenExpirationDate') && localStorage.getItem('refreshTokenExpirationDate')) {
      const accessTokenExpirationDate = localStorage.getItem('accessTokenExpirationDate')
      const refreshTokenExpirationDate = localStorage.getItem('refreshTokenExpirationDate')
      const refrestTokenExpired = moment().diff(refreshTokenExpirationDate, 'seconds') > 0
      const accessTokenTokenExpired = moment().diff(accessTokenExpirationDate, 'seconds') > 0

      validationResult.accessTokenValid = !refrestTokenExpired
      validationResult.refreshTokenValid = !accessTokenTokenExpired
    }

    return validationResult
  }

  getToken(){
    return localStorage.getItem('accessToken');
  }

  async refreshAccessToken(){
    const response = await AuthService.refreshAccessToken(localStorage.getItem('refreshToken'))
    if(response.tokens && response.tokens.accessToken && response.tokens.accessTokenExpirationDate) {
      localStorage.setItem('accessToken', response.tokens.accessToken);
      localStorage.setItem('accessTokenExpirationDate', response.tokens.accessTokenExpirationDate);
      return true
    } else {
      return false
    }
  }

  logOut() {
    localStorage.removeItem('accessToken');
    localStorage.removeItem('refreshToken');
    localStorage.removeItem('accessTokenExpirationDate');
    localStorage.removeItem('refreshTokenExpirationDate');
  }
}

export default Auth