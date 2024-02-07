import api from "../configs/api"
import { getCookie } from "../utils/cookie"


export const getProfile = async () => {
    const token = getCookie('accessToken')
    
    const res = await api.get('user/whoami')
    return res
}