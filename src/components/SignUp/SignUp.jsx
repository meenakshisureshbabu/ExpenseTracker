import PropTypes from 'prop-types'
import React, { Component } from 'react'
import Header from '../Header/Header';
import { Link } from 'react-router-dom';
import '../SignUp/signup.css'
import { signUp } from '../../utilities/users-service';

export default class SignUp extends Component {
  
    state = {
        firstname:'',
        lastname:'',
        email:'',
        password:'',
        confirm:'',
        error:''
    }

    handleChange = (evt) => {
        this.setState({
            [evt.target.name]:evt.target.value,
            error:''
        });

    };

    handleSubmit = async (e) => {
        e.preventDefault();
        try{
            const formData = {...this.state};
            delete formData.confirm;
            delete formData.error;
            console.log("Before calling the service"+formData)
            const expense_user = await signUp(formData);
            console.log(expense_user)
            this.setState({error:'Sign Up Success - Please login'})

        }
        catch{
            this.setState({error:'Sign Up Failed - Please try again!!'})
        }
    }



  render() {
    const disable = this.state.password !== this.state.confirm;
    return (
        <>
        <Header/>
        <div className='main-div'>
        
        <div className='main-signup-div'>
            
            <div className='username-pwd-div'>
            <h3>REGISTER </h3>
                <div class='fnwrapper'>
                    <div><label>First Name</label></div>
                    <div><input  type="text" name="firstname"  value={this.state.firstname} onChange={this.handleChange} required placeholder='First Name'/></div>
                </div>
                <div class='lnwrapper'>
                    <div><label>Last Name</label></div>
                    <div><input type="text" name="lastname"  value={this.state.lastname} onChange={this.handleChange} required placeholder='Last Name'/></div>
                </div>
                <div class='emailwrapper'>
                    <div><label>Email</label></div>
                    <div><input type="email" name="email"  value={this.state.email} onChange={this.handleChange} required placeholder='Email'/></div>
                </div>
                
                <div class='passwordwrapper'>
                <div><label>Password</label></div>
                    <div><input type="password" name="password"  value={this.state.password} onChange={this.handleChange} required placeholder='Password'/></div>
                </div>
                <div class='confpasswordwrapper'>
                <div><label>Confirm Password</label></div>
                    <div><input type="password" name="confirm"  value={this.state.confirm} onChange={this.handleChange} required placeholder='Confirm Password'/></div>
                </div>
                <div className='button-div'>
                <div className='login-button-div'>
                    <button className='loginbutton' disabled={disable} onClick={this.handleSubmit}>SIGN UP</button>
                </div>
                <p className="error-message">&nbsp;{this.state.error}</p>
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
        </>
    )

}
}
