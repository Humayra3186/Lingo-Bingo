import React, { createContext, useEffect, useState } from 'react'
import auth from './firebaseConfig';
import { createUserWithEmailAndPassword, onAuthStateChanged, signOut, updateProfile } from 'firebase/auth';
 export const AuthContext = createContext(null)

const AuthProvider = ({children}) => {

    const [user , setUser] = useState(null)

    const createUser =(email, password)=>{
       return (
        createUserWithEmailAndPassword(auth, email, password)
       )
    }


    const updateUser= (updateData)=>{
        return(
            updateProfile(auth.currentUser, updateData)
        )
    }


    useEffect(()=>{

        const unSubscribe =  onAuthStateChanged(auth , (currentUser)=>{
           setUser(currentUser)
   
          })
         return ()=>{
           unSubscribe()
         }
       },[])

       const logOut =() =>{
       return (signOut(auth))
      }

    const info = {user,setUser,createUser , updateUser ,logOut}

    return (
       <AuthContext.Provider value={info}>
        {children}
       </AuthContext.Provider>
    );
};

export default AuthProvider;