import React, { useState } from "react"


function CreateAnime() {
    
    const [animeTitle, setAnimeTitle] = useState('')
    const [animeImg, setAnimeImg] = useState('')
    const [releasedDate, setReleasedDate] = useState('')

    console.log(animeTitle,animeImg,releasedDate)

    const addNewAnime = (e) => {
        e.preventDefault()
        console.log("hello")
    }

    return(
        <div>

            <div className="flex flex-col items-center min-h-screen pt-6 sm:justify-center sm:pt-0 bg-gray-50">
                <div>
                    
                    <h3 className="text-4xl font-bold text-black-600" >
                        Create New Anime
                    </h3>
                    
                </div>
                <div className="w-full px-6 py-4 mt-6 overflow-hidden bg-white shadow-md sm:max-w-md sm:rounded-lg">
                    <form onSubmit={addNewAnime}>
                        <div className="mt-4">
                            <label
                                htmlFor="animeTitle"
                                className="block text-sm font-medium text-gray-700 undefined"
                            >
                                Anime Title:
                            </label>
                            <div className="flex flex-col items-start">
                                <input
                                    type="text"
                                    name="Anime Title"
                                    required="animeTitle"
                                    onChange={(e) => setAnimeTitle(e.target.value)}
                                    className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                                />
                            </div>
                        </div>
                        <div className="mt-4">
                            <label
                                htmlFor="animeImg"
                                className="block text-sm font-medium text-gray-700 undefined"
                            >
                                Image:
                            </label>
                            <div className="flex flex-col items-start">
                                <input
                                    type="text"
                                    name="Image"
                                    required="animeImg"
                                    onChange= {(e) => setAnimeImg(e.target.value)}
                                    className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                                />
                            </div>
                        </div>
                        <div className="mt-4">
                            <label
                                htmlFor="releasedDate"
                                className="block text-sm font-medium text-gray-700 undefined"
                            >
                                Released Date:
                            </label>
                            <div className="flex flex-col items-start">
                                <input
                                    type="text"
                                    name="released Date"
                                    required="releasedDate"
                                    onChange={(e) => setReleasedDate(e.target.value)}
                                    className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                                />
                            </div>
                        </div>
                        <div className="flex items-center justify-end mt-4">
                            <button
                                type="submit"
                                className="inline-flex items-center px-4 py-2 ml-4 text-xs font-semibold tracking-widest text-white uppercase transition duration-150 ease-in-out bg-gray-900 border border-transparent rounded-md active:bg-gray-900 false"
                            >
                                Create
                            </button>
                        </div>
                    </form>
                </div>
            </div>












                <h1> Create Anime:</h1>
            <form onSubmit={addNewAnime}>
                <input required="animeTitle " placeholder="Title" onChange={(e) => setAnimeTitle(e.target.value)}></input>
                <input required="animeImg" placeholder="Image" onChange={(e) => setAnimeImg(e.target.value)}></input>
                <input required="releasedDate" placeholder="Released Date" onChange={(e) => setReleasedDate(e.target.value)}></input>
            </form>
        </div>
    )
}
export default CreateAnime