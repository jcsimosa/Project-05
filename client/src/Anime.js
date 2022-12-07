
import { useEffect, useState } from "react"
import { useParams } from 'react-router-dom'
import Reviews from "./Reviews"

function Anime({currentUser}) {
    
    const [animeTitle, setAnimeTitle] = useState('')
    const [animeImg, setAnimeImg] = useState('')
    const [releasedDate, setReleasedDate] = useState('')
    const params = useParams()
    const {id} = params
    const [reviews, setReviews] = useState([])
    const [showForm, setShowForm] = useState(false)
    const [comment, setComment] = useState('')
    const [animeData, setAnimeData] = useState({animeTitle:"",animeImg:"",releasedDate:"" })


    const userInput = e =>{
        setComment(pV => ({...pV,[e.target.name]: e.target.value}))
    }

    const toggleForm = () => {
        setShowForm(!showForm)
    }
    console.log(comment.comment)
    // console.log(animeData.animeTitle, id)
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
        
    // console.log(showForm)
    useEffect(() => {
        fetch(`/animes/${id}`)
        .then(r => r.json())
        .then(animeData => {
            setAnimeData(animeData)
            setReviews(animeData.reviews)
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
    <div class="flex items-center min-h-screen bg-gray-50">
      <div class="flex-1 h-full max-w-4xl mx-auto bg-white rounded-lg shadow-xl">
        <h1 class="flex items-center font-bold text-center text-2xl">{animeData.animeTitle}</h1>
        <div class="flex flex-col md:flex-row">
          <div class="h-32 md:h-auto md:w-1/2">
            <img class="object-cover w-full h-full" src={animeData.animeImg}
              alt="img" 
              onClick={toggleForm}
              />
          </div>
          {showForm ? 
          
            <div class="flex items-center justify-center p-6 sm:p-12 md:w-1/2">
                <div class="w-full">
                <div class="flex justify-center">
                </div>
                <h1 class="mb-4 text-2xl font-bold text-center text-gray-700">
                    Create your Comment:
                </h1>
                <div>
                    <form onSubmit={submitcomment}>
                        <label class="block text-sm">
                        Comment:
                        </label>
                        <input 
                        class="w-full px-4 py-2 text-sm border rounded-md focus:border-blue-400 focus:outline-none focus:ring-1 focus:ring-blue-600"
                        placeholder="Comment Here"
                        required 
                        onChange={userInput}
                        name="comment"
                        />
                        <button
                            class="block w-full px-4 py-2 mt-4 text-sm font-medium leading-5 text-center text-white transition-colors duration-150 bg-gray-600 border border-transparent rounded-lg active:bg-grey-600 hover:bg-blue-700 focus:outline-none focus:shadow-outline-blue"
                            >
                            Comment
                        </button>
                    </form>    
                </div>
                </div>
            </div> 
          
          : null}
        </div>
      </div>
    </div>










            {/* <p>{animeData.animeTitle}</p>
            <div className="max-w-sm rounded overflow-hidden shadow-lg">
                <img 
                className="w-full" 
                src={animeData.animeImg} 
                alt='img-01'
                onClick={toggleForm}
                />
                {showForm ? 
                    <form onSubmit={submitcomment}>
                        <div className="mt-4">
                            <label
                                htmlFor="comment"
                                className="block text-sm font-medium text-gray-700 undefined"
                            >
                                New comment:
                            </label>
                            <div className="flex flex-col items-start">
                                <input
                                    type="text"
                                    name="comment"
                                    required="comment"
                                    onChange={userInput}
                                    className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                                />
                            </div>
                            <div className="flex items-center justify-end mt-4">
                                <button
                                    type="submit"

                                    className="inline-flex items-center px-4 py-2 ml-4 text-xs font-semibold tracking-widest text-white uppercase transition duration-150 ease-in-out bg-gray-900 border border-transparent rounded-md active:bg-gray-900 false"
                                >
                                    comment
                                </button>
                            </div>
                        </div>
                    </form> : null}
            </div>     */}
            <p>Released Date:{animeData.releasedDate}</p>
            <h3>Comments:</h3>
            {animereviews}
        </div>
    )
}
export default Anime