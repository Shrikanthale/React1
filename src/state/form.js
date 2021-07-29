import React from 'react'

class Form extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            Name : " shri ",
            Lname : " kanthale ",
            id :"33"
        }
    }
    setchangeName=() => {
        this.setState({Name : "shrikant"})
    }
    setchangeLname = () => {
        this.setState({Lname : "akanthale9@"})
    }
    render(){
        return(
            <div>
                <h1>Name of student is {this.state.Name} </h1>
                <h1>Lname of student is {this.state.Lname} </h1>
                <h1>id of student is {this.state.id} </h1>
                <button type="button" onClick = {this.setchangeName}>change name</button>
                <button type="button" onClick = {this.setchangeLname}>change lastname</button>
            </div>
        )
    }
}

export default Form