import { useState } from "react";

let Home =()=>{

let[value,setvalue]=useState(null)
let[count,setcount]=useState(0)

let onchange=(ev)=>setvalue(ev.target.value)

let onsubmit= async (ev)=>{  ev.preventDefault();
         let response=await fetch(`https://api.tvmaze.com/search/shows?q=${value}`)
         let data =await response.json()
         setcount(data.length)

         console.log(data)
        }

return <div>
           <form onSubmit={onsubmit}>
            <div>{count}</div>
           <input type="text" onChange={onchange} ></input>
            <button type="submit">click me</button>
              
           </form>

        </div>
}
export  default Home;