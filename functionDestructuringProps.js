
function functionDestructuringProps(props){
    const { surname }= props;    //syntax for destructuring Props in Functional Component
    return <h1>My surname is: {surname}</h1>
}

export default functionDestructuringProps;