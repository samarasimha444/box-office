import { Outlet } from "react-router-dom";
import Navs from "./navs";

export default function Mainlayout(){
    return (
        <div>
            <Navs/>
            <Outlet/>
        </div>
    )
}