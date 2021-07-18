import React  from 'react'

class Onclick extends React.Component{
    constructor(props){
        super(props)
        this.state = {
           name : "Shri",
           age : "23"
        }  
    }
    changeTheName=() => {
      this.setState({name:"Shrikant"})
    }
    changeTheAge = () => {
        this.setState({age:"24"})
    }
    render(){
        return(
            <div>
                <p>name is {this.state.name} and Age is {this.state.age} </p>
                <button type = "button" onClick = {this.changeTheName}>change name</button>
                <button type = "button" onClick = {this.changeTheAge}>change Age</button>
            </div>
        )
    }
}

export default Onclick