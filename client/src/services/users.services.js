import axios from 'axios';

export const loginUser = async (data)=>{
    try {
        
        const {email, username, password} = data;

        let request = email
                    ? await axios.post('http://localhost:4000/api/v2/user/login', {email, password})
                    : await axios.post('http://localhost:4000/api/v2/user/login', {username, password})
        return request
    } catch (error) {
        throw error.response.data
    }
}

export const getUser = async (token)=>{
    try {
        let request = await axios.get('http://localhost:4000/api/v2/user/id', {
            headers: {'x-access-token': token}
        })
        return request;
    } catch (error) {
        throw error.response.data
    }
}

export const registerUser = async (data)=>{
    try {
        let request= await axios.post('http://localhost:4000/api/v2/user', data);
        return request;
    } catch (error) {
        throw error.response.data
    }
}