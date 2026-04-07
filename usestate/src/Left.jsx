import React from 'react'

const Left = ({setText}) => {
  return (
    <div className='border h-[100vh] w-[50vw]'>
      <input className='border p-2 w-full'
      onChange={(e) => {
        setText(e.target.value);
      }}
      type="text" 
      placeholder='type here...'
      />
    </div>
  )
}

export default Left
