import React, { useRef } from 'react'

const Focus = () => {
    const inputRef = useRef(null);

    const handleFocus = () => {
        inputRef.current.focus();
    }

  return (
    <div>
      <input className='border' ref={inputRef} type="text" placeholder='Click button to focus' />
      <button onClick={handleFocus}>Focus the input</button>
    </div>
  )
}

export default Focus
