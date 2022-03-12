import React from 'react'
import Logo from "../resources/Crestera-Logo.png"
import "../styles/form.css"


function Login() {
  return (
    <div className='Form'>
        <div className='Form-container'>
        <form className='form'>
            <img className="logo-img" src={Logo} alt="cresetra-logo"/>
            <h1> LOGIN</h1>

            <div className='form-group'>
                 <input type="text" className='form-control' placeholder='Email'/>
            </div>
            <div className='form-group'>
                 <input type="text" className='form-control' placeholder='Password'/>
            </div>
           
            <button type="submit" className="form-btn-login">LOGIN</button>
                <p>
                   New User?
                </p>
                <a href="#">Signup</a>
        </form>
        </div>
    </div>
  )
}

export default Login