import React from "react";
import { Component } from "react";
import "./App.css";
import Counters from "./components/counters";
import Navbar from "./components/Navbar";
import FuncComp from "./components/funcComp";
class App extends Component {
  state = {
    //array of object for rendering components
    counters: [
      { id: 1, value: 0 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
    ],
  };

  handleReset = () => {
    const counters = this.state.counters.map((c) => {
      c.value = 0;
      return c;
    });
    this.setState({ counters });
  };

  handleDelete = (counterId) => {
    //counterId is a parameter which takes the id as a input
    //counterElem to store the updated arrayObject
    const counterElem = this.state.counters.filter((c) => c.id !== counterId);
    //setstate helps in updating the arrayObject
    this.setState({ counters: counterElem });
  };

  handleIncrement = (counter) => {
    const counters = [...this.state.counters]; // "..." is used to clone the element
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value++;
    this.setState({ counters });
  };

  render() {
    return (
      <React.Fragment>
        <Navbar
          totalCounters={this.state.counters.filter((c) => c.value > 0).length}
        />
        <main className="container">
          <Counters
            counters={this.state.counters}
            onReset={this.handleReset}
            onDelete={this.handleDelete}
            onIncrement={this.handleIncrement}
          />
          
        </main>
        <FuncComp/>
      </React.Fragment>
    );
  }
}
export default App;
