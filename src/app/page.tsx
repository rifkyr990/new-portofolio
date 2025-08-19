import Navbar from "./components/Navbar";
import Header from "./components/Header";
import About from "./components/About";
import Services from "./components/Services";
import Project from "./components/Project";
import { StrictMode } from "react";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Testimoni from "./components/Testimoni";
import Experience from "./components/Experience";
import Education from "./components/education";


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