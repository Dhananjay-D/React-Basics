import { Component } from "react";

class ClassProps extends Component{
    render(){
        return <h1>The message code is: {this.props.messagecode} </h1>;//most of times "this" keyword is used in class-based components
    }
}

//need to make changes in it

export default ClassProps;