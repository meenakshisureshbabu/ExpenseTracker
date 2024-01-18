import React from 'react'
import '../AsideMenu/asidemenu.css'
import LogOut from '../LogOut/LogOut'
import { Link } from 'react-router-dom'

function AsideMenu({user,setUser}) {
  return (
    <div>
        <aside>
            <div className='profile'>
                <div>
                <img className='profile-img' src="https://t4.ftcdn.net/jpg/02/29/75/83/360_F_229758328_7x8jwCwjtBMmC6rgFzLFhZoEpLobB6L8.jpg"></img>
                </div>
                <div><h3>Hi {user.firstname}</h3></div>

            </div>
            <div className='menu-div'>
            
              <div className='dashboard-div'>
                 📈DASHBOARD
              </div>
              <Link to='/addincome'>
              <div className='income-div'>
              💰 INCOME
              </div>
              </Link>
              <Link to='/addexpense'>
              <div className='expense-div'>
              💸 EXPENSE
              </div>
              </Link>
            </div>
            <div className='logout-div'>
            <LogOut setUser={setUser}/>
            </div>
        </aside>
    </div>
  )
}

export default AsideMenu