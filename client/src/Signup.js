import React, { useState } from "react";
import {Link, useNavigate} from "react-router-dom"
import {NavLink} from "react-router-dom"



function Signup({setUser,setCurrentUser}) {

    const [name, setName] = useState('')
    const[username, setUsername] = useState ('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()
    
    
    const handleSubmit = (e)=> {
        e.preventDefault()
        const form = {
            name,
            username,
            password
        }
        fetch("/users", {
            method: "POST",
            headers: {'Content-type':'application/json'},
            body:JSON.stringify(form)
        })
        .then(r => {
            if (r.ok){
                r.json().then(userDataObj => {
                    setCurrentUser(userDataObj)
                    setUser(true)
                    alert('Your User has been created succesfully')
                    navigate("/home")
                })
            }else {
                r.json().then(json =>console.log(Object.entries(json.errors)))
            }
        })
    }
    
    return (   
        <div>
            <div className="flex flex-col items-center min-h-screen pt-6 sm:justify-center sm:pt-0 bg-gray-50">
                <div>
                    <a href="/">
                        <h3 className="text-4xl font-bold text-black-600" >
                            To Watch
                        </h3>
                    </a>
                </div>
                <div className="w-full px-6 py-4 mt-6 overflow-hidden bg-white shadow-md sm:max-w-md sm:rounded-lg">
                    <form onSubmit={handleSubmit}>
                        <div>
                            <label
                                htmlFor="name"
                                className="block text-sm font-medium text-gray-700 undefined"
                            >
                                Name
                            </label>
                            <div className="flex flex-col items-start">
                                <input
                                    type="text"
                                    name="name"
                                    required="name"
                                    onChange={e => setName(e.target.value)}
                                    className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                                />
                            </div>
                        </div>
                        <div className="mt-4">
                            <label
                                htmlFor="username"
                                className="block text-sm font-medium text-gray-700 undefined"
                            >
                                Username
                            </label>
                            <div className="flex flex-col items-start">
                                <input
                                    type="text"
                                    name="username"
                                    required="usernname"
                                    onChange={e => setUsername(e.target.value)}
                                    className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                                />
                            </div>
                        </div>
                        <div className="mt-4">
                            <label
                                htmlFor="password"
                                className="block text-sm font-medium text-gray-700 undefined"
                            >
                                Password
                            </label>
                            <div className="flex flex-col items-start">
                                <input
                                    type="password"
                                    name="password"
                                    required="password"
                                    onChange= {e => setPassword(e.target.value)}
                                    className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                                />
                            </div>
                        </div>
                        <div className="flex items-center justify-end mt-4">
                            
                                <NavLink to="/">
                                    <p className="text-sm text-gray-600 underline hover:text-gray-900">Already registered?</p>
                                </NavLink>
         
                            <button
                                type="submit"
                                className="inline-flex items-center px-4 py-2 ml-4 text-xs font-semibold tracking-widest text-white uppercase transition duration-150 ease-in-out bg-gray-900 border border-transparent rounded-md active:bg-gray-900 false"
                            >
                                Register
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        










            <form onSubmit={handleSubmit}>
                <input required="Name" type="text" placeholder="Name" onChange={e => setName(e.target.value)}></input>
                <br />
                <input type="text" required="Username" placeholder="Username" onChange={e => setUsername(e.target.value)}></input>
                <br />
                <input type="text" required="Password" placeholder="Password" onChange={e => setPassword(e.target.value)}></input>
                <br />
                <input type="submit"></input>
            </form> 
            
            <div>or if you have an account,<Link to="/">Click here</Link> </div>      
        </div>
    )
}   
export default Signup