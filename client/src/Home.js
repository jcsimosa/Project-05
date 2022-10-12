import React from "react";
import AnimeCard from "./AnimeCard";
import NavBar from "./NavBar";
import {Routes, Route, Outlet} from "react-router-dom"
import AboutUs from "./AboutUs";
import {useEffect,useState} from "react"


function Home({animes}) {
    
    

    
   

   


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