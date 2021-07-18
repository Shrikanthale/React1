import React from 'react'

function ContactComp(props){
    return(
        <div>
            <img src={props.Contact.imgURL}/>
            <h3>{props.Contact.Name}</h3>
            <p>{props.Contact.Email}</p>

        </div>
    )
}

export default ContactComp