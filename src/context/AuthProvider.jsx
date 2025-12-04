import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "../services/firebase.config";

export const AuthContext = createContext(null);
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  

  const googleProvider = new GoogleAuthProvider();

  const registerUser = (email, password) => {
    setLoading(true)
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const signInUser = (email, password) => {
    setLoading(true)
    return signInWithEmailAndPassword(auth, email, password);
  };
  const updateUserProfile = (updateInfo) => {
     setLoading(true)
    return updateProfile(auth.currentUser, updateInfo);
  };
  const googleSignIn = () => {
     setLoading(true)
    return signInWithPopup(auth, googleProvider);
  };
  const signOutUser = () => {
    setLoading(true)
    return signOut(auth);
  };
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      console.log(currentUser);
      setLoading(false)
    });
    return () => {
      unsubscribe();
    };
  }, []);
  
  const authInfo = {
    user,
    setUser,
    loading,
    setLoading,
    registerUser,
    signInUser,
    updateUserProfile,
    googleSignIn,
    signOutUser,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
