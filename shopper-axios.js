import axios from "axios";

import { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";
export function Axiosshoppers(){
   const[readCookies,setCookies,deleteCookies]=useCookies()
   const navigate=useNavigate()
    const[getdatas,setdata]=useState([])
    const[getcount,setcount]=useState([])
    const[readdata,writedata]=useState([])
    useEffect(()=>{
      if(readCookies["username"]==undefined){
         navigate("/Login")
         }
      axios({
        method:'get',
        url:"https://fakestoreapi.com/products",
      })
      .then((response)=>{
       setdata(response.data)
      })

    })
    function adddata(e){
      alert(e.currentTarget.name)
      fetch(`https://fakestoreapi.com/products/category/${e.currentTarget.name}`)
      .then(responses=>{
        setcount(responses.data)
        writedata(getcount.length)
        console.log(readdata)
    })
 
    }
 return(
    <div> 
        <div className="d-flex flex-wrap">
       {
        getdatas.map((obje)=>
        
           <div className="card" style={{height:"400px",width:"400px",marginRight:"30px", marginBottom:"20px"}}>
           <img src={obje.image} style={{width:"200px",height:"150px"}} className="img" ></img>
            <div className="card-header">
                <h3>{obje.price}</h3>
            </div>
            <div className="card-body">
               <p>{obje.title}</p>
            </div>
            <div className="card-footer">
               <button className="btn btn-danger postion-relative" name={obje.id} onClick={adddata}>
                  <span classNmae="bi bi-cart-4">add to cart</span>
                 <span className="badge rounded-circle bg-primary position-relative"> </span>
               </button>
            </div>

           </div>
        )
       }
       </div>
    </div>
 )
}