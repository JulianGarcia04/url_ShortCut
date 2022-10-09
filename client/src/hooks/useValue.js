import { useState } from 'react';

const useValue = ()=>{
    const [input, setInput] = useState('');

    const handleChange = (e)=>{
        setInput(e.target.value);
    }

    return {
        reducer: {
            input
        },
        actions: {
            handleChange
        }
    }
}

export default useValue;