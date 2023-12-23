import React from "react";
import { BrowserRouter, Route, Routes} from "react-router-dom";
import { Link } from "react-router-dom";
import {ShopperImage} from "../shopper-design-with-routes/shopper-image-design";
import{Axiosshoppers} from "../shopper-design-with-routes/shopper-axios";
import{Register} from "../userregister/userregister-form";
import { Category } from "./category-name";
import{Formikdesign} from "../components/formvalidation-formik/formik-copy-3"
import { useEffect, useState } from "react";
import { Details } from "./details";
import { Logincompo } from "../shopper-design-with-routes/Login-Compo";
import { Invaliduser } from "./invalid-user";
import { useCookies } from "react-cookie";
export function Shopper(){
    const[readCookies,setCookies,deleteCookies]=useCookies()
    function remo(){
        deleteCookies("username")
    }
    return(
         <div className="container-fluid">
                    
             <BrowserRouter>
           <header className="d-flex justify-content-between">
            <div>
                <h1>.Shopper</h1>
            </div>
            <div>
                <nav className="d-flex justify-content-between">
                    <div className="me-4"><Link to="register" className="btn">Register</Link></div>
                    <div className="me-4"><Link to="HOME" className="btn">Home</Link></div>
                    <div className="me-4"><Link to="items/electronics" className="btn">electronics</Link></div>
                    <div className="me-4"><Link to="items/jewelery" className="btn">jewelery</Link></div>
                    <div className="me-4"><Link to="items/men's clothing" className="btn">men's clothing</Link></div>
                    <div className="me-4"><Link to="items/women's clothing" className="btn">women's clothing</Link></div>
                </nav>
            </div>
            <div>
                <nav>
                    <span className="bi bi-search me-4"></span>
                    <span className="bi bi-person  me-4"><span style={{fontSize:"19px"}}>{readCookies["username"]}</span></span>
                    <span className="bi bi-heart  me-4"></span>
                     <button className="btn btn-danger position-relative me-4">
                        <span className="bi bi-cart"></span>
                        <span className="badge rounded-circle bg-primary  position-absolute">0</span>
                     </button>
                    <span style={{backgroundColor:"red", color:"white",borderRadius:"1px solid black", padding:"5px"}} className="rounded rounded-5 " onClick={remo}>SignOut</span>
                </nav>
            </div>
           </header>
           <div className="bg-dark text-center text-white p-1">
            <p>⚡️ HAPPY HOLIDAY DEALS ON EVERYTHING ⚡️</p>
           </div>
          <div style={{marginTop:"25px"}}>
            <Routes>
                <Route path="/" element={<ShopperImage />}></Route>
                <Route path="register" element={<Formikdesign />}></Route>
                <Route path="HOME" element={<Axiosshoppers />}></Route>
                <Route path="items/:name" element={<Category></Category>}></Route>
                <Route path="Details/:id" element={<Details></Details>}></Route>
                <Route path="/Login" element={<Logincompo></Logincompo>}></Route>
                <Route path="/invalid" element={<Invaliduser></Invaliduser>}></Route>
            </Routes>
          </div>

         </BrowserRouter>
        </div>
    )
} 