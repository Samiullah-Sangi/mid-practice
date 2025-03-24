import { useState } from "react";

function FormHandling(){
    const [myText, setText] = useState("")

    function updateText(event){
        setText(event.target.value)

    }
    return(
        <>
            <label htmlFor="Name"></label>
            <input type="text" value={myText} onChange={updateText}/>
            <h1>Your name is {myText}</h1>
        </>
    )
}

export default FormHandling