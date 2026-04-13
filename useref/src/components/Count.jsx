import React, { useRef, useState } from 'react'

const Count = () => {
  const [count, setCount] = useState(0);
  const useCount = useRef(0);

  return (
    <div>
      <h1>{count}</h1>

      <button onClick={() => {
        setCount(count + 1);
      }}>
        Increment
      </button>

      <div>
        <h1>{useCount.current}</h1>

        <button onClick={() => {
          useCount.current = useCount.current + 1;
        }}>
          useRef Increment
        </button>
      </div>
    </div>
  )
}

export default Count