import {Form, Field, Formik } from "formik";
import { ajax } from "jquery";
import { Link, useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
export function  Logincompo(){
    const[getC,setC,deletC]=useCookies()
    const navigate=useNavigate()
    return(
        <div>
            <h1>user login</h1>
            <div>
               <Formik
               initialValues={{
                username:"",
                password:""
               }}
               onSubmit={
                (results)=>{
                  ajax({
                    method:"get",
                    url:"http://127.0.0.1:1000/users",
                    success:((datas)=>{
                        for(var alls of datas){
                            if(alls.username==results.username && alls.password==results.password){
                                setC("username",results.username)
                                navigate("/")
                                break
                            }
                            else{
                               navigate("/invalid")
                            }
                        }
                    })
                  })
                }
               }
               >
                {
                <Form>
             <dl>
                <dt>username</dt>
                <dd><Field type="text" name="username"></Field></dd>
                <dt>password</dt>
                <dd> <Field type="password" name="password"></Field></dd>
             </dl>
             <button>login</button>
             <div style={{fontFamily:"arial"}}>
             <Link to="/register" className="link">Newuser/Register</Link>
             </div>
                </Form>
}     
               </Formik>
            </div>
        </div>
    )
}