import React from "react";
import {NavLink, useNavigate}from "react-router-dom"
import{useState} from "react"





function AnimeCard({animes}) {

    
    // const params = useParams()
    // const id = params
    const navigate = useNavigate()
    
    return (
        <div>

            <div className="bg-white">
                <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
                    <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
                    {animes.map((animeobj) => (
                        <div key={animeobj.id} className="group">
                            <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-7 xl:aspect-h-8">
                                <NavLink to={`/animes/${animeobj.id}`}>
                                    <img
                                    src={animeobj.animeImg}
                                    alt={animeobj.animeImg}
                                    className="h-full w-full object-contain h-50 w-15 object-center group-hover:opacity-75"
                                    />
                                </NavLink>     
                            </div>
                            <h3 className="mt-4 text-sm text-gray-700">{animeobj.animeTitle}</h3>
                            <p className="mt-1 text-lg font-medium text-gray-900">Released:{animeobj.releasedDate}</p>
                        </div>
                    ))}
                    </div>
                </div>
            </div>




            {/* <div className="max-w-sm rounded overflow-hidden shadow-lg">
                
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
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#japan</span>
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#cool</span>
                </div>
            </div> */}

           






                
        </div>
    )
}
export default AnimeCard