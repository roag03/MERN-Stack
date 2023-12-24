import React from 'react'
const Greet = (props) =>{
console.log(props)
return( 
<div> 
    <h1>
        Hare Krishna {props.name} ji {props.rohitName} 
    </h1>
    {props.children}
    </div>)
}
export default Greet