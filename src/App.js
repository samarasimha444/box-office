import { BrowserRouter,Link,Routes,Route } from "react-router-dom";
import Component1 from "./componnet"
function App(){
  return <div>
           <BrowserRouter>
             <Link to="/">home</Link>
             <Link to="/about">about</Link>
             <Link to="/contact">contact</Link>
             <Routes>
              <Route path="/"  index element={<h1>home</h1>}>
              
              </Route>
              <Route path="/about" index element={<h1>about</h1>}></Route>
              <Route path="/contact" element={<h1>contact</h1>}></Route>
             </Routes>




           </BrowserRouter>

        </div>
}
export default App;