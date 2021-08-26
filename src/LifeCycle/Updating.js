import React from 'react'
class Updating extends React.Component{
   Changecolor = () =>{
       this.setState({}) //color:"WHITE"
   }
   constructor(props){
        super(props)
        this.state = { color : "red" }
    }

    // static getDerivedStateFromProps(props,state){
    //     return {color:props.color}
    // }
    shouldComponentUpdate(){
        return true
    }
    getSnapshotBeforeUpdate(pprop,pstate){
        this.color = pstate.color
    }

   render(){
       const style = {
           backgroundColor : "red",
           border:"none",
           textAlign : "center",
           buttonAlign : "center",
           padding : "15px 32px",
           fontSize : "16px"
       }
        return(
            <div>
                <h1> the car color is {this.state.color}  </h1>
                <h1>backup color {this.color} </h1>
                <button style={style} type="button" onClick = {this.Changecolor}>Press</button>
            </div>
        )
    }
   
}

export default Updating