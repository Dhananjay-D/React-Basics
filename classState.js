//implementing state in a class component
import { Component } from "react";

class classState extends Component{

    constructor(){
        super();
    this.state={
        counter:0,  
    };
    }

                // [the below is the way of event binding]

    increment = ()=>{
        this.setState({
             counter: this.state.counter + 1
        })
    }
            
    decrement(){
        this.setState({
            counter: this.state.counter - 1
        })
    }

    render(){
        return (<div>
            <h1>Counter value is: {this.state.counter} </h1>
            <button onClick={this.increment}>Increment</button>
            <button onClick={()=> this.decrement()}>Decrement</button>
        </div>); 
    }
}
export default classState;