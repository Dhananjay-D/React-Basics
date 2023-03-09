
function FunctionEvent(){
    const display=()=>{
        console.log("i am fired! FunctionalEvent");
    }
    return (
        <div>
            <h1>I'm functional event</h1>
            <button onClick={ display }>click me!</button>
            {/* syntax for adding eventListener */}
        </div>
    )
}
export default FunctionEvent;