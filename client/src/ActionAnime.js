import React, { useEffect, useState } from "react"
import ActionAnimeCard from "./ActionAnimeCards"


function ActionAnime({actionAnimes}) {

    return(
        <div>
            <h3 className="text-4xl font-bold text-black-600" >
                Action Animes:
            </h3>
           {actionAnimes.map((anime)=> <ActionAnimeCard key={anime.animeId} anime={anime}/>)}
        </div>
    )
}
export default ActionAnime