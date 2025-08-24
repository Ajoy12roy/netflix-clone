import React, { useState } from 'react'
import './Login.css'
import logo from '../../assets/logo.png'

export const Login = () => {

  const [signState, setSignState] = useState("Sign In")


  return (
    <div className='login'>
      <img src={logo} className='login-logo' alt="" /> 
      <div className="login-from">
        <h1>{signState}</h1>
        <form>
          {signState === "Sign Up" ? <input type="text" placeholder='Your name'/>:<></>}
         
          <input type="email" placeholder='Email or phone number' />
          <input type="password" placeholder='correct Password'/>
          <button>Sign up</button>
          <div className="from-help">
            <div className="remember">
              <input type="checkbox"  />
              <label htmlFor="">Remember me</label>
            </div>
            <p>Need help</p>
          </div>
        </form>
        <div className="form-switch">
          {signState === "Sign In" ? 
          <p>New to Netflix <span onClick={()=>{setSignState ("Sign Up")}}>Sign up now</span></p>
          :<p>Already have an account <span onClick={()=>{setSignState ("Sign In")}}>Sign In</span></p>}
        </div>
      </div>
    </div>
  )
}
export default Login
