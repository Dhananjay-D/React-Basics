//Handling User Input
import { Component } from "react";

class Form extends Component{

state={             //state is a object
    firstn:"",  //creating a variable
    lastname:"",
}

handleChange=(event)=>{
    this.setState({  // setState is a method for setting the value of state
        firstn:event.target.value
    })
};

handleLastNameChange=(event)=>{
    this.setState({
        lastname: event.target.value
    });
};

handleSubmit=(event)=>{
    event.preventDefault(); //preventing the default behaviour of form submission i.e,reloading of page
    console.log({
        Fname:this.state.firstn,
        Lname:this.state.lastname
    })
}


render(){
    return(

        <div>
            Form:
            
            <form onSubmit={this.handleSubmit}> 
                <input 
                onChange={this.handleChange} //onChange handler assigned to this/present class function
                type="text"
                value={this.state.firstn}
                placeholder="First Name"
                ></input>

                <input 
                onChange={this.handleLastNameChange} 
                type="text"
                value={this.state.lastname}
                placeholder="Last Name"
                ></input>

                <button type="submit">Submit</button>
            </form>
        </div>

    )
}

}
export default Form;