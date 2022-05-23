import React, { useEffect, useState } from "react"
import api from "../api/api";

export default function NullOrderTable () {
    const [ nullList , setNullList ] = useState([]);
    
    useEffect(() => {
        fetchNullList();
     },[]);

    const fetchNullList = async (e) => {
        try{
            const res = await api.nullO();
            setNullList(res.data.nullOrders);   
            }
        catch (err){
            console.log(err);
        }
    }
    function refreshPage() {
        window.location.reload(false);
      
    }

    const approveBtn = async (e) => {
        try{
            const res = await api.approveOBtn({params : {rowKey : e.target.value}});
         
            if(res.status === 200)
            {
                refreshPage();
            }
            else{
                console.log(res);
            }  
        }
        catch(err){
            return (err);
        }
    }

    
    const renderList = () =>{
        
        if (!nullList) {
            return (
                <tr>
                    <td colSpan="4">
                        Loading products...
                    </td>
                </tr>
            );
        };
        if (nullList.length === 0) {
            return (
                <tr>
                    <td colSpan="4">
                        There are no requests available
                    </td>
                </tr>
            );
        };

        return nullList.map((a) => {
            
           return (<tr key={a.order_id} className="table-contents-odd" >
            
           <td>{a.order_id}</td>
           <td>{a.branch_add}</td>
           <td>{a.lastName}</td>
           <td>
           <button name = 'rowKey' onClick= {approveBtn} value = {a.order_id}> Approve </button>
           </td> 

           </tr> ) 

        })
}

    return (
        <div>
            <h1> NULL Orders Table </h1>
                <table className="table">
                    <thead className="table-header">
                        <tr>
                            <th>Order ID</th>
                            <th>Brand Address</th>
                            <th>Lastname</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody className="table-contents">
                        {renderList()}
                    </tbody>
                </table>
        </div>
        
    );
}