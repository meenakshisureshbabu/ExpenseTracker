import React from 'react'
import '../MainMenu/mainmenu.css'
import LogOut from '../../components/LogOut/LogOut'

function MainMenu({user,setUser}) {

  return (
    <main className='main-screen-div'>
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
              <div className='income-div'>
              💰 INCOME
              </div>
              <div className='expense-div'>
              💸 EXPENSE
              </div>
            </div>
            <div className='logout-div'>
            <LogOut setUser={setUser}/>
            </div>
        </aside>

        <section>

        </section>

    </main>
  )
}

export default MainMenu