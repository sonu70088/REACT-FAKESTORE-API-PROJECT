import { useCookies } from "react-cookie"
export function ShopperImage(){
    const[gets,sets,delets]=useCookies()
    return(
        <div className="d-flex justify-content-between mt-4">
            <div>
                <img src="ring.jpg" style={{height:"300px",width:"200px"}}></img>
            </div>
            <div>
             <img src="electronics.jpg"  style={{height:"300px",width:"200px"}}></img>
            </div>
            <div>
              <img  src="mens clouthing.jpg"  style={{height:"300px",width:"200px"}}></img>
            </div>
            <div>
                <img  src="women clothing_.jpg" style={{height:"300px",width:"200px"}}></img>
            </div>
        </div>
    ) 
}