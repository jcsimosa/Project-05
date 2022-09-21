import './App.css';
import {useEffect, useState} from "react"
import React from 'react';
import {Route, Routes, useNavigate} from "react-router-dom"
import Login from './Login';
import { NotFound } from './NotFound';
import Signup from './Signup';
import Home from './Home';


const AuthRoute = ({children, user}) => {
  const navigate = useNavigate()
  useEffect ( () => {
    if (!user) {
      navigate("/login")
    }
  })
  return (
    <div>
      {children}

    </div>
  )
} 

function App() {
  
  const [user, setUser] = useState(true)
  const [isAtheticated, setIsAuthenticated] = useState('')


  return (

    <div className="container mx-auto bg-gray-200 rounded-xl shadow border p-8 m-10">
      <Routes>

        <Route index element={ <Login />} />
        <Route path="signup" element= {<Signup /> } />
       <Route path="Home" element= {

         <AuthRoute user={user}>
            <Home />
        </AuthRoute>
       } />

        <Route path='*' element={<NotFound />} />

      </Routes>
    </div>
  );
}
export default App;
