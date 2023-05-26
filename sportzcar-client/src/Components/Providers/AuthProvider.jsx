import React, { createContext, useEffect, useState } from 'react'
import {GithubAuthProvider, GoogleAuthProvider , createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateCurrentUser, updateProfile } from "firebase/auth";
import app from '../../firebase/firebase.config';
 export const AuthContext = createContext(null);

const auth = getAuth(app)
const googleAuthprovider = new GoogleAuthProvider();
const gitAuthprovider = new GithubAuthProvider();
const AuthProvider = ({children}) => {
const [user,setuser]=useState(null);
const [loading,setloading]=useState(true);

const createUser =(email,password)=>{
    setloading(true);
    return createUserWithEmailAndPassword(auth,email,password);
}
const signInuser1 =(email,password)=>{
    setloading(true);
    return signInWithEmailAndPassword(auth,email,password);
}
const signInWithGoogle =()=>{
    setloading(true);
    return signInWithPopup(auth,googleAuthprovider);
}
const signInWithGithub =()=>{
    setloading(true);
    return signInWithPopup(auth,gitAuthprovider);
}
const logout = ()=>{
    return signOut(auth);
}
//Observer user auth state
useEffect(()=>{
    const unsubscribe= onAuthStateChanged(auth,currentuser=>{
        setuser(currentuser);
        setloading(false);
        if(currentuser && currentuser?.email){
            const loggeduser = {
                email: currentuser.email
            }
            fetch('https://sportzcar-server.vercel.app/jwt', {
                method: "POST",
                headers: {
                    "content-type": "application/json"
                },
                body: JSON.stringify(loggeduser)
            })
                .then(res => res.json())
                .then(data => {
                    console.log("JWT response", data)
                    //warning : Local storage is not best place to store access token
                    localStorage.setItem('car-access-token', data.token)
                })
        }
        else{
            localStorage.removeItem('car-access-token')
        }
     })
     //stop observing while unmounting
     return ()=>{
        return unsubscribe();
     }
},[])

    const authinfo={
        user,
        loading,
        createUser,
        signInuser1,
        logout,
        signInWithGoogle,
        signInWithGithub
        

    }
    

  return (
    <AuthContext.Provider value={authinfo}>
{
    children
}
    </AuthContext.Provider>
  )
}

export default AuthProvider