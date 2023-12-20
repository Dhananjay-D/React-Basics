// implementation of useEffect - to perform sideeffects /  fetch data from an api

import React from "react";
import { useState, useEffect } from "react";

export default function FetchData() {
  const [count, setCount] = useState(1);
  const [title, setTitle] = useState("");

  useEffect(
    function () {
      async function LoadData() {
        const resp = await fetch(
          `https://jsonplaceholder.typicode.com/todos/${count}`
        );
        const data = await resp.json();
        console.log(data);
        setTitle(data.title);
      }
      LoadData();
    },
    [count] // dependency so that useEffect function is called as per the requirements...
  );

  const handleClick = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={handleClick}>Click me</button>
      <p>{title}</p>
    </div>
  );
}
