import { useState } from 'react';

const useModal = ()=>{
    const [modal, setModal] = useState(false);

    const changeState = ()=>{
        setModal(!modal)
    }

    return {
        modal,
        changeState
    };
}

export default useModal