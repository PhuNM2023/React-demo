import React, { Fragment, useCallback, useState } from 'react'

interface CountComponentProps {
  count: number;
  increaseCount: () => void
}

function CountComponent({ count, increaseCount }: CountComponentProps) {
  console.log("Count component rendered");

  return (
    <div>
      <p>Count: <strong>{count}</strong></p>
      <button className='btn btn-primary'
        onClick={increaseCount}>
        Click
      </button>
    </div>
  )
}

const MemoCount = React.memo(CountComponent)

const UseCallBack = () => {
  const [bool, setBool] = useState<boolean>(true);
  const [count, setCount] = useState<number>(0);
  // const increaseCount = () => setCount((prevCount) => prevCount + 1);

  const increaseCount = useCallback(() => setCount((prevCount) => prevCount + 1), [count])

  const toggleBoolState = () => setBool((prevState) => !prevState)
  return (
    <Fragment>
      <h2>UseMemo Hook</h2>
      <div>
        <p>The boolean state is: {bool.toString()}</p>
        <button className='btn btn-primary' onClick={toggleBoolState}>toggle Boolean State</button>
      </div>
      <div>
        <MemoCount count={count} increaseCount={increaseCount} />
      </div>
    </Fragment>
  )
}

export default UseCallBack