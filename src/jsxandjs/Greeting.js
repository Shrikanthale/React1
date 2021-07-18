import React from 'react'

function Greeting(){
    const date = new Date()
    const hours = date.getHours()
    var message = ""
    const style = {
        color : "#225",
        backgroundColor : "#509",
        fontSize :"150px"
    }

    if(hours<12){
        message="Morning"
        style.backgroundColor="#455"
    }
    else if(hours>=12 && hours<18) {
        message = "Afternoon"
        style.backgroundColor="yellow"
    }
    else{
        message = "night"
        style.backgroundColor="#855"
    }
    
    return(
        <div>
            <p style={style}> Good {message} </p>
        </div> 
    )
}

export default Greeting