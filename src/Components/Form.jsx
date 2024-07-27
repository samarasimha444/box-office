import { Link } from "react-router-dom";
import search from "../search (1).png"
const FormComp =({query,onchange})=>{
let onsubmit=(ev)=>ev.preventDefault();
 return (
            <form onSubmit={onsubmit} className="form">
            <input type="text" onChange={onchange} id="input-div"></input>
           
                <Link to={`/show/${query}`} id="input-link">
                <img src={search} id="search-symbol"></img>
                </Link>
                
            </form>
    
    )
}
export default FormComp;