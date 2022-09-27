import { useState } from "react"


function HorrorAnimeCard({anime}){
    
    const [comment, setComment] = useState('')
    const [showForm, setShowForm] = useState(false)
    
    const toggleForm = () => {
        setShowForm(!showForm)
    }

    return(
        <div>
            <p>{anime.animeTitle}</p>
            <img src={anime.animeImg} onClick={toggleForm}></img>
            <p>Released Date:{anime.releasedDate}</p>
            {showForm ? 
                <form className="form">
                    <input required="comment" typeof="text" placeholder="comment"></input>
                    <br />
                    <input type='submit' value='Send Comment'></input>
                </form>
                :
                null}
        </div>
    )
}
export default HorrorAnimeCard