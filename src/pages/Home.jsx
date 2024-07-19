import { Link } from "react-router-dom";
import { useState } from "react";
import ApiData from "../Components/Apidata";
import FormComp from "../Components/Form";


const Home=()=>{
    const[searchValue,setsearchValue]=useState("hello")
    const onchange=(ev)=>setsearchValue(ev.target.value);

    return (
         <div>
        <div>
         <Link to="/starred">go to starred</Link>
         <FormComp query={searchValue} onchange={onchange} />
         </div>
         <div>
          <ApiData value={searchValue}/>
         </div>
      </div>
)
}
export default Home;
