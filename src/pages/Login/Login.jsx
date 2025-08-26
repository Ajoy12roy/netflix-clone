import React, { useState } from 'react'
import './Login.css'
import logo from '../../assets/logo.png'
import { login , signup } from '../../firebase-js'

export const Login = () => {

  const [signState, setSignState] = useState("Sign In");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
  const user_auth = async (event) => {
    event.preventDefault();
    try {
      if (signState === "Sign In") {
        await login(email, password);
      } else {
        await signup(name, email, password);
      }
    } catch (error) {
      console.error("Authentication error:", error);
     
    }
  }


  return (
    <div className='login'>
      <img src={logo} className='login-logo' alt="" /> 
      <div className="login-from">
        <h1>{signState}</h1>
        <form onSubmit={user_auth}>
          {signState === "Sign Up" ? 
          <input value={name} onChange={(e)=>{setName(e.target.value)} } type="text" placeholder='Your name'/>:<></>}
          <input value={email} onChange={(e)=>{setEmail(e.target.value)} }  type="email" placeholder='Email or phone number' />
          <input value={password} onChange={(e)=>{setPassword(e.target.value)} }  type="password" placeholder='correct Password'/>
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
