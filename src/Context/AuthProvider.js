import React, { createContext, useEffect, useState } from 'react';
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile} from 'firebase/auth';
import app from '../Firebase/firebase.config';

export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({children}) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    //sign up / create user
    const createUser = (email, password) =>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    //sign in / login
    const signIn = (email, password) =>{
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    //update profile
    const updateUser = (userInfo) =>{
        return updateProfile(auth.currentUser, userInfo);
    }

    //Google login
    const providerLogin = (provider) =>{
        return signInWithPopup(auth, provider);
    }

    // Manage user // user observer
    useEffect( () =>{
        const unsubscribe = onAuthStateChanged(auth, currentUser =>{
            console.log('user observing');
            setUser(currentUser);
            setLoading(false);
        })
        return () => unsubscribe();
    } , [])

    // Sign Out / LOgin Out
    const logOut = () =>{
        setLoading(true);
        return signOut(auth);
    }

    const authInfo = {
        createUser,
        signIn,
        providerLogin,
        user,
        setUser,
        logOut,
        updateUser,
        loading,
           
    }


    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
