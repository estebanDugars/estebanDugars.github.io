import React from "react";

const Panier = ({ clicCounter }) => {
  return (
    <div style={{ width: "100px", textAlign: "left", marginRight: "0.2rem", position: "absolute", top: "0vh", right: "0vh", color: "white", pointerEvents: "none" }}>
      {clicCounter}
    </div>
  );
};

export default Panier;
