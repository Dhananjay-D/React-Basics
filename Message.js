//creating a class component(basics)

import { Component } from "react";

const display=()=>{
    return "nothing";
}

class Message extends Component{
    render(){
        return <h1>The message is: {display()} </h1>;//jsx code which combines Html & Js
    }
}

export default Message;