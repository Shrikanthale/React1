import React from 'react'
import Header from './Header'
import Main from './Main'
import Footer from './Fotter'

class Myfile extends React.Component{
    render(){
        return (
            <div>
             <Header Name = "Raina"/>
             <Main/>
             <Footer date = "18"/>
            </div>
        )
    }
}

export default Myfile

// function Myfile(){
//     return (
//         <div>
//          <Header Name = "Raina"/>
//          <Main/>
//          <Footer date = "18"/>
//         </div>
//     )
// }