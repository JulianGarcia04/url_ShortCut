import axios from "axios";

export const uploadfile = async (value)=>{
    try {
        const formData = new FormData()
        formData.append("avatar", value);
        const request = await axios.post('http://localhost:4000/api/v2/user/upload-image', formData, {
            Headers:{
                "Content-Type": "multipart/form-data"
            }
        })
        return request;
    } catch (error) {
       throw error.response.data;
    }
}