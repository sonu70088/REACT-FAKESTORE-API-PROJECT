import axios from "axios";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { ajax } from "jquery";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import * as yup from "yup"
export function Formikdesign(){
  const navigate=useNavigate()
  const[readdata,setdata]=useState([])
  const[readError,seterror]=useState("")
  const[passread,passset]=useState([])
  const[readpasserror,setpasserror]=useState("")
  const[readmobile,setmobile]=useState([])
  const[readmobileerror,setmobileerror]=useState("")
  const[readpassword,setpassword]=useState([])
  const[readpassworderror,setpassworderror]=useState("")

  
 useEffect(()=>{
  ajax({
    method:"get",
    url:"http://127.0.0.1:1000/users",
    success:((alldata)=>{
      setdata(alldata)
    })

  })
 },[])
  function verifyss(e){
  for(var datas of readdata){
    if(datas.username==e.target.value){
      seterror("username already exist please try another")
      
      break
    }else{
      seterror("")
      break
    }
  }
   }
  
   useEffect(()=>{
    ajax({
      method:"get",
      url:"http://127.0.0.1:1000/users",
      success:((pass)=>{
        passset(pass)
      })
    })
   },[])
   function idmatch(e){
  for(var idsame of passread){
    if(idsame.userid==e.target.value){
        setpasserror("Userid Already Exist")
        break
    }else{
      setpasserror("available")
      break
    }
  }
   }


   useEffect(()=>{
    ajax({
      method:"get",
      url:"http://1278.0.0.1:1000/users",
      success:((mdata)=>{
        setmobile(mdata)
      })
    })
   },[])

   function mobiledata(e){
   for(var mobiled of readmobile){
    if(mobiled.mobile==e.target.value){
      setmobileerror("Mobile Already Exist")
      break
    }
    else{
      setmobileerror("available")
      break
    }
   }
   }


useEffect(()=>{
  ajax({
    method:"get",
    url:"http://127.0.0.1:1000/users",
    success:((passworddata)=>{
      setpassword(passworddata)
    })
  })
},[])
function passwordm(e){
  for(var passdata of readpassword){
    if(passdata.password==e.target.value){
      setpassworderror("Password Already Exist")
      break
    }else{
      setpassworderror("available")
      break
    }
  }
}

    return( 
        <div>
        <Formik
          initialValues={
            {
                userid:0,
                username:"",
                mobile:"",
                email:"",
                password:""
            }
          }
          validationSchema={
            yup.object({
                userid:yup.number()
                        .required("userid most reqired"),
                username:yup.string()
                             .required("username most required")  
                             .min(3,"above 3 charector")
                             .max(8,"max 8 charector"),
                            
                mobile:yup.string()
                           .required("number  most reqired")  
                           .matches(/\91\d{10}/,"please write a correct number +91 d{10}") ,
                email:yup.string() 
                          .required("email most required"),
                 password:yup.string()
                             .required("password most required")  
                             .matches(/(?=.*[A-Z])\w{4,5}/,"write the correct password hint-:A\w{4,5}")  

                                                    
            })
          }
         onSubmit={
          (valuesa)=>{
            console.log(valuesa)
            axios({
              method:"post",
              url:"http://127.0.0.1:1000/videoup",
              data:(valuesa)
              
            })
            
            .then(()=>{
              alert("data update into database")
              navigate("/Login")
            })
          }
         }
        >
        {
          props=>
          <Form className={(props.isValid)?"bg-success":"bg-danger" }>
           <dl>
            <dt>userid</dt>
            <dd> <Field type="number" name="userid" onKeyUp={idmatch}></Field></dd>
            <dd><ErrorMessage name="userid"></ErrorMessage><span style={{color:"yellow"}}>{readpasserror}</span></dd>
            <dt>username</dt>
            <dd><Field type="text" name="username" onKeyUp ={verifyss}></Field></dd>
            <dd><ErrorMessage name="username"/><span style={{color:"yellow"}}>{readError}</span></dd>
            <dt>mobile</dt>
            <dd><Field type="text" name="mobile" onKeyUp={mobiledata}></Field></dd>
            <dd><ErrorMessage name="mobile"/> <span style={{color:"yellow"}}>{readmobileerror}</span></dd>
            <dt>email</dt>
            <dd><Field type="email" name="email"></Field></dd>
            <dd><ErrorMessage name="email"/></dd>
            <dt>password</dt>
            <dd><Field type="password" name="password" onKeyUp={passwordm}></Field></dd>
            <dd><ErrorMessage name="password"></ErrorMessage><span style={{color:"yellow"}}>{readpassworderror}</span></dd>
           </dl>
           <button disabled={!props.isValid}>submit</button>
           <button disabled={!props.dirty}>updata</button>
           <div style={{marginTop:"25px"}}>
          <Link to="/Login" style={{fontFamily:'arial',fontSize:"20px",borderRadius:"2px,solid,black",backgroundColor:"black", color:"red"}}>Existing user</Link>
          </div>
          </Form>
}
    
        </Formik>
        <div>
        </div>
        </div>
    )
}
