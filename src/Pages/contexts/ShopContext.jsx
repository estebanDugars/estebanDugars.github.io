import React from "react";

const ShopContext = React.createContext({ panierInitial: [], boutiqueInitiale: [] });

export const ShopContextProvider = ShopContext.Provider;
export const ShopContextConsumer = ShopContext.Consumer;

export default ShopContext;
