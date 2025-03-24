import { useState } from 'react';

export function Toggle(){
    const [visibility, setVisisbility] = useState(true);

    return (
        <>
        { visibility ? <p>This is sardar samiullah sangi bourgueoisi dodai waro</p> : ' '}
        <button onClick={()=>setVisisbility(!visibility)}>{visibility ? 'hide' : 'show'}</button>
        </>
        
    );
}