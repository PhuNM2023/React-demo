import React, {  useState } from 'react'
import styles from './CssModule.module.css';

const CssModule = () => {
  const [count, setCount] = useState(0);

  const decreaseCount = () => {
    setCount((prevCount) => prevCount - 1)
  }
  const increaseCount = () => {
    setCount((prevCount) => prevCount + 1)
  }
  return (
    <>
      <h2>CSS MODULE</h2>
      <div className='main-content'>
      <h3>Styling</h3>
      <div className='counter'>this is counter example</div>
        <div className={styles.counter}>
        <button className={`${styles.button} ${styles.first}`} 
        onClick={decreaseCount}>
          -
        </button>
        <div>
          <span className='spanRotate'>{count}</span>
        </div>
        <button className={styles.button} 
        onClick={increaseCount}>
          +
        </button>
        </div>
      </div>
    </>
  )
}

export default CssModule


