import { useState } from 'react';

const useValue = ()=>{
    const [inputUser, setInputUser] = useState('');

    const handleChange = (e)=>{
        setInputUser(e.target.value);
    }

    return {
        reducer: {
            inputUser
        },
        actions: {
            handleChange
        }
    }
}

export default useValue;