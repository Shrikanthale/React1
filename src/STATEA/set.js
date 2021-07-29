import React from 'react'

class Set extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            Location : "mumbai",
            Adult : "2",
            Price : "50000"
        }
    }
    setLocation = () => {
        this.setState({Location : "goa"})
    }
    setPrice = () => {
        this.setState({Price : "20000"})
    }
    setAdult = () => {
        this.setState({Adult:"3"})
    }

    render(){
        return(
            <div>
                <h1>Visited place is {this.state.Location} for {this.state.Adult} Adult </h1>
                <h1>for this tour : {this.state.Price}$ </h1>
                <button type="button" name="Location" onClick = {this.setLocation}>Set new Location</button>
                <button type="button" name="Adult" onClick = {this.setAdult}>Set Adult</button>
                <button type="button" name="Price" onClick = {this.setPrice}>Price</button>
            </div>
        )
    }
}

export default Set