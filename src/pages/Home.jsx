import { Link } from "react-router-dom";
import { useState } from "react";
import ApiData from "../Components/Apidata";
import FormComp from "../Components/Form";
import logo from "../search (1).png"


const Home=()=>{
    const[searchValue,setsearchValue]=useState("hello")
    const onchange=(ev)=>setsearchValue(ev.target.value);

    return (
         <div className="container-fluid">
            <div className="row" id="top-row">
                <div className="col-sm-2"><img src={logo} id="logo"></img></div>
                <div className="col-sm-8"><FormComp onchange={onchange} query={searchValue}/></div>
                <div className="col-sm-2"><Link to={"/starred"}><button className="starred-button" >starred</button></Link></div>
                </div>
            <div className="row" id="middle-row">
                <h1>Most Popular Shows</h1></div>
            <div className="row" id="bottom-row">
                <ApiData value={searchValue}/> 
            </div>
        </div>
)
}
export default Home;
