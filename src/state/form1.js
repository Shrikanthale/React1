import React from 'react'

class FormA extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            username : " ",
            id : null 
        }
    }
    setdeatails = (event) => {
        this.setState({[event.target.name] :event.target.value})
    }
    setForm = (event) => {
        event.preventDefault()
        alert("hello " + this.state.username )
    }
    render(){
        return(
            <form onSubmit = {this.setForm} >
                <h1> username is {this.state.username} and id is {this.state.id} </h1>
                <p>username</p>
                <input type="text" name = "username" onChange = {this.setdeatails}/>
                <p>id</p>
                <input type="text" name = "id" onChange = {this.setdeatails}/>
                <input type = "submit"/>
            </form>
        )
    }
}

export default FormA