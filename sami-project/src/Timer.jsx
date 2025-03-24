import { useState, useEffect } from 'react';

export function Timer(){
    const[time, setTime]=useState(Date.now())
    useEffect(()=>{
        setInterval(()=>{
            setTime(Date.now())
        },1000)
    },[])

    return (
        <h1>Time : {new Date(time).toLocaleTimeString()}</h1>
    );
}