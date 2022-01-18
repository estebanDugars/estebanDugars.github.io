import React from "react";

const styles = {
  /* div: { width: "250px", display: "inline-block", margin: "0.5rem" },
  span: { marginLeft: "2rem" }, */
  panier: { display: "flex", border: "1px solid black", height: "auto", padding: "4rem 0", margin: "1rem" },
  item: { minWidth: "10rem" },
  /*  card: { maxWidth: "20rem" }, */
};

const Shop = ({ userscomments, addpanier }) => {
  /* useEffect(()=>{

})
 */
  const initiateDrag = (ev) => {
    console.log(`you dragged ${ev.target.id}`);
    ev.dataTransfer.setData("text", ev.target.id);
  };

  const alloDrop = (ev) => {
    ev.preventDefault();
  };

  const drop = (ev) => {
    ev.preventDefault();
    //ev.target.innerText = "";

    const idToMove = ev.dataTransfer.getData("text");
    const refToMove = document.getElementById(idToMove);
    refToMove.className = "ms-0";
    refToMove.style.maxWidth = "20rem";
    //refToMove.className = "flex-fill w-auto";
    ev.target.appendChild(refToMove);
  };

  return (
    <>
      <h1>Shop</h1>
      <h2>Liste des courses </h2>
      <p>Vos articles ici</p>
      <div onDragOver={(ev) => alloDrop(ev)} onDrop={(ev) => drop(ev)} style={styles.panier} className="d-flex flex-row flex-wrap align-items-center justify-content-center fs-6 ">
        &nbsp; <br />
      </div>
      <br />
      <h2>Articles disponibles</h2>
      <div className="container-fluid">
        <div className="row ">
          {/* because of the mobile 1st approach of bootstrap hence bootswatch, col-6 here is meant from smallest to the next break point here xl */}
          {userscomments.map((user) => (
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
