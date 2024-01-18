import React, { Fragment, useMemo, useState } from 'react'

function calculateExpensive(number: number) {
  console.log("I'm calculating...");
  for (let i = 0; i < 1000000000; i++) {
    number += 1
  }

  return number
}

const UseMemoHook = () => {
  const [boolState, setBoolState] = useState<boolean>(true);
  const [count, setCount] = useState<number>(0);

  // const calculateValue = calculateExpensive(count);
  const calculateValue = useMemo(() => calculateExpensive(count), [count])

  const increaseCount = () => setCount((prevCount) => prevCount + 1);
  const toggleBoolState = () => setBoolState((prevState) => !prevState)
  return (
    <Fragment>
      <h2>UseMemo Hook</h2>
      <div>
        <p>The boolean state is: {boolState.toString()}</p>
        <button className='btn btn-primary' onClick={toggleBoolState}>toggle Boolean State</button>
      </div>
      <div>
        <p>The calculation result is: {calculateValue}</p>
        <button className='btn btn-primary' onClick={increaseCount}>increase count</button>
      </div>
    </Fragment>
  )
}

export default UseMemoHook