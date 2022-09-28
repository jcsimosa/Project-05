import React, { useState } from "react"


function CreateAnime() {
    
    const [animeTitle, setAnimeTitle] = useState('')
    const [animeImg, setAnimeImg] = useState('')
    const [releasedDate, setReleasedDate] = useState('')

    console.log(animeTitle,animeImg,releasedDate)

    
    return(
        <div>
                <h1> Create Anime:</h1>
            <form>
                <input required="animeTitle " placeholder="Title" onChange={(e) => setAnimeTitle(e.target.value)}></input>
                <input required="animeImg" placeholder="Image" onChange={(e) => setAnimeImg(e.target.value)}></input>
                <input required="releasedDate" placeholder="Released Date" onChange={(e) => setReleasedDate(e.target.value)}></input>
            </form>
        </div>
    )
}
export default CreateAnime