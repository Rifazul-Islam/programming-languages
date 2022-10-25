import React, { createContext, useEffect, useState } from 'react';
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, updateProfile} from 'firebase/auth';
import app from '../../firebase/firebase-confic';
export const AuthContext = createContext()

const auth = getAuth(app)

const AuthProvider = ({children}) => {

    const [user , setUser] = useState({})

      const haddlarCreateUser = (email, password)=>{

        return createUserWithEmailAndPassword(auth,email,password)
      }

    
      const creatProfile = (profile) => {
       
        return updateProfile(auth.currentUser, profile)
     }


       useEffect(()=>{
             
                 const unScrible = onAuthStateChanged(auth, (currentUser)=>{

                    setUser(currentUser)
                 })
              return ()=> unScrible()
       },[])

      
       const authInfo ={user,haddlarCreateUser, creatProfile}

    return (
       
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;