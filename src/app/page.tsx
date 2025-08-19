import Navbar from "./components/Navbar";
import Header from "./components/Header";
import About from "./components/About";
import Project from "./components/Project";
import { StrictMode } from "react";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Experience from "./components/Experience";
import Education from "./components/Education";


export default function Home() {
  return (
    <StrictMode>
      <div className="overflow-x-hidden mx-3">
        <Navbar/>
        <Header/>
        <About/>
        <Experience/>
        <Education/>
        <Project/>
        <Contact/>
        <Footer/>
      </div>
    </StrictMode>
  );
}