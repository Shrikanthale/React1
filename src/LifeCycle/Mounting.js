import React from 'react'
class Mounting extends React.Component{
//1 
   constructor(props){
        super(props)
        this.state = { color : "red" }
    }
//2 
    static getDerivedStateFromProps(props,state){
        return {color:props.color}
    }
//3 
   render(){
        return(
            <div>
                <h1> the car color is {this.state.color} and brand name id {this.state.name} </h1>
            </div>
        )
    }
//4 
    componentDidMount(){
        setTimeout( ()=>{this.setState({name:"safari"})},10000 )
    }   
}

export default Mounting