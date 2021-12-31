import React, { useState } from "react";
import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import HomePage from "./../Pages/HomePage";
import Articles from "./../Pages/Articles";
import Article from "./../Pages/Article";
import About from "./../Pages/About";
import CMS from "./../Pages/CMS";
import dataObj from "./../data/imagesFaker";
import { userscomments } from "./../data/usersComments";

const Panier = (props) => {
  const [clicCounter, setClicCounter] = useState(0);

  const panierAdd = () => {
    setClicCounter(clicCounter + 1);
  };

  return (
    <>
      <div style={{ width: "100px", textAlign: "right", marginRight: "2rem", position: "relative", top: "-3rem", color: "white" }}>{clicCounter}</div>
      <Routes>
        <Route path="/" exact element={<HomePage />} />
        <Route path="/Articles" element={<Articles data={dataObj.data} />} />
        <Route path="/Article" element={<Article />} />
        <Route path="/About" element={<About />} />
        <Route path="/CMS" element={<CMS userscomments={userscomments} addpanier={panierAdd} />} />
      </Routes>
    </>
  );
};

export default Panier;
