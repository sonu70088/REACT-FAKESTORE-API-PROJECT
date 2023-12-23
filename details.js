import axios from "axios"
import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
export function Details(){
const[reads,sets]=useState({id:0,title:"",price:0,category:"",rating:{rate:0,count:0}})
const params=useParams()
useEffect(()=>{
 axios({
    method:"get",
    url:`https://fakestoreapi.com/products/${params.id}`
 })
 .then((alldata)=>{
    sets(alldata.data)
 })
})
    return(
        <div>
            <h1>Product Details:</h1>
            
                <div className="row mt-4">
                <div className="col-3">
                  <img src={reads.image} width="150px" height="150px"></img>
                </div>
                
                <div className="col-9">
                    <dl>
                        <dt>id</dt>
                        <dd>{reads.id}</dd>
                        <dt>title</dt>
                        <dd>{reads.title}</dd>
                        <dt>price</dt>
                        <dd>{reads.price}</dd>
                        <dt>category</dt>
                        <dd>{reads.category}</dd>
                        <dt>rating</dt>
                        <dd>{reads.rating.rate}</dd>
                    </dl>
                    <div>
                        <Link to={'/items/'+reads.category}>back to:{reads.category}</Link>
                    </div>

                </div>

                </div>
                
        </div>
    )
}