import api from "../api";
import { Data } from "../pages/CreateItem";

export const postData = async (data : Data) => {
    const res = await api.post('/orders',data,{
        headers : {
            "Content-Type" : "multipart/form-data"
        }
    })

    return res.data
}