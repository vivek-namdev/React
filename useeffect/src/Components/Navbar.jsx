import React from 'react'

const Navbar = ({onSearch}) => {

  const handleSearch = (e) => {
    onSearch(e.target.value);
  }

  return (
    <nav className='flex bg-blue-300 justify-between items-center p-4 rounded-lg'>
        <h3>Fashion Factory</h3>

        <input className='rounded text-black bg-white' 
        type="text" 
        placeholder='Search...' 
        onChange={handleSearch}
        />
    </nav>
  )
}

export default Navbar
