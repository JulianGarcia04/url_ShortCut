import Swal from "sweetalert2";
import { loginUser, registerUser } from "../services/users.services";
import setCookie from "../utils/setCookie";

export const usersLoginController = async (bodyData)=>{
    try {
        const {nameInput, passwordInput} = bodyData;
        const bodyRequest = nameInput.search('@')!==-1
                            ? {email:nameInput, password: passwordInput}
                            : {username:nameInput, password: passwordInput}
        const data = await loginUser(bodyRequest);
        const token = data.headers["x-access-token"]
        setCookie('__auth_user', token, 1)
        return token
    } catch (error) {
        Swal.fire({
            title: `Error ${error.stack.statusCode}`,
            text: `${error.message}`,
            icon: 'error',
            showConfirmButton: false,
            showCloseButton: true
        })
    }
}

export const usersRegisterController = async (bodyData)=>{
    try {
        const response = await registerUser(bodyData);
        const token = response.headers["x-access-token"];
        setCookie('__auth_user', token, 1);
        return token;
    } catch (error) {
        Swal.fire({
            title: `Error ${error.stack.statusCode}`,
            text: `${error.message}`,
            icon: 'error',
            showConfirmButton: false,
            showCloseButton: true
        })
    }
}