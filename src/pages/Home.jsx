import {  Link } from "react-router-dom";
import { useState } from "react";
import ApiData from "../Components/Apidata";


const Home=()=>{
    let[searchValue,setsearchValue]=useState("american")
   const onsubmit=(ev)=>{ev.preventDefault();
                
   }

   const onchange=(ev)=>setsearchValue(ev.target.value);

    return (
      
        <div>
          <div>
           <Link to="/starred">go to starred</Link>
            <form onSubmit={onsubmit}> 
            <input type="text" onChange={onchange}/>
            <div>{searchValue}</div>
            <button><Link to={`/${searchValue}`}>SEARCH</Link></button>
            </form>
           </div>
           <div>
            <ApiData value={searchValue}/>
            
           </div>
            
        </div>
       
    )
}
export default Home;
