import React from 'react';

export default function Die(props){
    console.log(props)
    return(
        <div  className='tenzies-number'>{props.die.value}</div>
    )
}