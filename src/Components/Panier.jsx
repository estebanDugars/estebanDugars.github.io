import React, { lazy, Suspense, useState } from "react";
import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
// import HomePage from "./../Pages/HomePage";
import { userscomments } from "./../data/usersComments";
const HomePage = lazy(() => import("./../Pages/HomePage"));
const Articles = lazy(() => import("./../Pages/Articles"));
const Article = lazy(() => import("./../Pages/Article"));
const About = lazy(() => import("./../Pages/About"));
const Shop = lazy(() => import("./../Pages/Shop"));

const Panier = (props) => {
  const [clicCounter, setClicCounter] = useState(0);

  const panierAdd = () => {
    setClicCounter(clicCounter + 1);
  };

  return (
    <>
      <div style={{ width: "100px", textAlign: "left", marginRight: "0.2rem", position: "absolute", top: "0vh", right: "0vh", color: "white", pointerEvents: "none" }}>
        {clicCounter}
      </div>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" exact element={<HomePage />} />
          <Route path="/Articles" element={<Articles search={props.search} />} />
          <Route path="/Article" element={<Article />} />
          <Route path="/About" element={<About />} />
          <Route path="/Shop" element={<Shop userscomments={userscomments} addpanier={panierAdd} />} />
        </Routes>
      </Suspense>
    </>
  );
};

export default Panier;
