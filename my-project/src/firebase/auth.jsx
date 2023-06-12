// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import "firebase/auth";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, updateProfile } from "firebase/auth";
import {useContext, useEffect, useState} from "react";
// require('firebase/auth')

// Your web app's Firebase configuration


// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)

const AuthContext = useContext(null)

const AuthProvider = ({children}) => {
    const auth = useProvideAuth();
    return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>
}

const useAuth = () => useContext(AuthContext)

function useProvideAuth(){
    const [user, setUser] = useState(null)
    const signUp = (email, password, displayName) => createUserWithEmailAndPassword(auth, email, password).then((user)=>{
        updateProfile(user, {displayName})
        setUser(user)
        return user
    })
    const signIn = (email, password) => signInWithEmailAndPassword(auth, email, password).then((user)=>{
        setUser(user)
        return user
    })
    const signOut = (email, password) => signOut()

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged((auth, (user)=>{
            user ? setUser(user) : setUser(null)
        }))
        return unsubscribe;
    }, [])

    return {
        signIn,
        signUp,
        signOut,
        user
    }
}

export default AuthProvider