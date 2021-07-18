import React from 'react'
import Personal from './Personal'
import Education from './Education'
import Button from './Button'
//import Button from './Button'

class Formmain extends React.Component{
    render(){
        return(
            <div>
                <Personal/>
                <Education/>
                <Button/>
            </div>
        )
    }
}

export default Formmain