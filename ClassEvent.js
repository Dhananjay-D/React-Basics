import { Component } from "react";
class ClassEvent extends Component{
    
    show(){
        console.log("hey i am encountered by class Event");
    }  //function definition

    render(){
        return (
            <div>
                <h2>click me to get alert</h2>
                <button onClick={this.show}>Click it</button> 
                {/* syntax for adding eventListener */}
            </div>
        )
    }
}

export default ClassEvent;