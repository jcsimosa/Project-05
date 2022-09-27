import React, { useEffect, useState } from "react"
import ActionAnimeCard from "./ActionAnimeCards"


function ActionAnime({actionAnimes}) {

    return(
        <div>
            <h1>Action Animes:</h1>
           {actionAnimes.map((anime)=> <ActionAnimeCard key={anime.animeId} anime={anime}/>)}
        </div>
    )
}
export default ActionAnime