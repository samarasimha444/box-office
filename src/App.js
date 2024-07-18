import Home from "./pages/Home";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Starred from "./pages/Starred";
import GenInf from "./pages/genInf";
import ShowInf from "./pages/ShowInf";



const App=()=>{
    return(
       <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path="/starred" element={<Starred/>}></Route>
            <Route path="/:query" element={<GenInf/>}></Route>
            <Route path="/:query/:specific" element={<ShowInf/>}></Route>
            
          </Routes>
       </BrowserRouter>
    )
}

export default App;