import api from "../api";
import { Data } from "../pages/CreateItem";
import {Data as PatchData} from '../pages/UpdateItem'

export const postData = async (data : Data) => {
    const res = await api.post('/orders',data,{
        headers : {
            "Content-Type" : "multipart/form-data"
        }
    })

    return res.data
}

export const updateData = async (data : PatchData) => {
    const res = await api.patch(`/orders/${data.name}`,data)

    return res.data
}

export const deleteData = async (name : string) => {
    const res = await api.delete(`/orders/${name}`)

    return res
}

export const getData = async () => {
    const res = await api.get('/orders')

    return res.data
}