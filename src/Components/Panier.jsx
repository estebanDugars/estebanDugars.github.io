import React, { useState } from "react";
import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import HomePage from "./../Pages/HomePage";
import Articles from "./../Pages/Articles";
import Article from "./../Pages/Article";
import About from "./../Pages/About";
import Shop from "./../Pages/Shop";
import dataObj from "./../data/imagesFaker";
import { userscomments } from "./../data/usersComments";

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
      <Routes>
        <Route path="/" exact element={<HomePage />} />
        <Route path="/Articles" element={<Articles data={dataObj.data} />} />
        <Route path="/Article" element={<Article />} />
        <Route path="/About" element={<About />} />
        <Route path="/Shop" element={<Shop userscomments={userscomments} addpanier={panierAdd} />} />
      </Routes>
    </>
  );
};

export default Panier;
