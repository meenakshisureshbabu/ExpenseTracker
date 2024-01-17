import React from 'react'
import '../MainMenu/mainmenu.css'
import LogOut from '../../components/LogOut/LogOut'
import AsideMenu from '../../components/AsideMenu/AsideMenu'
import { Link } from 'react-router-dom'
import AddIncome from '../../components/AddIncome/AddIncome'

function MainMenu({user,setUser,screen}) {


  return (
    <main className='main-screen-div'>
        <AsideMenu user={user} setUser={setUser}/>        
    </main>
  )
}

export default MainMenu