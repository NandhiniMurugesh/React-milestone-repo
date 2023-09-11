import React, { useEffect, useState } from "react";
import { CSVLink } from "react-csv";

import { Link } from "react-router-dom";
import StarRatings from "react-star-ratings";

export function Jsonproduct()
{
    
    const [fetchdata,setFetchData]=useState([]);
    const [item,setItem]=useState(0)
    useEffect(()=>{
        fetch(" https://fakestoreapi.com/products/")
        .then(storedata=>storedata.json())
        .then(productdata=>setFetchData(productdata))
        
    }
    )
     const csvdata=fetchdata;
    return(
        <>
        <div className="jsonMainDiv">
        <div className="headDiv">
            <h1 className="heading text-center text-decoration-underline">API Product Details</h1>
        <CSVLink  data={csvdata}><button className="dwnld">Download</button>   </CSVLink></div>
       <div>
        <table>
        <tr className="jsontitle">
               <th>Product</th>
                <th>Product Title</th>
                <th>Product Description</th>
                <th>Price</th>
                <th>Rating</th>
                <th>Add to Cart</th>

                </tr>
               
        { 
            fetchdata.map((value,index)=>
        <>
         
       
            
            <tr >
                <td><img src={value.image} className="image"/></td>
                
                
               <td className="title ">{value.title} </td>
               <td className="description ">{value.description}</td>
               
               <td className=" price">${value.price}</td>
               <td className=" rating">{value.rating.rate} <StarRatings
        rating={value.rating.rate}
        starDimension="20px"
        starSpacing="10px"
        starEmptyColor="grey"
        starRatedColor="green"
       
      /></td>
               
                <td> <button className="add" onClick={()=>{setItem(item+1)}}>+</button><input className="inpbox" type="text" value={item}/>
                <button className="sub" onClick={()=>{setItem(item-1)}}>-</button></td>

             <td><Link to={`/productdisplay/${value.id}` } ><button className="view">View more</button></Link></td>
                            </tr>
        </>
        )
        }
</table>
</div>
</div>
        </>

    );
}