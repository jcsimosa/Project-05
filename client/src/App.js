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
import Anime from './Anime';
import CreateAnime from "./CreateAnime"
import MyComments from './MyComments';


const AuthRoute = ({children, user}) => {
  const navigate = useNavigate()
  useEffect ( () => {
    if (!user) {
      navigate("/")
    }
  },[])

  return (
    <div>
      {children}

    </div>
  )
} 

function App() {
  
  const [user, setUser] = useState(false)
  const [loading , setLoading] = useState(true)
  const [animes, setAnimes] = useState([])
  const [error, setError] = useState('')

  const[currentUser, setCurrentUser] = useState(null)

  let navigate = useNavigate()
  
  const logout = () => { 
    fetch('/users', {method: "delete"})
    .then(()=> {
      setCurrentUser(null)
      setUser(false)
      navigate("/")
    })
  }

  useEffect(() => {
    fetch("/me").then((res) => {
      setLoading(false)
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
  // console.log(user)



  useEffect(()=> {
    fetch("/all_animes")
    .then(resp => {
        if (resp.ok){
            resp.json().then(setAnimes)
        } else {
            resp.json().then(data => setError(data.error))
        }
    })
},[])
  

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
  },[user])


  const newAnime = (newAnimeObj) => {
    setAnimes(animes => [newAnimeObj, ...animes])
}

  if (loading) {
    return (
      <>
      <p>"Loading"</p>
      </>
    );
  }
  return (

    <div className="container mx-auto bg-gray-200 rounded-xl shadow border p-8 m-10">
      {user ? <NavBar logout={logout} currentUser={currentUser}/>:null}
      <Routes>

        <Route index element={ <Login setUser={setUser} setCurrentUser={setCurrentUser}/>} />
        <Route path="signup" element= {<Signup setUser={setUser} setCurrentUser={setCurrentUser}/> } />
        <Route path="Home"> 
          <Route index element= {
            <AuthRoute user={user}>
              <Home animes={animes}/>
            </AuthRoute>
          }/>

          <Route path="aboutus" element= {<AboutUs /> } />
          <Route path="Action" element={<ActionAnime actionAnimes={actionAnimes}/>}/>
          <Route path="Horror" element={<HorrorAnime />}/>
          <Route path="Create" element={<CreateAnime newAnime={newAnime}/>}/>
          <Route path="Mycomments" element={<MyComments />} />
        </Route>
        <Route path="animes/:id" element={<Anime currentUser={currentUser}/>}/>
        <Route path='*' element={<NotFound />} />

      </Routes>
    </div>
  );
}
export default App;
