import { getAuth, signInWithPopup } from 'firebase/auth'
import React from 'react'
import { provider } from '../assets/sevices/Firebase';
import GoogleButton from 'react-google-button'


const Login = () => {

  function handleClick(){

    const auth = getAuth();
    signInWithPopup(auth, provider)
    .then((res)=>console.log(res))
    .then((data)=>alert("Login...."))
    .catch((err)=>console.log(err))

  }
  return (
    <div>
      <h1>login</h1>
      <GoogleButton onClick={handleClick}/>
    </div>
  )
}

export default Login
