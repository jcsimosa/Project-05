import React, { useEffect, useState } from "react";
import HorrorAnimeCard from "./HorrorAnimeCards";

function HorrorAnime() {
    
  const [horrorAnimes, setHorrorAnimes] = useState([])
  const [errors, setErrors] = useState('')  

  useEffect(()=> {
      fetch("/horror_animes")
      .then(resp => {
          if (resp.ok){
              resp.json().then(setHorrorAnimes)
          } else {
              resp.json().then(data => setErrors(data.error))
          }
      })
  },[])

    return(
        <div>
            <h3 className="text-4xl font-bold text-black-600" >
                Horror Animes:
            </h3>
            {horrorAnimes.map((anime)=> <HorrorAnimeCard key={anime.animeId} anime={anime}/>)}
        </div>
    )
}
export default HorrorAnime