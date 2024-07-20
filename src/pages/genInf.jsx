import { useParams,Link } from "react-router-dom";

import useFetch from "../Components/ShowFetcher";
import FormComp from "../Components/Form";
import { useState } from "react";
import {show_search,actor_search} from '../Components/variables'
import Nav from "../Components/Navigators";
import Datacard from "../Components/Datacard";



const GenInf=()=>{

   
    const[searchedQuery,setsearchedQuery]=useState();
    const onchange=(ev)=>{setsearchedQuery(ev.target.value)}
    const {query}=useParams();
    const {data,error,isLoading}=useFetch(show_search,query);
 
    


    return <div>
          <Nav/>
          <FormComp query={searchedQuery} onchange={onchange}/>
          
          <div>
          <Datacard isLoading={isLoading} data={data} error={error} query={query}/>
          </div>
        </div>


}


export default GenInf