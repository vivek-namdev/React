import React from 'react'
import { usecontext } from 'react'
import { ThemeContext } from "./components/ThemeContext";


const Navbar = () => {

    const {theme} = usecontext(ThemeContext);
  return (
    <nav>
      Current Theme: {theme}
    </nav>
  )
}

export default Navbar
