import axios from 'axios';

export const getAllUrlLarge = async (token)=>{
    try {
        const request = await axios.get(`http://localhost:4000/api/v2/url`, {
            headers: {'x-access-token':token}
        });
        return request;
    } catch (error) {
       throw error.response.data; 
    }
}

export const createUrlLarge = async (data, token)=>{
    try {
        const request = await axios.post(`http://localhost:4000/api/v2/url`, data, {
            headers: {'x-access-token':token}
        });
        return request;
    } catch (error) {
        throw error.response.data;
    }
}

export const getAllUrlSession = ()=>{
    try {
        const data = JSON.parse(localStorage.getItem('temporalsUrls'));
        if(!data){
            throw new Error('No hay urls')
        }
        return data;
    } catch (error) {
        console.log(error)
    }

}