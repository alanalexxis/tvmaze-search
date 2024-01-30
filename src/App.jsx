import { useState } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import Banner from "./components/Banner";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Homee from "./components/Home";
import NavBar from "./components/NavBar";
function Home() {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  return (
    <>
      <NavBar onSearch={handleSearch} />
      <Banner />
      <Hero searchQuery={searchQuery} />
      <Footer />
    </>
  );
}
function Presentation() {
  return (
    <>
      <NavBar />
      <Homee />
      <Footer />
    </>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/" element={<Presentation />} /> */
      </Routes>
    </Router>
  );
}

export default App;
