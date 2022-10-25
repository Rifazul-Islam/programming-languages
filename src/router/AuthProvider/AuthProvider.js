import React, { createContext, useEffect, useState } from 'react';
import {createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut, updateProfile} from 'firebase/auth';
import app from '../../firebase/firebase-confic';
export const AuthContext = createContext()

const auth = getAuth(app)

  const googleProvider = new GoogleAuthProvider()

const AuthProvider = ({children}) => {

    const [user , setUser] = useState({})

      const haddlarCreateUser = (email, password)=>{

        return createUserWithEmailAndPassword(auth,email,password)
      }

    
      const creatProfile = (profile) => {
       
        return updateProfile(auth.currentUser, profile)
     }

     
       const googleSigin = ()=>{

            return signInWithPopup(auth, googleProvider)
       }


      const logOut = () =>{

          return signOut(auth)
      }


       useEffect(()=>{
             
                 const unScrible = onAuthStateChanged(auth, (currentUser)=>{

                    setUser(currentUser)
                 })
              return ()=> unScrible()
       },[])

      
       const authInfo ={user,
        haddlarCreateUser, 
        creatProfile,
        googleSigin,
        logOut,
    
    
    }

    return (
       
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;