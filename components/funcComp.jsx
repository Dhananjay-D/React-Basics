import React ,{ useState } from "react";


function FuncComp(){

function handleClick(){
    setCount(count + 1)
}

function handleReset(){
    setCount(0)
}
//syntax for declaring a useState Hook
const[count,setCount]=useState(0);

return(<>
<h1 style={{fontSize:30}} className="ml-4 mt-3">{count}</h1>
<button className="btn btn-lg btn-outline-primary ml-5 mt-2" onClick={handleClick}>increment</button>
<button className="btn btn-lg btn-outline-primary ml-5 mt-2" onClick={handleReset}>reset</button>
</>
)
}

export default FuncComp;

// if we are adding bootstrap classes to react app and in className we want to make changes according 
// to the props then follow following syntax

        // className={`btn btn-lg btn-${props.color}`}
        // $ symbol is basically used to set the value