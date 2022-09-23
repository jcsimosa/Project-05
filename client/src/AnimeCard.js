import React from "react";
import {BrowserRouter,Link, useParams}from "react-router-dom"
import{useState} from "react"


function AnimeCard({anime}) {

    const [img, Setimg] = useState('')

    const indCard = (e) => {
        
    }

    return (
        
        <div>
            
                <p>Name: {anime.animeTitle}</p>
              
                <Link to="/anime">
                <img src={anime.animeImg}></img>
                </Link>
                <p>released:{anime.releasedDate}</p>
        </div>
    )
}
export default AnimeCard