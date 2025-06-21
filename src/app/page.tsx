import Navbar from "./components/Navbar";
import Header from "./components/Header";
import About from "./components/About";
import { StrictMode } from "react";
import Services from "./components/Services";

export default function Home() {
  return (
    <StrictMode>
      <div>
        <Navbar/>
        <Header/>
        <About/>
        <Services/>
      </div>
    </StrictMode>
  );
}