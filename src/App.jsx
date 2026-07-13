import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Footer from "./components/Footer";
import Resume from "./pages/Resume";

function Home() {
  return (
    <>
      <Hero />
      <Features />
      <Footer />
    </>
  );
}

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/Login" element={<Login />} />
      </Routes>
    </>
  );
}

export default App;