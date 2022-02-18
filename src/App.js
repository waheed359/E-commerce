
import "./App.css";
import Navbar from "./Component/Navbar"; 
import About from "./Pages/About";
import Home from "./Pages/Home";
import Contact from "./Pages/Contact";
import Login from "./Pages/Login";
import SignUp from "./Pages/Signup";
import Favorite from "./Pages/Favorite";
import {Route,Routes,
   BrowserRouter} from "react-router-dom"
import Computer from "./Pages/Product/Computer";
 
import Chaat from "./Component/Chaat";

function App() { 
//    fetch("http://localhost:9000/getAllUsers", {
//   method: "GET",
//   mode: "cors",
//   headers: {
//     "Content-Type": "application/json",
//   },
// }).then((res) => {
//   console.log(res.body.json());
// });
  return (
    <>
   
    <BrowserRouter>
    

    <Navbar />
    <Chaat />
    <Routes>
      
    <Route  path="/" element={<Home/>} />
    <Route  path="/about" element={<About />} />
    <Route  path="/contact" element={<Contact />} />
    <Route  path="/login" element={<Login/>} />
    <Route  path="/signup" element={<SignUp/>} />
    <Route  path="/favroite" element={<Favorite/>} />
    <Route path="/Computer" element={<Computer/>}/>
     
   
     </Routes>
     
     </BrowserRouter>
     
    </>
    
  );
}

export default App;
