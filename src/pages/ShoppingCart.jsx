import React, { useContext, useEffect, useState } from "react";
import ShoppingCartCard from "../components/ShoppingCartCard";
import { CartListContext } from "../context/CartListContext";

import './ShoppingCart.css'

function ShoppingCart() {
  const { cartList , setCartList} = useContext(CartListContext);
  const [sumPrice, setSumPrice] = useState(0);

  useEffect(() => {
   setSumPrice(0)
    for (let i = 0; i < cartList.length; i++) {
      let newSum = 0
      if (sumPrice) {
         let discountPrice = ((cartList[i].price-(cartList[i].price*(cartList[i].discountPercentage/100))).toFixed(2))
      newSum = discountPrice * cartList[i].quantity;
      setSumPrice((prev) => prev + newSum);
      }else{
         let discountPrice = ((cartList[i].price-(cartList[i].price*(cartList[i].discountPercentage/100))).toFixed(2))
      newSum = newSum + discountPrice * cartList[i].quantity;
      setSumPrice((prev) => prev + newSum);
      }
      
    }
    sumPrice.toFixed(2)
    
  }, [cartList]);

  const clearShoppingCart = () => {
    setCartList([])
  }

  return (
    <div className="shoppingCartPageAll">
      
      {cartList.length > 0 ?
      <section  className="shoppingCartPage">
        <h1 className="titleShoppingCartPage">Carrinho de Compras.</h1>
        <button className="clearBtn" onClick={clearShoppingCart}>Limpar Carrinho de Compras</button>
      <section className="shoppingCartContainer">
          {cartList.map((item) => (
            <ShoppingCartCard key={item.id} item={item} />
          ))}
          <h3 className="totalPrice">Total: {sumPrice}</h3>
      </section>
      </section>: <h1 className="noItensShoppingCart">Seu Carrinho de Compras está vazio</h1>}
      
     
      
    </div>
  );
}

export default ShoppingCart;
