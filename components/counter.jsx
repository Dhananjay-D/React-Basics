import React, { Component } from "react";

class Counter extends Component {

  render() {
    const customStyle={
      color:"blue",
      //textDecoration:"underline",
      //fontWeight:"light"
    };

    return (
      <React.Fragment>
        <h1 style={customStyle}>Cart demo example: </h1> 
        {/* inline styling syntax below */}
        <span style={{ fontSize: 30 }} className={this.addBadgeClasses()}>
          {this.props.counter.value}
        </span>
        <button
          onClick={() => this.props.onIncrement(this.props.counter)}
          className="btn btn-lg btn-outline-dark"
        >
          Increment
        </button>
        <button
          onClick={() => this.props.onDelete(this.props.counter.id)}
          className="btn btn-lg btn-danger ml-3"
        >
          Delete
        </button>
      </React.Fragment>
    );
  }
  // rendering classes dynamically
  addBadgeClasses() {
    let classes = "ml-2 mr-4  badge badge-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }
}

export default Counter;
// Imp notes:

//Arrow functions helps in accesing any object present in the class.
//eg:  display=()=>{
//    return <h1>hii their</h1>
//}
// component not having its own state is known to be controlled component
// controlled component can recieve Data and can raise the events
