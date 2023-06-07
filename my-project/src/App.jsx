import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import {Button} from "@mui/material";
import {createRoutesFromElements, createBrowserRouter, Route, RouterProvider} from "react-router-dom";
import {Layout} from "./Components/Layout.jsx";
const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<Layout />}></Route>
    )
)
function App() {
  const [count, setCount] = useState(0)

  return(
      <RouterProvider router={router} />
  )
}

export default App
