import React, { useContext } from "react";
import { CartListContext } from "../context/CartListContext";
import './ShoppingCartCard.css'

function ShoppingCartCard({ item }) {
   const {cartList, setCartList} = useContext(CartListContext)

   const decreaseItem = () => {
      const newList = [...cartList]
      const indexItem = newList.findIndex(e => {
         return e.id === item.id
      })
      if (newList[indexItem].quantity > 1){
         newList[indexItem].quantity -= 1
      }
      else{
         newList.splice(indexItem, 1)
      }
      setCartList(newList)
   }

   const increaseItem = () => {
      const newList = [...cartList]
      const indexItem = newList.findIndex(e => {
         return e.id === item.id
      })
      newList[indexItem].quantity += 1
      setCartList(newList)
   }

   const removeItem = () => {
      const newList = [...cartList]
      const indexItem = newList.findIndex(e => {
         return e.id === item.id
      })
      newList.splice(indexItem, 1)
      setCartList(newList)
   }

  return (
    <div className="shoppingCartCard">
      <button className="removeCardBtn" onClick={removeItem}>X</button>
      <section className="shoppingCartCardInside">
      <img className="itemImg" src={item.thumbnail} alt="" />
      <div className="descriptionShoppingCard">
      <h3>{item.title}</h3>
      <p>Descrição: {item.description}</p>
      <p>R${(item.price-(item.price*(item.discountPercentage/100))).toFixed(2)}</p>
      
      </div>
      <div className="shoppingCardBtns">
      <button onClick={increaseItem}>+</button>
      <p>{item.quantity}</p>
      <button onClick={decreaseItem}>-</button>
      </div>
      </section>
    </div>
  );
}

export default ShoppingCartCard;
