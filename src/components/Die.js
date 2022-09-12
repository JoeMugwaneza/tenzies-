import React from 'react';

export default function Die(props){
    console.log(props)
    return(
        <div  className={props.die.isHeld ? "tenzies-number--held" : "tenzies-number"}>{props.die.value}</div>
    )
}
