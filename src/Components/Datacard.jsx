import { Link } from "react-router-dom";

let Datacard=({isLoading,error,data,query})=>{
    return(
    
    <div>
          {isLoading && <div>Loading</div>}
            {error && <div>Error</div>}
            
            
            {data && data.map((a=><div key={a.show.id}>
                                    <div>{a.show.name}</div>
                                    <div>{a.show.type}</div>
                                    <Link to={`/${query}/${a.show.id}`}>read more</Link>

                                  </div>)) }
            
    </div>
   
    )
}
export default Datacard;