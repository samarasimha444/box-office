import { useParams,Link } from "react-router-dom";

import useFetch from "../Components/Fetcher";



const GenInf=()=>{
    let BaseURL='https://api.tvmaze.com/search/shows?q=';

    let {query}=useParams();
    let {data,error,isLoading}=useFetch(BaseURL,query);
 
    


    return <div>
         <div><Link to="/">Home</Link></div>
         <div><Link to={`/`}>Go Back</Link></div>
         <div>these are the matching results for {query}</div>
         <div>
            {isLoading && <div>Loading</div>}
            {error && <div>Error</div>}
            {data && data.map((a=><div key={a.show.id}>
                                    <div>{a.show.name}</div>
                                    <Link to={`/${query}/${a.show.id}`}>read more</Link>

                                 </div>)) }
            
         </div>
        
       
        

        </div>


}


export default GenInf