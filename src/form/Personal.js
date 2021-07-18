import React from 'react'
import '../formstyle.css'

class Personal extends React.Component{
    
    render(){
        return(
            <div>
                <h2 className="pre">Student deatials</h2>
                <form>
                    <p>ENTER FIRSTNAME</p>
                    <input type="text" class="name" placeholder="ENTER NAME"></input><br></br>
                    <p>ENTER LAST NAME:</p> 
                    <input type="text" class="name" placeholder="ENTER LASTNAME"></input><br></br>
                </form>
            </div>
        )
    }
}

export default Personal