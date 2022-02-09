import "./App.css";
import Navbar from "./Navbar";
/* import HomePage from "./Pages/HomePage";
import Articles from "./Pages/Articles";
import Article from "./Pages/Article";
import About from "./Pages/About";
import CMS from "./Pages/CMS";
import { Routes, Route } from "react-router-dom";
import { userscomments } from "./data/usersComments";
import dataObj from "./data/imagesFaker";
 */ import Panier from "./Components/Panier";
import Themeswitch from "./Components/Themeswitch";
import { useState } from "react";

function App({ cssLib }) {
  const [searchField, setSearchField] = useState("");

  return (
    <div className="App">
      <header className="App-header">
        <p className="App-logo" style={{ pointerEvents: "none" }}>
          LOGO
        </p>
        <p>{searchField}</p>
        <Navbar search={setSearchField} />
        <Themeswitch cssLink={cssLib} />
      </header>
      <Panier search={searchField} />
      {/* <Routes>
        <Route path="/" exact element={<HomePage />} />
        <Route path="/Articles" element={<Articles data={dataObj.data} />} />
        <Route path="/Article" element={<Article />} />
        <Route path="/About" element={<About />} />
        <Route path="/CMS" element={<CMS userscomments={userscomments} />} />
      </Routes> */}
    </div>
  );
}

export default App;
