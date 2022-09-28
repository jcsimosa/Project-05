
import { useEffect, useState } from "react"
import { useParams } from 'react-router-dom'
import Reviews from "./Reviews"

function Anime() {
    
    const [singleAnime, setSingleAnime] = useState('')
    const {id} = useParams()
    const [reviews, setReviews] = useState([])
    const [users, setUsers] = useState([])
    // const{reviewid} = useParams()

    // console.log(id)
    useEffect(() => {
        fetch(`/animes/${id}`)
        .then(r => r.json())
        .then(animeData => {
            setSingleAnime(animeData)
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
        return <Reviews key={review.id} review={review} deleteComment={deleteComment} update={update}/>
    })

    

    return (
        <div>
            <p>{singleAnime.animeTitle}</p>
            <img src={singleAnime.animeImg}></img>
            <p>Released Date:{singleAnime.releasedDate}</p>
            <h3>Comments:</h3>
            {animereviews}
        </div>
    )
}
export default Anime