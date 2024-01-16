import React from 'react'
import '../SignUp/signup.css'
import { Link } from 'react-router-dom'

function SignUp() {
  return (
    <div className='main-div'>
    
    <div className='main-signup-div'>
        
        <div className='username-pwd-div'>
        <h3>REGISTER </h3>
            <div class='fnwrapper'>
                <div><label>First Name</label></div>
                <div><input className="userinput" type="text" placeholder='Email'></input></div>
            </div>
            <div class='lnwrapper'>
                <div><label>Last Name</label></div>
                <div><input className="userinput" type="text" placeholder='Email'></input></div>
            </div>
            <div class='emailwrapper'>
                <div><label>Email</label></div>
                <div><input className="userinput" type="text" placeholder='Email'></input></div>
            </div>
            
            <div class='passwordwrapper'>
            <div><label>Password</label></div>
                <div><input className="userinput" type="password" placeholder='Password'></input></div>
            </div>
            <div class='confpasswordwrapper'>
            <div><label>Confirm Password</label></div>
                <div><input className="userinput" type="password" placeholder='Password'></input></div>
            </div>
            <div className='button-div'>
            <div className='login-button-div'>
                <button className='loginbutton'>SIGN UP</button>
            </div>
            
            </div>
            <div className='login-link-div'>
            Already a registered User?
            <Link to="/login">
                <h4>LOGIN</h4>
            </Link>
            </div>
        </div>
        
    </div>
    </div>
  )
}

export default SignUp