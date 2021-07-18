import React from 'react'

class Button extends React.Component{
    render(){
        return(
            <div>
                <p>-----------------------------------</p>
                <input type="submit" class="btn1"></input>
                <input type="reset" class="btn2"></input>
            </div>
        )
    }
}

export default Button