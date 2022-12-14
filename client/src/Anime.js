
import { useEffect, useState } from "react"
import {useNavigate, useParams } from 'react-router-dom'
import Reviews from "./Reviews"

function Anime({currentUser}) {
    
    const params = useParams()
    const {id} = params
    const [reviews, setReviews] = useState([])
    const [comment, setComment] = useState('')
    const [animeData, setAnimeData] = useState({animeTitle:"",animeImg:"",releasedDate:"" })
    const navigate = useNavigate()

    const userInput = e =>{
        setComment(pV => ({...pV,[e.target.name]: e.target.value}))
    }

    
    
    const submitcomment = e => {
        e.preventDefault()
        const data = {
            comment : comment.comment,
            anime_id: id
        }
        
        fetch("/reviews", {
            method: "POST",
            headers: {"Content-Type":"application/json"},
            body: JSON.stringify(data)
        })
        .then(r => {
            if (r.ok){
                r.json().then(resp => {
                    setReviews(reviews => [...reviews, resp])
                    alert("your comment has been created")
                    
                })
            }
            e.target.reset()
        })
        }
    
    useEffect(() => {
        fetch(`/animes/${id}`)
        .then(r => r.json())
        .then(animeData => {
            setAnimeData(animeData)
            setReviews(animeData.reviews)
        })
    },[])

    
    const deleteComment = (id) => setReviews(reviews.filter(p => p.id !== id))

    const deleteAnime = () => {
        fetch(`/animes/${id}`, {
            method: 'DELETE'
        })
        .then(resp => {
            if (resp.ok) {
                navigate("/home")
                alert('succesfully deleted')
            }
        })
        
    }

   
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
            <div className="flex items-center min-h-screen bg-gray-50">
                <div className="flex-1 h-full max-w-4xl mx-auto bg-white rounded-lg shadow-xl">
                    <h1 className="flex items-center font-bold text-center text-2xl">{animeData.animeTitle}</h1>
                    <div className="flex flex-col md:flex-row">
                    <div className="h-32 md:h-auto md:w-1/2">
                        <img className="object-cover w-full h-full" src={animeData.animeImg}
                        alt="img" 
                        />
                    </div>
                    
                        <div className="flex items-center justify-center p-6 sm:p-12 md:w-1/2">
                            <div className="w-full">
                            <div className="flex justify-center">
                            </div>
                            <h1 className="mb-4 text-2xl font-bold text-center text-gray-700">
                                Create your Comment:
                            </h1>
                            <div>
                                <form onSubmit={submitcomment}>
                                    <label className="block text-sm">
                                    Comment:
                                    </label>
                                    <input 
                                    className="w-full px-4 py-2 text-sm border rounded-md focus:border-blue-400 focus:outline-none focus:ring-1 focus:ring-blue-600"
                                    placeholder="Comment Here"
                                    required 
                                    onChange={userInput}
                                    name="comment"
                                    />
                                    <button
                                        className="block w-full px-4 py-2 mt-4 text-sm font-medium leading-5 text-center text-white transition-colors duration-150 bg-blue-600 border border-transparent rounded-lg active:bg-grey-600 hover:bg-blue-700 focus:outline-none focus:shadow-outline-blue"
                                        >
                                        Comment
                                    </button> 
                                    </form>    
                                    {currentUser.admin === true &&
                                    <button
                                        className="block w-full px-4 py-2 mt-4 text-sm font-medium leading-5 text-center text-white transition-colors duration-150 bg-red-600 border border-transparent rounded-lg active:bg-grey-600 hover:bg-red-700 focus:outline-none focus:shadow-outline-blue"
                                        onClick={deleteAnime}
                                        >
                                        Delete
                                    </button> }
                                    
                            </div>
                        </div>
                    </div> 
                
                </div>
            </div>
        </div>
            <p>Released Date:{animeData.releasedDate}</p>
            <h3>Comments:</h3>
            {animereviews}
    </div>
    )
}
export default Anime