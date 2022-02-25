import React from 'react'
import Logo from  "../resources/Crestera-Logo.png"
import "../styles/form.css"


function Signup() {
  return (
    <div className='Form'>
        <div className='Form-container'>
        <form className='form'>
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
            <button type="submit" className="form-btn">SIGN UP</button>
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