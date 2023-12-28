// For referenece visit:  https://www.thapatechnical.com/2022/08/complete-axios-in-15minutes.html

import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";

const baseUrl = "https://jsonplaceholder.typicode.com";

function AxiosGet() {
  const [data, setData] = useState([]);

  //using Promises:
  useEffect(() => {
    axios
      .get(`${baseUrl}/todos`)
      .then((res) => setData(res.data))
      .catch((error) => console.log(error.message));
  }, []);

  return (
    <>
      <h1>Axios Get Data</h1>
      <div className="grid">
        {data.slice(0, 11).map((item) => {
          const { id, title } = item;
          return <h4 key={id}>{title.slice(0, 8).toUpperCase()}</h4>;
        })}
      </div>
    </>
  );
}

export default AxiosGet;
