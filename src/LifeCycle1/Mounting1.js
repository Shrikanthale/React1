import React from 'react';

class Mounting1 extends React.Component{
    constructor(props){
        super(props)
        this.state = { Hotel : "TAJ" }
    }
    static getDerivedStateFromProps(props,state){
        return {Hotel : props.Hotel}
    }
    componentDidMount(){
        setTimeout( () => {
            this.setState ({
                price:5000
            })
        },8000
        )
    }
    render(){
        return(
            <div>
                <h1>hotel name is {this.state.Hotel} Price is {this.state.price} </h1>
            </div>
        )
    }
    
}
export default Mounting1