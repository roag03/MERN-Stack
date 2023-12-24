import React from "react";
 const Hello =() => {
    function clickHandler(){
        console.log("button clicked");
    }
    return(
        <div>
            <h1>
                Hare Krishna Mehak Ji
            </h1>
            <button onClick={clickHandler}>jai ho</button>
        </div>
    )
 };
 export default Hello;