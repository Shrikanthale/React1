import React from 'react'
import P2 from './P2'
import {ValueContext} from './MyCtx'
class P1 extends React.Component{
    render(){
        return(
            <div>
                <ValueContext.Provider value = "SHRIKANTHALE"> <P2/></ValueContext.Provider>
            </div>
        )
    }
}

export default P1