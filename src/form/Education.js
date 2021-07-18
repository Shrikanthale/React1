import React from 'react'

class Education extends React.Component{
    render(){
        return(
            <div>
                <h3>Education deatials:</h3>
                <p>ENETER YOUR SSC PERSENTAGE</p>
                <input type="number" class="number" placeholder="10th%"></input>
                <p>ENETER YOUR HSC PERSENTAGE</p>
                <input type="number" class="number" placeholder="12th%"></input>
                <p>ENETER YOUR GRATUDATION PERSENTAGE</p>
                <input type="number" class="number" placeholder="UG%"></input>
            </div>
        )
    }
}

export default Education