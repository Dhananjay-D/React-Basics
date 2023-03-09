// implementing state using Function Component
import { useState } from "react";

function FunctionState(){
    const [count,setCount]=useState(0);
    //syntax -> const[varname , functionName]=useState(initial value);

    const increment=()=>{
        setCount(count+1);
    };
    return(
        <div>
            <h1>Count value is: {count}</h1>
            <button onClick={increment}>Increment!</button>
        </div>
    )
};
export default FunctionState;