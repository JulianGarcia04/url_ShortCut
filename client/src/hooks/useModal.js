import { useState } from 'react';

const useBooleanState = ()=>{
    const [state, setState] = useState(false);

    const changeState = ()=>{
        setState(!state)
    }

    return {
        state,
        changeState
    };
}

export default useBooleanState