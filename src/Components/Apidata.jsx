import { useState } from "react";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import PageLoader from "../Components/PageLoader.jsx";
import NoInternet from "../Components/NoInternet.jsx";
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
            {data&& data.map((a)=><div key={a.show.id}><Link to={`show/${a.show.name}`}>{a.show.name}</Link></div>)}
            
        </div>
    )

}
export default Apidata;