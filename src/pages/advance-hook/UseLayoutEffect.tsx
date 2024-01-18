import React, { useEffect, useLayoutEffect, useState } from 'react'

const BlinkyNormalEffect = () => {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if(value === 0) {
      setValue(10 + Math.random() * 200)
    }
  },[value])

  return (
    <div>
      <h2 className='mb-2'>Value: {value}</h2>
      <button onClick={() => setValue(0)}>set value normal</button>
    </div>
  )
}
const BlinkyLayoutEffect = () => {
  const [value, setValue] = useState(0);

  useLayoutEffect(() => {
    if(value === 0) {
      setValue(10 + Math.random() * 200)
    }
  },[value])

  return (
    <div>
      <h2 className='mb-2'>Value: {value}</h2>
      <button onClick={() => setValue(0)}>set value hook</button>
    </div>
  )
}

const UseLayoutEffect = () => {
  return (
    <div className='container-fluid'>
      <div className='container'>
        <div className='row pt-5'>
          <div className='col-6'>
            <h2>useEffect</h2>
            <BlinkyNormalEffect/>
          </div>
          <div className='col-6'>
            <h2>useLayoutEffect</h2>
            <BlinkyLayoutEffect/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default UseLayoutEffect