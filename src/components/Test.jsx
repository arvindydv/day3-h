import React from "react";
import { useState } from "react";

export const Test = () => {
  const [count, setCount] = useState(0);
  //   const handleCont = () => {
  //     setCount(count + 1);
  //     setCount(count + 1);
  //     setCount(count + 1);
  //     setCount(count + 1);
  //     console.log(count);
  //   };
  document.querySelector(".btn").addEventListener("click", () => {
    setCount(count + 1);
  });
  return (
    <>
      <div>{count}</div>
      <button className="btn">add</button>
    </>
  );
};
