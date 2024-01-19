import React from 'react'
import '../ForgotPassword/forgotpassword.css'
import { Link } from 'react-router-dom';
import Header from '../Header/Header';

function ForgotPassword() {
  return (
    <div>
        <Header/>
        <div className='main-forgotpwd-div'>
        
        <div className='main-forgotpwd-signup-div'>
            
            <div className='forgot-pwd-div'>
            <h3>Reset Password </h3>
                <div class='emailwrapper'>
                    <div><label>Email</label></div>
                    <div><input type="email" name="email"  required placeholder='Email'/></div>
                </div>
                
                <div class='passwordwrapper'>
                <div><label>Password</label></div>
                    <div><input type="password" name="password"   required placeholder='Password'/></div>
                </div>
                <div class='confpasswordwrapper'>
                <div><label>Confirm Password</label></div>
                    <div><input type="password" name="confirm"  required placeholder='Confirm Password'/></div>
                </div>
                <div className='button-div'>
                <div className='login-button-div'>
                    <button className='loginbutton'>RESET PASSWORD</button>
                </div>
                
                </div>
                <div>
                {/* <h3 className="error-message">&nbsp;{this.state.error}</h3> */}
                </div>
                
                <Link to="/login">
                    <h4>LOGIN</h4>
                </Link>
                </div>
            </div>
            
        </div>
        </div>
    
  )
}

export default ForgotPassword