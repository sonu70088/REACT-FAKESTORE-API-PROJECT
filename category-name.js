import axios from "axios"
import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import { useCookies } from "react-cookie"
import { useNavigate } from "react-router-dom"
export function Category(){
    const[Cookies,setCookies,deleteCookies]=useCookies()
    const navigate=useNavigate()
    const params=useParams()
    const[reads,sets]=useState([])
  useEffect(()=>{
    if(Cookies["username"]==undefined){
        navigate("/Login")
        }
    axios({
        method:"get",
        url:`https://fakestoreapi.com/products/category/${params.name}`,
    })
    .then((alldata)=>{
        sets(alldata.data)
    })
  },[params.name])
return(
    <div>
        <h1>category:{params.name}</h1>
        <div className="d-flex flex-wrap">
            {
                reads.map((data)=>
                    <div className="card" style={{width:"300px", height:"400px",marginRight:"20px" ,marginBottom:"20px"}}>
                       <img src={data.image} width="200px" height="200px"></img>
                       <div className="card-header">
                         <h3>{data.price}</h3>
                       </div>
                       <div className="card-body">
                       <p>{data.title}</p>   
                      </div>
                      <div className="card-footer">
                      <Link to={'/Details/'+data.id} className="btn btn-primary">Details</Link>
                      </div>
                    </div>
                )
            }
        </div>
    </div>
)
}