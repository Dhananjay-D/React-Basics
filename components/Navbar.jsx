import React from "react";

const Navbar = (props) => {
  return (
    <nav class="navbar bg-body-tertiary bg-warning">
      <div className="container-fluid">
        <a className="navbar-brand" href="http://dhananjay.website">
          Navbar
          <span className="badge badge-secondary badge-pill ml-3">
            {props.totalCounters}
          </span>
        </a>
      </div>
    </nav>
  );
};

export default Navbar;

//React Application is build using two components types:
//functional and class component:

// --class component have state obj and render function
//-- in class component this keyword is widely used to reference a element from that class

// --functional component do not have both hence it is stateless functional component
// --here no this keyword is used but here props is basically passed as a parameter to the func component
