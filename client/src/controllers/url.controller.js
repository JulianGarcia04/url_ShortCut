import {createUrlLarge} from '../services/url.services.js';
import Swal from 'sweetalert2'

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