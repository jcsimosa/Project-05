import { useState } from "react"
import {Link, useNavigate} from "react-router-dom"

function ActionAnimeCard({anime}){
    
    const [comment, setComment] = useState('')
    const [showForm, setShowForm] = useState(false)
    const navigate = useNavigate()

    const userInput = e =>{
        setComment(pV => ({...pV,[e.target.name]: e.target.value}))
    }
    
    const toggleForm = () => {
        setShowForm(!showForm)
    }
    
    
    const submitcomment = e => {
        e.preventDefault()
        const data = {
            ...comment,
            ...anime
        }
        
        fetch("/reviews", {
            method: "POST",
            headers: {"Content-Type":"application/json"},
            body: JSON.stringify(data)
        })
        .then(r => {
            if (r.ok){
                r.json().then(resp => {
                    navigate(`/animes/${resp.anime.id}`)
                })
            }
        })
        }


    return (
        <div>
            <div className="max-w-sm rounded overflow-hidden shadow-lg">
                <img className="w-full" src={anime.animeImg} alt={anime.animeId} onClick={toggleForm}/>
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{anime.animeTitle}</div>
                <p className="text-gray-700 text-base">
                released: {anime.releasedDate}
                </p>
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
            </div>
            
            <div className="px-6 pt-4 pb-2">
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#anime</span>
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#cool</span>
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#action</span>
            </div>
        </div>           









            {/* <p>{anime.animeTitle}</p>
            <img src={anime.animeImg} onClick={toggleForm}></img>
            <p>Released Date:{anime.releasedDate}</p>
            {showForm ? 
                <form className="form">
                    <input required="comment" typeof="text" placeholder="comment"></input>
                    <br />
                    <input type='submit' value='Send Comment'></input>
                </form>
                :
                null} */}
        </div>
    )
}
export default ActionAnimeCard