import api from "../configs/api";
import { getCookie } from "../utils/cookie"

const getNewToken = async () => {
    const token = getCookie('refreshToken')

    if (!token) return;

    try {
        const res = await api.post('auth/check-refresh-token', {refreshToken : token})
        
        return { res }
        
    } catch (error) {
        return { error }
    }
}

export {getNewToken}