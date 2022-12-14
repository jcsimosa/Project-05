import react from "react"
import { useState } from "react"
import {json, Link, NavLink} from "react-router-dom"
import {useNavigate} from "react-router-dom"



function Login({setUser, setCurrentUser,currentUser}){

    const [username, setUserName] = useState('')
    const [password, setPassword] = useState('')
    const [errors, setErrors] = useState([])
    let navigate = useNavigate()

    const handleLogin = (e) => {
        e.preventDefault()
        const user = {
            username,
            password
        }
        fetch("/login", {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(user)
        })
            .then(r => {
                if(r.ok){
                    r.json().then(userObj => {
                        setCurrentUser(userObj)
                        setUser(true)
                        navigate('/home')
                })
            }else {
                r.json().then(json =>setErrors(Object.entries(json.errors)))
            }
        })
    }


    if (currentUser.id){navigate('/home')}
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
                    <form onSubmit={handleLogin}>
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
                                    required="username"
                                    onChange={(e) => setUserName(e.target.value)}
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
                                <NavLink to="/signup">
                                    <p className="text-sm text-gray-600 underline hover:text-gray-900">Don't you have an account yet?</p>
                                </NavLink>
                            <button
                                type="submit"
                                className="inline-flex items-center px-4 py-2 ml-4 text-xs font-semibold tracking-widest text-white uppercase transition duration-150 ease-in-out bg-gray-900 border border-transparent rounded-md active:bg-gray-900 false"
                            >
                                Login
                            </button>
                        </div>
                    </form>
                </div>
                {errors?errors.map(e => <div>{e[0]+': ' + e[1]}</div>):null}
            </div>








            {/* <form onSubmit={handleLogin}>
                <input required="username" placeholder='username' onChange={(e) => setUserName(e.target.value)}></input>
                <input required="password" placeholder='password' onChange={(e) => setPassword(e.target.value)}></input>
                <input type='submit'value='login'></input>
            </form>
            <div>or if you don't have an account yet, <Link to="/signup">click here</Link></div> */}
        </div>
    )
}
export default Login