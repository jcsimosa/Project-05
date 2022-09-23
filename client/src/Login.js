import react from "react"
import { useState } from "react"
import {json, Link} from "react-router-dom"
import {useNavigate} from "react-router-dom"

function Login({setUser}){

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
                r.json().then(r => {
                    setUser(true)
                    navigate('/home')
                })
            }
        })
    }


  
    return (
        <div>
            <form onSubmit={handleLogin}>
                <input required="username" placeholder='username' onChange={(e) => setUserName(e.target.value)}></input>
                <input required="password" placeholder='password' onChange={(e) => setPassword(e.target.value)}></input>
                <input type='submit'value='login'></input>
            </form>
            <div>or if you don't have an account yet, <Link to="/signup">click here</Link></div>
        </div>
    )
}
export default Login