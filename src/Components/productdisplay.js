import React, { useEffect, useState } from "react";

import { useParams } from "react-router-dom";
export function Productdisplay()
{
    const [fetchdata,setFetchData]=useState([]);
    var {id}=useParams()
    useEffect(()=>{
        fetch(" https://fakestoreapi.com/products/"+id)
        .then(storedata=>storedata.json())
        .then(productdata=>setFetchData(productdata))
        
    }
    )
   
    return(
     <>
        
        <div className="headDiv">
            <h1 className="heading text-center text-decoration-underline">API Product Details</h1>
       
       </div>
        <div className='row dispMain container-fluid'>
        <div className='col-lg-6 dispimg'>
            <img src={fetchdata.image}className='img-fluid  dispimage'/>
         </div>
         <div className='col-lg-6 dispcontent'>   
            <h1>{fetchdata.title}</h1>
            <p className="dispprice"><span>$</span>{fetchdata.price}</p>
            <p >{fetchdata.id}</p>
            <p className="dispcat">{fetchdata.category}</p>
            <p >{fetchdata.description}</p>
             
            </div>
        </div>
    </>
    );
}