import React from "react";
import "./Deals.css";
import DealsCard from "./DealsCard";
import { useState, useEffect } from "react";

function Deals() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
      });
  }, []);

  return (
    <div className="deals">
      <h1>Deals of the day</h1>
      <div className="deals__content">
        {products.map((product) => (
          <DealsCard
            title={product.title}
            image={product.image}
            price={product.price}
            category={product.category}
            rating={product.rating.rate}
            key={product.id}
          />
        ))}
      </div>
    </div>
  );
}

export default Deals;
