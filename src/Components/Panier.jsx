import React, { lazy, Suspense, useState } from "react";
import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import { AtomSpinner } from "react-epic-spinners";
// import HomePage from "./../Pages/HomePage";
const HomePage = lazy(() => import("./../Pages/HomePage"));
const Articles = lazy(() => import("./../Pages/Articles"));
const Article = lazy(() => import("./../Pages/Article"));
const Kanban = lazy(() => import("./../Pages/Kanban"));
const Shop = lazy(() => import("./../Pages/Shop"));

const Panier = ({ logged, setLog, search }) => {
  const [clicCounter, setClicCounter] = useState(0);

  const panierAdd = () => {
    setClicCounter(clicCounter + 1);
  };

  return (
    <>
      <div style={{ width: "100px", textAlign: "left", marginRight: "0.2rem", position: "absolute", top: "0vh", right: "0vh", color: "white", pointerEvents: "none" }}>
        {clicCounter}
      </div>
      <Suspense fallback={<AtomSpinner color="blue" style={{ margin: "0 auto" }} />}>
        <Routes>
          <Route path="/" element={<HomePage logged={logged} setLogged={setLog} />}>
            <Route path="secret" element={<div>Secret passage</div>} />
          </Route>
          <Route path="/Articles" element={<Articles search={search} />} />
          <Route path="/Article" element={<Article />} />
          {logged && <Route path="/Kanban" element={<Kanban />} />}
          <Route path="/Shop" element={<Shop addpanier={panierAdd} />} />
          <Route path="/*" element={<div>404 nowhere to be found</div>}></Route>
        </Routes>
      </Suspense>
    </>
  );
};

export default Panier;
