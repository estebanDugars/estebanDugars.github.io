import "./App.css";
import Navbar from "./Navbar";
/* import HomePage from "./Pages/HomePage";
import Articles from "./Pages/Articles";
import Article from "./Pages/Article";
import Kanban from "./Pages/Kanban";
import CMS from "./Pages/CMS";
import { Routes, Route } from "react-router-dom";
import { userscomments } from "./data/usersComments";
import dataObj from "./data/imagesFaker";
 */ import Panier from "./Components/Panier";
import Themeswitch from "./Components/Themeswitch";
import { useState } from "react";

// Creation d'un Global state au niveau de app
export let nimp = 10;
export const setNimp = () => {
  return ++nimp;
};
/* export const nimpStateObject = { nimp, setNimp }; */
// fin global state

function App({ cssLib }) {
  const [searchField, setSearchField] = useState("");
  const [logged, setLogged] = useState(false);

  return (
    <div className="App">
      <header className="App-header">
        <p className="App-logo" style={{ pointerEvents: "none" }}>
          LOGO
        </p>
        <p>{searchField}</p>
        <Navbar logged={logged} setLogged={setLogged} search={setSearchField} />
        <Themeswitch cssLink={cssLib} />
      </header>
      <Panier logged={logged} setLog={setLogged} search={searchField} />
      {/* <Routes>
        <Route path="/" exact element={<HomePage />} />
        <Route path="/Articles" element={<Articles data={dataObj.data} />} />
        <Route path="/Article" element={<Article />} />
        <Route path="/Kanban" element={<Kanban />} />
        <Route path="/CMS" element={<CMS userscomments={userscomments} />} />
      </Routes> */}
    </div>
  );
}

export default App;
