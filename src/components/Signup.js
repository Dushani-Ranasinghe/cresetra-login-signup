import React from 'react'
import Logo from  "../resources/Crestera-Logo.png"
import "../styles/signup.css"


function Signup() {
  return (
    <div className='Signup'>
        <div className='signup-container'>
        <form className='signup-form'>
            <img className="logo-img" src={Logo} alt="cresetra-logo"/>
            <h1> SIGN UP</h1>

            <div className='form-group'>
                 <input type="text" className='form-control' placeholder='First Name'/>
            </div>
            <div className='form-group'>
                 <input type="text" className='form-control' placeholder='Last Name'/>
            </div>
            <div className='form-group'>
                 <input type="text" className='form-control' placeholder='Email'/>
            </div>
            <div className='form-group'>
                 <input type="text" className='form-control' placeholder='Password'/>
            </div>
            <div className='form-group'>
                 <input type="text" className='form-control' placeholder='Confirm Password'/>
            </div>
            <button type="submit" className="signup-btn">SIGN UP</button>
                <p>
                    Already Have An Account?
                </p>
                <a href="#">Login</a>
        </form>
        </div>
    </div>
  )
}

export default Signup