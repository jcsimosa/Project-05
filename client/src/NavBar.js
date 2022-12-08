import React, { useState } from "react";
import {Route,Routes} from "react-router-dom"
import AboutUs from "./AboutUs";
import {Link} from "react-router-dom"

function NavBar({logout, currentUser,searchAnime}) {
    
    console.log(currentUser)
    const [searchbar, setSearchBar] = useState('')

    searchAnime(searchbar)

   
    return (
        <div>
            <nav className="bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-900">
                <div className="container flex flex-wrap justify-between items-center mx-auto">
                    <h1 className="flex items-center">
                        <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">To-Watch</span>
                    </h1>
                    <div className="hidden w-full md:block md:w-auto" id="navbar-default">
                        <ul className="flex flex-col p-4 mt-4 bg-gray-50 rounded-lg border border-gray-100 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                            
                            {currentUser.admin &&
                            <li>
                                <Link to="/home/Create" className="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-black-500 md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Create Anime</Link>
                            </li>}
                            <li>
                                <div className="flex items-center">
                                    <div className="flex border border-purple-200 rounded">
                                        <input
                                            type="text"
                                            className="block w-full px-4 py-1 text-black-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                                            placeholder="Search..."
                                            onChange={(e) => setSearchBar(e.target.value)}
                                        />
                                        {/* <button className="px-4 text-white bg-purple-600 border-l rounded "
                                        >
                                            Search
                                        </button> */}
                                    </div>  
                                </div>  
                            </li>

                            <li>
                                <Link to="/home/Mycomments" className="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">My comments</Link>
                            </li>
                    
                            <li>
                                <Link to="/home" className="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Home</Link>
                            </li>
                            {/* <li>
                                <Link to="/home/Action" className="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Genre:Action</Link>
                            </li>
                            <li>
                                <Link to="/home/Horror" className="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Genre:Horror</Link>
                            </li> */}

                            <li>
                                <Link to="/home/aboutus" className="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">About us</Link>
                            </li>

                            <li>
                                <button href="#" className="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent" onClick={logout}>Logout</button>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}
export default NavBar

