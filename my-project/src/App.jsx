import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import {Button} from "@mui/material";
import {createRoutesFromElements, createBrowserRouter, Route, RouterProvider, Navigate} from "react-router-dom";
import {Layout} from "./Components/Layout.jsx";
import {Home} from "./Pages/Home.jsx";
import {Register} from "./Pages/Register.jsx";
import {Cart} from "./Pages/Cart.jsx";
import AuthProvider, {useAuth} from './firebase/Auth.jsx';
import {Login} from "./Pages/Login.jsx";

function ProtectedRoute({children}){
    const {user} = useAuth()
    if(!user){
        return <Navigate to="/Login"></Navigate>
    }
    return children
}

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<Layout />}>
            <Route index  element={<Home />}></Route>
            <Route path="/Register" element={<Register />}></Route>
            <Route path="/Cart" element={
                <ProtectedRoute>
                    <Cart />
                </ProtectedRoute>}>
            </Route>
            <Route path="/Login" element={<Login />}></Route>
        </Route>
    )
)
function App() {
  const [count, setCount] = useState(0)

  return(
    <AuthProvider>
        <RouterProvider router={router} />
    </AuthProvider>
  )
}

export default App
