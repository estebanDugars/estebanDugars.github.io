import React from "react";
/* import { useDrag, useDrop } from "react-dnd";
import { useState } from "react"; */
import "./about.css";

const Kanban = () => {
  return (
    <>
      <h1>Kanban</h1>
      <br />
      <hr />
      <div className="container fs-4">
        <FirstColumn />
        <SecondColumn />
      </div>
    </>
  );
};

export default Kanban;

const MovableItem = () => {
  return <div className="movable-item">We will move this item</div>;
};

const FirstColumn = () => {
  return (
    <div className="column first-column">
      Column 1
      <MovableItem />
    </div>
  );
};

const SecondColumn = () => {
  return <div className="column second-column">Column 2</div>;
};
