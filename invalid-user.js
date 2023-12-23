import { Link } from "react-router-dom";

export function Invaliduser(){
    return(
        <div>
            <h2 style={{fontFamily:"arial",color:"red"}}>Invalid User & Password Please Log In</h2>
            <Link to="/Login">Try to login</Link>
        </div>
    )
}