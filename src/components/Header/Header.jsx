import React from 'react'
import { Link } from 'react-router-dom'
import '../Header/header.css'

function Header() {
  return (
    <div className='header-div'>
      <div className='title-div'> </div>
        <div><nav className='nav-bar'>
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