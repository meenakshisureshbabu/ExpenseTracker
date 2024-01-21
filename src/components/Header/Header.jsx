import React from 'react'
import { Link } from 'react-router-dom'
import '../Header/header.css'

function Header() {
  return (
    <div className='header-div'>
      <div className='title-div'> <img className='logoheader-img' src="/xpenz.png" alt="Logo"></img></div>
        <div>
          <nav id='nav1' className='nav-bar'>
          <div className='link-1'>
            <Link style={{textDecoration: 'none'}} to={"/"}>
              <h3 className='about-menu'>HOME</h3>
            </Link>
            </div>
            <div className='link-1'>
            <Link style={{textDecoration: 'none'}} to={"/contactus"}>
              <h3>CONTACT US</h3>
            </Link>
            </div >
            <div className='link-1'>
            <Link style={{textDecoration: 'none'}} to={"/login"}>
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