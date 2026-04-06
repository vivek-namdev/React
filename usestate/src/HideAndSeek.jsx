import React, { useState } from 'react'

const HideAndSeek = () => {

  const[show, setShow] = useState(true);
  
  return (
    <div>
      <button
      onClick={() => {
        setShow(!show)}
      }
      className='px-4 py-2 bg-black text-white rounded-lg'
      >{show ? "show" : "Hide"}</button>

      {show && <div className='w-32 mt-4 bg-green-500 aspect-square'></div>}
    </div>
  )
}

export default HideAndSeek