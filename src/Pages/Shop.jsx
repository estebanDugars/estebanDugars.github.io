import React from "react";

/* const styles = {
  div: { width: "250px", display: "inline-block", margin: "0.5rem" },
  span: { marginLeft: "2rem" },
  h1: { margin: "2rem" },
  card: { maxWidth: "20rem" },
};
 */

const Shop = ({ userscomments, addpanier }) => {
  return (
    <>
      <h1>Shop</h1>
      <div className="container">
        <div className="row">
          <div className="col-6 col-xl-4">Column</div>
          <div className="col-6 col-xl-4">Column</div>
          <div className="col-6 col-xl-4">Column</div>
        </div>
      </div>
      <div className="container-fluid">
        <div className="row ">
          {/* because of the mobile 1st approach of bootstrap hence bootswatch, col-6 here is meant from smallest to the next break point here xl */}
          {userscomments.map((user) => (
            <div key={user.id} className="col-6 col-xl-4">
              <div className="card text-white bg-dark mb-3 ms-1" onClick={addpanier}>
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

/* 
<div key={user.id} style={styles.div} onClick={addpanier}>
          {user.username}
          <span style={styles.span}>{user.id}</span>
        </div> */
