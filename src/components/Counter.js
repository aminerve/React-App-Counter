import { useState } from "react";

function Counter() {
  const [counter, setCounter] = useState(0);
  // let counter = 0;

  // New State countByTwo
  const [countByTwo, setCountByTwo] = useState(0);
  console.log(counter);


  function handleClick() {
    setCounter(counter + 1);
  }

  function handleClick2() {
    setCounter(counter + 2);
  }
  function handleClick3() {
    setCounter(counter * 3)
  }  

  return (
    <div>
      <h2>Counter: {counter}</h2>
      <button onClick={handleClick}>+1</button>
      {/* <h2>Counter: {countByTwo}</h2> */}
      <button onClick={handleClick2}>+2</button>
      <button onClick={handleClick3}>x3</button>
    </div>
  );
}

export default Counter;
