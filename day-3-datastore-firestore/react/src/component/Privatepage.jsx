import React from 'react'
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../assets/sevices/Firebase';
import { Navigate } from 'react-router';

const Privatepage = ({children}) => {

    const [user] = useAuthState(auth);

    if(!user){
      return <Navigate to="/Login"/>
    }
  return  children
    
}

export default Privatepage
