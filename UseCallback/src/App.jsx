import React, { useCallback, useState } from 'react'

const Child = React.memo(({onClick}) => {
  console.log("Child Rendered");
  return <button onClick={onClick}>Click Me</button>
})
const App = () => {
  const [count, setCount] = useState(0);

  const increment = useCallback(() => {
    console.log("Button Clicked");
  }, []);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>

      <Child onClick={increment}/>
    </div>
  )
}

export default App
