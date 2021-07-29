import React from 'react'
import {ValueContext} from './MyContxt'
class F3 extends React.Component{
    static contextType = ValueContext
    name = this.context
    render(){
        return(
            <div>
              <p> {this.name} </p>
            </div>
        )
    }
}

export default F3