import React from "react";
import AnimeCard from "./AnimeCard";



function Home({animes}) {
    
    

    
   

   


    return (
        <div>
            <div>       
                <h3 className="text-4xl font-bold text-black-600" >
                    Popular Animes:
                </h3>
            </div>    
            <AnimeCard animes={animes}/>
        </div>
    )
}
export default Home