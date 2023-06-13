// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import "firebase/auth";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, updateProfile, signOut } from "firebase/auth";
import {createContext, useContext, useEffect, useState} from "react";
// require('firebase/auth')

// Your web app's Firebase configuration

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)

const AuthContext = createContext(null)

const AuthProvider = ({children}) => {
    const auth = useProvideAuth();
    return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>
}

export const useAuth = () => useContext(AuthContext)

function useProvideAuth(){
    const [user, setUser] = useState(null)
    const signUp = (email, password, displayName) => createUserWithEmailAndPassword(auth, email, password).then(({user})=>{
        updateProfile(user, {displayName}).then((profile) => console.log(profile))
        setUser(user)
        return user
    })
    const signIn = (email, password) => signInWithEmailAndPassword(auth, email, password).then(({user})=>{
        setUser(user)
        return user
    })
    const signOutUser = () => signOut(auth).then(()=>setUser(null))

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, (user)=>{
            user ? setUser(user) : setUser(null)
        })
        return unsubscribe;
    }, [])

    return {
        signIn,
        signUp,
        signOut: signOutUser,
        user
    }
}

export default AuthProvider