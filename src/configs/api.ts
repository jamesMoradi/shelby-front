import axios from "axios";
import { getCookie, setCookie } from "../utils/cookie";
import { getNewToken } from "../services/token";

const api = axios.create({
    baseURL : process.env.REACT_APP_BASE_URL,
    headers : {
        "Content-Type" : "application/json"
    }
})

api.interceptors.request.use(
    (req) => {
        const token = getCookie('accessToken')
        if (token) {
            req.headers['Authorization'] = `Bearer ${token}`
        }
        return req
    },
    (err) => {
        return Promise.reject(err)
    }
)

api.interceptors.request.use(
    (req) => {
        return req
    },
    async (err) => {
        const originalRequest = err.config

        if (err.response.status === 401 && !originalRequest._retry) {
            originalRequest._retry = true
            const res = await getNewToken()

            if (!res?.res) {
                return;
            }

            setCookie(res.res.data)

            return api(originalRequest)
        }
    }
)

export default api