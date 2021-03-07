const moment = require('moment')
import AuthService from "@/App/_shared/services/Auth"

const Auth = class {
    constructor() {
    }

    writeTokensToLS({accessToken, refreshToken, accessTokenExpirationDate, refreshTokenExpirationDate}) {
        localStorage.setItem('accessToken', accessToken);
        localStorage.setItem('refreshToken', refreshToken);
        localStorage.setItem('accessTokenExpirationDate', accessTokenExpirationDate);
        localStorage.setItem('refreshTokenExpirationDate', refreshTokenExpirationDate);
    }

    getToken() {
        const validation = this.validate()
        if (!validation.accessTokenValid && validation.refreshTokenValid) {
            this.refreshAccessToken()
        } else if (!validation.accessTokenValid && !validation.refreshTokenValid) {
            this.logOut()
        }
        return localStorage.getItem('accessToken');
    }

    refreshAccessToken() {
        const response = AuthService.refreshAccessToken(localStorage.getItem('refreshToken'))
        if (response.tokens && response.tokens.accessToken && response.tokens.accessTokenExpirationDate) {
            localStorage.setItem('accessToken', response.tokens.accessToken);
            localStorage.setItem('accessTokenExpirationDate', response.tokens.accessTokenExpirationDate);
        } else {
            this.logOut()
        }
    }

    validate() {
        let validationResult = {
            accessTokenValid: false,
            refreshTokenValid: false
        }

        if (localStorage.getItem('accessTokenExpirationDate') && localStorage.getItem('refreshTokenExpirationDate')) {
            const accessTokenExpirationDate = localStorage.getItem('accessTokenExpirationDate')
            const refreshTokenExpirationDate = localStorage.getItem('refreshTokenExpirationDate')

            validationResult.accessTokenValid = moment().diff(accessTokenExpirationDate, 'seconds') < 0
            validationResult.refreshTokenValid = moment().diff(refreshTokenExpirationDate, 'seconds') < 0
        }

        return validationResult
    }

    logOut() {
        localStorage.removeItem('accessToken');
        localStorage.removeItem('refreshToken');
        localStorage.removeItem('accessTokenExpirationDate');
        localStorage.removeItem('refreshTokenExpirationDate');
    }
}

export default Auth