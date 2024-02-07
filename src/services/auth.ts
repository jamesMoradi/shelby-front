import api from "../configs/api"

export const sendOtp = async (mobile : string) => {
    try {
        const res = await api.post('auth/send-otp', {mobile})
        return { res }
    } catch (err) {
        return { err }
    }
}

export const checkOtp = async (code : string, mobile : string) => {
    try {
        const res = await api.post('auth/check-otp', {mobile, code})
        return { res }
    } catch (err) {
        return { err }
    }
}