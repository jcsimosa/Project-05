import { useState } from "react"
import {Link} from "react-router-dom"

function ActionAnimeCard({anime}){
    
    const [comment, setComment] = useState('')
    const [showForm, setShowForm] = useState(false)


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

                })
            }
        })
        e.target.reset();
        }

        const handleClick = () => {
            <div class="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
                <strong class="font-bold">Holy smokes!</strong>
                <span class="block sm:inline">Something seriously bad happened.</span>
                <span class="absolute top-0 bottom-0 right-0 px-4 py-3">
                <svg class="fill-current h-6 w-6 text-red-500" role="button" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><title>Close</title><path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z"/></svg>
                </span>
            </div>;
        };

    return (
        <div>
            <div className="max-w-sm rounded overflow-hidden shadow-lg">
            <Link to={`/animes/`}>
                <img className="w-full" src={anime.animeImg} alt={anime.animeId}/>
            </Link>
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2" onClick={toggleForm}>{anime.animeTitle}</div>
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
                                onClick={handleClick}
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
export default ActionAnimeCard