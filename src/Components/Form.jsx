import { Link } from "react-router-dom";
const FormComp =({query,onchange})=>{
    
let onsubmit=(ev)=>ev.preventDefault();
 return (
        <div>
            <form onSubmit={onsubmit}>
                <input type="text" onChange={onchange}></input>
                <button><Link to={`/${query}`}>SEARCH</Link></button>
            </form>
        </div>
    )
}
export default FormComp;