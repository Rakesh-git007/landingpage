import { BrowserRouter, Route, Routes } from "react-router-dom"
import Nav from "./compontent/Nav"
import Service from "./compontent/Service"
import Pricing from "./compontent/Pricing"
import About from "./compontent/About"
import Contact from "./compontent/Contact"
import Footer from "./compontent/Footer"
import Signpage from "./compontent/Signpage"
 
 
 const App = () => {
   
   return (
    <>
    <BrowserRouter>
    <Nav/>
    <Routes>
      <Route path="/" element={<Service/>}/>
      <Route path="Pricing" element={<Pricing/>}/>
      <Route path="About" element={<About/>}/>
      <Route path="Contact" element={<Contact/>}/>
      <Route path="Signup" element={<Signpage/>}/>


      </Routes>
      <Footer/>
      </BrowserRouter>
     
    </>
      
   )
 }
 
 export default App
 