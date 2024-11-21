import React, { Children, useContext, useState } from 'react';
import { AuthContext } from '../AuthProvider';
import { Navigate } from 'react-router-dom';

const Private = ({children}) => {
  
  
    const {user,load} = useContext(AuthContext)
    if(load){
    return <h1>Loading.......</h1>
}
   if(!user ){
    return(
        <Navigate to={'/login'}></Navigate>
        
    )
   }
   return (
   children
   )
    ;
 
};

export default Private;