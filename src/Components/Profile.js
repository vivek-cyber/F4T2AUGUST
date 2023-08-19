import React, { useEffect, useState } from "react";
import axios from "axios";
import { useContext } from "react";
import UserContext from "../Context/UserContext";


function Profile() {
    let { userdata, setuserdata } = useContext(UserContext)
    let [userinfo, setuserinfo] = useState("")

    console.log(userdata)


    useEffect(() => {
        let func1 = async function () {
            await fetch(`https://dummyjson.com/users/${userdata.id}`).then(res => res.json()).then((data) => { setuserinfo(data); console.log(userinfo); })
        }
        func1()
    }, [])




    return (<div id="Profile">
        <div id="part1">
        <div id="ppic">{userinfo&&<img src={userinfo.image}/>}</div>
        </div>
        <div id="userinfo">
            {userinfo&&<div><h1>User Profile</h1>
            <div>Email:{userinfo.email}</div>
            <br/> 
            <div>FirstName:{userinfo.firstName}</div>
            <br/> 
            <div>LastName:{userinfo.lastName}</div>
            <br/> 
            <div>Gender:{userinfo.gender}</div>
            <br/> 
            <div>UserName:{userinfo.username}</div>
            </div>}
        </div>
    </div>)
}


export default Profile