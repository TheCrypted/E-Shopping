// import {createContext, useContext, useEffect, useState} from "react";
// import {auth} from "../firebase/auth.jsx";
// import {createUserWithEmailAndPassword, onAuthStateChanged} from 'firebase/auth'
//
// const AuthContext  = createContext()
//
// export function useAuth(){
// 	return useContext(AuthContext)
// }
//
// export function AuthProvider({children}) {
// 	const [currentUser, setCurrentUser] = useState()
//
// 	function signUp (email, password){
// 		createUserWithEmailAndPassword(email, password)
// 	}
//
// 	useEffect(()=>{
// 		const unsubscribe = onAuthStateChanged(user => setCurrentUser(user))
// 		return unsubscribe
// 	}, [])
//
//
//
// 	const value = {
// 		currentUser,
// 		signUp
// 	}
//
// 	return (
// 		<AuthContext.Provider value={value}>
// 			{children}
// 		</AuthContext.Provider>
// 	)
// }
