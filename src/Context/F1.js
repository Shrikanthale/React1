import React from 'react'
import F2 from './F2'
import {ValueContext} from './MyContxt'
class F1 extends React.Component{
    render(){
        return(
            <div>
              <ValueContext.Provider value = "SHRIKANT"> <F2/> </ValueContext.Provider>
            </div>
        )
    }
}

export default F1