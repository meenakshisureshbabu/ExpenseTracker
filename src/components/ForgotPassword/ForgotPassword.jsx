import React, { useState } from 'react'
import '../ForgotPassword/forgotpassword.css'
import { Link } from 'react-router-dom';
import Header from '../Header/Header';
import {resetPwd} from '../../utilities/users-service'

function ForgotPassword() {

    const [resetdata,setResetdata] = useState({email:'',password:''})
    const [error,setError] = useState('');
    const handleChange = (evt) => {
        setResetdata({...resetdata,[evt.target.name]:evt.target.value})
        setError('')
    }

    const handleSubmitResetPwd = async(e) => {
        e.preventDefault()
        try{
            const user = await resetPwd(resetdata)
            setError("Password Reset Successful. Please LOGIN!!")
        }
        catch{
            setError("Email ID not found. Please SIGNUP!!")
        }

    }



  return (
    
    <div>
        <Header/>
        <div className='main-forgotpwd-div'>
        
        <div className='main-forgotpwd-signup-div'>
            
            <div className='forgot-pwd-div'>
            <h3>Reset Password </h3>
                <div class='emailwrapper'>
                    <div><label>Email</label></div>
                    <div><input type="email" name="email"  required placeholder='Email' onChange={handleChange}/></div>
                </div>
                
                <div class='passwordwrapper'>
                <div><label>Password</label></div>
                    <div><input type="password" name="password"   required placeholder='Password' onChange={handleChange}/></div>
                </div>
                <div class='confpasswordwrapper'>
                <div><label>Confirm Password</label></div>
                    <div><input type="password" name="confirm"  required placeholder='Confirm Password' onChange={handleChange}/></div>
                </div>
                <div className='button-div'>
                <div className='login-button-div'>
                    <button className='loginbutton' onClick={handleSubmitResetPwd}>RESET PASSWORD</button>
                </div>
                
                </div>
                <div>
                <h3 className="error-message">{error}</h3>
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