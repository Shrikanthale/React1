import React from 'react'

class FormB extends React.Component{
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
        if(event.target.name === "id" && event.target.values<=18){
            this.setState({errorMsg : <strong>please enter above 18 id</strong> })
            return
        }
        this.setState({errorMsg: " "})
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
                {this.state.errorMsg}
                <input type = "submit"/>
            </form>
        )
    }
}

export default FormB