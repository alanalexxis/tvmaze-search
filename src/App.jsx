import { useState } from "react";
import "./App.css";
import Banner from "./components/Banner";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import NavBar from "./components/NavBar";

function App() {
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

export default App;
