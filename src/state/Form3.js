import React from 'react'

class FormC extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            Hotel : "pardox",
            date : "15may",
            Price : "1200"
        }
    }
    setHotel = () => {
        this.setState({Hotel : "Taj"})
    }
    setDate = () => {
        this.setState({date : "11june"})
    }
    setPrice = () => {
        this.setState({Price : "3500"})
    }
    render(){
        return(
            <div>
                <h1>hotel name is {this.state.Hotel} </h1>
                <h1> Booking Date {this.state.date} </h1>
                <h1>Price of one room {this.state.Price} </h1>
                <button type="button" onClick = {this.setHotel}>Hotel change</button>
                <button type="button" onClick = {this.setDate}>Date change</button>
                <button type="button" onClick = {this.setPrice}>Price</button>
            </div>
        )
    }
}
export default FormC