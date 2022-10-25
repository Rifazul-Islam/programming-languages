import React, { createContext } from 'react';

export const AuthContext = createContext()

const AuthProvider = ({children}) => {

     const user = {displayName:'Ariful'}
      
       const authInfo ={user}

    return (
       
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;