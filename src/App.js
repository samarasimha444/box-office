import Home from "./home";
import MainLayout from "./components/Mainlayout"
import Starred from "./starred"
import { BrowserRouter,Routes,Route } from "react-router-dom";

let App=()=>{
  return <div>
    <BrowserRouter>
      <Routes>
        <Route path ="/" element={<MainLayout/>}>
        <Route path="/home" element={<Home/>}></Route>
        <Route path="/starred" element={<Starred/>}></Route>
        </Route>
       
      </Routes>
    </BrowserRouter>
  </div>
}
export default App;