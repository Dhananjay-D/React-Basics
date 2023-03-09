//--------------Conditional Rendering------------------------------

import { useState } from "react";
function ConditionalComponent() {
  const [display, setDisplay] = useState(true);

  //   -----------

  // if(display){
  //     return(
  //         <div>
  //             <h2>This a conditional Component- TRUE </h2>
  //         </div>
  //     )
  // }
  // else{
  //     return(
  //         <div>
  //             <h2>This a conditional Component- FALSE </h2>
  //         </div>
  //     )
  // }

// ----------

  // [or]  Conditional Rendering using Elements(no multiple use of return statements)

//   let output;
//   if (display) {
//     output = <h2>This a conditional Component- TRUE </h2>;
//   } else {
//     output = <h2>This a conditional Component- FALSE </h2>;
//   }

//   return <div>{output}</div>;

  //---------

  //[or] Using Ternary Conditional

    return (display ? (<div><h2>This a conditional Component- TRUE </h2></div>) : (<div><h2>This a conditional Component- FALSE </h2></div>));
  
  //------------
}
export default ConditionalComponent;