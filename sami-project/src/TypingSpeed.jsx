import {useState, useEffect} from 'react';

 export function TypingSpeed(){
    const [startTime, setStartTime] = useState(Date.now())
    const [text, setText] = useState('')
    const [speed, setSpeed] = useState(0)

    function updateText(event){
        const my_text=event.target.value;
        setText(my_text);
    }
    useEffect(()=>{
        if(text.length===1){
            setStartTime(Date.now());
            
        }
        else if(text.length===0){
            setStartTime(null);
            setSpeed(0)
        }
        if(text.length>=1 && startTime){
            const elapseTime = (Date.now()-startTime)/1000;
            setSpeed((text.length/elapseTime).toFixed(2))
        }
    },[text])
    
    return(
        <>
        <h1>Typing Speed Test</h1>
        <input type='text'  onChange={updateText}></input>
        <h1> {speed}</h1>
        </>
       
    );
 } 

