import "./App.css";
import HomePage from "./Pages/HomePage";
import Articles from "./Pages/Articles";
import Article from "./Pages/Article";
import About from "./Pages/About";
import CMS from "./Pages/CMS";
import Navbar from "./Navbar";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p className="App-logo">LOGO</p>
        <Navbar />
      </header>
      <Routes>
        <Route path="/" exact element={<HomePage />} />
        <Route path="/Articles" element={<Articles />} />
        <Route path="/Article" element={<Article />} />
        <Route path="/About" element={<About />} />
        <Route path="/CMS" element={<CMS />} />
      </Routes>
    </div>
  );
}

export default App;
