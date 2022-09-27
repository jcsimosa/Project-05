import { useEffect, useState } from "react"
import { useParams } from 'react-router-dom'

function Comments() {
    
    const [singleAnime, setSingleAnime] = useState('')
    const {id} = useParams()
    
    
    useEffect(() => {
        fetch(`/animes/${id}`)
        .then(r => r.json())
        .then(setSingleAnime)
    },[])
    console.log(singleAnime.animeTitle)
    return (
        <div>
            <p>{singleAnime.animeTitle}</p>
            <img src={singleAnime.animeImg}></img>
            <p>Released Date:{singleAnime.releasedDate}</p>
            
        </div>
    )
}
export default Comments