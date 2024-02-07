import { TokenType } from "../types";

const setCookie = (token : TokenType) => {
    document.cookie = `accessToken=${token.accessToken}; max-age=${1 * 24 * 60 * 60}`
    document.cookie = `refreshToken=${token.refreshToken}; max-age=${30 * 24 * 60 * 60}`
}

const getCookie = (cookieName : string) => {
    return document.cookie
    .split(';')
    .find(token => token.trim().split('=')[0] === cookieName)?.split('=')[1]
}

export { setCookie, getCookie }