import React from 'react'
import { logout } from '../../utilities/users-service'


function LogOut({setUser}) {

    const handlelogOut = (e) => {
        logout();
        setUser(null)
    }

  return (
    <div>
        <button onClick={handlelogOut}>Logout</button>
    </div>
  )
}

export default LogOut