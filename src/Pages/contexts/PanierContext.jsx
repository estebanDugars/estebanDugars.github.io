import React, { createContext, useContext, useState } from "react";

export const counter = 0;

const initialState = {
  counter: counter,
  setCounter: () => {},
};

const PanierContext = createContext(initialState);

export const PanierProvider = ({ children }) => {
  const [counterState, setCounterState] = useState(counter);

  return <PanierContext.Provider value={{ counterState, setCounterState }}>{children}</PanierContext.Provider>;
};

const usePanier = () => {
  const context = useContext(PanierContext);
  if (context === undefined) {
    throw new Error("usePanier must be used within a PanierProvider");
  }
  return context;
};

export default usePanier;
