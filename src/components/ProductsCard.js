import React from "react";
import "./ProductsCard.css";

function ProductsCard({ image, title, discount, category }) {
  return (
    <div className="productsCard">
      <img src={image} alt="item" />
      <h5 className="productsCard__title">{title}</h5>
      <p className="productsCard__discount">{discount}</p>
      <p className="productsCard__category">{category}</p>
    </div>
  );
}

export default ProductsCard;
