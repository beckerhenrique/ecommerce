import { createContext, useState } from "react";

export const CartListContext = createContext();

export const CartListProvider = ({ children }) => {
  const [cartList, setCartList] = useState([]);

  return <CartListContext.Provider value={{cartList, setCartList}}>{children}</CartListContext.Provider>;

};
