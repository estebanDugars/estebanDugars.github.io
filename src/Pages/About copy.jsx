import React from "react";
import { useDrag, useDrop } from "react-dnd";
import { useState } from "react";

const About = () => {
  return (
    <>
      <h1>About</h1>
      <Box />
      <Bucket />
    </>
  );
};

export default About;

function Box() {
  const [{ isDragging }, drag, dragPreview] = useDrag(() => ({
    // "type" is required. It is used by the "accept" specification of drop targets.
    type: "BOX",
    // The collect function utilizes a "monitor" instance (see the Overview for what this is)
    // to pull important pieces of state from the DnD system.
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  }));

  /* This is optional. The dragPreview will be attached to the dragSource by default */

  return (
    <div ref={drag} style={{ opacity: isDragging ? 0.5 : 1, color: "black", backgroundColor: isDragging ? "crimson" : "blue" }}>
      <p> je ne comprend pas</p>

      {/* The drag ref marks this node as being the "pick-up" node */}
      {/* <div ref={drag} /> */}
    </div>
  );
}

function Bucket() {
  const [hasDropped, setHasDropped] = useState(false);
  const [{ canDrop, isOver }, drop] = useDrop(
    () => ({
      // The type (or types) to accept - strings or symbols
      accept: "BOX",
      drop(item, monitor) {
        if (hasDropped) {
          return item.text;
        }
        setHasDropped(true);
      },
      // Props to collect
      collect: (monitor) => ({
        isOver: monitor.isOver(),
        canDrop: monitor.canDrop(),
        hasDropped: monitor.didDrop(),
      }),
    }),
    [hasDropped]
  );

  return (
    <div ref={drop} style={{ color: "black" }}>
      {hasDropped ? drop() : "Drag a box here"}
    </div>
  );
}
