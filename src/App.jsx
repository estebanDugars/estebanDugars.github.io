import "./App.css";
import Navbar from "./Navbar";
import Panier from "./Components/Panier";
import Themeswitch from "./Components/Themeswitch";
import { useState, lazy, Suspense } from "react";
import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import { AtomSpinner } from "react-epic-spinners";
const HomePage = lazy(() => import("./Pages/HomePage"));
const Articles = lazy(() => import("./Pages/Articles"));
const Article = lazy(() => import("./Pages/Article"));
const Kanban = lazy(() => import("./Pages/Kanban"));
const Shop = lazy(() => import("./Pages/Shop"));

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

  const [clicCounter, setClicCounter] = useState(0);

  const panierAdd = () => {
    setClicCounter(clicCounter + 1);
  };

  return (
    <div className="App">
      <header className="App-header text-black bg-secondary">
        <p className="App-logo" style={{ pointerEvents: "none" }}>
          LOGO
        </p>
        <p>{searchField}</p>
        <Navbar logged={logged} setLogged={setLogged} search={setSearchField} />
        <Themeswitch cssLink={cssLib} />
      </header>
      <Panier clicCounter={clicCounter} />
      <Suspense fallback={<AtomSpinner color="blue" style={{ margin: "0 auto" }} />}>
        <Routes>
          <Route path="/blogging/" element={<HomePage logged={logged} setLogged={setLogged} />}>
            <Route path="secret" element={<div>Secret passage</div>} />
          </Route>
          <Route path="/blogging/Articles" element={<Articles search={searchField} />} />
          <Route path="/blogging/Article" element={<Article />} />
          {logged && <Route path="/blogging/Kanban" element={<Kanban />} />}
          <Route path="/blogging/Shop" element={<Shop addpanier={panierAdd} />} />
          <Route path="/blogging/*" element={<div>404 nowhere to be found</div>}></Route>
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
