import axios from 'axios';

export const loginUser = async (data)=>{

    const {email, username, password} = data;

    let request = email
                  ? await axios.post('http://localhost:4000/api/v2/user/login', {email, password})
                  : await axios.post('http://localhost:4000/api/v2/user/login', {username, password})
    return request
}

export const getUser = async (token)=>{
    let request = await axios.get('http://localhost:4000/api/v2/user/id', {
        headers: {'x-access-token': token}
    })
    return request;
}