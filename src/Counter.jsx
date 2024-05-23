import React from "react";
import { useState } from "react";
function counter(){
 const [inputvalue, setInputValue]=useState(0)

 function handle(props){
    if (props===inc)
        setInputValue(setInputValue+1)
    else {
        if (props==="dec")
            setInputValue(setInputValue-1)
    }
 }

return(
    <>
    <button onClick={()=> handle("inc")}>Increment</button>
    <p> {counter}</p>
    <button onCLick={()=> handle("dec")}>decrement</button>
    </>
)
}
export default Counter;