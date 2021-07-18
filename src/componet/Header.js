import React from 'react'
import '../style.css'

class Header extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return (
            <div>
                <h3 className="heading" > {this.props.Name} - CRICKETER </h3>
            </div>
        )
    }
}

export default Header

// function Header(props){
//     return (
//         <div>
//             <h3 className="heading" > {props.Name} - CRICKETER </h3>
//         </div>
//     )
// }