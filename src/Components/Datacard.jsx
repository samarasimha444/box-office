import NoResult from "./NoresultsComp";
import PageLoader from "../Components/PageLoader.jsx"
import NoInternet from "../Components/NoInternet.jsx";
import ShowComp from "./showComp.jsx";
let Datacard=({isLoading,error,data,query})=>{
 return(  
<div>
  {isLoading && <div><PageLoader/></div>}
  {error && <div><NoInternet/></div>}
  {data && data.length==0 && <div><h1>No Results For {query}</h1><NoResult/></div>}
  {data &&data.length!=0 && <div><h1>This Are The Maching Results</h1><div>
  {data.map((a)=>{
          return(
          <div key={a.show.name}><ShowComp data={a} query={query}/>
          </div>)})}
          </div></div>}
</div>)
}
export default Datacard;