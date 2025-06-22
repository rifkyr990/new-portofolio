import Navbar from "./components/Navbar";
import Header from "./components/Header";
import About from "./components/About";
import Services from "./components/Services";
import Project from "./components/Project";
import { StrictMode } from "react";
import Contact from "./components/Contact";
import Footer from "./components/Footer";


export default function Home() {
  return (
    <StrictMode>
      <div>
        <Navbar/>
        <Header/>
        <About/>
        <Services/>
        <Project/>
        <Contact/>
        <Footer/>
      </div>
    </StrictMode>
  );
}