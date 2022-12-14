import './App.css';
import {useEffect, useState} from "react"
import React from 'react';
import {Route, Routes, useNavigate} from "react-router-dom"
import Login from './Login';
import { NotFound } from './NotFound';
import Signup from './Signup';
import Home from './Home';
import AboutUs from './AboutUs';
import NavBar from './NavBar';
import Anime from './Anime';
import CreateAnime from "./CreateAnime"
import MyComments from './MyComments';
import Users from './Users';



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
  const [filter, setFilter] = useState('')
  const[currentUser, setCurrentUser] = useState({id:"", username:"",admin: false})

  let navigate = useNavigate()
  
  const logout = () => { 
    fetch('/users', {method: "delete"})
    .then(()=> {
      setCurrentUser({id:"", username:"",admin: false})
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
    fetch("/all")
    .then(resp => {
        if (resp.ok){
            resp.json().then(setAnimes)
        } else {
            resp.json().then(data => setError(data.error))
        }
    })
},[])


    const filteredAnime = animes.filter((anime) => {
      if (filter === ''){
        return true
      } 
      else {
        return anime.animeTitle.toLowerCase().includes(filter.toLocaleLowerCase())
      }
    })

   const searchAnime = obj => {
      setFilter(obj)
   }
   

  const newAnime = (newAnimeObj) => {
    setAnimes(animes => [...animes, newAnimeObj])
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
      {user ? <NavBar logout={logout} currentUser={currentUser} searchAnime={searchAnime}/>:null}
      <Routes>

        <Route index element={ <Login setUser={setUser} setCurrentUser={setCurrentUser} currentUser={currentUser}/>} />
        <Route path="signup" element= {<Signup setUser={setUser} setCurrentUser={setCurrentUser}/> } />
        <Route path="Home"> 
          <Route index element= {
            <AuthRoute user={user}>
              <Home animes={filteredAnime}/>
            </AuthRoute>
          }/>

          <Route path="aboutus" element= {<AboutUs/> } />
          <Route path="Create" element={<CreateAnime newAnime={newAnime}/>}/>
          <Route path="Users" element={<Users/>}/>
          <Route path="Mycomments" element={<MyComments currentUser={currentUser}/>} />
        </Route>
        <Route path="animes/:id" element={<Anime currentUser={currentUser}/>}/>
        <Route path='*' element={<NotFound />} />

      </Routes>
    </div>
  );
}
export default App;
