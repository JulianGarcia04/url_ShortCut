import { getAllUrlSession } from "../services/url.services"

export const findUrl = (id)=>{
    try {
        let data = getAllUrlSession();
        const url = data.find((e)=>{
            return e._id.endsWith(id) === true
        })
        return url
    } catch (error) {
        console.log(error)
    }
}