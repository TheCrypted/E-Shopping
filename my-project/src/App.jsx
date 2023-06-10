import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import {Button} from "@mui/material";
import {createRoutesFromElements, createBrowserRouter, Route, RouterProvider} from "react-router-dom";
import {Layout} from "./Components/Layout.jsx";
import {Home} from "./Pages/Home.jsx";
import {Login} from "./Pages/Login.jsx";
import {Cart} from "./Pages/Cart.jsx";
const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<Layout />}>
            <Route index  element={<Home />}></Route>
            <Route path="/Login" element={<Login />}></Route>
            <Route path="/Cart" element={<Cart />}></Route>
        </Route>
    )
)
function App() {
  const [count, setCount] = useState(0)

  return(
      <RouterProvider router={router} />
  )
}

export default App
