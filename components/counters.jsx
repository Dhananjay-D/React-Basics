import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  render() {
    //object destructuring
    const { onReset, counters, onIncrement, onDelete } = this.props;

    return (
      <React.Fragment>
        <button onClick={onReset} className="btn btn-lg btn-primary m-4">
          Reset
        </button>
        {/* rendering the list */}
        {counters.map((counter) => (
          <Counter
            key={counter.id}
            onIncrement={onIncrement}
            onDelete={onDelete}
            counter={counter}
          ></Counter>
        ))}
      </React.Fragment>
    );
  }
}

export default Counters;
