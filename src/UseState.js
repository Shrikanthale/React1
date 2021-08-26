import React , {useState} from 'react'

const ReactAngle = () => {
    const red = 'red';
    const [bg ,setBg] = useState(red);
    const name = "Press"

    const bgChange = () => {
        const newBg = "green";
        setBg(newBg);
    }

    return(
        
        <div>
            <p>Hello</p>
            <p>Hello Hello</p>
            <p>Hello Hello Hello</p>
            <p>Hello Hello Hello Hello</p>
            <div style = { {backgroundColor:bg,height:'200px',width:'200px'}}></div>
            <button onClick={bgChange} style={{backgroundColor:bg ,padding : "15px 32px",fontSize : "16px",color:"white" ,border:"1px"}}>{name}</button>
        </div>
    )
}
export default ReactAngle
