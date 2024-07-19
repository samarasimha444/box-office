import { useParams,Link } from "react-router-dom";
import useFetch from "../Components/Fetcher";
import { useState } from "react";
import FormComp from "../Components/Form";
import { shows_id,show_search } from "../Components/variables";
import Nav from "../Components/Navigators";
import NoResult from "../Components/NoresultsComp.jsx";
import PageLoader from "../Components/PageLoader.jsx";



const ShowInf=()=>{

    const {query,specific}=useParams();
    const[searchedQuery,setsearchedQuery]=useState()
    
    const {isLoading,data,error}=useFetch(shows_id,specific)
    const {isLoading:isLoading1,data:data1,error:error1}=useFetch(show_search,query);
    const onchange=(ev)=>setsearchedQuery(ev.target.value)

    return <div>
        <div>
            <Nav/>
           <FormComp query={searchedQuery} onchange={onchange} />
            
        </div>    
        <div>
            {isLoading&& <div>
                          <PageLoader/>
                         </div>}
            {error && <div>
                       <NoResult/>
                       </div> }
            {data && <div>
                        <div>
                        <h1>INFO OF {data.name}</h1>

                        {data.name=='Not Found' ? <div><NoResult/></div>:<div>
                                                                          <div>{data.name}</div>
                                                                          <div>{data.id}</div>
                                                                         </div> }
                        
                        
                        </div>
                        <h1>similar results</h1>
                        <div>
                           {isLoading1 && <div>
                                              <PageLoader/>
                                           </div>}
                           {error1 && <div>
                                          something had happend
                                      </div>}
                           {data1 && data1.map((a=><div>
                            <div>{a.show.name}</div>
                            <div>{a.show.id}</div>
                            <Link to={`/${a.show.name}/${a.show.id}`}>Read more</Link>
                           </div>))}
                        </div>

                     </div>}
        </div>
       
         </div>
}
export default ShowInf;