import React, { createContext, useEffect, useState } from 'react'
import auth from './firebaseConfig';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from 'firebase/auth';
 export const AuthContext = createContext(null)

const AuthProvider = ({children}) => {
     const[photo , setPhoto]= useState("")
     const [mail , setMail] = useState('')
     const[name , setName] = useState('')
     const [defalt ,setDefalt] = useState('')
    const [user , setUser] = useState(null)

    const createUser =(email, password)=>{
       return (
        createUserWithEmailAndPassword(auth, email, password)
       )
    }

    const login = (email , password)=>{
        return(
            signInWithEmailAndPassword(auth , email , password)
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
           setPhoto(currentUser?.photoURL)
           setName(currentUser?.displayName)
           setMail(currentUser?.email)
   
          })
         return ()=>{
           unSubscribe()
         }
       },[])

       const logOut =() =>{
       return (signOut(auth))
      }

    const info = {user,setUser,createUser , updateUser ,logOut,login,photo,defalt,setDefalt , mail ,name}

    return (
       <AuthContext.Provider value={info}>
        {children}
       </AuthContext.Provider>
    );
};

export default AuthProvider;