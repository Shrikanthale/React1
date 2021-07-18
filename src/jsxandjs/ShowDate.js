import React from 'react'

function ShowDate(){
    const date = new Date()
    const style = {
        color : "#920",
        backgroundColor : "lightGreen",
        fontSize : "25px",
        textAlign : "center"
    }
    const style1 = {
        backgroundColor:"skyBlue"
    }
    return(
        <div style={style}>
            <h3>time :</h3>
            <p>hours: {date.getHours() } </p>
            <p>minutes: {date.getMinutes()}</p>
            <p>milisecond: {date.getMilliseconds()}</p>
            <div style={style1}>
               <h3>Date:</h3>
               <p>Date {date.getDate() } </p>
               <p>month {date.getMonth() +1 } </p>
               <p>year {date.getFullYear() } </p>
           </div>
        </div> 
        
    )
}

export default ShowDate