import { Link } from "react-router-dom";

let Nav=()=>{
   
    return (
        
       
        <div>
            <button><Link to={'/'}>HOME</Link></button>
            <button onClick={()=>window.history.back()} >BACK</button>
            <button onClick={()=>window.history.forward()} >FORWARD</button>
            
           
        </div>
       
    )
}
export default Nav;