// The useRef React hook allows you to access a value that persists across
// component renders. It's often used to access DOM elements or to store mutable
// values without triggering re-renders.

import react from "react";
import { useRef, useEffect, useState } from "react";

export default function MutableData() {
  const [data, setData] = useState("");
  const count = useRef(0);
  const inputEle = useRef();

  useEffect(function () {
    count.current = count.current + 1; // accesing a value that persists across renders
  });

  useEffect(function () {
    inputEle.current.focus(); // accesing DOM element
  }, []);

  return (
    <>
      <input
        ref={inputEle}
        type="text"
        value={data}
        onChange={(e) => setData(e.target.value)}
      />
      <h2>The count is: {count.current}</h2>
    </>
  );
}
