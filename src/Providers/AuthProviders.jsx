import { createContext, useEffect, useState } from "react";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import {  createUserWithEmailAndPassword, onAuthStateChanged } from "firebase/auth"
import app from "../firebase/firebase.config";

export const AuthContext = createContext();
const auth = getAuth(app);
const AuthProviders = ({children}) => {
    const [user, setUser] = useState();
    const [loading, setLoading] = useState(true);

    const handleSignUp = (email, password) => {
        setLoading(true);
       return createUserWithEmailAndPassword(auth, email, password);
    }

    const handleSignIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    useEffect(()=>{
        const unsubscibe = onAuthStateChanged(auth, currentUser =>{
            setUser(currentUser);
            setLoading(false);
        })
        return () => {
            return unsubscibe();
        }
    },[])
    
    const userInfo = {
        user,
        handleSignUp,
        loading,
        handleSignIn,
    }
    return (
        <AuthContext.Provider value={userInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProviders;