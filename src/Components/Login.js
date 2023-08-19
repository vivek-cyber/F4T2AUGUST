import React, { useContext, useState } from "react";
import UserContext from "../Context/UserContext";
import { useNavigate } from "react-router-dom";
function Login() {

    let navigate=useNavigate()
    let {userdata,setuserdata}=useContext(UserContext)
    let [user, setusername] = useState("")
    let [pass, setpass] = useState("")

    async function auth(e) {
        e.preventDefault()
        console.log(user, pass)
        await fetch('https://dummyjson.com/auth/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({

                username: user,
                password: pass,
                // expiresInMins: 60, // optional
            })
        })
            .then(res => res.json())
            .then((data) => {  setuserdata(data); console.log(userdata); navigate("/Profile") }

            );
    }
    return (<div id="Login">
        <h2>Welcome Back</h2>
        <h1>Sign into your account</h1>
        <form >
            <p>Your Email</p>
            <input type="text" value={user} onChange={(e) => { setusername(e.target.value) }} placeholder="Username" ></input>
            <p>Your Password</p>
            <input type="text" value={pass} onChange={(e) => { setpass(e.target.value) }} placeholder="password"></input>
            <br/>
            <br/>
            <button onClick={auth}>Login</button>
        </form>
    </div>)
}

export default Login