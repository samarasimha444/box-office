import { useState } from "react";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import PageLoader from "../Components/PageLoader.jsx";
import NoInternet from "../Components/NoInternet.jsx";
import noimage from "../No show image.jpg"

const Apidata= ({value})=>{
    let datafetch=async (offf)=>{
        let data1=await fetch(`https://api.tvmaze.com/search/shows?q=${offf}`);
        let response=await data1.json();
        return response

    }
    let {isLoading,error,data}=useQuery({
        queryKey:[value],
        queryFn:()=>datafetch(value),
        enabled:!!value
    })
    
    return (
        <div>
            {isLoading &&<div><PageLoader/></div>}
            {error && <div><NoInternet/></div>}
           <div className='row'>
            {data&& data.map((a)=>
                 <div key={a.show.id} className="col-sm">
                    <div id="show-name"><b>{a.show.name}</b></div>
                    {a.show.image ?<div> <img src={a.show.image.medium}></img></div>
                    :<div><img src={noimage} className="no-image"></img></div>}
                     <div><Link to={`show/${a.show.name}/${a.show.id}`}>Read More</Link></div>
                  </div>)}
           </div>
           
            
        </div>
    )

}
export default Apidata;