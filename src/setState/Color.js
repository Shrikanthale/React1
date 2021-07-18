import React from 'react'

class Color extends React.Component{
    constructor(props){
        super(props)
        this.state={
            brand:"ferrari",
            color:"black",
            year:"2021"
        }
    }
    render(){
        return(
            <div>
                <h2>car name is {this.state.brand} </h2>
                <p>color is {this.state.color} and year is {this.state.year} </p>
            </div>
        )
    }
}

export default Color