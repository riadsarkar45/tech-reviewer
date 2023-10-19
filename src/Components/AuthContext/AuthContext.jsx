import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import auth from '../../Firebase';
export const AuthContexts = createContext(null)
const AuthContext = ({ children }) => {
    const [isLoading , setIsLoading] = useState(true)
    const [user, setUser] = useState("")
    const creatUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
        setIsLoading(true);
    }

    const signIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
        setIsLoading(true);
    }

    const provider = new GoogleAuthProvider();
    const googleSignIn = () => {
        return signInWithPopup(auth, provider)
        setIsLoading(true);
    }

    const updateprofile = (name, image) => {
        return updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: image,
        })
    }

    const logOut = () => {
        return signOut(auth)
        setIsLoading(true);
    }

    useEffect(() => {
        const unsubsCribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser)
            setIsLoading(false);
            console.log(currentUser)
        });
        return () => {
            return unsubsCribe;
        }
    }, [])

    const authInfo = { creatUser, signIn, user, updateprofile, logOut, googleSignIn, isLoading }
    return (
        <AuthContexts.Provider value={authInfo}>
            {children}
        </AuthContexts.Provider>
    );
};

export default AuthContext;