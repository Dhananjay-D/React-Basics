//most of the times "this" keyword is used in class-components
import { Component } from "react";

 class classDestructuringProps extends Component{

    render(){
        const { name }=this.props; //syntax for destructuring Props in class Component
        return <h1>My name is: {name}</h1>
    }
 }
 export default classDestructuringProps;