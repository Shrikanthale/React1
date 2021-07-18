import React from 'react'
import ContactComp from './ContactComp'

function Contact(){
    return(
        <div>
            <ContactComp Contact = {{
                Name : "sandy pandy",
                Email : "Email:skanbthale@gamil.com",
                imgURL : "http://placekitten.com/200/300"
            }}/>

            <ContactComp Contact = {{
                Name : "Shrikant",
                Email : "Email:skanbthale@gamil.com",
                imgURL : "http://placekitten.com/200/300"
            }}/>
            
        </div>
    )
}

export default Contact

/* <div>
                <h4>Name:sandy</h4>
                <p>Email:skanbthale@gamil.com</p>
                <img src="http://placekitten.com/200/300"/>
            </div> */