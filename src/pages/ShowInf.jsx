import { useParams,Link } from "react-router-dom";

import useFetch from "../Components/Fetcher";



let ShowInf=()=>{

    let {query,specific}=useParams();
    let BaseURL1=`https://api.tvmaze.com/shows/`
    let BaseURL2=`https://api.tvmaze.com/search/shows?q=`
    let {isLoading,data,error}=useFetch(BaseURL1,specific)
    let {isLoading:isLoading1,data:data1,error:error1}=useFetch(BaseURL2,query)

    return <div>
        <div>
            <div><Link to='/'>Home</Link></div>
            <div><Link to={`/${query}`}>GO Back</Link></div>

        </div>    
        <div>
            {isLoading&& <div>Loading..</div>}
            {error && <div>error</div> }
            {data && <div>
                        <div>
                        <div>{data.name}</div>
                        <div>{data.id}</div>
                        </div>
                        <h1>similar results</h1>
                        <div>
                           {isLoading1 && <div>loading...</div>}
                           {error1 && <div>error</div>}
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