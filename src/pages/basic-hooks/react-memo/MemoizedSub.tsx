import React from 'react'

interface SubProp {
    name: string
}

const MemoizedSub = ({ name }: SubProp) => {
  console.log(`Rendering memoizedSubComponent: ${name}`);  
  return (
    <div>{name}</div>
  )
}

// eslint-disable-next-line react-refresh/only-export-components
export default React.memo(MemoizedSub, (prevProps, nextProps) => {
  return prevProps.name === nextProps.name;
})

// export default React.memo(MemoizedSub)