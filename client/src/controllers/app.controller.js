import copy from "copy-to-clipboard";
import {createUrlLarge} from '../services/url.services.js';
import Swal from 'sweetalert2';

export const copyElement = (text)=>{
    copy(text);
    Swal.fire({
        title: "Text Copied",
        icon: 'success',
        position: 'bottom',
        toast: true,
        timerProgressBar: true,
        timer: 1500,
        showConfirmButton: false
    })
}

export const createUrlController = async (data, token)=>{
    try {
        const response = await createUrlLarge(data, token);
        return response;
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

export const createUrlClient = (data)=>{
    let dataParser = JSON.stringify([data])
    let urlsSession = sessionStorage.getItem('temporalsUrls');
    if(!urlsSession){
        sessionStorage.setItem('temporalsUrls', dataParser); 
        return
    }
    let urlSessionParse = JSON.parse(urlsSession);
    urlSessionParse.push(data);
    sessionStorage.setItem('temporalsUrls', JSON.stringify(urlSessionParse));
    return
}
