import React, { useState } from 'react';

export default function CounterHook() {
  // our first hook! useState => setState
  const [counter, setCounter] = useState(0);
  const increase = () => setCounter((prevCounter) => (prevCounter + 1));
  return (
    <div>
      <p>You clicked {counter} times</p>
      {/* <button onClick={() => setCounter((prevCounter) => (prevCounter + 1))}>Click to increase</button> */}
      <button onClick={increase}>Click to increase</button>
    </div>
  )
}