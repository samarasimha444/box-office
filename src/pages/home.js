import Mainlayout from "../components/Mainlayout";
import { useEffect, useState } from "react";
import Fetch from "../api/tvmaze";
import Showcard from "../components/showcard";

export default function Home(){
let[value,setvalue]=useState('')
let[apidata,setapidata]=useState([])

let datafetch=async ()=>{
    let data=await Fetch(value)
    setapidata(data)
    console.log(apidata)

 }
let onsubmit=(event)=>{event.preventDefault()
    datafetch()

}
onchange=(event)=>setvalue(event.target.value);


useEffect(()=> datafetch,[value]
)


    return(
        <div>
            <Mainlayout/>
            
            <form onSubmit={onsubmit}>
                 <input type="text" onChange={onchange} placeholder="search for shows ,actors"/>
                 <button type="submit">search</button>
                
            </form>
            <Showcard data={apidata}/>
        </div>
    )
}
