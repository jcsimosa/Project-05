import './App.css';
import {useEffect, useState} from "react"
import React from 'react';
import {Route, Routes, useNavigate} from "react-router-dom"
import Login from './Login';
import { NotFound } from './NotFound';
import Signup from './Signup';
import Home from './Home';
import AboutUs from './AboutUs';
import ActionAnime from './ActionAnime';
import HorrorAnime from './HorrorAnime';
import NavBar from './NavBar';
import Comments from './Comments';



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
  
  const [user, setUser] = useState(false)
  const[currentUser, setCurrentUser] = useState(null)
  let navigate = useNavigate()
  
  const logout = () => {
    setCurrentUser(null);
    setUser(false) 
    fetch('/users', {method: "DELETE"})
    .then(()=> navigate('/'))
    }

  useEffect(() => {
    fetch("/me").then((res) => {
      if (res.ok) {
        res.json().then((user) => {
          setCurrentUser(user);
          setUser(true);
        });
      } else {
        res.json().then(console.log)
      }
    });
  }, []);
  console.log(user)

  const [actionAnimes, setActionAnimes] = useState([])
  const [errors, setErrors] = useState('')  

  useEffect(()=> {
      fetch("/action_animes")
      .then(resp => {
          if (resp.ok){
              resp.json().then(setActionAnimes)
          } else {
              resp.json().then(data => setErrors(data.error))
          }
      })
  },[])


  return (

    <div className="container mx-auto bg-gray-200 rounded-xl shadow border p-8 m-10">
      {user ? <NavBar logout={logout}/>:null}
      <Routes>

        <Route index element={ <Login setUser={setUser}/>} />
        <Route path="signup" element= {<Signup setUser={setUser}/> } />
        <Route path="Home"> 
          <Route index element= {
            <AuthRoute user={user}>
              <Home />
            </AuthRoute>
          }/>

          <Route path="aboutus" element= {<AboutUs /> } />
          <Route path="Action" element={<ActionAnime actionAnimes={actionAnimes}/>}/>
          <Route path="Horror" element={<HorrorAnime />}/>
        </Route>
          <Route path="anime/:id" element={<Comments />}/>
        <Route path='*' element={<NotFound />} />

      </Routes>
    </div>
  );
}
export default App;
