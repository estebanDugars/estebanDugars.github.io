import React, { useState } from "react";
import "./shop.css";
import { userscomments } from "./../data/usersComments";
import { nimp, setNimp } from "../App";
import useTitle from "./Hooks/useTitle";
/* const { } = nimpStateObject; */

const styles = {
  /* div: { width: "250px", display: "inline-block", margin: "0.5rem" },
  span: { marginLeft: "2rem" }, */
  panier: {
    display: "flex",
    border: "1px solid black",
    paddingTop: "10rem",
    margin: "1rem",
    justifyContent: "flex-end",
    alignContent: "flex-start",
    flexDirection: "row-reverse",
    flexWrap: "wrap",
  },
  item: { minWidth: "10rem" },
  /*  card: { maxWidth: "20rem" }, */
};

let panierInitial = [];
let boutiqueInitiale = [];

const Shop = ({ addpanier }) => {
  /* let panierInit; */
  const [articles, setArticles] = useState(boutiqueInitiale.length > 0 ? boutiqueInitiale : userscomments);
  const [panier, setPanier] = useState(panierInitial.length > 0 ? panierInitial : []);
  let [nimpstate, setNimpstate] = useState(nimp);

  /* useEffect(() => {
    let length = sessionStorage.getItem("panierLength");
    if (length) {
      for (let index = 0; index < length; index++) {
        panierInit[index] = sessionStorage.getItem(`panier${index}`);
      }
    }
  }, [panierInit]);

  useEffect(() => {
    panier.forEach((user) => sessionStorage.setItem(`panier${user.id}`, user.id));
    sessionStorage.setItem("panierLength", panier.length.toString());
  }, [panier]);
 */
  const initiateDrag = (ev) => {
    ev.dataTransfer.setData("text", ev.target.id);
  };

  const alloDrop = (ev) => {
    ev.preventDefault();
  };

  const drop = (ev) => {
    ev.preventDefault();
    //ev.target.innerText = "";

    const idToMove = ev.dataTransfer.getData("text");

    let panierTemp = userscomments.filter((user) => {
      return user.id === Number(idToMove);
    });
    panierInitial = panier.concat(panierTemp);
    boutiqueInitiale = articles.filter((user) => user.id !== Number(idToMove));
    setPanier(panierInitial);
    setArticles(boutiqueInitiale);
  };
  useTitle("Shop");

  return (
    <>
      <h1>Shop</h1>
      <h2>Liste des courses </h2>
      <p>Vos articles ici {nimpstate}</p>
      <button
        className="btn btn-secondary"
        onClick={() => {
          setNimpstate(setNimp());
        }}
        style={{ borderWidth: "1px", backgroundColor: "transparent" }}
      >
        SetNimp
      </button>
      <div onDragOver={(ev) => alloDrop(ev)} onDrop={(ev) => drop(ev)} style={styles.panier} className="fs-6 ">
        &nbsp; <br />
        {panier.map((user) => (
          <div key={user.id} className="col-6 col-xl-4 ms-0 swing-top-fwd" id={user.id} style={{ ...styles.item, maxWidth: "20rem" }}>
            <div className="card text-white bg-dark mb-3 ms-1">
              <div className="card-header">{user.username}</div>
              <div className="card-body">
                <h4 className="card-title">{user.id}</h4>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <br />
      <h2>Articles disponibles</h2>
      <div className="container-fluid">
        <div className="row ">
          {/* because of the mobile 1st approach of bootstrap hence bootswatch, col-6 here is meant from smallest to the next break point here xl */}
          {articles.map((user) => (
            <div key={user.id} className="col-6 col-xl-4" onClick={addpanier} id={user.id} draggable="true" onDragStart={(ev) => initiateDrag(ev)} style={styles.item}>
              <div className="card text-white bg-dark mb-3 ms-1">
                <div className="card-header">{user.username}</div>
                <div className="card-body">
                  <h4 className="card-title">{user.id}</h4>
                  <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Shop;
