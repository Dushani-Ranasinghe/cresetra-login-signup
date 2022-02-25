import React from 'react'
import Logo from  "../resources/Crestera-Logo.png"
import "../styles/signup.css"

function Signup() {
  return (
    <div>
        <form className='signup-form'>
            <img className="logo-img" src={Logo} alt="cresetra-logo"/>
            <h1> SIGN UP</h1>
        </form>
    </div>
  )
}

export default Signup