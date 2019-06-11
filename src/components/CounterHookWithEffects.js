import React, { useState, useEffect } from 'react'

export default function CounterHookWithEffects() {
  const [counter, setCounter] = useState(0)
  useEffect(
    () => {
      document.title = `You clicked ${counter} times`
    }
  )
  return (<div>
    <p>You clicked {counter} times</p>
    <button onClick={() => setCounter((prevCounter) => (prevCounter + 1))}>Click to increase</button>
  </div>)
}