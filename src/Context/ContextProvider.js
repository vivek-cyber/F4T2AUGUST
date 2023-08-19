import React,{useState} from "react";
import UserContext from "./UserContext";

function Contextprovider(props)
{

    let [userdata,setuserdata]=useState("")

    return(<UserContext.Provider value={{userdata,setuserdata}}>
        {props.children}
    </UserContext.Provider>)
}

export default Contextprovider