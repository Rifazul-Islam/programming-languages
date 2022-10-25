import React, { createContext, useEffect, useState } from 'react';
import {createUserWithEmailAndPassword, getAuth, GithubAuthProvider, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile} from 'firebase/auth';
import app from '../../firebase/firebase-confic';
export const AuthContext = createContext()

const auth = getAuth(app)

  const googleProvider = new GoogleAuthProvider()
  const githubProvider = new GithubAuthProvider()

const AuthProvider = ({children}) => {

    const [user , setUser] = useState({})

      const haddlarCreateUser = (email, password)=>{

        return createUserWithEmailAndPassword(auth,email,password)
      }

    
      const creatProfile = (profile) => {
       
        return updateProfile(auth.currentUser, profile)
     }

          
     const handlarSogin = (email,password)=>{

              
        return signInWithEmailAndPassword(auth, email, password)
    }

         
     
       const googleSigin = ()=>{

            return signInWithPopup(auth, googleProvider)
       }

        const gitHubSigin = ()=>{

            return signInWithPopup(auth,githubProvider )
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
        handlarSogin,
        googleSigin,
        gitHubSigin,
        logOut,
    
    
    }

    return (
       
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;