import React from 'react'
import Tool1 from "./Tool1.js"
import { Link} from "react-router-dom"
import Tool2 from "./Tool2.js"
import Tool3 from "./Tool3.js"
import Tool4 from "./Tool4.js"
import Tool5 from "./Tool5.js"
import Tool6 from "./Tool6.js"

const Homepage = () => {
  return (
    <main className="mainpage">
        <Link to="/textsum" style={{color:'white', textDecoration:"none"}}><Tool1/></Link>
        <Link to="/pwdgen" style={{color:'white', textDecoration:"none"}}><Tool3/></Link>
        <Link to="/lyric" style={{color:'white', textDecoration:"none"}}><Tool4/></Link>
        <Link to="/pdf" style={{color:'white', textDecoration:"none"}}><Tool5/></Link>
        <Link to="/qr" style={{color:'white', textDecoration:"none"}}><Tool6/></Link>
        <Link to="/ytmp3" style={{color:'white', textDecoration:"none"}}><Tool2/></Link>

    </main>
    
  )
}

export default Homepage