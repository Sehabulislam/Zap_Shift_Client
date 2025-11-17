import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { createContext, useState } from 'react';
import { auth } from '../services/firebase.config';
export const AuthContext = createContext(null)
const AuthProvider = ({children}) => {
    const [user,setUser] = useState(null);
    const [loading,setLoading] = useState(true);

    const registerUser =(email,password)=>{
        return createUserWithEmailAndPassword(auth,email,password);
    }
    const signInUser =(email,password)=>{
        return signInWithEmailAndPassword(auth,email,password);
    }
     const updateUserProfile =(updateInfo)=>{
        return updateProfile(auth.currentUser,updateInfo);
    }
    const authInfo = {
        user,
        setUser,
        loading,
        setLoading,
        registerUser,
        signInUser,
        updateUserProfile
    }
    return (
        <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    );
};

export default AuthProvider;