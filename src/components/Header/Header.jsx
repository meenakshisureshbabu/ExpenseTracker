import React from 'react'
import { Link } from 'react-router-dom'
import '../Header/header.css'

function Header() {
  return (
    <div className='header-div'>
      <div className='title-div'> <img className='logoheader-img' src="/xpenz.png" alt="Logo"></img></div>
        <div>
          <nav className='nav-bar'>
          <div>
            <Link to={"/"}>
              <h3>ABOUT</h3>
            </Link>
            </div>
            <div>
            <Link to={"/contactus"}>
              <h3>CONTACT US</h3>
            </Link>
            </div>
            <div>
            <Link to={"/login"}>
              <h3>LOGIN</h3>
            </Link>
            </div>
            <div>
            <Link to={"/register"}>
              <button className='getstartbutton'>GET STARTED</button>
            </Link>
            </div>
          </nav>
        </div>
    </div>
  )
}

export default Header