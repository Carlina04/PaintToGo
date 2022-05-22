import {useNavigate} from "react-router-dom"
import {Link} from 'react-router-dom';
import React, { Component, useState } from 'react'
import Profile from './Profile'
import axios from 'axios';
import api from "../api/api";

export default function Customer(){
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
        console.log(user_id);
        navigate('/profile');
   }
    return ( 
        <div> 
            <h1>Customer page {user_id}</h1> 
            <button onClick = {logOut}> LogOut </button>
            <div>
            {displayU.user_id}
           <button onClick={display}>Profile<input type="hidden" name='profile' value="{{user_id}}"></input></button>
            </div>
        </div>
        
    )
}