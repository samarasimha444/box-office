import { Outlet } from "react-router-dom";
import Nav from "./navs"

let MainLayout=()=><div>

    <Nav/>
    
    <Outlet/>
   
    
</div>
export default MainLayout;