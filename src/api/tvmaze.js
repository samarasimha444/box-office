import { useState } from "react";

let base_url="https://api.tvmaze.com";
let show_searh="/search/shows?q=";
let actor_search="/search/people?q="
let Fetch = async (value)=>{
   
    if(!navigator.onLine){
        return "no internet connection try to connect internet"
    }
  
   try{
    let response=await fetch(`${base_url}${show_searh}${value}`)
    let response1=await fetch(`${base_url}${actor_search}${value}`)
    
     let data=[...await response.json() ,...await response1.json()]
     return data;
   }
   catch(error){
    
    return "something went wrong"
   }

}

export default Fetch;
