import React from "react";
import { Link } from "react-router-dom";

import "./ItemCard.css";

function ItemCard({ item, showDiscount = true, height = 250 }) {
  const discountPrice =
    item.price - item.price * (item.discountPercentage / 100);

  return (
    <Link to={`/item/${item.id}`}>
      <section className="itemCard" style={{ height: `${height}px` }}>
        {showDiscount && (
          <p className="discountTag">{item.discountPercentage}% Off</p>
        )}
        <img src={item.thumbnail} alt="" />
        <h4>{item.title}</h4>
        {showDiscount && (
          <section>
            <p className="previousPrice">De: ${item.price}</p>
            <p>Por: ${discountPrice.toFixed(2)}</p>
          </section>
        )}
      </section>
    </Link>
  );
}

export default ItemCard;
