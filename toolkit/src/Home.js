import React from 'react'
import { FaHome } from 'react-icons/fa';
import {Link} from "react-router-dom"

const Home = () => {
  return (
    <button className="homebutton">
       <Link to="/" style={{color:"darkslategrey"}}><FaHome size={60}/></Link>
    </button>
  )
}

export default Home