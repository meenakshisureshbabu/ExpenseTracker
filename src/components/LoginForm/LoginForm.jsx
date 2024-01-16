import React from 'react'
import '../LoginForm/loginform.css'
import { Link } from 'react-router-dom'
import Header from '../Header/Header'

function LoginForm() {

    

  return (
    <>
    <Header/>
    <div className='main-login-div'>
    
    <div className='sub-login-div'>
        
        <div className='login-username-pwd-div'>
        <h3>Welcome Back!! </h3>
            <div class='userwrapper'>
                <div class="icon"><img className="userimage "src="https://png.pngtree.com/png-clipart/20191120/original/pngtree-outline-user-icon-png-image_5045523.jpg"></img></div>
                <div><input className="userinput" type="text" placeholder='Email'></input></div>
            </div>
            <div class='pwdwrapper'>
                <div class="icon"><img className="pwdimage "src="https://as1.ftcdn.net/v2/jpg/02/22/71/68/1000_F_222716838_hNvaOJGAQmcqKQLT5eQpGGsyiLArv6IT.jpg"></img></div>
                <div><input className="userinput" type="password" placeholder='Password'></input></div>
            </div>
            <div className='login-button-div'>
                <button className='loginbutton'>LOGIN</button>
            </div>
           
        </div>
        
    </div>
    </div>
    </>
  )
}

export default LoginForm