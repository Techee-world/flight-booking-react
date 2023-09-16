import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './login.css'

function Login({loginData}) {
  const [login , setLogin] = useState()
  const [password , setPassword] = useState()
  function email(e){
    setLogin(e.target.value)
  }
  function Password(e){
    setPassword(e.target.value)
  }
  
  return (
<div className='login-main'>
    <div className="login-container">
        <h2>Login</h2>
        <form action="#">
            <input type="text" onChange={email}  placeholder="email" required/>
            <input type="password" onChange={Password} placeholder="Password" required/>
            {login && password ? <button onClick={()=>loginData(login)} ><Link to='/' style={{ textDecoration: 'none' }} >Login</Link> </button>:
            <button onClick={()=>alert('please enter valid email and password')} > Login</button>}
        </form>
    </div>
</div>
   
  )
}

export default Login
