
import { useEffect, useState } from "react"
import { useParams } from 'react-router-dom'
import Reviews from "./Reviews"

function Anime({currentUser}) {
    
    const [anime, setAnime] = useState('')
    const [animeImg, setAnimeImg] = useState('')
    const [releasedDate, setReleasedDate] = useState('')
    const params = useParams()
    const {id} = params
    const [reviews, setReviews] = useState([])
    const [users, setUsers] = useState([])
    // const{reviewid} = useParams()
   
    
    useEffect(() => {
        fetch(`/animes/${id}`)
        .then(r => r.json())
        .then(animeData => {
            setAnime(animeData.animeTitle)
            setAnimeImg(animeData.animeImg)
            setReleasedDate(animeData.releasedDate)
            setReviews(animeData.reviews)
            setUsers(animeData.users)
        })
    },[])


    const deleteComment = (id) => setReviews(reviews.filter(p => p.id !== id))


   
    const update = (updatedReview) => setReviews(obj => {
        return obj.map(review => {
         if(review.id === updatedReview.id){
           return updatedReview
         } else {
           return review
         }
        })
      })
   

    
      
    
    const animereviews = reviews.map((review) => {
        return <Reviews key={review.id} review={review} deleteComment={deleteComment} update={update} currentUser={currentUser}/>
    })

    

    return (
        <div>
            <p>{anime.animeTitle}</p>
            <img src={animeImg}></img>
            <p>Released Date:{releasedDate}</p>
            <h3>Comments:</h3>
            {animereviews}
        </div>
    )
}
export default Anime