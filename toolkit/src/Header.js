import React from 'react'
import Home from "./Home.js"
import { FaWrench } from 'react-icons/fa'
const Header = () => {
  return (
    <header className="Header">
        <Home/>
        <label>Toolkit <FaWrench size={65}/></label>
        <div className="spacer"></div>
    </header>
    
  )
}

export default Header