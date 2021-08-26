import React from 'react'
class Mounting extends React.Component{
//1 
   constructor(props){
        super(props)
        this.state = { color1 : "red" }
    }
//2 
    static getDerivedStateFromProps(props,state){
        return {color:props.color1}
    }
//3 
   render(){
        return(
            <div>
                <h1> the car color is {this.state.color1} and brand name is {this.state.name} </h1>
            </div>
        )
    }
//4 
    componentDidMount(){
        setTimeout( ()=>{this.setState({name:"safari"})},10000 )
    }   
}

export default Mounting