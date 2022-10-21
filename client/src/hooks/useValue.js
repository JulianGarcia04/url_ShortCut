import { useState } from 'react';

const useValue = ()=>{
    const [input, setInput] = useState('');

    const handleChange = (e, event)=>{
        !e
        ?setInput(event.target.value)
        :setInput(e.target.value)
        
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