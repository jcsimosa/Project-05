import React, { useState } from "react";
import {Link} from "react-router-dom"


function Signup({setUser}) {

    const [name, setName] = useState('')
    const[username, setUsername] = useState ('')
    const [password, setPassword] = useState('')
    
    
    const handleSubmit = (e)=> {
        e.preventDefault()
        const form = {
            name,
            username,
            password
        }
        fetch(`/users`, {
            method: "POST",
            headers: {'Content-type':'application/json'},
            body:JSON.stringify(form)
        })
        .then(r => {
            if (r.ok){
                r.json().then(r => {
                    setUser(true)
                })
            }else {
                r.json().then(json =>console.log(Object.entries(json.errors)))
            }
        })
    }
    
    return (   
        <div>
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