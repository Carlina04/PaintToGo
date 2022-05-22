import {useNavigate, Link} from "react-router-dom"
import React, { useEffect, useState } from "react"
import api from "../api/api";

export default function Profile(){
    const user_id = sessionStorage.getItem('user_id');
    const branch_id = sessionStorage.getItem('branch_id');

    const [ displayU , setCustomer ] = useState([]);

    const navigate = useNavigate();
    function logOut() {
        sessionStorage.clear();
        navigate('/');
    }
    const display = async (e)=>{
        const res = await api.displayU();
        setCustomer(res.data.users); 
        console.log(res);
   }
    return ( 
        <div> 
            <Link to={'/dashboard'}>(--BACK</Link>
            <h1>Profile page</h1> 
            <button onClick={display}>See Profile</button>
            <h2>{displayU.firstName} {displayU.lastName}</h2>
            <h2>{displayU.user_contact} {displayU.email_add}</h2>
             
           
             <br></br><br></br>
            <button onClick = {logOut}> LogOut </button>
        </div>
    )
}