import { useState } from "react"

function ChangeBG(){
    const [bgcolor, setbgcolor] = useState('white')

    function setBackground(event){
        const newColor = event.target.id
        setbgcolor(newColor)

    }

    return(
        <div style={{ backgroundColor: bgcolor, width: '100vw', height: '100vh' }}>
            <button id="red" onClick={setBackground}>red</button>
            <button id="blue" onClick={setBackground}>blue</button>
            <button id="purple" onClick={setBackground}>purple</button>
            <button id="green"onClick={setBackground}>green</button>
            </div>
    )
}

export default ChangeBG