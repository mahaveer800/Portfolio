import {  Route, Routes } from "react-router-dom"
import Navbar from "./components/Navbar/Navbar";
import Intro from "./components/Intro/Intro"
import About from "./components/About/About";
import Skill from "./components/Skills/Skill";
import Project from "./components/Project/Project";
import Footer from "./components/Footer/Footer";

function App() {
  return (
  <>
<div>
  <Navbar></Navbar>
  
  <Intro></Intro>
  <About/>
  <Skill/>
  <Project/>
  <Footer/>
</div>
  </>

  )
}

export default App
