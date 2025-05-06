import {  Route, Routes } from "react-router-dom"
import Navbar from "./components/Navbar/Navbar";
import Intro from "./components/Intro/intro";
import About from "./components/About/About";
import Skill from "./components/Skills/Skill";
import Project from "./components/Project/Project";
import Footer from "./components/Footer/Footer";
import Navbar2 from "./components/Navbar/Navbar2";

function App() {
  return (
  <>
<div>
  <Navbar></Navbar>
  
  <Intro/>
  <About/>
  <Skill/>
  <Project/>
  <Footer/>
  {/* <Navbar/>
  <Contact/>
 <Routes>
 <Route path="/" element={<Home />} />
 <Route path="/about" element={<About />} />
 <Route path="/contact" element={<Contact />} />
 


 </Routes>
 <Footer/> */}
 
</div>
  </>

  )
}

export default App
