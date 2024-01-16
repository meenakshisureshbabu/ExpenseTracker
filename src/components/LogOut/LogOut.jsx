import React from 'react'
import { logout } from '../../utilities/users-service'
import '../LogOut/logout.css'


function LogOut({setUser}) {

    const handlelogOut = (e) => {
        logout();
        setUser(null)
    }

  return (
    <div>
        <button className='logoutbutton' onClick={handlelogOut}>Logout</button>
    </div>
  )
}

export default LogOut