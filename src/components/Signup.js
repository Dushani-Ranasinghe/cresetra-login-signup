import React from 'react'
import Logo from  "../resources/Crestera-Logo.png"
import "../styles/signup.css"

function Signup() {
  return (
    <div>
        <form>
            <img className="logo-img" src={Logo} alt="cresetra-logo"/>
        </form>
    </div>
  )
}

export default Signup