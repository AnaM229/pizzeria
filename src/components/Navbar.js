import React, {useState} from 'react'
import Logo from '../assets/logo.jpg'
import {Link} from 'react-router-dom'
import '../styles/Navbar.css'
import DehazeIcon from '@mui/icons-material/Dehaze';

export default function Navbar() {
    const [openLinks, setOpenLinks] = useState(false)
    function toggleNavbar(){
        setOpenLinks(!openLinks)
     
    }



  return (
    <div className="navbar">
        <div className="leftSide" id={openLinks ? "open" : "close"}>
            <img src={Logo} />
        </div>
        <div className="rightSide">
            <div id={openLinks ? "show" : "hide"}>
            <Link to="/">Home</Link>
            <Link to="/menu">Menu</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
            </div>
            <button onClick={toggleNavbar}>
            <DehazeIcon />
            </button>
        </div>
    </div>
  )
}
