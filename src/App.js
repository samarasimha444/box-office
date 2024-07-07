import { BrowserRouter,Routes,Route } from "react-router-dom";
import Home from "./pages/home";
import Starred from "./pages/starred";
import Show from "./pages/Show";
import Actor_card from "./components/actorcard";
function App(){
    return (
       <div>
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path="/starred" element={<Starred/>}></Route>
            <Route path="/show/:showid" element={<Show/>}></Route>
            <Route path="/people/:personid" element={<Actor_card/>}></Route>
           
        </Routes>
        </BrowserRouter>
       </div>
    )
}
export default App;
