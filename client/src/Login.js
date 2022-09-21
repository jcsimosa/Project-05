import react from "react"
import { useState } from "react"

function Login(){

    const [username, setUserName] = useState('')
    const [password, setPassword] = useState('')
  
    return (
        <div>
            <form onSubmit={null}>
                <input required="username" placeholder='username' onChange={(e) => setUserName(e.target.value)}></input>
                <input required="password" placeholder='password' onChange={(e) => setPassword(e.target.value)}></input>
                <input type='submit'value='login'></input>
            </form>
        
        </div>
    )
}
export default Login