import axios from 'axios';

export const loginUser = async (data)=>{

    const {email, password} = data;

    let request = await axios.post('http:localhost:4000/api/v1/user/login', {email, password})

    return request
}