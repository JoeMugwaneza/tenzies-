import React from 'react';

export default function Die(props){
    
    return(
        <div  className={props.isHeld ? "tenzies-number--held" : "tenzies-number"} onClick={(id) => props.handleClick(props.id)}>{props.value}</div>
    )
}
