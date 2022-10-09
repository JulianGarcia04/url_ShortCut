import { loginUser } from "../services/users.services";

export const usersLoginController = async (bodyData)=>{
    const {nameInput, passwordInput} = bodyData;
    const bodyRequest = nameInput.search('@')!==-1
                        ? {email:nameInput, password: passwordInput}
                        : {username:nameInput, password: passwordInput}
    const data = await loginUser(bodyRequest);
    document.cookie = `__auth_user=${data.headers["x-access-token"]}; max-age=${60*60*24}; expires=${new Date(Date.now() + 1000*60*60*24)}`;
    return data.headers['x-access-token']
}