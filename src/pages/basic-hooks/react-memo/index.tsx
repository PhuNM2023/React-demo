import React, { useState } from 'react'
import MemoizedSub from './MemoizedSub';

interface ChildProp {
  name: string
}

// Child component without React.memo

const ChildComponent = ({ name }: ChildProp) => {
  console.log(`Rendering ChildComponent: ${name}`);
  return <div>{name}</div>
}

// child component with React.memo
const MemoizedChildComponent = React.memo(
  ({ name }: ChildProp) => {
    console.log(`Rendering MemoizedChildComponent: ${name}`);
    return <div>{name}</div>
  }, (prevProp, nextProp) => {
    return prevProp.name === nextProp.name
  }
)

// parent component
const ReactMemo: React.FC = () => {
  const [name, setName] = useState("Duong")
  const [counter, setCounter] = useState<number>(0)

  const handleChangeName = () => {
    setName("Thuyet")
  }

  const handleChangeCounter = () => {
    setCounter((prevState) => prevState += 1)
  }
  return (
    <div>
      <button className='btn btn-primary mr-2' onClick={handleChangeName}>Change Name</button>
      <button className='btn btn-secondary' onClick={handleChangeCounter}>Change Counter</button>
      <h2>{counter}</h2>
      <ChildComponent name={name} />
      <MemoizedChildComponent name={name} />
      <MemoizedSub name={name}/>
    </div>
  )
}

export default ReactMemo