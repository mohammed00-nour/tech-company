import { Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Home from "./Pagse/Home";
import Services from "./Pagse/Services";
import About from "./Pagse/About";
import Contact from "./Pagse/Contact";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;