import React from "react";
import AnimeCard from "./AnimeCard";
import NavBar from "./NavBar";
import {Routes, Route, Outlet} from "react-router-dom"
import AboutUs from "./AboutUs";
import {useEffect,useState} from "react"


function Home({logout}) {
    
    const [animes, setAnimes] = useState([])
    const [errors, setErrors] = useState('')


    useEffect(()=> {
        fetch("/all_animes")
        .then(resp => {
            if (resp.ok){
                resp.json().then(setAnimes)
            } else {
                resp.json().then(data => setErrors(data.error))
            }
        })
    },[])

   

    return (
        <div>
            <div>       
                <h3 className="text-4xl font-bold text-black-600" >
                    Popular Animes:
                </h3>
            </div>    
            {animes.map((anime)=> <AnimeCard key={anime.animeId} anime={anime}/>)}
        </div>
    )
}
export default Home